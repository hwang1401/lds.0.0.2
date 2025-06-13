# Lumir Design System - Vercel 배포 문제 해결 계획

## 📊 현재 프로젝트 상태 분석

### 프로젝트 구조
```
lumir-design-system/
├── packages/
│   ├── shared/          # @lumir/shared@1.0.0 (foundation + primitives)
│   ├── system-01/       # @lumir/system-01@1.0.0 (semantic tokens + components)
│   ├── system-02/       # @lumir/system-02@1.0.0 (semantic tokens + components)
│   ├── storybook/       # @lumir/storybook (모든 시스템 통합)
│   └── utils/           # 유틸리티
├── package.json         # pnpm workspace 루트
├── pnpm-workspace.yaml  # workspace 설정
├── turbo.json          # 빌드 파이프라인
└── vercel.json         # Vercel 설정
```

### 현재 의존성 체인
```
shared (foundation.json + primitives)
  ↓
system-01/02 (semantic.json + components) 
  ↓
storybook (모든 스토리 통합)
```

### 핵심 문제
1. **workspace 의존성**: `"@lumir/shared": "workspace:*"` → Vercel에서 해석 불가
2. **복잡한 빌드 체인**: foundation → semantic → components → storybook
3. **패키지 매니저 불일치**: pnpm (로컬) vs npm (Vercel)

## 🎯 해결 전략: 3단계 접근

### Phase 1: 즉시 배포 가능한 설정 (30분)
**목표**: 현재 구조 그대로 Vercel 배포 성공

#### 1.1 Vercel 설정 변경
```json
// vercel.json
{
  "version": 2,
  "buildCommand": "npm install --force && npm run build && npm run build-storybook",
  "outputDirectory": "packages/storybook/storybook-static",
  "installCommand": null,
  "env": {
    "NODE_VERSION": "18.17.0",
    "NPM_CONFIG_FORCE": "true"
  }
}
```

#### 1.2 package.json 수정 (루트)
```json
{
  "name": "lumir-design-system",
  "version": "0.1.0",
  "private": true,
  "packageManager": "npm@9.6.7",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "npm run build:shared && npm run build:systems && npm run build:components",
    "build:shared": "cd packages/shared && npm run build",
    "build:systems": "cd packages/system-01 && npm run build && cd ../system-02 && npm run build",
    "build:components": "echo 'Components built'",
    "build-storybook": "cd packages/storybook && npm run build-storybook"
  }
}
```

#### 1.3 storybook package.json 의존성 수정
```json
// packages/storybook/package.json
{
  "dependencies": {
    "@lumir/shared": "file:../shared",
    "@lumir/system-01": "file:../system-01", 
    "@lumir/system-02": "file:../system-02",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Phase 2: 안정적인 배포 설정 (1시간)
**목표**: npm registry 퍼블리시 기반 안정적 배포

#### 2.1 패키지 퍼블리시 준비
```bash
# 각 패키지의 npmrc 설정
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > packages/shared/.npmrc
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > packages/system-01/.npmrc  
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > packages/system-02/.npmrc
```

#### 2.2 퍼블리시 스크립트 추가 (루트 package.json)
```json
{
  "scripts": {
    "prepublish:shared": "cd packages/shared && npm run build",
    "publish:shared": "cd packages/shared && npm publish --access public",
    "prepublish:system-01": "cd packages/system-01 && npm run build", 
    "publish:system-01": "cd packages/system-01 && npm publish --access public",
    "prepublish:system-02": "cd packages/system-02 && npm run build",
    "publish:system-02": "cd packages/system-02 && npm publish --access public",
    "publish:all": "npm run publish:shared && sleep 10 && npm run publish:system-01 && npm run publish:system-02",
    "version:patch": "npm version patch --workspaces"
  }
}
```

#### 2.3 storybook 의존성을 npm registry 버전으로 변경
```json
// packages/storybook/package.json
{
  "dependencies": {
    "@lumir/shared": "^1.0.0",
    "@lumir/system-01": "^1.0.0",
    "@lumir/system-02": "^1.0.0"
  }
}
```

#### 2.4 vercel.json 최종 설정
```json
{
  "version": 2,
  "buildCommand": "npm install && npm run build-storybook",
  "outputDirectory": "packages/storybook/storybook-static",
  "env": {
    "NODE_VERSION": "18.17.0"
  }
}
```

### Phase 3: 자동화 및 최적화 (1시간)
**목표**: CI/CD 파이프라인 구축

#### 3.1 GitHub Actions 설정
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
    paths: ['packages/**']

jobs:
  publish-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build packages  
        run: npm run build
      
      - name: Publish packages
        run: npm run publish:all
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📋 실행 체크리스트

### Phase 1 체크리스트 (즉시 실행)
- [ ] vercel.json 수정
- [ ] 루트 package.json 빌드 스크립트 수정  
- [ ] storybook package.json 의존성을 file: 형태로 변경
- [ ] 로컬에서 `npm run build` 테스트
- [ ] 로컬에서 `npm run build-storybook` 테스트
- [ ] Vercel 배포 테스트

### Phase 2 체크리스트 (안정화)
- [ ] NPM 계정 및 토큰 준비
- [ ] 각 패키지 .npmrc 설정
- [ ] 패키지 버전 확인 및 증가
- [ ] shared 패키지 퍼블리시
- [ ] system-01/02 패키지 퍼블리시  
- [ ] storybook 의존성을 npm registry 버전으로 변경
- [ ] Vercel 재배포 테스트

### Phase 3 체크리스트 (자동화)
- [ ] GitHub Secrets 설정 (NPM_TOKEN, VERCEL_TOKEN)
- [ ] GitHub Actions 워크플로우 작성
- [ ] 자동 배포 테스트
- [ ] 문서화 업데이트

## 🎯 성공 지표

- [ ] Vercel에서 에러 없이 빌드 완료
- [ ] 스토리북이 정상적으로 배포됨
- [ ] 모든 컴포넌트와 스토리가 정상 동작
- [ ] 개발 워크플로우 중단 없음
- [ ] 빌드 시간 10분 이내

## ⚠️ 주의사항

1. **Phase 1 먼저 검증**: npm registry 퍼블리시 전에 file: 의존성으로 배포 성공 확인
2. **버전 관리**: 패키지 퍼블리시 시 버전 충돌 주의
3. **토큰 보안**: NPM_TOKEN, VERCEL_TOKEN 안전하게 관리
4. **백업**: 현재 작동하는 로컬 환경 백업 필수

## 🚀 즉시 시작할 작업

**1순위**: Phase 1의 vercel.json과 package.json 수정
**2순위**: 로컬 빌드 테스트 후 Vercel 배포 시도
**3순위**: 성공 시 Phase 2로 진행, 실패 시 오류 분석 후 재시도 
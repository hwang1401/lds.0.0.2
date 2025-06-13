// 🔧 CSS 변수를 포함한 스타일 시트 가져오기 (순서 중요!)
import 'lumir-shared/dist/css/foundation-tokens.css';   // 1️⃣ Foundation 토큰 정의 (최우선)
import 'lumir-shared/dist/styles.css';                  // 2️⃣ Primitives CSS (Foundation 토큰 변수 사용)
// 3️⃣ System CSS는 동적으로 로드

// 🚀 동적 CSS 로딩 함수 (개선된 버전)
function loadSystemCSS(systemName) {
  if (typeof document === 'undefined') return Promise.resolve();
  
  return new Promise((resolve, reject) => {
    // 1단계: 기존 시스템 CSS 모두 제거
    const existingLinks = document.querySelectorAll('[data-system-css]');
    existingLinks.forEach(link => {
      console.log(`🗑️ 기존 CSS 제거: ${link.getAttribute('data-system-css')}`);
      link.remove();
    });
    
    // 2단계: CSS 변수 캐시 강제 무효화
    document.documentElement.style.setProperty('--cache-buster', Date.now().toString());
    
    // 3단계: 새 시스템 CSS 로드
    const link = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.href = `/${systemName}/dist/css/tokens.css?v=${Date.now()}`;
    link.setAttribute('data-system-css', systemName);
    
    // 4단계: CSS 로드 완료 후 검증
    link.onload = () => {
      console.log(`✅ CSS 로드 완료: ${systemName}`);
      
      // CSS 변수가 실제로 적용되었는지 검증
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--semantic-color-primary-background-1-rest').trim();
      
      console.log(`🎨 Primary 색상 확인: ${primaryColor}`);
      
      // 강제 리렌더링 트리거
      document.body.style.display = 'none';
      document.body.offsetHeight; // 강제 리플로우
      document.body.style.display = '';
      
      // DOM에 시스템 클래스 추가 (추가 구분)
      document.documentElement.className = `lumir-${systemName}`;
      
      resolve();
    };
    
    link.onerror = () => {
      console.error(`❌ CSS 로드 실패: ${systemName}`);
      reject(new Error(`Failed to load CSS for ${systemName}`));
    };
    
    // 5단계: head 끝에 추가해서 우선순위 확보
    document.head.appendChild(link);
    console.log(`📝 CSS 로드 시작: ${systemName}`);
  });
}

// 🎯 Global 시스템 변경 감지
let currentSystem = 'system-01';

// 초기 시스템 CSS 로드
if (typeof document !== 'undefined') {
  console.log(`🎯 스토리북 초기화: 기본 시스템 = ${currentSystem}`);
  loadSystemCSS(currentSystem)
    .then(() => {
      console.log(`✅ 초기 시스템 로드 완료: ${currentSystem}`);
      
      // 초기 로드 완료 후 현재 CSS 변수 값 확인
      setTimeout(() => {
        const primaryColor = getComputedStyle(document.documentElement)
          .getPropertyValue('--semantic-color-primary-background-1-rest').trim();
        console.log(`🎨 초기 Primary 색상: ${primaryColor}`);
        
        // DOM 클래스 확인
        console.log(`📋 DOM 클래스: ${document.documentElement.className}`);
        
        // 로드된 CSS 링크 확인
        const systemCSS = document.querySelector('[data-system-css]');
        console.log(`🔗 로드된 CSS: ${systemCSS ? systemCSS.getAttribute('data-system-css') : '없음'}`);
      }, 500);
    })
    .catch(error => console.error(`❌ 초기 시스템 로드 실패: ${currentSystem}`, error));
}

// 스토리북 툴바 변경 감지 - 더 넓은 범위의 이벤트 감지
if (typeof window !== 'undefined') {
  // 방법 1: message 이벤트
  window.addEventListener('message', async (event) => {
    if (event.data?.type === 'storybook/globals/updated' && 
        event.data?.payload?.globals?.system &&
        event.data.payload.globals.system !== currentSystem) {
      
      currentSystem = event.data.payload.globals.system;
      console.log(`🚀 시스템 변경 시작: ${currentSystem}`);
      
      try {
        await loadSystemCSS(currentSystem);
        console.log(`✅ 시스템 변경 완료: ${currentSystem}`);
      } catch (error) {
        console.error(`❌ 시스템 변경 실패: ${currentSystem}`, error);
      }
    }
  });
  
  // 방법 2: URL 변경 감지
  let lastUrl = window.location.href;
  const urlCheckInterval = setInterval(() => {
    const currentUrl = window.location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      
      // URL에서 system 파라미터 추출
      const urlParams = new URLSearchParams(window.location.search);
      const globalsParam = urlParams.get('globals');
      if (globalsParam) {
        const match = globalsParam.match(/system:([^&]+)/);
        if (match && match[1] !== currentSystem) {
          currentSystem = match[1];
          console.log(`🔄 URL 변경으로 시스템 변경 시작: ${currentSystem}`);
          
          loadSystemCSS(currentSystem)
            .then(() => console.log(`✅ URL 기반 시스템 변경 완료: ${currentSystem}`))
            .catch(error => console.error(`❌ URL 기반 시스템 변경 실패: ${currentSystem}`, error));
        }
      }
    }
  }, 100);
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        disable: true,
      },
    },
    // 배경색 설정
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'subtle',
          value: '#F4F4F4',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    // 뷰포트 크기 설정
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1366px',
            height: '900px',
          },
        },
      },
    },
  },
  globalTypes: {
    system: {
      description: 'Design System Selection',
      defaultValue: 'system-01',
      toolbar: {
        title: 'System',
        icon: 'component',
        items: [
          { value: 'system-01', title: 'System 01 - Clean & Efficient (파란색)' },
          { value: 'system-02', title: 'System 02 - Modern & Friendly (초록색)' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

};

export default preview; 
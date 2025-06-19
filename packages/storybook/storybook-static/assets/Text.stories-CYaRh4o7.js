import{j as r}from"./react-vendor-BFNgaz96.js";import{T as e,F as a,S as i}from"./index.esm-WYP67xav.js";const I={title:"Shared/Primitives/Text",component:e,parameters:{componentSubtitle:"순수한 타이포그래피 프리미티브 - 텍스트 스타일링의 모든 것",docs:{description:{component:`
Text는 순수한 타이포그래피 프리미티브로, 디자인 시스템의 모든 텍스트 요소의 기초가 됩니다.

## 핵심 책임
- **타이포그래피 계층**: Hero, Title, Heading, Body, Label, Caption (15가지 변형)
- **폰트 굵기**: Regular(400), Medium(500), Bold(700)
- **텍스트 정렬**: Left, Center, Right, Justify
- **텍스트 변형**: None, Capitalize, Uppercase, Lowercase
- **오버플로우 제어**: NoWrap, Truncate(라인 수 지정)
- **시멘틱 HTML**: as prop으로 적절한 HTML 요소 지정

## 색상 적용 방법
Text는 색상 기능이 없으며, Surface 프리미티브와 조합하여 색상을 적용합니다:
\`\`\`tsx
<Surface foreground="primary-system01-1-rest">
  <Text variant="title-1" weight="bold">색상이 적용된 제목</Text>
</Surface>
\`\`\`

## 반응형 지원
모든 주요 props는 반응형 객체를 지원합니다:
        `}}},tags:["autodocs"],argTypes:{variant:{description:"타이포그래피 계층을 지정합니다",control:"select",options:["hero-1","hero-2","title-1","title-2","heading-1","heading-2","heading-3","body-1","body-2","reading","label-1","label-2","caption-1","caption-2","caption-3"],table:{type:{summary:"TextVariant | ResponsiveOrSingle<TextVariant>"},defaultValue:{summary:"body-1"}}},weight:{description:"폰트 굵기를 지정합니다",control:"select",options:["regular","medium","bold"],table:{type:{summary:"FontWeight | ResponsiveOrSingle<FontWeight>"},defaultValue:{summary:"regular"}}},as:{description:"렌더링할 HTML 요소를 지정합니다",control:"select",options:["p","span","div","h1","h2","h3","h4","h5","h6","label"],table:{type:{summary:"HTMLTag"},defaultValue:{summary:"p"}}},textAlign:{description:"텍스트 정렬을 지정합니다",control:"select",options:["left","center","right","justify"],table:{type:{summary:"TextAlign | ResponsiveOrSingle<TextAlign>"}}},transform:{description:"텍스트 변형을 지정합니다",control:"select",options:["none","capitalize","uppercase","lowercase"],table:{type:{summary:"TextTransform | ResponsiveOrSingle<TextTransform>"}}},noWrap:{description:"한 줄 표시 및 생략 부호 처리",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},truncate:{description:"지정 라인 수 이후 생략 부호 처리",control:"number",table:{type:{summary:"number"}}}}},n=({text:d="샘플 텍스트",long:u=!1})=>u?"긴 샘플 텍스트입니다. 이 텍스트는 여러 줄에 걸쳐 표시되며 오버플로우 테스트에 사용됩니다. 컨테이너의 크기에 따라 어떻게 동작하는지 확인할 수 있습니다.":d,t={args:{variant:"body-1",weight:"regular",as:"p",textAlign:"left",transform:"none",noWrap:!1,truncate:void 0,children:"순수한 타이포그래피 프리미티브입니다. 다양한 속성을 조절해보세요."}},s={name:"Variant 속성 시각화",parameters:{docs:{description:{story:"15가지 텍스트 변형과 3가지 폰트 굵기의 모든 조합(총 45개)을 보여줍니다. 각 변형은 특정 용도에 최적화되어 있습니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Hero (대형 제목) - 48px, 36px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"hero-1",weight:"regular",children:"Hero 1 - Regular"}),r.jsx(e,{variant:"hero-1",weight:"medium",children:"Hero 1 - Medium"}),r.jsx(e,{variant:"hero-1",weight:"bold",children:"Hero 1 - Bold"}),r.jsx(e,{variant:"hero-2",weight:"regular",children:"Hero 2 - Regular"}),r.jsx(e,{variant:"hero-2",weight:"medium",children:"Hero 2 - Medium"}),r.jsx(e,{variant:"hero-2",weight:"bold",children:"Hero 2 - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Title (페이지 제목) - 30px, 24px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"title-1",weight:"regular",children:"Title 1 - Regular"}),r.jsx(e,{variant:"title-1",weight:"medium",children:"Title 1 - Medium"}),r.jsx(e,{variant:"title-1",weight:"bold",children:"Title 1 - Bold"}),r.jsx(e,{variant:"title-2",weight:"regular",children:"Title 2 - Regular"}),r.jsx(e,{variant:"title-2",weight:"medium",children:"Title 2 - Medium"}),r.jsx(e,{variant:"title-2",weight:"bold",children:"Title 2 - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Heading (섹션 제목) - 20px, 20px, 16px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"heading-1",weight:"regular",children:"Heading 1 - Regular"}),r.jsx(e,{variant:"heading-1",weight:"medium",children:"Heading 1 - Medium"}),r.jsx(e,{variant:"heading-1",weight:"bold",children:"Heading 1 - Bold"}),r.jsx(e,{variant:"heading-2",weight:"regular",children:"Heading 2 - Regular"}),r.jsx(e,{variant:"heading-2",weight:"medium",children:"Heading 2 - Medium"}),r.jsx(e,{variant:"heading-2",weight:"bold",children:"Heading 2 - Bold"}),r.jsx(e,{variant:"heading-3",weight:"regular",children:"Heading 3 - Regular"}),r.jsx(e,{variant:"heading-3",weight:"medium",children:"Heading 3 - Medium"}),r.jsx(e,{variant:"heading-3",weight:"bold",children:"Heading 3 - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Body (본문) - 16px, 14px, 16px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"body-1",weight:"regular",children:"Body 1 - Regular (기본 본문)"}),r.jsx(e,{variant:"body-1",weight:"medium",children:"Body 1 - Medium"}),r.jsx(e,{variant:"body-1",weight:"bold",children:"Body 1 - Bold"}),r.jsx(e,{variant:"body-2",weight:"regular",children:"Body 2 - Regular (작은 본문)"}),r.jsx(e,{variant:"body-2",weight:"medium",children:"Body 2 - Medium"}),r.jsx(e,{variant:"body-2",weight:"bold",children:"Body 2 - Bold"}),r.jsx(e,{variant:"reading",weight:"regular",children:"Reading - Regular (읽기 전용, 넓은 줄간격)"}),r.jsx(e,{variant:"reading",weight:"medium",children:"Reading - Medium"}),r.jsx(e,{variant:"reading",weight:"bold",children:"Reading - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Label (레이블) - 14px, 12px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"label-1",weight:"regular",children:"Label 1 - Regular (폼 레이블)"}),r.jsx(e,{variant:"label-1",weight:"medium",children:"Label 1 - Medium"}),r.jsx(e,{variant:"label-1",weight:"bold",children:"Label 1 - Bold"}),r.jsx(e,{variant:"label-2",weight:"regular",children:"Label 2 - Regular (작은 레이블)"}),r.jsx(e,{variant:"label-2",weight:"medium",children:"Label 2 - Medium"}),r.jsx(e,{variant:"label-2",weight:"bold",children:"Label 2 - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"Caption (설명) - 12px"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"caption-1",weight:"regular",children:"Caption 1 - Regular (설명 텍스트)"}),r.jsx(e,{variant:"caption-1",weight:"medium",children:"Caption 1 - Medium"}),r.jsx(e,{variant:"caption-1",weight:"bold",children:"Caption 1 - Bold"}),r.jsx(e,{variant:"caption-2",weight:"regular",children:"Caption 2 - Regular (작은 설명)"}),r.jsx(e,{variant:"caption-2",weight:"medium",children:"Caption 2 - Medium"}),r.jsx(e,{variant:"caption-2",weight:"bold",children:"Caption 2 - Bold"}),r.jsx(e,{variant:"caption-3",weight:"regular",children:"Caption 3 - Regular (최소 텍스트)"}),r.jsx(e,{variant:"caption-3",weight:"medium",children:"Caption 3 - Medium"}),r.jsx(e,{variant:"caption-3",weight:"bold",children:"Caption 3 - Bold"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"📊 전체 조합 요약"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",children:r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-1-rest",children:r.jsx(e,{variant:"body-2",weight:"medium",children:"총 15가지 Variant × 3가지 Weight = 45개 조합"})}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"각 조합은 특정 용도에 최적화되어 있으며, 일관된 시각적 계층을 제공합니다."})})]})})})]})]})},o={name:"Weight 속성 시각화",parameters:{docs:{description:{story:"3가지 폰트 굵기의 시각적 차이를 보여줍니다. 계층 구조와 강조에 사용됩니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"동일 변형에서 굵기 비교"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(e,{variant:"title-2",weight:"regular",children:"Regular - 400 (기본 굵기)"}),r.jsx(e,{variant:"title-2",weight:"medium",children:"Medium - 500 (중간 굵기)"}),r.jsx(e,{variant:"title-2",weight:"bold",children:"Bold - 700 (강조 굵기)"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"사용 사례별 굵기"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Hero/Title - 임팩트를 위한 Bold"})}),r.jsx(e,{variant:"hero-2",weight:"bold",children:"강력한 첫인상을 주는 제목"})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Heading - 계층을 위한 Medium"})}),r.jsx(e,{variant:"heading-1",weight:"medium",children:"섹션을 구분하는 중간 제목"})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Body - 가독성을 위한 Regular"})}),r.jsx(e,{variant:"body-1",weight:"regular",children:"긴 본문 텍스트는 Regular 굵기로 가독성을 최우선으로 합니다. 너무 두꺼우면 피로감을 주고, 너무 얇으면 읽기 어려워집니다."})]})]})]})]})},c={name:"Align 속성 시각화",parameters:{docs:{description:{story:"4가지 텍스트 정렬 방식의 시각적 차이를 보여줍니다."}}},render:()=>r.jsx(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"텍스트 정렬 방식"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"한 줄 텍스트 정렬"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",direction:"column",gap:"sm",children:[r.jsx(e,{textAlign:"left",variant:"body-1",children:"왼쪽 정렬 (Left)"}),r.jsx(e,{textAlign:"center",variant:"body-1",children:"가운데 정렬 (Center)"}),r.jsx(e,{textAlign:"right",variant:"body-1",children:"오른쪽 정렬 (Right)"})]})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"여러 줄 텍스트 정렬"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",direction:"column",gap:"md",children:[r.jsx(a,{maxWidth:"300px",children:r.jsx(e,{textAlign:"left",variant:"body-2",children:"왼쪽 정렬: 기본적인 정렬 방식으로 대부분의 본문 텍스트에 사용됩니다. 읽기 시작점이 일정하여 가독성이 좋습니다."})}),r.jsx(a,{maxWidth:"300px",children:r.jsx(e,{textAlign:"center",variant:"body-2",children:"가운데 정렬: 제목이나 강조하고 싶은 텍스트에 사용합니다. 균형감을 주지만 긴 텍스트에는 적합하지 않습니다."})}),r.jsx(a,{maxWidth:"300px",children:r.jsx(e,{textAlign:"right",variant:"body-2",children:"오른쪽 정렬: 날짜, 가격 등 특별한 의미를 가진 텍스트에 사용합니다. 시선을 끌고 싶을 때 효과적입니다."})}),r.jsx(a,{maxWidth:"300px",children:r.jsx(e,{textAlign:"justify",variant:"body-2",children:"양쪽 정렬: 양 끝을 맞춰 정돈된 느낌을 줍니다. 신문이나 잡지 스타일의 텍스트에 적합하며, 줄의 끝이 깔끔하게 정리됩니다."})})]})})]})]})]})})},l={name:"Transform 속성 시각화",parameters:{docs:{description:{story:"텍스트 변형 옵션들의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"텍스트 변형 옵션"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",direction:"column",gap:"lg",children:[{transform:"none",text:"Transform None - 원본 텍스트 그대로",desc:"기본값으로 입력된 텍스트를 그대로 표시"},{transform:"capitalize",text:"transform capitalize - 첫 글자만 대문자",desc:"각 단어의 첫 글자를 대문자로 변환"},{transform:"uppercase",text:"transform uppercase - 모든 글자 대문자",desc:"모든 글자를 대문자로 변환, 강조 효과"},{transform:"lowercase",text:"TRANSFORM LOWERCASE - 모든 글자 소문자",desc:"모든 글자를 소문자로 변환"}].map(({transform:d,text:u,desc:N})=>r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(e,{variant:"body-1",transform:d,weight:"medium",children:u}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:N})})]},d))})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"사용 사례"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"버튼 레이블 - Uppercase 활용"})}),r.jsx(e,{variant:"label-1",transform:"uppercase",weight:"medium",children:"confirm action"})]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"제목 - Capitalize 활용"})}),r.jsx(e,{variant:"title-2",transform:"capitalize",weight:"medium",children:"user profile settings"})]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"기술적 텍스트 - Lowercase 활용"})}),r.jsx(e,{variant:"caption-1",transform:"lowercase",weight:"regular",children:"API_ENDPOINT_URL"})]})})]})]})]})},m={name:"오버플로우 제어 시각화",parameters:{docs:{description:{story:"noWrap과 truncate 속성으로 텍스트 오버플로우를 제어하는 방법을 보여줍니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"오버플로우 제어 방식"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"기본 동작 (자동 줄바꿈)"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"250px",children:r.jsx(e,{variant:"body-2",children:r.jsx(n,{long:!0})})})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsxs(e,{variant:"caption-1",children:["noWrap=","{true}"," - 한 줄 강제 + 생략 부호"]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"250px",children:r.jsx(e,{variant:"body-2",noWrap:!0,children:r.jsx(n,{long:!0})})})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsxs(e,{variant:"caption-1",children:["truncate=","{2}"," - 2줄 이후 생략 부호"]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"250px",children:r.jsx(e,{variant:"body-2",truncate:2,children:r.jsx(n,{long:!0})})})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsxs(e,{variant:"caption-1",children:["truncate=","{3}"," - 3줄 이후 생략 부호"]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"250px",children:r.jsx(e,{variant:"body-2",truncate:3,children:r.jsx(n,{long:!0})})})})]})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"사용 시나리오"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"카드 제목 (noWrap)"})}),r.jsx(i,{background:"primary-system01-1-rest",borderRadius:"card",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"200px",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(e,{variant:"heading-3",weight:"medium",noWrap:!0,children:"정말 긴 카드 제목이 한 줄에 표시됩니다"})})})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsxs(e,{variant:"caption-1",children:["아티클 미리보기 (truncate=","{3}",")"]})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"md",maxWidth:"300px",children:r.jsx(e,{variant:"body-2",truncate:3,children:"이것은 긴 아티클의 미리보기 텍스트입니다. 사용자에게 내용의 일부를 보여주면서도 레이아웃을 깔끔하게 유지할 수 있습니다. 전체 내용을 보려면 클릭하라고 유도할 수 있습니다. 더 많은 내용이 있다는 것을 생략 부호로 알려줍니다."})})})]})]})]})]})},x={name:"Semantic HTML 시각화",parameters:{docs:{description:{story:"as prop을 통한 시멘틱 HTML 요소 사용 예시입니다. 접근성과 SEO에 중요합니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"시멘틱 HTML 요소"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"md",direction:"column",gap:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"제목 요소 (h1-h6)"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(e,{as:"h1",variant:"hero-1",weight:"bold",children:"페이지 메인 제목 (h1)"}),r.jsx(e,{as:"h2",variant:"title-1",weight:"medium",children:"섹션 제목 (h2)"}),r.jsx(e,{as:"h3",variant:"heading-1",weight:"medium",children:"하위 섹션 제목 (h3)"}),r.jsx(e,{as:"h4",variant:"heading-2",weight:"medium",children:"세부 제목 (h4)"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"내용 요소"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(e,{as:"p",variant:"body-1",children:"문단 텍스트 (p) - 본문 내용에 사용"}),r.jsx(e,{as:"span",variant:"caption-1",children:"인라인 텍스트 (span) - 강조나 스타일링"}),r.jsx(e,{as:"div",variant:"body-2",children:"블록 컨테이너 (div) - 레이아웃 목적"})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"폼 요소"})}),r.jsx(a,{display:"flex",direction:"column",gap:"xs",children:r.jsx(e,{as:"label",variant:"label-1",weight:"medium",children:"폼 레이블 (label) - 입력 필드 설명"})})]})]})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"권장 사용법"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{background:"success",borderRadius:"md",children:r.jsx(a,{padding:"md",children:r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsxs(e,{variant:"body-2",children:[r.jsx("strong",{children:"✓ 올바른 사용:"})," 의미에 맞는 HTML 요소 선택",r.jsx("br",{}),"• h1은 페이지당 하나만 사용",r.jsx("br",{}),"• 제목은 계층 구조 순서대로 (h1 → h2 → h3)",r.jsx("br",{}),"• label은 form 요소와 연결"]})})})}),r.jsx(i,{background:"error",borderRadius:"md",children:r.jsx(a,{padding:"md",children:r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsxs(e,{variant:"body-2",children:[r.jsx("strong",{children:"✗ 잘못된 사용:"})," 스타일만을 위한 요소 선택",r.jsx("br",{}),"• 큰 글씨를 위해 h1 남용",r.jsx("br",{}),"• 제목 계층 건너뛰기 (h1 → h3)",r.jsx("br",{}),"• 의미 없는 div 남용"]})})})})]})]})]})},g={name:"🔥 컴파운드 컴포넌트 활용",parameters:{docs:{description:{story:"Text를 Surface, Frame과 조합하여 실제 UI 패턴을 구현하는 예시입니다."}}},render:()=>r.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"아티클 카드 패턴"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:r.jsxs(a,{padding:"lg",direction:"column",gap:"md",maxWidth:"400px",children:[r.jsx(i,{background:"primary-system01-1-rest",borderRadius:"badge-default",children:r.jsx(a,{padding:"xs",paddingX:"sm",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(e,{variant:"caption-1",weight:"medium",transform:"uppercase",children:"Design System"})})})}),r.jsx(e,{as:"h3",variant:"heading-1",weight:"medium",truncate:2,children:"디자인 시스템 구축을 위한 완벽 가이드: 컴포넌트부터 토큰까지"}),r.jsx(e,{variant:"body-2",truncate:3,children:"성공적인 디자인 시스템을 구축하기 위한 단계별 접근 방법을 알아보세요. 토큰 설계부터 컴포넌트 개발, 문서화까지 실무에서 바로 적용할 수 있는 노하우를 공유합니다."}),r.jsxs(a,{display:"flex",justify:"space-between",align:"center",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"2024.01.15"})}),r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(e,{variant:"caption-1",weight:"medium",children:"5분 읽기"})})]})]})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"사용자 프로필 패턴"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"lg",direction:"column",gap:"lg",maxWidth:"350px",children:[r.jsxs(a,{display:"flex",align:"center",gap:"md",children:[r.jsx(a,{minWidth:"60px",minHeight:"60px",children:r.jsx(i,{background:"primary-system01-1-rest",borderRadius:"circular",children:r.jsx(a,{display:"flex",align:"center",justify:"center",minHeight:"60px",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(e,{variant:"heading-2",weight:"bold",children:"김"})})})})}),r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(e,{as:"h4",variant:"heading-2",weight:"medium",children:"김디자인"}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"body-2",children:"Senior Product Designer"})})]})]}),r.jsx(e,{variant:"body-2",truncate:3,children:"사용자 중심의 디자인을 추구하며, 10년간 다양한 프로덕트의 UX/UI 디자인을 담당했습니다. 현재는 디자인 시스템 구축에 집중하고 있습니다."}),r.jsxs(a,{display:"flex",justify:"space-between",children:[r.jsxs(a,{direction:"column",align:"center",gap:"xs",children:[r.jsx(e,{variant:"heading-2",weight:"bold",children:"127"}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Projects"})})]}),r.jsxs(a,{direction:"column",align:"center",gap:"xs",children:[r.jsx(e,{variant:"heading-2",weight:"bold",children:"2.4K"}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Followers"})})]}),r.jsxs(a,{direction:"column",align:"center",gap:"xs",children:[r.jsx(e,{variant:"heading-2",weight:"bold",children:"892"}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"Following"})})]})]})]})})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"알림 토스트 패턴"})}),r.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(i,{background:"success",borderRadius:"md",boxShadow:"30",children:r.jsxs(a,{padding:"md",direction:"row",align:"center",gap:"sm",maxWidth:"400px",children:[r.jsx(e,{variant:"body-2",weight:"medium",children:"✓"}),r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsx(e,{variant:"label-1",weight:"medium",children:"저장 완료"})}),r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsx(e,{variant:"caption-1",children:"변경사항이 성공적으로 저장되었습니다."})})]})]})}),r.jsx(i,{background:"error",borderRadius:"md",boxShadow:"30",children:r.jsxs(a,{padding:"md",direction:"row",align:"center",gap:"sm",maxWidth:"400px",children:[r.jsx(e,{variant:"body-2",weight:"bold",children:"!"}),r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsx(e,{variant:"label-1",weight:"medium",children:"저장 실패"})}),r.jsx(i,{foreground:"secondary-system01-oncolor",children:r.jsx(e,{variant:"caption-1",children:"네트워크 오류로 저장에 실패했습니다."})})]})]})})]})]}),r.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"heading-3",weight:"medium",children:"폼 섹션 패턴"})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(a,{padding:"lg",direction:"column",gap:"lg",maxWidth:"400px",children:[r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(e,{as:"h4",variant:"heading-3",weight:"medium",children:"계정 설정"}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"body-2",children:"개인 정보를 안전하게 관리하세요."})})]}),r.jsxs(a,{direction:"column",gap:"md",children:[r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(e,{as:"label",variant:"label-1",weight:"medium",children:"이메일 주소"}),r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"input",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"sm",children:r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"body-2",children:"user@example.com"})})})})]}),r.jsxs(a,{direction:"column",gap:"xs",children:[r.jsx(e,{as:"label",variant:"label-1",weight:"medium",children:"표시 이름"}),r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"input",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(a,{padding:"sm",children:r.jsx(i,{foreground:"secondary-system01-1-rest",children:r.jsx(e,{variant:"body-2",children:"김디자인"})})})}),r.jsx(i,{foreground:"secondary-system01-2-rest",children:r.jsx(e,{variant:"caption-1",children:"다른 사용자에게 표시될 이름입니다."})})]})]})]})})]})]})};var h,p,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'body-1',
    weight: 'regular',
    as: 'p',
    textAlign: 'left',
    transform: 'none',
    noWrap: false,
    truncate: undefined,
    children: '순수한 타이포그래피 프리미티브입니다. 다양한 속성을 조절해보세요.'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var f,b,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Variant 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '15가지 텍스트 변형과 3가지 폰트 굵기의 모든 조합(총 45개)을 보여줍니다. 각 변형은 특정 용도에 최적화되어 있습니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Hero */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Hero (대형 제목) - 48px, 36px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="hero-1" weight="regular">Hero 1 - Regular</Text>\r
          <Text variant="hero-1" weight="medium">Hero 1 - Medium</Text>\r
          <Text variant="hero-1" weight="bold">Hero 1 - Bold</Text>\r
          <Text variant="hero-2" weight="regular">Hero 2 - Regular</Text>\r
          <Text variant="hero-2" weight="medium">Hero 2 - Medium</Text>\r
          <Text variant="hero-2" weight="bold">Hero 2 - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Title */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Title (페이지 제목) - 30px, 24px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="title-1" weight="regular">Title 1 - Regular</Text>\r
          <Text variant="title-1" weight="medium">Title 1 - Medium</Text>\r
          <Text variant="title-1" weight="bold">Title 1 - Bold</Text>\r
          <Text variant="title-2" weight="regular">Title 2 - Regular</Text>\r
          <Text variant="title-2" weight="medium">Title 2 - Medium</Text>\r
          <Text variant="title-2" weight="bold">Title 2 - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Heading */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Heading (섹션 제목) - 20px, 20px, 16px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="heading-1" weight="regular">Heading 1 - Regular</Text>\r
          <Text variant="heading-1" weight="medium">Heading 1 - Medium</Text>\r
          <Text variant="heading-1" weight="bold">Heading 1 - Bold</Text>\r
          <Text variant="heading-2" weight="regular">Heading 2 - Regular</Text>\r
          <Text variant="heading-2" weight="medium">Heading 2 - Medium</Text>\r
          <Text variant="heading-2" weight="bold">Heading 2 - Bold</Text>\r
          <Text variant="heading-3" weight="regular">Heading 3 - Regular</Text>\r
          <Text variant="heading-3" weight="medium">Heading 3 - Medium</Text>\r
          <Text variant="heading-3" weight="bold">Heading 3 - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Body */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Body (본문) - 16px, 14px, 16px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-1" weight="regular">Body 1 - Regular (기본 본문)</Text>\r
          <Text variant="body-1" weight="medium">Body 1 - Medium</Text>\r
          <Text variant="body-1" weight="bold">Body 1 - Bold</Text>\r
          <Text variant="body-2" weight="regular">Body 2 - Regular (작은 본문)</Text>\r
          <Text variant="body-2" weight="medium">Body 2 - Medium</Text>\r
          <Text variant="body-2" weight="bold">Body 2 - Bold</Text>\r
          <Text variant="reading" weight="regular">Reading - Regular (읽기 전용, 넓은 줄간격)</Text>\r
          <Text variant="reading" weight="medium">Reading - Medium</Text>\r
          <Text variant="reading" weight="bold">Reading - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Label */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Label (레이블) - 14px, 12px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="label-1" weight="regular">Label 1 - Regular (폼 레이블)</Text>\r
          <Text variant="label-1" weight="medium">Label 1 - Medium</Text>\r
          <Text variant="label-1" weight="bold">Label 1 - Bold</Text>\r
          <Text variant="label-2" weight="regular">Label 2 - Regular (작은 레이블)</Text>\r
          <Text variant="label-2" weight="medium">Label 2 - Medium</Text>\r
          <Text variant="label-2" weight="bold">Label 2 - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Caption */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">Caption (설명) - 12px</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="caption-1" weight="regular">Caption 1 - Regular (설명 텍스트)</Text>\r
          <Text variant="caption-1" weight="medium">Caption 1 - Medium</Text>\r
          <Text variant="caption-1" weight="bold">Caption 1 - Bold</Text>\r
          <Text variant="caption-2" weight="regular">Caption 2 - Regular (작은 설명)</Text>\r
          <Text variant="caption-2" weight="medium">Caption 2 - Medium</Text>\r
          <Text variant="caption-2" weight="bold">Caption 2 - Bold</Text>\r
          <Text variant="caption-3" weight="regular">Caption 3 - Regular (최소 텍스트)</Text>\r
          <Text variant="caption-3" weight="medium">Caption 3 - Medium</Text>\r
          <Text variant="caption-3" weight="bold">Caption 3 - Bold</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Summary Table */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">📊 전체 조합 요약</Text>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame padding="md">\r
            <Frame display="flex" direction="column" gap="xs">\r
              <Surface foreground="secondary-system01-1-rest">\r
                <Text variant="body-2" weight="medium">\r
                  총 15가지 Variant × 3가지 Weight = 45개 조합\r
                </Text>\r
              </Surface>\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">\r
                  각 조합은 특정 용도에 최적화되어 있으며, 일관된 시각적 계층을 제공합니다.\r
                </Text>\r
              </Surface>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
    </Frame>
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,v,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Weight 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '3가지 폰트 굵기의 시각적 차이를 보여줍니다. 계층 구조와 강조에 사용됩니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Weight Comparison - Same Variant */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">동일 변형에서 굵기 비교</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="title-2" weight="regular">Regular - 400 (기본 굵기)</Text>\r
          <Text variant="title-2" weight="medium">Medium - 500 (중간 굵기)</Text>\r
          <Text variant="title-2" weight="bold">Bold - 700 (강조 굵기)</Text>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Weight Usage Examples */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">사용 사례별 굵기</Text>\r
        </Surface>\r
        <Frame display="flex" direction="column" gap="lg">\r
          \r
          {/* Hero/Title - Bold for impact */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">Hero/Title - 임팩트를 위한 Bold</Text>\r
            </Surface>\r
            <Text variant="hero-2" weight="bold">강력한 첫인상을 주는 제목</Text>\r
          </Frame>\r
\r
          {/* Heading - Medium for hierarchy */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">Heading - 계층을 위한 Medium</Text>\r
            </Surface>\r
            <Text variant="heading-1" weight="medium">섹션을 구분하는 중간 제목</Text>\r
          </Frame>\r
\r
          {/* Body - Regular for readability */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">Body - 가독성을 위한 Regular</Text>\r
            </Surface>\r
            <Text variant="body-1" weight="regular">\r
              긴 본문 텍스트는 Regular 굵기로 가독성을 최우선으로 합니다. \r
              너무 두꺼우면 피로감을 주고, 너무 얇으면 읽기 어려워집니다.\r
            </Text>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,F,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Align 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '4가지 텍스트 정렬 방식의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">텍스트 정렬 방식</Text>\r
        </Surface>\r
        \r
        <Frame display="flex" direction="column" gap="lg">\r
          {/* Single Line Alignment */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">한 줄 텍스트 정렬</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" direction="column" gap="sm">\r
                <Text textAlign="left" variant="body-1">왼쪽 정렬 (Left)</Text>\r
                <Text textAlign="center" variant="body-1">가운데 정렬 (Center)</Text>\r
                <Text textAlign="right" variant="body-1">오른쪽 정렬 (Right)</Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* Multi Line Alignment */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">여러 줄 텍스트 정렬</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" direction="column" gap="md">\r
                <Frame maxWidth="300px">\r
                  <Text textAlign="left" variant="body-2">\r
                    왼쪽 정렬: 기본적인 정렬 방식으로 대부분의 본문 텍스트에 사용됩니다. \r
                    읽기 시작점이 일정하여 가독성이 좋습니다.\r
                  </Text>\r
                </Frame>\r
                <Frame maxWidth="300px">\r
                  <Text textAlign="center" variant="body-2">\r
                    가운데 정렬: 제목이나 강조하고 싶은 텍스트에 사용합니다. \r
                    균형감을 주지만 긴 텍스트에는 적합하지 않습니다.\r
                  </Text>\r
                </Frame>\r
                <Frame maxWidth="300px">\r
                  <Text textAlign="right" variant="body-2">\r
                    오른쪽 정렬: 날짜, 가격 등 특별한 의미를 가진 텍스트에 사용합니다. \r
                    시선을 끌고 싶을 때 효과적입니다.\r
                  </Text>\r
                </Frame>\r
                <Frame maxWidth="300px">\r
                  <Text textAlign="justify" variant="body-2">\r
                    양쪽 정렬: 양 끝을 맞춰 정돈된 느낌을 줍니다. 신문이나 잡지 스타일의 텍스트에 적합하며, 줄의 끝이 깔끔하게 정리됩니다.\r
                  </Text>\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var W,C,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Transform 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '텍스트 변형 옵션들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">텍스트 변형 옵션</Text>\r
        </Surface>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame padding="md" direction="column" gap="lg">\r
            \r
            {[{
            transform: 'none' as const,
            text: 'Transform None - 원본 텍스트 그대로',
            desc: '기본값으로 입력된 텍스트를 그대로 표시'
          }, {
            transform: 'capitalize' as const,
            text: 'transform capitalize - 첫 글자만 대문자',
            desc: '각 단어의 첫 글자를 대문자로 변환'
          }, {
            transform: 'uppercase' as const,
            text: 'transform uppercase - 모든 글자 대문자',
            desc: '모든 글자를 대문자로 변환, 강조 효과'
          }, {
            transform: 'lowercase' as const,
            text: 'TRANSFORM LOWERCASE - 모든 글자 소문자',
            desc: '모든 글자를 소문자로 변환'
          }].map(({
            transform,
            text,
            desc
          }) => <Frame key={transform} display="flex" direction="column" gap="xs">\r
                <Text variant="body-1" transform={transform} weight="medium">{text}</Text>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-1">{desc}</Text>\r
                </Surface>\r
              </Frame>)}\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
\r
      {/* Usage Examples */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">사용 사례</Text>\r
        </Surface>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          {/* Button Labels - Uppercase */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
            <Frame padding="md" display="flex" direction="column" gap="xs">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">버튼 레이블 - Uppercase 활용</Text>\r
              </Surface>\r
              <Text variant="label-1" transform="uppercase" weight="medium">confirm action</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Headings - Capitalize */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
            <Frame padding="md" display="flex" direction="column" gap="xs">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">제목 - Capitalize 활용</Text>\r
              </Surface>\r
              <Text variant="title-2" transform="capitalize" weight="medium">user profile settings</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Code/Technical - Lowercase */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
            <Frame padding="md" display="flex" direction="column" gap="xs">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">기술적 텍스트 - Lowercase 활용</Text>\r
              </Surface>\r
              <Text variant="caption-1" transform="lowercase" weight="regular">API_ENDPOINT_URL</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var B,M,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '오버플로우 제어 시각화',
  parameters: {
    docs: {
      description: {
        story: 'noWrap과 truncate 속성으로 텍스트 오버플로우를 제어하는 방법을 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">오버플로우 제어 방식</Text>\r
        </Surface>\r
        \r
        <Frame display="flex" direction="column" gap="lg">\r
          \r
          {/* Default Behavior */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">기본 동작 (자동 줄바꿈)</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="250px">\r
                <Text variant="body-2">\r
                  <SampleContent long />\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* NoWrap */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">noWrap={\`{true}\`} - 한 줄 강제 + 생략 부호</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="250px">\r
                <Text variant="body-2" noWrap>\r
                  <SampleContent long />\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* Truncate */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">truncate={\`{2}\`} - 2줄 이후 생략 부호</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="250px">\r
                <Text variant="body-2" truncate={2}>\r
                  <SampleContent long />\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">truncate={\`{3}\`} - 3줄 이후 생략 부호</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="250px">\r
                <Text variant="body-2" truncate={3}>\r
                  <SampleContent long />\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Usage Scenarios */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">사용 시나리오</Text>\r
        </Surface>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          {/* Card Title - noWrap */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">카드 제목 (noWrap)</Text>\r
            </Surface>\r
            <Surface background="primary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="200px">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="heading-3" weight="medium" noWrap>\r
                    정말 긴 카드 제목이 한 줄에 표시됩니다\r
                  </Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* Article Preview - truncate */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Text variant="caption-1">아티클 미리보기 (truncate={\`{3}\`})</Text>\r
            </Surface>\r
            <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" maxWidth="300px">\r
                <Text variant="body-2" truncate={3}>\r
                  이것은 긴 아티클의 미리보기 텍스트입니다. 사용자에게 내용의 일부를 보여주면서도 \r
                  레이아웃을 깔끔하게 유지할 수 있습니다. 전체 내용을 보려면 클릭하라고 유도할 수 있습니다.\r
                  더 많은 내용이 있다는 것을 생략 부호로 알려줍니다.\r
        </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(k=(M=m.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var L,A,E;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Semantic HTML 시각화',
  parameters: {
    docs: {
      description: {
        story: 'as prop을 통한 시멘틱 HTML 요소 사용 예시입니다. 접근성과 SEO에 중요합니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">시멘틱 HTML 요소</Text>\r
      </Surface>\r
      \r
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame padding="md" direction="column" gap="lg">\r
            \r
            {/* Headings */}\r
            <Frame display="flex" direction="column" gap="sm">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">제목 요소 (h1-h6)</Text>\r
              </Surface>\r
              <Frame display="flex" direction="column" gap="xs">\r
                <Text as="h1" variant="hero-1" weight="bold">페이지 메인 제목 (h1)</Text>\r
                <Text as="h2" variant="title-1" weight="medium">섹션 제목 (h2)</Text>\r
                <Text as="h3" variant="heading-1" weight="medium">하위 섹션 제목 (h3)</Text>\r
                <Text as="h4" variant="heading-2" weight="medium">세부 제목 (h4)</Text>\r
              </Frame>\r
            </Frame>\r
\r
            {/* Content Elements */}\r
            <Frame display="flex" direction="column" gap="sm">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">내용 요소</Text>\r
              </Surface>\r
              <Frame display="flex" direction="column" gap="xs">\r
                <Text as="p" variant="body-1">문단 텍스트 (p) - 본문 내용에 사용</Text>\r
                <Text as="span" variant="caption-1">인라인 텍스트 (span) - 강조나 스타일링</Text>\r
                <Text as="div" variant="body-2">블록 컨테이너 (div) - 레이아웃 목적</Text>\r
              </Frame>\r
            </Frame>\r
\r
            {/* Form Elements */}\r
            <Frame display="flex" direction="column" gap="sm">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">폼 요소</Text>\r
              </Surface>\r
              <Frame display="flex" direction="column" gap="xs">\r
                <Text as="label" variant="label-1" weight="medium">폼 레이블 (label) - 입력 필드 설명</Text>\r
              </Frame>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
\r
      {/* Best Practices */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">권장 사용법</Text>\r
      </Surface>\r
      \r
        <Frame display="flex" direction="column" gap="md">\r
          <Surface background="success" borderRadius="md">\r
            <Frame padding="md">\r
              <Surface foreground="secondary-system01-oncolor">\r
                <Text variant="body-2">\r
                  <strong>✓ 올바른 사용:</strong> 의미에 맞는 HTML 요소 선택\r
                  <br />• h1은 페이지당 하나만 사용\r
                  <br />• 제목은 계층 구조 순서대로 (h1 → h2 → h3)\r
                  <br />• label은 form 요소와 연결\r
                </Text>\r
              </Surface>\r
            </Frame>\r
      </Surface>\r
      \r
          <Surface background="error" borderRadius="md">\r
            <Frame padding="md">\r
              <Surface foreground="secondary-system01-oncolor">\r
                <Text variant="body-2">\r
                  <strong>✗ 잘못된 사용:</strong> 스타일만을 위한 요소 선택\r
                  <br />• 큰 글씨를 위해 h1 남용\r
                  <br />• 제목 계층 건너뛰기 (h1 → h3)\r
                  <br />• 의미 없는 div 남용\r
                </Text>\r
              </Surface>\r
            </Frame>\r
      </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(E=(A=x.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var U,O,P;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '🔥 컴파운드 컴포넌트 활용',
  parameters: {
    docs: {
      description: {
        story: 'Text를 Surface, Frame과 조합하여 실제 UI 패턴을 구현하는 예시입니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Article Card */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">아티클 카드 패턴</Text>\r
        </Surface>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
          <Frame padding="lg" direction="column" gap="md" maxWidth="400px">\r
            {/* Category Badge */}\r
            <Surface background="primary-system01-1-rest" borderRadius="badge-default">\r
              <Frame padding="xs" paddingX="sm">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="caption-1" weight="medium" transform="uppercase">Design System</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
            \r
            {/* Title */}\r
            <Text as="h3" variant="heading-1" weight="medium" truncate={2}>\r
              디자인 시스템 구축을 위한 완벽 가이드: 컴포넌트부터 토큰까지\r
            </Text>\r
            \r
            {/* Description */}\r
            <Text variant="body-2" truncate={3}>\r
              성공적인 디자인 시스템을 구축하기 위한 단계별 접근 방법을 알아보세요. \r
              토큰 설계부터 컴포넌트 개발, 문서화까지 실무에서 바로 적용할 수 있는 노하우를 공유합니다.\r
            </Text>\r
            \r
            {/* Meta Info */}\r
            <Frame display="flex" justify="space-between" align="center">\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="caption-1">2024.01.15</Text>\r
              </Surface>\r
              <Surface foreground="primary-system01-oncolor">\r
                <Text variant="caption-1" weight="medium">5분 읽기</Text>\r
              </Surface>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
\r
      {/* User Profile Card */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">사용자 프로필 패턴</Text>\r
        </Surface>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame padding="lg" direction="column" gap="lg" maxWidth="350px">\r
            {/* Profile Info */}\r
            <Frame display="flex" align="center" gap="md">\r
              {/* Avatar placeholder */}\r
              <Frame minWidth="60px" minHeight="60px">\r
                <Surface background="primary-system01-1-rest" borderRadius="circular">\r
                  <Frame display="flex" align="center" justify="center" minHeight="60px">\r
                    <Surface foreground="primary-system01-oncolor">\r
                      <Text variant="heading-2" weight="bold">김</Text>\r
                    </Surface>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
              \r
              <Frame direction="column" gap="xs">\r
                <Text as="h4" variant="heading-2" weight="medium">김디자인</Text>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="body-2">Senior Product Designer</Text>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
            \r
            {/* Bio */}\r
            <Text variant="body-2" truncate={3}>\r
              사용자 중심의 디자인을 추구하며, 10년간 다양한 프로덕트의 UX/UI 디자인을 담당했습니다. \r
              현재는 디자인 시스템 구축에 집중하고 있습니다.\r
            </Text>\r
            \r
            {/* Stats */}\r
            <Frame display="flex" justify="space-between">\r
              <Frame direction="column" align="center" gap="xs">\r
                <Text variant="heading-2" weight="bold">127</Text>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-1">Projects</Text>\r
                </Surface>\r
              </Frame>\r
              <Frame direction="column" align="center" gap="xs">\r
                <Text variant="heading-2" weight="bold">2.4K</Text>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-1">Followers</Text>\r
                </Surface>\r
              </Frame>\r
              <Frame direction="column" align="center" gap="xs">\r
                <Text variant="heading-2" weight="bold">892</Text>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-1">Following</Text>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
\r
      {/* Notification Toast */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">알림 토스트 패턴</Text>\r
        </Surface>\r
        \r
        <Frame display="flex" direction="column" gap="sm">\r
          {/* Success Toast */}\r
          <Surface background="success" borderRadius="md" boxShadow="30">\r
            <Frame padding="md" direction="row" align="center" gap="sm" maxWidth="400px">\r
              <Text variant="body-2" weight="medium">✓</Text>\r
              <Frame direction="column" gap="xs">\r
                <Surface foreground="secondary-system01-oncolor">\r
                  <Text variant="label-1" weight="medium">저장 완료</Text>\r
                </Surface>\r
                <Surface foreground="secondary-system01-oncolor">\r
                  <Text variant="caption-1">변경사항이 성공적으로 저장되었습니다.</Text>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
          \r
          {/* Error Toast */}\r
          <Surface background="error" borderRadius="md" boxShadow="30">\r
            <Frame padding="md" direction="row" align="center" gap="sm" maxWidth="400px">\r
              <Text variant="body-2" weight="bold">!</Text>\r
              <Frame direction="column" gap="xs">\r
                <Surface foreground="secondary-system01-oncolor">\r
                  <Text variant="label-1" weight="medium">저장 실패</Text>\r
                </Surface>\r
                <Surface foreground="secondary-system01-oncolor">\r
                  <Text variant="caption-1">네트워크 오류로 저장에 실패했습니다.</Text>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Form Section */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Surface foreground="secondary-system01-2-rest">\r
          <Text variant="heading-3" weight="medium">폼 섹션 패턴</Text>\r
        </Surface>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame padding="lg" direction="column" gap="lg" maxWidth="400px">\r
            <Frame direction="column" gap="xs">\r
              <Text as="h4" variant="heading-3" weight="medium">계정 설정</Text>\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Text variant="body-2">개인 정보를 안전하게 관리하세요.</Text>\r
              </Surface>\r
            </Frame>\r
            \r
            <Frame direction="column" gap="md">\r
              {/* Email Field */}\r
              <Frame direction="column" gap="xs">\r
                <Text as="label" variant="label-1" weight="medium">이메일 주소</Text>\r
                <Surface background="secondary-system01-2-rest" borderRadius="input" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
                  <Frame padding="sm">\r
                    <Surface foreground="secondary-system01-2-rest">\r
                      <Text variant="body-2">user@example.com</Text>\r
                    </Surface>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
              \r
              {/* Name Field */}\r
              <Frame direction="column" gap="xs">\r
                <Text as="label" variant="label-1" weight="medium">표시 이름</Text>\r
                <Surface background="secondary-system01-2-rest" borderRadius="input" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
                  <Frame padding="sm">\r
                    <Surface foreground="secondary-system01-1-rest">\r
                      <Text variant="body-2">김디자인</Text>\r
                    </Surface>\r
                  </Frame>\r
                </Surface>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-1">다른 사용자에게 표시될 이름입니다.</Text>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
    </Frame>
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const D=["Playground","VariantShowcase","WeightShowcase","AlignShowcase","TransformShowcase","OverflowShowcase","SemanticHTMLShowcase","CompoundExample"];export{c as AlignShowcase,g as CompoundExample,m as OverflowShowcase,t as Playground,x as SemanticHTMLShowcase,l as TransformShowcase,s as VariantShowcase,o as WeightShowcase,D as __namedExportsOrder,I as default};

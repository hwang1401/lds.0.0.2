import{j as r}from"./react-vendor-BFNgaz96.js";import{F as e,T as a,S as i}from"./index.esm-WYP67xav.js";import{C as q}from"./index.esm-ChTCnUjT.js";const er={title:"Shared/Primitives/Frame",component:e,parameters:{componentSubtitle:"레이아웃 프리미티브 - 각 props별 시각화",docs:{description:{component:`
Frame은 레이아웃, 배치, 간격을 담당하는 구조적 프리미티브입니다.

## 핵심 특징
- **구조적 속성**: Display, Position, Flexbox, Grid 레이아웃 제어
- **간격 관리**: 시멘틱 토큰 기반 Padding, Margin, Gap 제어
- **반응형 지원**: 모든 속성이 반응형 지원
- **크기 제어**: width, height, min/max 크기 제어

## Surface와의 차이점
- **Frame**: 구조적 속성 (레이아웃, 간격, 크기)
- **Surface**: 시각적 속성 (색상, 테두리, 그림자)

## 사용 패턴
\`\`\`tsx
// Flexbox 레이아웃
<Frame display="flex" justify="center" align="center" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Frame>

// Grid 레이아웃
<Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">
  <div>Left</div>
  <div>Right</div>
</Frame>

// Surface와 조합
<Surface background="primary-system01-1-rest" borderRadius="md">
  <Frame padding="lg" display="flex" direction="column" gap="sm">
    <Text>Title</Text>
    <Text>Content</Text>
  </Frame>
</Surface>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{as:{description:"HTML 요소 타입",control:"select",options:["div","section","article","aside","nav","header","footer","main","span"]},display:{description:"Display 속성",control:"select",options:["block","inline","inline-block","flex","inline-flex","grid","inline-grid","none","contents"]},position:{description:"Position 속성",control:"select",options:["static","relative","absolute","fixed","sticky"]},direction:{description:'Flex direction (display="flex"일 때)',control:"select",options:["row","row-reverse","column","column-reverse"]},justify:{description:'Justify content (display="flex"일 때)',control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},align:{description:'Align items (display="flex"일 때)',control:"select",options:["stretch","flex-start","flex-end","center","baseline"]},gap:{description:"Gap (시멘틱 토큰)",control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"]},padding:{description:"Padding (시멘틱 토큰)",control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"]},margin:{description:"Margin (시멘틱 토큰)",control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"]}}},d=({label:s="Item",variant:n="primary",size:h="md"})=>{const O=h==="sm"?"sm":h==="lg"?"lg":"md",U={primary:"primary-system01-1-rest",secondary:"secondary-system01-2-rest",success:"cta-system01-1-rest",warning:"secondary-system01-3-rest",error:"secondary-system01-1-rest",info:"primary-system01-2-rest"},V=n==="primary"||n==="success";return r.jsx(i,{background:U[n],foreground:V?`${n==="primary"?"primary-system01":"cta-system01"}-oncolor`:void 0,borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:O,display:"flex",justify:"center",align:"center",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:s})})})},t={args:{display:"flex",justify:"center",align:"center",gap:"md",padding:"lg",children:r.jsxs(r.Fragment,{children:[r.jsx(d,{label:"Item 1",variant:"primary"}),r.jsx(d,{label:"Item 2",variant:"secondary"}),r.jsx(d,{label:"Item 3",variant:"success"})]})}},o={name:"Display 속성 시각화",parameters:{docs:{description:{story:"다양한 display 속성의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Block vs Inline 차이점"}),r.jsxs(e,{display:"flex",direction:"column",gap:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"🟦 Block (전체 너비 차지, 세로로 쌓임)"}),r.jsx(a,{variant:"caption-1",children:"각 요소가 전체 너비를 차지하며 세로로 배치됩니다."}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{padding:"md",children:[r.jsx(e,{display:"block",marginBottom:"xs",children:r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Block 1 (전체 너비)"})})})}),r.jsx(e,{display:"block",marginBottom:"xs",children:r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Block 2 (전체 너비)"})})})}),r.jsx(e,{display:"block",children:r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Block 3 (전체 너비)"})})})})]})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"🟨 Inline (내용만큼 너비, 가로로 배치)"}),r.jsx(a,{variant:"caption-1",children:"각 요소가 내용만큼의 너비를 차지하며 가로로 배치됩니다."}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{padding:"md",children:[r.jsx(e,{display:"inline",marginRight:"sm",children:r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Inline 1"})})})}),r.jsx(e,{display:"inline",marginRight:"sm",children:r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Inline 2"})})})}),r.jsx(e,{display:"inline",children:r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"Inline 3"})})})})]})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"🔄 직접 비교 (같은 컨테이너)"}),r.jsx(a,{variant:"caption-1",children:"같은 컨테이너 안에서 Block과 Inline 요소를 함께 배치했을 때의 차이점"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{padding:"md",children:[r.jsx(e,{display:"block",marginBottom:"sm",children:r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"📦 이것은 Block 요소 (전체 너비 차지)"})})})}),r.jsx(e,{display:"inline",marginRight:"sm",children:r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"📄 Inline 1"})})})}),r.jsx(e,{display:"inline",marginRight:"sm",children:r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"📄 Inline 2"})})})}),r.jsx(e,{display:"inline",children:r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"📄 Inline 3"})})})}),r.jsx(e,{display:"block",marginTop:"sm",children:r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderRadius:"sm",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"📦 또 다른 Block 요소 (전체 너비 차지)"})})})})]})})]})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Flex vs Grid 레이아웃"}),r.jsxs(e,{display:"flex",direction:"column",gap:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"🔄 Flex (1차원 레이아웃)"}),r.jsx(a,{variant:"caption-1",children:"한 방향(가로 또는 세로)으로 요소들을 배치하는 1차원 레이아웃"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{padding:"md",children:r.jsxs(e,{display:"flex",gap:"md",justify:"space-between",align:"center",children:[r.jsx(d,{label:"Flex 1",variant:"primary",size:"sm"}),r.jsx(d,{label:"Flex 2",variant:"secondary",size:"md"}),r.jsx(d,{label:"Flex 3",variant:"success",size:"lg"})]})})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"🔲 Grid (2차원 레이아웃)"}),r.jsx(a,{variant:"caption-1",children:"가로와 세로 모두를 고려한 2차원 레이아웃"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{padding:"md",children:r.jsxs(e,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"md",children:[r.jsx(d,{label:"Grid 1",variant:"primary"}),r.jsx(d,{label:"Grid 2",variant:"secondary"}),r.jsx(d,{label:"Grid 3",variant:"success"}),r.jsx(d,{label:"Grid 4",variant:"warning"}),r.jsx(d,{label:"Grid 5",variant:"error"}),r.jsx(d,{label:"Grid 6",variant:"info"})]})})})]})]})]})]})},l={name:"Flexbox 속성 시각화",parameters:{docs:{description:{story:"Flexbox의 다양한 속성들을 시각적으로 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Flex Direction"}),r.jsx(e,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"lg",children:["row","column","row-reverse","column-reverse"].map(s=>r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:s}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"flex",direction:s,gap:"xs",padding:"md",minHeight:s.includes("column")?"120px":"60px",children:[r.jsx(d,{label:"1",variant:"primary",size:"sm"}),r.jsx(d,{label:"2",variant:"secondary",size:"sm"}),r.jsx(d,{label:"3",variant:"success",size:"sm"})]})})]},s))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Justify Content"}),r.jsx(e,{display:"flex",direction:"column",gap:"sm",children:["flex-start","center","flex-end","space-between","space-around","space-evenly"].map(s=>r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:s}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"flex",justify:s,gap:"xs",padding:"sm",minHeight:"50px",children:[r.jsx(d,{label:"A",variant:"primary",size:"sm"}),r.jsx(d,{label:"B",variant:"secondary",size:"sm"}),r.jsx(d,{label:"C",variant:"success",size:"sm"})]})})]},s))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Align Items"}),r.jsx(e,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"lg",children:["stretch","flex-start","center","flex-end","baseline"].map(s=>r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:s}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"flex",align:s,gap:"xs",padding:"sm",height:"80px",children:[r.jsx(d,{label:"1",variant:"primary",size:"sm"}),r.jsx(d,{label:"2",variant:"secondary",size:"md"}),r.jsx(d,{label:"3",variant:"success",size:"sm"})]})})]},s))})]})]})},m={name:"Grid 레이아웃 시각화",parameters:{docs:{description:{story:"CSS Grid의 다양한 레이아웃 패턴을 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"기본 Grid 레이아웃"}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"2×2 Grid"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"sm",padding:"md",children:[r.jsx(d,{label:"A",variant:"primary"}),r.jsx(d,{label:"B",variant:"secondary"}),r.jsx(d,{label:"C",variant:"success"}),r.jsx(d,{label:"D",variant:"warning"})]})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"3 Column Grid"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"sm",padding:"md",children:[r.jsx(d,{label:"1",variant:"primary"}),r.jsx(d,{label:"2",variant:"secondary"}),r.jsx(d,{label:"3",variant:"success"})]})})]})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"고급 Grid 레이아웃"}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"Auto-fit (반응형)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:"sm",padding:"md",children:[r.jsx(d,{label:"Auto 1",variant:"primary"}),r.jsx(d,{label:"Auto 2",variant:"secondary"}),r.jsx(d,{label:"Auto 3",variant:"success"}),r.jsx(d,{label:"Auto 4",variant:"warning"})]})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"복합 Grid (다양한 크기)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gridTemplateRows:"auto auto",gap:"sm",padding:"md",children:[r.jsx(e,{gridColumn:"1 / 2",gridRow:"1 / 3",children:r.jsx(d,{label:"Main (2fr)",variant:"primary"})}),r.jsx(d,{label:"Side A",variant:"secondary"}),r.jsx(d,{label:"Side B",variant:"success"}),r.jsx(d,{label:"Side C",variant:"warning"}),r.jsx(d,{label:"Side D",variant:"error"})]})})]})]})]})]})},c={name:"Spacing 토큰 시각화",parameters:{docs:{description:{story:"시멘틱 spacing 토큰들의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Gap 토큰"}),r.jsx(e,{display:"flex",direction:"column",gap:"sm",children:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"].map(s=>r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsxs(a,{variant:"caption-1",weight:"medium",children:['gap="',s,'"']}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{display:"flex",gap:s,padding:"md",children:[r.jsx(d,{label:"A",variant:"primary",size:"sm"}),r.jsx(d,{label:"B",variant:"secondary",size:"sm"}),r.jsx(d,{label:"C",variant:"success",size:"sm"})]})})]},s))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Padding 토큰"}),r.jsx(e,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"lg",children:["xs","sm","md","lg","xl","xxl"].map(s=>r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsxs(a,{variant:"caption-1",weight:"medium",children:['padding="',s,'"']}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{padding:s,children:r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderWidth:"thin",borderStyle:"solid",borderColor:"primary-system01-1-rest",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-2",textAlign:"center",children:"Content"})})})})})]},s))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"방향별 Padding"}),r.jsxs(e,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:"paddingX (좌우)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{paddingX:"lg",children:r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderWidth:"thin",borderStyle:"solid",borderColor:"cta-system01-1-rest",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-2",textAlign:"center",children:"paddingX"})})})})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:"paddingY (상하)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{paddingY:"lg",children:r.jsx(i,{background:"secondary-system01-3-rest",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-3-rest",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-2",textAlign:"center",children:"paddingY"})})})})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:"개별 방향"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{paddingTop:"sm",paddingRight:"md",paddingBottom:"lg",paddingLeft:"xl",children:r.jsx(i,{background:"primary-system01-2-rest",foreground:"primary-system01-oncolor",borderWidth:"thin",borderStyle:"solid",borderColor:"primary-system01-1-rest",children:r.jsx(e,{padding:"sm",children:r.jsx(a,{variant:"caption-2",textAlign:"center",children:"각각 다름"})})})})})]})]})]})]})},p={name:"Position 속성 시각화",parameters:{docs:{description:{story:"다양한 position 속성의 동작을 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Position 유형별 비교"}),r.jsxs(e,{display:"flex",gap:"xl",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"sm",flex:"1",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"Static (기본값)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{padding:"md",height:"120px",children:r.jsx(e,{position:"static",children:r.jsx(d,{label:"Static",variant:"primary"})})})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",flex:"1",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"Relative (상대 위치)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsx(e,{padding:"md",height:"120px",children:r.jsx(e,{position:"relative",top:"10px",left:"20px",children:r.jsx(d,{label:"Relative",variant:"secondary"})})})})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"Absolute (절대 위치)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{position:"relative",padding:"md",height:"150px",children:[r.jsx(d,{label:"Normal Flow",variant:"primary"}),r.jsx(e,{position:"absolute",top:"20px",right:"20px",children:r.jsx(d,{label:"Absolute (top-right)",variant:"secondary"})}),r.jsx(e,{position:"absolute",bottom:"20px",left:"20px",children:r.jsx(d,{label:"Absolute (bottom-left)",variant:"success"})})]})})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"Z-Index (쌓임 순서)"}),r.jsx(i,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:r.jsxs(e,{position:"relative",padding:"lg",height:"200px",children:[r.jsx(e,{position:"absolute",top:"40px",left:"40px",zIndex:1,children:r.jsx(d,{label:"Z-Index: 1",variant:"primary"})}),r.jsx(e,{position:"absolute",top:"60px",left:"80px",zIndex:3,children:r.jsx(d,{label:"Z-Index: 3",variant:"secondary"})}),r.jsx(e,{position:"absolute",top:"80px",left:"120px",zIndex:2,children:r.jsx(d,{label:"Z-Index: 2",variant:"success"})})]})})]})]})},x={name:"🔥 컴파운드 컴포넌트 조합 예시",parameters:{docs:{description:{story:"Frame을 다른 프리미티브와 조합하여 실제 레이아웃을 구현한 예시입니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"웹 애플리케이션 레이아웃"}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:r.jsxs(e,{height:"400px",display:"flex",direction:"column",children:[r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",children:r.jsxs(e,{padding:"md",display:"flex",justify:"space-between",align:"center",children:[r.jsx(a,{variant:"heading-2",weight:"bold",children:"Logo"}),r.jsxs(e,{display:"flex",gap:"md",align:"center",children:[r.jsx(a,{variant:"body-2",children:"Menu"}),r.jsx(a,{variant:"body-2",children:"Profile"})]})]})}),r.jsxs(e,{display:"flex",flex:"1",children:[r.jsx(i,{background:"secondary-system01-2-rest",borderColor:"secondary-system01-2-rest",borderStyle:"solid",borderWidth:"thin",children:r.jsxs(e,{width:"200px",padding:"lg",display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"label-1",weight:"medium",children:"Navigation"}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(i,{borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(a,{variant:"caption-1",children:"Dashboard"})})}),r.jsx(i,{borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(a,{variant:"caption-1",children:"Projects"})})}),r.jsx(i,{borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(a,{variant:"caption-1",children:"Settings"})})})]})]})}),r.jsxs(e,{flex:"1",padding:"xl",display:"flex",direction:"column",gap:"lg",children:[r.jsx(a,{variant:"hero-1",weight:"medium",children:"대시보드"}),r.jsx(e,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"lg",children:[{title:"총 사용자",value:"1,234",variant:"primary"},{title:"활성 프로젝트",value:"56",variant:"secondary"},{title:"완료된 작업",value:"89%",variant:"success"},{title:"수익",value:"$12,345",variant:"warning"}].map((s,n)=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"lg",display:"flex",direction:"column",gap:"sm",children:r.jsx(i,{background:s.variant==="primary"?"primary-system01-1-rest":s.variant==="secondary"?"secondary-system01-2-rest":s.variant==="success"?"cta-system01-1-rest":"secondary-system01-3-rest",foreground:s.variant==="primary"?"primary-system01-oncolor":s.variant==="success"?"cta-system01-oncolor":void 0,children:r.jsxs(e,{padding:"sm",children:[r.jsx(a,{variant:"caption-1",children:s.title}),r.jsx(a,{variant:"heading-1",weight:"bold",children:s.value})]})})})},n))})]})]})]})})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"모바일 카드 리스트"}),r.jsx(e,{display:"flex",direction:"column",gap:"sm",maxWidth:"400px",children:[{name:"김철수",role:"Frontend Developer",avatar:"👨‍💻"},{name:"이영희",role:"UX Designer",avatar:"👩‍🎨"},{name:"박민수",role:"Backend Developer",avatar:"👨‍💼"}].map((s,n)=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(e,{padding:"lg",display:"flex",gap:"md",align:"center",children:[r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"circular",children:r.jsx(e,{width:"48px",height:"48px",display:"flex",justify:"center",align:"center",style:{fontSize:"24px"},children:s.avatar})}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",flex:"1",children:[r.jsx(a,{variant:"body-1",weight:"medium",children:s.name}),r.jsx(a,{variant:"caption-1",children:s.role})]}),r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(a,{variant:"caption-1",weight:"medium",children:"연락"})})})]})},n))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-3",weight:"medium",children:"스크롤 섹션 (Sticky Header)"}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(e,{height:"300px",display:"flex",direction:"column",overflow:"hidden",children:[r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",children:r.jsx(e,{padding:"md",position:"sticky",top:"0",zIndex:10,children:r.jsx(a,{variant:"heading-3",weight:"medium",children:"뉴스 피드"})})}),r.jsx(e,{flex:"1",overflowY:"scroll",padding:"md",display:"flex",direction:"column",gap:"sm",children:Array.from({length:10},(s,n)=>r.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(e,{padding:"md",display:"flex",direction:"column",gap:"xs",children:[r.jsxs(a,{variant:"body-1",weight:"medium",children:["뉴스 제목 ",n+1]}),r.jsx(a,{variant:"caption-1",children:"뉴스 내용이 여기에 표시됩니다..."}),r.jsxs(e,{display:"flex",justify:"space-between",align:"center",marginTop:"xs",children:[r.jsx(a,{variant:"caption-2",children:"5분 전"}),r.jsxs(e,{display:"flex",gap:"sm",children:[r.jsxs(a,{variant:"caption-2",children:["좋아요 ",12+n]}),r.jsxs(a,{variant:"caption-2",children:["댓글 ",3+n]})]})]})]})},n))})]})})]})]})},g={name:"반응형 카드 그리드",render:()=>r.jsxs(e,{display:"grid",gridTemplateColumns:{mobile:"1fr",tablet:"1fr 1fr",desktop:"1fr 1fr 1fr"},gap:"md",padding:"lg",style:{backgroundColor:"#f5f5f5",minHeight:"400px"},children:[r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 1"}),r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 2"}),r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 3"}),r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 4"}),r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 5"}),r.jsx("div",{style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #ddd",textAlign:"center"},children:"카드 6"})]}),parameters:{docs:{description:{story:`
### 반응형 카드 그리드 예시

실제 사용자님이 원했던 기능입니다:
- **모바일**: 카드가 화면 너비에 꽉 차게 1열로 배치
- **태블릿**: 카드가 2열로 배치되면서 각각 50% 너비
- **데스크톱**: 카드가 3열로 배치되면서 각각 33.3% 너비

브라우저 개발자 도구에서 화면 크기를 조정하면서 테스트해보세요!

\`\`\`tsx
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",           // 모바일: 1열
    tablet: "1fr 1fr",       // 태블릿: 2열  
    desktop: "1fr 1fr 1fr"   // 데스크톱: 3열
  }}
  gap="md"
>
  {cards.map(card => <Card key={card.id} {...card} />)}
</Frame>
\`\`\`
        `}}}},y={name:"반응형 Flex 레이아웃",render:()=>r.jsxs(e,{display:"flex",direction:{mobile:"column",desktop:"row"},gap:{mobile:"sm",desktop:"lg"},padding:"lg",style:{backgroundColor:"#f0f0f0",minHeight:"300px"},children:[r.jsx("div",{style:{backgroundColor:"#007bff",color:"white",padding:"20px",borderRadius:"8px",flex:1,textAlign:"center"},children:"사이드바"}),r.jsx("div",{style:{backgroundColor:"#28a745",color:"white",padding:"20px",borderRadius:"8px",flex:3,textAlign:"center"},children:"메인 콘텐츠"})]}),parameters:{docs:{description:{story:`
### 반응형 Flex 레이아웃 예시

- **모바일**: 세로 배치 (column)
- **데스크톱**: 가로 배치 (row)

\`\`\`tsx
<Frame
  display="flex"
  direction={{
    mobile: "column",     // 모바일: 세로 배치
    desktop: "row"        // 데스크톱: 가로 배치
  }}
  gap={{
    mobile: "sm",         // 모바일: 작은 간격
    desktop: "lg"         // 데스크톱: 큰 간격
  }}
>
  <div>사이드바</div>
  <div>메인 콘텐츠</div>
</Frame>
\`\`\`
        `}}}},u={name:"🎯 실제 반응형 카드 그리드 (System-01 Card)",parameters:{docs:{description:{story:`
**실제 Card 컴포넌트를 사용한 반응형 Grid 예시**

- **모바일 (767px 이하)**: 카드가 1열로 전체 너비 차지
- **태블릿 (768px~1023px)**: 카드가 2열로 배치
- **데스크톱 (1024px 이상)**: 카드가 3열로 배치

**브라우저 크기를 조절해서 반응형 동작을 확인해보세요!**

\`\`\`tsx
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",           // 모바일: 1열
    tablet: "1fr 1fr",       // 태블릿: 2열
    desktop: "1fr 1fr 1fr"   // 데스크톱: 3열
  }}
  gap="lg"
  padding="lg"
>
  {cardData.map(card => (
    <Card 
      key={card.id}
      title={card.title}
      description={card.description}
      variant={card.variant}
    />
  ))}
</Frame>
\`\`\`
        `}}},render:()=>{const s=[{id:1,title:"반응형 카드 1",description:"모바일에서는 전체 너비로, 데스크톱에서는 3분의 1 너비로 자동 조정됩니다.",variant:"transparent"},{id:2,title:"반응형 카드 2",description:"Frame의 gridTemplateColumns 속성으로 브레이크포인트별 열 수를 제어합니다.",variant:"outlined"},{id:3,title:"반응형 카드 3",description:"Card 컴포넌트의 maxWidth 제한이 제거되어 Grid에 맞게 확장됩니다.",variant:"filled"},{id:4,title:"반응형 카드 4",description:"브라우저 창 크기를 조절해서 1열 → 2열 → 3열 변화를 확인해보세요.",variant:"transparent"},{id:5,title:"반응형 카드 5",description:"모든 카드가 동일한 높이를 유지하며 Grid에 정렬됩니다.",variant:"outlined"},{id:6,title:"반응형 카드 6",description:"이제 실제 프로젝트에서 이런 방식으로 반응형 레이아웃을 구현할 수 있습니다!",variant:"filled"}];return r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(a,{variant:"heading-2",weight:"bold",children:"🎯 실제 반응형 카드 그리드"}),r.jsxs(a,{variant:"body-1",children:["브라우저 창 크기를 조절해서 ",r.jsx("strong",{children:"모바일(1열) → 태블릿(2열) → 데스크톱(3열)"})," 변화를 확인해보세요!"]}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsxs(e,{padding:"md",display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"caption-1",weight:"medium",children:"📱 브레이크포인트 안내:"}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-2",children:"• 모바일 (~767px): 1열 레이아웃"}),r.jsx(a,{variant:"caption-2",children:"• 태블릿 (768px~1023px): 2열 레이아웃"}),r.jsx(a,{variant:"caption-2",children:"• 데스크톱 (1024px+): 3열 레이아웃"})]})]})})]}),r.jsx(e,{display:"grid",gridTemplateColumns:{mobile:"1fr",tablet:"1fr 1fr",desktop:"1fr 1fr 1fr"},gap:"lg",style:{backgroundColor:"var(--foundation-foundation-color-grey-light-98)",borderRadius:"var(--foundation-foundation-radius-80)",padding:"var(--foundation-foundation-spacing-200)"},children:s.map(n=>r.jsx(q,{title:n.title,description:n.description,variant:n.variant},n.id))}),r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderRadius:"md",children:r.jsxs(e,{padding:"lg",display:"flex",direction:"column",gap:"sm",children:[r.jsx(a,{variant:"body-2",weight:"medium",children:"✅ 완성된 기능"}),r.jsxs(e,{display:"flex",direction:"column",gap:"xs",children:[r.jsx(a,{variant:"caption-1",children:"• Frame 컴포넌트의 반응형 Grid 지원"}),r.jsx(a,{variant:"caption-1",children:"• Card 컴포넌트의 maxWidth 제한 제거"}),r.jsx(a,{variant:"caption-1",children:"• 브레이크포인트별 자동 크기 조정"}),r.jsx(a,{variant:"caption-1",children:"• 실제 프로젝트에서 바로 사용 가능"})]})]})})]})}};var b,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    display: 'flex',
    justify: 'center',
    align: 'center',
    gap: 'md',
    padding: 'lg',
    children: <>\r
        <SampleItem label="Item 1" variant="primary" />\r
        <SampleItem label="Item 2" variant="secondary" />\r
        <SampleItem label="Item 3" variant="success" />\r
      </>
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,F,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Display 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 display 속성의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Block vs Inline */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Block vs Inline 차이점</Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          \r
          {/* Block 예시 */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">🟦 Block (전체 너비 차지, 세로로 쌓임)</Text>\r
            <Text variant="caption-1">각 요소가 전체 너비를 차지하며 세로로 배치됩니다.</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md">\r
                {/* Block 요소들 - 각각이 전체 너비 차지 */}\r
                <Frame display="block" marginBottom="xs">\r
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Block 1 (전체 너비)</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="block" marginBottom="xs">\r
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Block 2 (전체 너비)</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="block">\r
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Block 3 (전체 너비)</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          \r
          {/* Inline 예시 */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">🟨 Inline (내용만큼 너비, 가로로 배치)</Text>\r
            <Text variant="caption-1">각 요소가 내용만큼의 너비를 차지하며 가로로 배치됩니다.</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md">\r
                {/* Inline 요소들 - 내용만큼의 너비로 가로 배치 */}\r
                <Frame display="inline" marginRight="sm">\r
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Inline 1</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="inline" marginRight="sm">\r
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Inline 2</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="inline">\r
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">Inline 3</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* 실제 비교 - 같은 컨테이너 안에서 */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">🔄 직접 비교 (같은 컨테이너)</Text>\r
            <Text variant="caption-1">같은 컨테이너 안에서 Block과 Inline 요소를 함께 배치했을 때의 차이점</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md">\r
                {/* Block 요소 */}\r
                <Frame display="block" marginBottom="sm">\r
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">📦 이것은 Block 요소 (전체 너비 차지)</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                \r
                {/* Inline 요소들 */}\r
                <Frame display="inline" marginRight="sm">\r
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">📄 Inline 1</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="inline" marginRight="sm">\r
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">📄 Inline 2</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                <Frame display="inline">\r
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">📄 Inline 3</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
                \r
                {/* 또 다른 Block 요소 */}\r
                <Frame display="block" marginTop="sm">\r
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-1" weight="medium">📦 또 다른 Block 요소 (전체 너비 차지)</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Flex vs Grid */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Flex vs Grid 레이아웃</Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          \r
          {/* Flex 예시 */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">🔄 Flex (1차원 레이아웃)</Text>\r
            <Text variant="caption-1">한 방향(가로 또는 세로)으로 요소들을 배치하는 1차원 레이아웃</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md">\r
                <Frame display="flex" gap="md" justify="space-between" align="center">\r
                  <SampleItem label="Flex 1" variant="primary" size="sm" />\r
                  <SampleItem label="Flex 2" variant="secondary" size="md" />\r
                  <SampleItem label="Flex 3" variant="success" size="lg" />\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          \r
          {/* Grid 예시 */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">🔲 Grid (2차원 레이아웃)</Text>\r
            <Text variant="caption-1">가로와 세로 모두를 고려한 2차원 레이아웃</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md">\r
                <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="md">\r
                  <SampleItem label="Grid 1" variant="primary" />\r
                  <SampleItem label="Grid 2" variant="secondary" />\r
                  <SampleItem label="Grid 3" variant="success" />\r
                  <SampleItem label="Grid 4" variant="warning" />\r
                  <SampleItem label="Grid 5" variant="error" />\r
                  <SampleItem label="Grid 6" variant="info" />\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var T,k,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Flexbox 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: 'Flexbox의 다양한 속성들을 시각적으로 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Flex Direction */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Flex Direction</Text>\r
        <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">\r
          {(['row', 'column', 'row-reverse', 'column-reverse'] as FlexDirection[]).map(direction => <Frame key={direction} display="flex" direction="column" gap="sm">\r
              <Text variant="body-2" weight="medium">{direction}</Text>\r
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame display="flex" direction={direction} gap="xs" padding="md" minHeight={direction.includes('column') ? '120px' : '60px'}>\r
                  <SampleItem label="1" variant="primary" size="sm" />\r
                  <SampleItem label="2" variant="secondary" size="sm" />\r
                  <SampleItem label="3" variant="success" size="sm" />\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Justify Content */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Justify Content</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as JustifyContent[]).map(justify => <Frame key={justify} display="flex" direction="column" gap="xs">\r
              <Text variant="caption-1" weight="medium">{justify}</Text>\r
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame display="flex" justify={justify} gap="xs" padding="sm" minHeight="50px">\r
                  <SampleItem label="A" variant="primary" size="sm" />\r
                  <SampleItem label="B" variant="secondary" size="sm" />\r
                  <SampleItem label="C" variant="success" size="sm" />\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Align Items */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Align Items</Text>\r
        <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="lg">\r
          {(['stretch', 'flex-start', 'center', 'flex-end', 'baseline'] as AlignItems[]).map(align => <Frame key={align} display="flex" direction="column" gap="xs">\r
              <Text variant="caption-1" weight="medium">{align}</Text>\r
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame display="flex" align={align} gap="xs" padding="sm" height="80px">\r
                  <SampleItem label="1" variant="primary" size="sm" />\r
                  <SampleItem label="2" variant="secondary" size="md" />\r
                  <SampleItem label="3" variant="success" size="sm" />\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,I,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Grid 레이아웃 시각화',
  parameters: {
    docs: {
      description: {
        story: 'CSS Grid의 다양한 레이아웃 패턴을 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Basic Grid */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">기본 Grid 레이아웃</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          \r
          {/* 2x2 Grid */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="body-2" weight="medium">2×2 Grid</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="sm" padding="md">\r
                <SampleItem label="A" variant="primary" />\r
                <SampleItem label="B" variant="secondary" />\r
                <SampleItem label="C" variant="success" />\r
                <SampleItem label="D" variant="warning" />\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* 3 Column Grid */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="body-2" weight="medium">3 Column Grid</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="sm" padding="md">\r
                <SampleItem label="1" variant="primary" />\r
                <SampleItem label="2" variant="secondary" />\r
                <SampleItem label="3" variant="success" />\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Advanced Grid */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">고급 Grid 레이아웃</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          \r
          {/* Auto-fit Grid */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="body-2" weight="medium">Auto-fit (반응형)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap="sm" padding="md">\r
                <SampleItem label="Auto 1" variant="primary" />\r
                <SampleItem label="Auto 2" variant="secondary" />\r
                <SampleItem label="Auto 3" variant="success" />\r
                <SampleItem label="Auto 4" variant="warning" />\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* Complex Grid */}\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="body-2" weight="medium">복합 Grid (다양한 크기)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame display="grid" gridTemplateColumns="2fr 1fr 1fr" gridTemplateRows="auto auto" gap="sm" padding="md">\r
                <Frame gridColumn="1 / 2" gridRow="1 / 3">\r
                  <SampleItem label="Main (2fr)" variant="primary" />\r
                </Frame>\r
                <SampleItem label="Side A" variant="secondary" />\r
                <SampleItem label="Side B" variant="success" />\r
                <SampleItem label="Side C" variant="warning" />\r
                <SampleItem label="Side D" variant="error" />\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var W,G,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Spacing 토큰 시각화',
  parameters: {
    docs: {
      description: {
        story: '시멘틱 spacing 토큰들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Gap 토큰 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Gap 토큰</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          {(['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as SpacingValue[]).map(gap => <Frame key={gap} display="flex" direction="column" gap="xs">\r
              <Text variant="caption-1" weight="medium">gap="{gap}"</Text>\r
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame display="flex" gap={gap} padding="md">\r
                  <SampleItem label="A" variant="primary" size="sm" />\r
                  <SampleItem label="B" variant="secondary" size="sm" />\r
                  <SampleItem label="C" variant="success" size="sm" />\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Padding 토큰 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Padding 토큰</Text>\r
        <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="lg">\r
          {(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as SpacingValue[]).map(padding => <Frame key={padding} display="flex" direction="column" gap="xs">\r
              <Text variant="caption-1" weight="medium">padding="{padding}"</Text>\r
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame padding={padding}>\r
                                     <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest">\r
                    <Frame padding="sm">\r
                      <Text variant="caption-2" textAlign="center">Content</Text>\r
                    </Frame>\r
                  </Surface>\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 방향별 Padding */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">방향별 Padding</Text>\r
        <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="lg">\r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="caption-1" weight="medium">paddingX (좌우)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame paddingX="lg">\r
                                 <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="cta-system01-1-rest">\r
                  <Frame padding="sm">\r
                    <Text variant="caption-2" textAlign="center">paddingX</Text>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          \r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="caption-1" weight="medium">paddingY (상하)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame paddingY="lg">\r
                                 <Surface background="secondary-system01-3-rest" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-3-rest">\r
                  <Frame padding="sm">\r
                    <Text variant="caption-2" textAlign="center">paddingY</Text>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          \r
          <Frame display="flex" direction="column" gap="xs">\r
            <Text variant="caption-1" weight="medium">개별 방향</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame paddingTop="sm" paddingRight="md" paddingBottom="lg" paddingLeft="xl">\r
                                 <Surface background="primary-system01-2-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest">\r
                  <Frame padding="sm">\r
                    <Text variant="caption-2" textAlign="center">각각 다름</Text>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var B,z,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Position 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 position 속성의 동작을 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Position Types */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Position 유형별 비교</Text>\r
        \r
        {/* Static vs Relative */}\r
        <Frame display="flex" gap="xl">\r
          <Frame display="flex" direction="column" gap="sm" flex="1">\r
            <Text variant="body-2" weight="medium">Static (기본값)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md" height="120px">\r
                <Frame position="static">\r
                  <SampleItem label="Static" variant="primary" />\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          \r
          <Frame display="flex" direction="column" gap="sm" flex="1">\r
            <Text variant="body-2" weight="medium">Relative (상대 위치)</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame padding="md" height="120px">\r
                <Frame position="relative" top="10px" left="20px">\r
                  <SampleItem label="Relative" variant="secondary" />\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
\r
        {/* Absolute Positioning */}\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Absolute (절대 위치)</Text>\r
          <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
            <Frame position="relative" padding="md" height="150px">\r
              <SampleItem label="Normal Flow" variant="primary" />\r
              <Frame position="absolute" top="20px" right="20px">\r
                <SampleItem label="Absolute (top-right)" variant="secondary" />\r
              </Frame>\r
              <Frame position="absolute" bottom="20px" left="20px">\r
                <SampleItem label="Absolute (bottom-left)" variant="success" />\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* Z-Index */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Z-Index (쌓임 순서)</Text>\r
        <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
          <Frame position="relative" padding="lg" height="200px">\r
            <Frame position="absolute" top="40px" left="40px" zIndex={1}>\r
              <SampleItem label="Z-Index: 1" variant="primary" />\r
            </Frame>\r
            <Frame position="absolute" top="60px" left="80px" zIndex={3}>\r
              <SampleItem label="Z-Index: 3" variant="secondary" />\r
            </Frame>\r
            <Frame position="absolute" top="80px" left="120px" zIndex={2}>\r
              <SampleItem label="Z-Index: 2" variant="success" />\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
    </Frame>
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var P,X,Y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '🔥 컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Frame을 다른 프리미티브와 조합하여 실제 레이아웃을 구현한 예시입니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 헤더 + 사이드바 + 메인 레이아웃 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">웹 애플리케이션 레이아웃</Text>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
          <Frame height="400px" display="flex" direction="column">\r
            {/* 헤더 */}\r
            <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor">\r
              <Frame padding="md" display="flex" justify="space-between" align="center">\r
                <Text variant="heading-2" weight="bold">Logo</Text>\r
                <Frame display="flex" gap="md" align="center">\r
                  <Text variant="body-2">Menu</Text>\r
                  <Text variant="body-2">Profile</Text>\r
                </Frame>\r
              </Frame>\r
            </Surface>\r
            \r
            {/* 메인 컨텐츠 영역 */}\r
            <Frame display="flex" flex="1">\r
              {/* 사이드바 */}\r
              <Surface background="secondary-system01-2-rest" borderColor="secondary-system01-2-rest" borderStyle="solid" borderWidth="thin">\r
                <Frame width="200px" padding="lg" display="flex" direction="column" gap="sm">\r
                  <Text variant="label-1" weight="medium">Navigation</Text>\r
                  <Frame display="flex" direction="column" gap="xs">\r
                    <Surface borderRadius="button-sm">\r
                      <Frame paddingY="xs" paddingX="sm">\r
                        <Text variant="caption-1">Dashboard</Text>\r
                      </Frame>\r
                    </Surface>\r
                    <Surface borderRadius="button-sm">\r
                      <Frame paddingY="xs" paddingX="sm">\r
                        <Text variant="caption-1">Projects</Text>\r
                      </Frame>\r
                    </Surface>\r
                    <Surface borderRadius="button-sm">\r
                      <Frame paddingY="xs" paddingX="sm">\r
                        <Text variant="caption-1">Settings</Text>\r
                      </Frame>\r
                    </Surface>\r
                  </Frame>\r
                </Frame>\r
              </Surface>\r
              \r
              {/* 메인 컨텐츠 */}\r
              <Frame flex="1" padding="xl" display="flex" direction="column" gap="lg">\r
                <Text variant="hero-1" weight="medium">대시보드</Text>\r
                \r
                {/* 카드 그리드 */}\r
                <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="lg">\r
                  {[{
                  title: '총 사용자',
                  value: '1,234',
                  variant: 'primary'
                }, {
                  title: '활성 프로젝트',
                  value: '56',
                  variant: 'secondary'
                }, {
                  title: '완료된 작업',
                  value: '89%',
                  variant: 'success'
                }, {
                  title: '수익',
                  value: '$12,345',
                  variant: 'warning'
                }].map((card, index) => <Surface key={index} background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
                      <Frame padding="lg" display="flex" direction="column" gap="sm">\r
                        <Surface background={card.variant === 'primary' ? 'primary-system01-1-rest' : card.variant === 'secondary' ? 'secondary-system01-2-rest' : card.variant === 'success' ? 'cta-system01-1-rest' : 'secondary-system01-3-rest'} foreground={card.variant === 'primary' ? 'primary-system01-oncolor' : card.variant === 'success' ? 'cta-system01-oncolor' : undefined}>\r
                          <Frame padding="sm">\r
                            <Text variant="caption-1">{card.title}</Text>\r
                            <Text variant="heading-1" weight="bold">{card.value}</Text>\r
                          </Frame>\r
                        </Surface>\r
                      </Frame>\r
                    </Surface>)}\r
                </Frame>\r
              </Frame>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
\r
      {/* 모바일 카드 리스트 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">모바일 카드 리스트</Text>\r
        \r
        <Frame display="flex" direction="column" gap="sm" maxWidth="400px">\r
          {[{
          name: '김철수',
          role: 'Frontend Developer',
          avatar: '👨‍💻'
        }, {
          name: '이영희',
          role: 'UX Designer',
          avatar: '👩‍🎨'
        }, {
          name: '박민수',
          role: 'Backend Developer',
          avatar: '👨‍💼'
        }].map((person, index) => <Surface key={index} background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="lg" display="flex" gap="md" align="center">\r
                {/* 아바타 */}\r
                <Surface background="secondary-system01-2-rest" borderRadius="circular">\r
                  <Frame width="48px" height="48px" display="flex" justify="center" align="center" style={{
                fontSize: '24px'
              }}>\r
                    {person.avatar}\r
                  </Frame>\r
                </Surface>\r
                \r
                {/* 정보 */}\r
                <Frame display="flex" direction="column" gap="xs" flex="1">\r
                  <Text variant="body-1" weight="medium">{person.name}</Text>\r
                  <Text variant="caption-1">{person.role}</Text>\r
                </Frame>\r
                \r
                {/* 액션 버튼 */}\r
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-sm">\r
                  <Frame paddingY="xs" paddingX="sm">\r
                    <Text variant="caption-1" weight="medium">연락</Text>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 복합 레이아웃 (sticky 헤더 + 스크롤 컨텐츠) */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">스크롤 섹션 (Sticky Header)</Text>\r
        \r
        <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
          <Frame height="300px" display="flex" direction="column" overflow="hidden">\r
            {/* Sticky 헤더 */}\r
            <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor">\r
              <Frame padding="md" position="sticky" top="0" zIndex={10}>\r
                <Text variant="heading-3" weight="medium">뉴스 피드</Text>\r
              </Frame>\r
            </Surface>\r
            \r
            {/* 스크롤 가능한 컨텐츠 */}\r
            <Frame flex="1" overflowY="scroll" padding="md" display="flex" direction="column" gap="sm">\r
              {Array.from({
              length: 10
            }, (_, i) => <Surface key={i} background="secondary-system01-2-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
                  <Frame padding="md" display="flex" direction="column" gap="xs">\r
                    <Text variant="body-1" weight="medium">뉴스 제목 {i + 1}</Text>\r
                    <Text variant="caption-1">뉴스 내용이 여기에 표시됩니다...</Text>\r
                    <Frame display="flex" justify="space-between" align="center" marginTop="xs">\r
                      <Text variant="caption-2">5분 전</Text>\r
                      <Frame display="flex" gap="sm">\r
                        <Text variant="caption-2">좋아요 {12 + i}</Text>\r
                        <Text variant="caption-2">댓글 {3 + i}</Text>\r
                      </Frame>\r
                    </Frame>\r
                  </Frame>\r
                </Surface>)}\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>\r
    </Frame>
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var H,L,Z;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '반응형 카드 그리드',
  render: () => <Frame display="grid" gridTemplateColumns={{
    mobile: "1fr",
    // 모바일: 1열
    tablet: "1fr 1fr",
    // 태블릿: 2열  
    desktop: "1fr 1fr 1fr" // 데스크톱: 3열
  }} gap="md" padding="lg" style={{
    backgroundColor: '#f5f5f5',
    minHeight: '400px'
  }}>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 1\r
      </div>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 2\r
      </div>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 3\r
      </div>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 4\r
      </div>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 5\r
      </div>\r
      <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      textAlign: 'center'
    }}>\r
        카드 6\r
      </div>\r
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: \`
### 반응형 카드 그리드 예시

실제 사용자님이 원했던 기능입니다:
- **모바일**: 카드가 화면 너비에 꽉 차게 1열로 배치
- **태블릿**: 카드가 2열로 배치되면서 각각 50% 너비
- **데스크톱**: 카드가 3열로 배치되면서 각각 33.3% 너비

브라우저 개발자 도구에서 화면 크기를 조정하면서 테스트해보세요!

\\\`\\\`\\\`tsx
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",           // 모바일: 1열
    tablet: "1fr 1fr",       // 태블릿: 2열  
    desktop: "1fr 1fr 1fr"   // 데스크톱: 3열
  }}
  gap="md"
>
  {cards.map(card => <Card key={card.id} {...card} />)}
</Frame>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(Z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var M,J,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '반응형 Flex 레이아웃',
  render: () => <Frame display="flex" direction={{
    mobile: "column",
    // 모바일: 세로 배치
    desktop: "row" // 데스크톱: 가로 배치
  }} gap={{
    mobile: "sm",
    // 모바일: 작은 간격
    desktop: "lg" // 데스크톱: 큰 간격
  }} padding="lg" style={{
    backgroundColor: '#f0f0f0',
    minHeight: '300px'
  }}>\r
      <div style={{
      backgroundColor: '#007bff',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      flex: 1,
      textAlign: 'center'
    }}>\r
        사이드바\r
      </div>\r
      <div style={{
      backgroundColor: '#28a745',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      flex: 3,
      textAlign: 'center'
    }}>\r
        메인 콘텐츠\r
      </div>\r
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: \`
### 반응형 Flex 레이아웃 예시

- **모바일**: 세로 배치 (column)
- **데스크톱**: 가로 배치 (row)

\\\`\\\`\\\`tsx
<Frame
  display="flex"
  direction={{
    mobile: "column",     // 모바일: 세로 배치
    desktop: "row"        // 데스크톱: 가로 배치
  }}
  gap={{
    mobile: "sm",         // 모바일: 작은 간격
    desktop: "lg"         // 데스크톱: 큰 간격
  }}
>
  <div>사이드바</div>
  <div>메인 콘텐츠</div>
</Frame>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(E=(J=y.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var N,_,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '🎯 실제 반응형 카드 그리드 (System-01 Card)',
  parameters: {
    docs: {
      description: {
        story: \`
**실제 Card 컴포넌트를 사용한 반응형 Grid 예시**

- **모바일 (767px 이하)**: 카드가 1열로 전체 너비 차지
- **태블릿 (768px~1023px)**: 카드가 2열로 배치
- **데스크톱 (1024px 이상)**: 카드가 3열로 배치

**브라우저 크기를 조절해서 반응형 동작을 확인해보세요!**

\\\`\\\`\\\`tsx
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",           // 모바일: 1열
    tablet: "1fr 1fr",       // 태블릿: 2열
    desktop: "1fr 1fr 1fr"   // 데스크톱: 3열
  }}
  gap="lg"
  padding="lg"
>
  {cardData.map(card => (
    <Card 
      key={card.id}
      title={card.title}
      description={card.description}
      variant={card.variant}
    />
  ))}
</Frame>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => {
    // 샘플 카드 데이터
    const cardData = [{
      id: 1,
      title: "반응형 카드 1",
      description: "모바일에서는 전체 너비로, 데스크톱에서는 3분의 1 너비로 자동 조정됩니다.",
      variant: "transparent" as const
    }, {
      id: 2,
      title: "반응형 카드 2",
      description: "Frame의 gridTemplateColumns 속성으로 브레이크포인트별 열 수를 제어합니다.",
      variant: "outlined" as const
    }, {
      id: 3,
      title: "반응형 카드 3",
      description: "Card 컴포넌트의 maxWidth 제한이 제거되어 Grid에 맞게 확장됩니다.",
      variant: "filled" as const
    }, {
      id: 4,
      title: "반응형 카드 4",
      description: "브라우저 창 크기를 조절해서 1열 → 2열 → 3열 변화를 확인해보세요.",
      variant: "transparent" as const
    }, {
      id: 5,
      title: "반응형 카드 5",
      description: "모든 카드가 동일한 높이를 유지하며 Grid에 정렬됩니다.",
      variant: "outlined" as const
    }, {
      id: 6,
      title: "반응형 카드 6",
      description: "이제 실제 프로젝트에서 이런 방식으로 반응형 레이아웃을 구현할 수 있습니다!",
      variant: "filled" as const
    }];
    return <Frame display="flex" direction="column" gap="xl" padding="lg">\r
        \r
        {/* 제목과 설명 */}\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="heading-2" weight="bold">🎯 실제 반응형 카드 그리드</Text>\r
          <Text variant="body-1">\r
            브라우저 창 크기를 조절해서 <strong>모바일(1열) → 태블릿(2열) → 데스크톱(3열)</strong> 변화를 확인해보세요!\r
          </Text>\r
          \r
          {/* 브레이크포인트 안내 */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
            <Frame padding="md" display="flex" direction="column" gap="sm">\r
              <Text variant="caption-1" weight="medium">📱 브레이크포인트 안내:</Text>\r
              <Frame display="flex" direction="column" gap="xs">\r
                <Text variant="caption-2">• 모바일 (~767px): 1열 레이아웃</Text>\r
                <Text variant="caption-2">• 태블릿 (768px~1023px): 2열 레이아웃</Text>\r
                <Text variant="caption-2">• 데스크톱 (1024px+): 3열 레이아웃</Text>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
\r
        {/* 실제 반응형 카드 그리드 */}\r
        <Frame display="grid" gridTemplateColumns={{
        mobile: "1fr",
        // 모바일: 1열 (카드가 전체 너비)
        tablet: "1fr 1fr",
        // 태블릿: 2열 (카드가 50% 너비)
        desktop: "1fr 1fr 1fr" // 데스크톱: 3열 (카드가 33.3% 너비)
      }} gap="lg" style={{
        backgroundColor: 'var(--foundation-foundation-color-grey-light-98)',
        borderRadius: 'var(--foundation-foundation-radius-80)',
        padding: 'var(--foundation-foundation-spacing-200)'
      }}>\r
          {cardData.map(card => <Card key={card.id} title={card.title} description={card.description} variant={card.variant} />)}\r
        </Frame>\r
\r
        {/* 추가 설명 */}\r
        <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="md">\r
          <Frame padding="lg" display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">✅ 완성된 기능</Text>\r
            <Frame display="flex" direction="column" gap="xs">\r
              <Text variant="caption-1">• Frame 컴포넌트의 반응형 Grid 지원</Text>\r
              <Text variant="caption-1">• Card 컴포넌트의 maxWidth 제한 제거</Text>\r
              <Text variant="caption-1">• 브레이크포인트별 자동 크기 조정</Text>\r
              <Text variant="caption-1">• 실제 프로젝트에서 바로 사용 가능</Text>\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
      </Frame>;
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const ar=["Playground","DisplayTypes","FlexboxProperties","GridLayouts","SpacingTokens","PositionTypes","CompoundComponentExample","ResponsiveCardGrid","ResponsiveFlexLayout","ResponsiveCardGridReal"];export{x as CompoundComponentExample,o as DisplayTypes,l as FlexboxProperties,m as GridLayouts,t as Playground,p as PositionTypes,g as ResponsiveCardGrid,u as ResponsiveCardGridReal,y as ResponsiveFlexLayout,c as SpacingTokens,ar as __namedExportsOrder,er as default};

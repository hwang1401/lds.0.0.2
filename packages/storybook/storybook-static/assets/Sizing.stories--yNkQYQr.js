import{j as e}from"./react-vendor-BFNgaz96.js";import{a as n,F as r,T as i,S as t,I as d}from"./index.esm-WYP67xav.js";const _={title:"Shared/Primitives/Sizing",component:n,parameters:{componentSubtitle:"크기 제어 프리미티브 - 각 props별 시각화",docs:{description:{component:`
Sizing은 CSS 크기 속성만을 담당하는 순수한 프리미티브입니다.

## 핵심 특징
- **순수 크기 제어**: width, height, min/max 크기, aspect ratio 관리
- **시멘틱 높이 토큰**: 높이는 시멘틱 토큰 기반으로 일관성 유지
- **객체 제어**: 이미지/비디오의 objectFit, objectPosition 제어
- **반응형 지원**: 모든 속성이 반응형 지원

## Frame과의 차이점
- **Sizing**: 순수 크기 속성 (width, height, min/max, aspect ratio)
- **Frame**: 레이아웃 속성 (display, position, flexbox, grid, spacing)

## 사용 패턴
\`\`\`tsx
// 기본 크기 설정
<Sizing width="100%" height="md">
  <img src="..." />
</Sizing>

// 이미지 컨테이너
<Sizing width="300px" height="200px" objectFit="cover">
  <img src="..." />
</Sizing>

// 가로세로 비율 고정
<Sizing width="100%" aspectRatio="16/9">
  <video controls />
</Sizing>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{as:{description:"HTML 요소 타입",control:"select",options:["div","section","article","aside","nav","header","footer","main","span"]},width:{description:"너비 (단위 포함한 문자열 또는 숫자)",control:"text"},height:{description:"높이 (시멘틱 토큰 또는 단위 포함한 문자열)",control:"select",options:["xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"]},minWidth:{description:"최소 너비",control:"text"},minHeight:{description:"최소 높이",control:"text"},maxWidth:{description:"최대 너비",control:"text"},maxHeight:{description:"최대 높이",control:"text"},aspectRatio:{description:"가로세로 비율",control:"text"},objectFit:{description:"객체 맞춤 방식",control:"select",options:["fill","contain","cover","none","scale-down"]},objectPosition:{description:"객체 위치",control:"text"},boxSizing:{description:"박스 모델",control:"select",options:["content-box","border-box"]}}},o=({label:a="Box",variant:s="primary",size:c="md"})=>{const f={primary:"primary-system01-1-rest",secondary:"secondary-system01-2-rest",success:"cta-system01-1-rest",warning:"secondary-system01-3-rest",error:"secondary-system01-1-rest",info:"primary-system01-2-rest"},G=s==="primary"||s==="success";return e.jsx(t,{background:f[s],foreground:G?`${s==="primary"?"primary":"cta"}-system01-oncolor`:void 0,borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",borderRadius:"sm",fill:!0,children:e.jsx(r,{padding:c==="sm"?"xs":c==="lg"?"md":"sm",display:"flex",justify:"center",align:"center",fill:!0,minHeight:"sm",children:e.jsx(i,{variant:"caption-1",weight:"medium",textAlign:"center",children:a})})})},l={args:{width:"200px",height:"md",children:e.jsx(o,{label:"Playground"})}},m={name:"Width 시각화",parameters:{docs:{description:{story:"다양한 width 값들의 시각적 차이를 보여줍니다."}}},render:()=>e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"고정 너비 (Fixed Width)"}),e.jsx(r,{display:"flex",direction:"column",gap:"sm",children:["100px","200px","300px","400px"].map(a=>e.jsxs(r,{display:"flex",align:"center",gap:"md",children:[e.jsx(r,{minWidth:"80px",children:e.jsx(i,{variant:"caption-1",weight:"medium",children:a})}),e.jsx(n,{width:a,height:"auto",minHeight:"40px",children:e.jsx(o,{label:a,variant:"primary",size:"md"})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"백분율 너비 (Percentage Width)"}),e.jsx(r,{display:"flex",direction:"column",gap:"sm",children:["25%","50%","75%","100%"].map(a=>e.jsxs(r,{display:"flex",align:"center",gap:"md",children:[e.jsx(r,{minWidth:"80px",children:e.jsx(i,{variant:"caption-1",weight:"medium",children:a})}),e.jsx(r,{width:"400px",children:e.jsx(n,{width:a,height:"auto",minHeight:"40px",children:e.jsx(o,{label:a,variant:"primary",size:"md"})})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"다양한 CSS 단위"}),e.jsx(r,{display:"flex",direction:"column",gap:"sm",children:[{value:"10rem",label:"10rem"},{value:"20em",label:"20em"},{value:"fit-content",label:"fit-content"},{value:"max-content",label:"max-content"}].map(({value:a,label:s})=>e.jsxs(r,{display:"flex",align:"center",gap:"md",children:[e.jsx(r,{minWidth:"80px",children:e.jsx(i,{variant:"caption-1",weight:"medium",children:s})}),e.jsx(n,{width:a,height:"auto",minHeight:"40px",children:e.jsx(o,{label:s,variant:"primary",size:"md"})})]},a))})]})]})},p={name:"Height 토큰 시각화",parameters:{docs:{description:{story:"시멘틱 높이 토큰들의 시각적 차이를 보여줍니다."}}},render:()=>e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"시멘틱 높이 토큰"}),e.jsx(r,{display:"flex",gap:"sm",wrap:"wrap",align:"flex-end",children:["xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"].map(a=>e.jsxs(r,{display:"flex",direction:"column",gap:"xs",align:"center",children:[e.jsx(n,{width:"60px",height:a,children:e.jsx(t,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",borderRadius:"sm",fill:!0})}),e.jsx(i,{variant:"caption-2",textAlign:"center",children:a})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"커스텀 높이"}),e.jsx(r,{display:"flex",gap:"md",wrap:"wrap",align:"flex-end",children:["50px","100px","150px","200px"].map(a=>e.jsxs(r,{display:"flex",direction:"column",gap:"xs",align:"center",children:[e.jsx(n,{width:"60px",height:a,children:e.jsx(t,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",borderRadius:"sm",fill:!0})}),e.jsx(i,{variant:"caption-2",textAlign:"center",children:a})]},a))})]})]})},x={name:"Min/Max 제약 조건",parameters:{docs:{description:{story:"최소/최대 크기 제약 조건의 동작을 보여줍니다."}}},render:()=>e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"MinWidth (최소 너비)"}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",children:"컨테이너가 줄어들어도 최소 너비 유지"}),e.jsx(t,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{width:"150px",padding:"sm",children:e.jsx(n,{width:"100%",minWidth:"200px",height:"60px",children:e.jsx(o,{label:"minWidth: 200px",variant:"success",size:"md"})})})})]})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"MaxWidth (최대 너비)"}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",children:"컨테이너가 커져도 최대 너비 제한"}),e.jsx(t,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{width:"400px",padding:"sm",children:e.jsx(n,{width:"100%",maxWidth:"250px",height:"60px",children:e.jsx(o,{label:"maxWidth: 250px",variant:"warning",size:"md"})})})})]})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"MinHeight & MaxHeight"}),e.jsxs(r,{display:"flex",gap:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"MinHeight"}),e.jsx(i,{variant:"caption-2",children:"컨테이너가 작아져도 최소 높이 유지"}),e.jsx(t,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{height:"120px",padding:"sm",overflow:"visible",children:e.jsx(n,{width:"fit-content",height:"100%",minHeight:"80px",children:e.jsx(o,{label:"최소 80px",variant:"info",size:"sm"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:"컨테이너 40px → minHeight 80px로 확장"})})})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"MaxHeight"}),e.jsx(i,{variant:"caption-2",children:"컨테이너가 커져도 최대 높이 제한"}),e.jsx(t,{borderWidth:"thin",borderStyle:"dashed",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{height:"120px",padding:"sm",children:e.jsx(n,{width:"140px",height:"100%",maxHeight:"60px",children:e.jsx(o,{label:"최대 60px",variant:"error",size:"sm"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:"컨테이너 120px → maxHeight 60px로 제한"})})})]})]})]})]})},g={name:"AspectRatio 시각화",parameters:{docs:{description:{story:"가로세로 비율 고정의 시각적 효과를 보여줍니다."}}},render:()=>e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"일반적인 가로세로 비율"}),e.jsx(r,{display:"flex",gap:"lg",wrap:"wrap",children:[{ratio:"1/1",name:"정사각형"},{ratio:"4/3",name:"일반 사진"},{ratio:"16/9",name:"와이드스크린"},{ratio:"3/2",name:"35mm 필름"}].map(({ratio:a,name:s})=>e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(n,{width:"200px",aspectRatio:a,children:e.jsx(o,{label:a,variant:"primary",size:"md"})}),e.jsxs(i,{variant:"caption-1",textAlign:"center",children:[a," (",s,")"]})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"반응형 비율 변화"}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",children:"너비가 변해도 비율은 유지됩니다"}),e.jsx(r,{display:"flex",gap:"md",children:["100px","150px","200px","250px"].map(a=>e.jsx(n,{width:a,aspectRatio:"4/3",children:e.jsx(o,{label:a,variant:"primary",size:"md"})},a))})]})]})]})},h={name:"ObjectFit 시각화",parameters:{docs:{description:{story:"이미지/비디오의 objectFit 속성 효과를 보여줍니다."}}},render:()=>e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"LineIconsStarFilledIcon",size:"md"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"기본 ObjectFit 옵션들"})]}),e.jsx(i,{variant:"body-2",children:"정사각형 컨테이너(200×200px)에 가로로 긴 이미지(400×200px)를 넣었을 때의 차이"}),e.jsx(r,{display:"flex",gap:"lg",wrap:"wrap",children:["fill","contain","cover","none","scaleDown"].map(a=>e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{width:"200px",height:"200px",overflow:"hidden",children:e.jsx(n,{width:"200px",height:"200px",objectFit:a,children:e.jsx("img",{src:"https://picsum.photos/id/1018/400/200",alt:"Mountain landscape",className:"fill"})})})}),e.jsx(i,{variant:"caption-1",textAlign:"center",weight:"medium",children:a==="scaleDown"?"scale-down":a}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsxs(i,{variant:"caption-2",textAlign:"center",children:[a==="fill"&&"강제로 늘려서 채움",a==="contain"&&"비율 유지하며 전체 보임",a==="cover"&&"비율 유지하며 꽉 채움",a==="none"&&"원본 크기 유지",a==="scaleDown"&&"none과 contain 중 작은 것"]})})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"LineIconsStarFilledIcon",size:"md"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"새로운 직관적인 별칭들"})]}),e.jsx(i,{variant:"body-2",children:"더 직관적인 이름으로 동일한 효과를 얻을 수 있습니다."}),e.jsx(r,{display:"flex",gap:"lg",wrap:"wrap",children:[{name:"stretch",iconName:"ExpandIcon",desc:"늘려서 채움",original:"fill"},{name:"fitInside",iconName:"MinimizeIcon",desc:"안쪽에 맞춤",original:"contain"},{name:"fillArea",iconName:"PinIcon",desc:"영역 채움",original:"cover"},{name:"crop",iconName:"CropIcon",desc:"자르기",original:"cover"}].map(({name:a,iconName:s,desc:c,original:f})=>e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"cta-system01-2-rest",background:"cta-system01-2-rest",children:e.jsx(r,{width:"200px",height:"200px",overflow:"hidden",children:e.jsx(n,{width:"200px",height:"200px",objectFit:a,children:e.jsx("img",{src:"https://picsum.photos/id/1015/400/200",alt:"Beach landscape",className:"fill"})})})}),e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:s,size:"sm"}),e.jsx(i,{variant:"caption-1",textAlign:"center",weight:"medium",children:a})]}),e.jsx(t,{foreground:"cta-system01-1-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:c})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsxs(i,{variant:"caption-2",textAlign:"center",children:["(",f,"과 동일)"]})})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"MaximizeIcon",size:"md"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"극단적인 비율 차이"})]}),e.jsx(i,{variant:"body-2",children:"세로로 긴 컨테이너(120×300px)에 가로로 긴 이미지(400×200px)를 넣었을 때"}),e.jsx(r,{display:"flex",gap:"lg",wrap:"wrap",children:[{name:"fitInside",desc:"전체 보임"},{name:"crop",desc:"자르기"},{name:"stretch",desc:"늘림"}].map(({name:a,desc:s})=>e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{width:"120px",height:"300px",overflow:"hidden",children:e.jsx(n,{width:"120px",height:"300px",objectFit:a,children:e.jsx("img",{src:"https://picsum.photos/id/1016/400/200",alt:"City panorama",className:"fill"})})})}),e.jsx(i,{variant:"caption-1",textAlign:"center",weight:"medium",children:a}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:s})})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"BriefcaseIcon",size:"md"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"실제 사용 예시"})]}),e.jsxs(r,{display:"flex",gap:"xl",wrap:"wrap",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"아바타 (정사각형 + crop)"}),e.jsx(t,{borderRadius:"circular",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"80px",height:"80px",objectFit:"crop",children:e.jsx("img",{src:"https://picsum.photos/id/64/300/400",alt:"Portrait photo",className:"fill"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsxs(r,{padding:"xs",children:[e.jsx(i,{variant:"caption-2",textAlign:"center",children:"세로가 긴 사진도"}),e.jsx(i,{variant:"caption-2",textAlign:"center",children:"정사각형으로 잘림"})]})})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"배너 (16:9 + crop)"}),e.jsx(t,{borderRadius:"md",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"240px",height:"135px",objectFit:"crop",children:e.jsx("img",{src:"https://picsum.photos/id/1036/400/600",alt:"Nature vertical",className:"fill"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsxs(r,{padding:"xs",children:[e.jsx(i,{variant:"caption-2",textAlign:"center",children:"세로가 긴 사진을"}),e.jsx(i,{variant:"caption-2",textAlign:"center",children:"가로 배너에 맞춤"})]})})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"썸네일 (fitInside)"}),e.jsx(t,{borderRadius:"md",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"150px",height:"150px",objectFit:"fitInside",children:e.jsx("img",{src:"https://picsum.photos/id/1043/600/300",alt:"Wide panorama",className:"fill"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsxs(r,{padding:"xs",children:[e.jsx(i,{variant:"caption-2",textAlign:"center",children:"가로가 긴 사진을"}),e.jsx(i,{variant:"caption-2",textAlign:"center",children:"전체가 보이게 축소"})]})})]})]})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"CropIcon",size:"md"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"Crop + Position 조합"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",align:"center",children:[e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:"ImageIcon",size:"sm"}),e.jsx(i,{variant:"body-2",weight:"medium",children:"원본 이미지 (800×600px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(t,{borderWidth:"thick",borderStyle:"solid",borderColor:"primary-system01-1-rest",background:"cta-system01-1-rest",borderRadius:"md",children:e.jsx(r,{padding:"xs",children:e.jsx("img",{src:"https://picsum.photos/id/1025/800/600",alt:"Original large landscape",className:"fill"})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:"이 큰 이미지를 작은 컨테이너(120×160px)에 crop으로 넣어 자릅니다"})})})]})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:"SearchIcon",size:"sm"}),e.jsx(i,{variant:"body-2",weight:"medium",children:"crop + position 조합 비교"})]}),e.jsx(r,{display:"flex",gap:"md",wrap:"wrap",justify:"center",children:[{position:"cropCenter",label:"cropCenter",desc:"중앙 기준으로 자르기"},{position:"cropTop",label:"cropTop",desc:"상단 기준으로 자르기"},{position:"cropBottom",label:"cropBottom",desc:"하단 기준으로 자르기"},{position:"cropLeft",label:"cropLeft",desc:"좌측 기준으로 자르기"},{position:"cropRight",label:"cropRight",desc:"우측 기준으로 자르기"}].map(({position:a,label:s,desc:c})=>e.jsxs(r,{display:"flex",direction:"column",gap:"xs",align:"center",children:[e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"primary-system01-1-rest",background:"cta-system01-1-rest",borderRadius:"sm",children:e.jsx(r,{padding:"xs",children:e.jsx(n,{width:"120px",height:"160px",objectFit:"crop",objectPosition:a,children:e.jsx("img",{src:"https://picsum.photos/id/1025/800/600",alt:`${a} position demo`,className:"fill"})})})}),e.jsx(t,{foreground:"cta-system01-1-rest",children:e.jsx(i,{variant:"caption-1",textAlign:"center",weight:"medium",children:s})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:c})})]},a))})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:"LineIconsCornerUpLeftIcon",size:"sm"}),e.jsx(i,{variant:"body-2",weight:"medium",children:"코너 crop Position들"})]}),e.jsx(r,{display:"flex",gap:"md",wrap:"wrap",justify:"center",children:[{position:"cropTopLeft",label:"cropTopLeft",desc:"좌상단 기준으로 자르기"},{position:"cropTopRight",label:"cropTopRight",desc:"우상단 기준으로 자르기"},{position:"cropBottomLeft",label:"cropBottomLeft",desc:"좌하단 기준으로 자르기"},{position:"cropBottomRight",label:"cropBottomRight",desc:"우하단 기준으로 자르기"}].map(({position:a,label:s,desc:c})=>e.jsxs(r,{display:"flex",direction:"column",gap:"xs",align:"center",children:[e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"primary-system01-1-rest",background:"cta-system01-1-rest",borderRadius:"sm",children:e.jsx(r,{padding:"xs",children:e.jsx(n,{width:"120px",height:"160px",objectFit:"crop",objectPosition:a,children:e.jsx("img",{src:"https://picsum.photos/id/1025/800/600",alt:`${a} position demo`,className:"fill"})})})}),e.jsx(t,{foreground:"cta-system01-1-rest",children:e.jsx(i,{variant:"caption-1",textAlign:"center",weight:"medium",children:s})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(i,{variant:"caption-2",textAlign:"center",children:c})})]},a))})]}),e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:"InfoIcon",size:"sm"}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",weight:"regular",children:"모든 값이 시멘틱 토큰으로 관리되어 일관성을 보장합니다."})})})]}),e.jsxs(r,{display:"flex",gap:"xs",align:"center",children:[e.jsx(d,{name:"LineIconsStarFilledIcon",size:"sm"}),e.jsx(t,{foreground:"cta-system01-1-rest",children:e.jsx(r,{padding:"xs",children:e.jsx(i,{variant:"caption-2",weight:"regular",children:'"crop" + "cropCenter" 같은 조합으로 더 직관적으로 사용할 수 있습니다.'})})})]})]})]})},y={name:"BoxSizing 시각화",parameters:{docs:{description:{story:"박스 모델의 차이점을 보여줍니다."}}},render:()=>e.jsx(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"heading-3",weight:"medium",children:"BoxSizing 비교"}),e.jsxs(r,{display:"flex",gap:"xl",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"content-box (기본값)"}),e.jsx(n,{width:"200px",height:"100px",boxSizing:"contentBox",children:e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",background:"secondary-system01-1-rest",children:e.jsx(r,{padding:"lg",children:e.jsx(o,{label:"content",variant:"primary",size:"md"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsxs(i,{variant:"caption-2",textAlign:"center",children:["전체 크기: 260px × 160px",e.jsx("br",{}),"(content + padding + border)"]})})})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"border-box"}),e.jsx(n,{width:"200px",height:"100px",boxSizing:"borderBox",children:e.jsx(t,{borderWidth:"thin",borderStyle:"solid",borderColor:"primary-system01-1-rest",background:"primary-system01-1-rest",children:e.jsx(r,{padding:"lg",children:e.jsx(o,{label:"content",variant:"primary",size:"md"})})})}),e.jsx(t,{foreground:"secondary-system01-2-rest",children:e.jsx(r,{padding:"xs",children:e.jsxs(i,{variant:"caption-2",textAlign:"center",children:["전체 크기: 200px × 100px",e.jsx("br",{}),"(padding과 border 포함)"]})})})]})]})]})})},u={name:"컴파운드 컴포넌트 조합 예시",parameters:{docs:{description:{story:"Sizing을 다른 프리미티브와 조합하여 실제 컴포넌트를 구현한 예시입니다."}}},render:()=>e.jsx(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:e.jsxs(r,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(r,{display:"flex",gap:"sm",align:"center",children:[e.jsx(d,{name:"LineIconsStarFilledIcon",size:"lg"}),e.jsx(i,{variant:"heading-3",weight:"medium",children:"실제 사용 사례: 다양한 Sizing 기능 조합"})]}),e.jsx(i,{variant:"body-2",children:"Sizing의 핵심 기능들을 실제 UI 컴포넌트에서 어떻게 활용하는지 보여줍니다"}),e.jsxs(r,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"lg",children:[e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{display:"flex",direction:"column",children:[e.jsx(t,{borderRadius:"md",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"100%",aspectRatio:"16/9",objectFit:"cover",children:e.jsx("img",{src:"https://picsum.photos/id/111/640/360",alt:"Video thumbnail",className:"fill"})})})}),e.jsxs(r,{padding:"md",display:"flex",direction:"column",gap:"xs",children:[e.jsx(i,{variant:"body-1",weight:"medium",children:"비디오 제목"}),e.jsx(i,{variant:"caption-1",children:"AspectRatio + ObjectFit 활용"})]})]})}),e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{padding:"lg",display:"flex",gap:"md",align:"center",children:[e.jsx(t,{borderRadius:"circular",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"60px",aspectRatio:"1/1",objectFit:"cover",children:e.jsx("img",{src:"https://picsum.photos/id/91/120/120",alt:"Avatar",className:"fill"})})})}),e.jsxs(r,{flex:"1",display:"flex",direction:"column",gap:"xs",minWidth:"120px",maxWidth:"200px",children:[e.jsx(i,{variant:"body-1",weight:"medium",children:"사용자 이름"}),e.jsx(i,{variant:"caption-1",children:"minWidth/maxWidth 제약"})]})]})}),e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{padding:"md",display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"이미지 갤러리"}),e.jsxs(r,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"xs",children:[e.jsx(t,{borderRadius:"sm",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"100%",height:"80px",objectFit:"cover",children:e.jsx("img",{src:"https://picsum.photos/id/1002/300/200",alt:"Gallery nature",className:"fill"})})})}),e.jsx(t,{borderRadius:"sm",children:e.jsx(r,{overflow:"hidden",children:e.jsx(n,{width:"100%",height:"80px",objectFit:"contain",children:e.jsx("img",{src:"https://picsum.photos/id/1003/200/300",alt:"Gallery vertical",className:"fill"})})})})]}),e.jsx(i,{variant:"caption-2",children:"좌: cover, 우: contain"})]})}),e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{display:"flex",direction:"column",children:[e.jsx(n,{width:"100%",height:"xxxl",objectFit:"cover",children:e.jsx(t,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"md",fill:!0,children:e.jsx(r,{width:"100%",height:"100%",display:"flex",justify:"center",align:"center",children:e.jsx(i,{variant:"heading-2",weight:"bold",color:"onColor-primary",children:"배너 영역"})})})}),e.jsx(r,{padding:"md",children:e.jsx(i,{variant:"caption-1",children:'height="xxxl" 토큰 사용'})})]})}),e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{padding:"md",display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"아이콘 버튼 그리드"}),e.jsx(r,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"sm",children:[{icon:"HomeIcon",label:"홈"},{icon:"LineIconsPersonPersonIcon",label:"사용자"},{icon:"LineIconsSettingsSetting1Icon",label:"설정"},{icon:"LineIconsMessageCircleIcon",label:"메시지"},{icon:"HeartIcon",label:"좋아요"},{icon:"SearchIcon",label:"검색"}].map(({icon:a,label:s},c)=>e.jsx(n,{width:"100%",aspectRatio:"1/1",children:e.jsx(t,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"md",fill:!0,children:e.jsxs(r,{width:"100%",height:"100%",display:"flex",justify:"center",align:"center",direction:"column",gap:"xs",children:[e.jsx(d,{name:a,size:"md"}),e.jsx(i,{variant:"caption-2",textAlign:"center",color:"primary-system01-oncolor",children:s})]})})},c))}),e.jsx(i,{variant:"caption-2",children:'aspectRatio="1/1" 정사각형 유지'})]})}),e.jsx(t,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",boxShadow:"30",children:e.jsxs(r,{padding:"md",display:"flex",direction:"column",gap:"sm",children:[e.jsx(i,{variant:"body-2",weight:"medium",children:"차트 컨테이너"}),e.jsx(n,{width:"100%",minHeight:"120px",height:"auto",children:e.jsx(t,{background:"primary-system01-2-rest",foreground:"primary-system01-oncolor",borderWidth:"thin",borderStyle:"dashed",borderColor:"primary-system01-1-rest",borderRadius:"md",fill:!0,children:e.jsx(r,{width:"100%",height:"100%",display:"flex",justify:"center",align:"center",children:e.jsxs(r,{display:"flex",direction:"column",align:"center",gap:"xs",children:[e.jsx(d,{name:"LineIconsBarChart1Icon",size:"xxl"}),e.jsx(i,{variant:"caption-1",color:"primary-system01-oncolor",children:"차트 영역"})]})})})}),e.jsx(i,{variant:"caption-2",children:'minHeight="120px" 최소 높이 보장'})]})})]})]})})};var b,j,F;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: 'md',
    children: <SampleBox label="Playground" />
  }
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var S,w,v;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Width 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 width 값들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 고정 너비 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">고정 너비 (Fixed Width)</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          {['100px', '200px', '300px', '400px'].map(width => <Frame key={width} display="flex" align="center" gap="md">\r
              <Frame minWidth="80px">\r
                <Text variant="caption-1" weight="medium">{width}</Text>\r
              </Frame>\r
              <Sizing width={width} height="auto" minHeight="40px">\r
                <SampleBox label={width} variant="primary" size="md" />\r
              </Sizing>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 백분율 너비 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">백분율 너비 (Percentage Width)</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          {['25%', '50%', '75%', '100%'].map(width => <Frame key={width} display="flex" align="center" gap="md">\r
              <Frame minWidth="80px">\r
                <Text variant="caption-1" weight="medium">{width}</Text>\r
              </Frame>\r
              <Frame width="400px">\r
                <Sizing width={width} height="auto" minHeight="40px">\r
                  <SampleBox label={width} variant="primary" size="md" />\r
                </Sizing>\r
              </Frame>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* CSS 단위 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">다양한 CSS 단위</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          {[{
          value: '10rem',
          label: '10rem'
        }, {
          value: '20em',
          label: '20em'
        }, {
          value: 'fit-content',
          label: 'fit-content'
        }, {
          value: 'max-content',
          label: 'max-content'
        }].map(({
          value,
          label
        }) => <Frame key={value} display="flex" align="center" gap="md">\r
              <Frame minWidth="80px">\r
                <Text variant="caption-1" weight="medium">{label}</Text>\r
              </Frame>\r
              <Sizing width={value} height="auto" minHeight="40px">\r
                <SampleBox label={label} variant="primary" size="md" />\r
              </Sizing>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(v=(w=m.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var T,z,I;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Height 토큰 시각화',
  parameters: {
    docs: {
      description: {
        story: '시멘틱 높이 토큰들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 시멘틱 높이 토큰 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">시멘틱 높이 토큰</Text>\r
        <Frame display="flex" gap="sm" wrap="wrap" align="flex-end">\r
          {(['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as HeightValue[]).map(height => <Frame key={height} display="flex" direction="column" gap="xs" align="center">\r
              <Sizing width="60px" height={height}>\r
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" borderRadius="sm" fill />\r
              </Sizing>\r
              <Text variant="caption-2" textAlign="center">{height}</Text>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 커스텀 높이 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">커스텀 높이</Text>\r
        <Frame display="flex" gap="md" wrap="wrap" align="flex-end">\r
          {['50px', '100px', '150px', '200px'].map(height => <Frame key={height} display="flex" direction="column" gap="xs" align="center">\r
              <Sizing width="60px" height={height}>\r
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" borderRadius="sm" fill />\r
              </Sizing>\r
              <Text variant="caption-2" textAlign="center">{height}</Text>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,W,R;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Min/Max 제약 조건',
  parameters: {
    docs: {
      description: {
        story: '최소/최대 크기 제약 조건의 동작을 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* MinWidth 예시 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">MinWidth (최소 너비)</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2">컨테이너가 줄어들어도 최소 너비 유지</Text>\r
          <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
            <Frame width="150px" padding="sm">\r
              <Sizing width="100%" minWidth="200px" height="60px">\r
                <SampleBox label="minWidth: 200px" variant="success" size="md" />\r
              </Sizing>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* MaxWidth 예시 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">MaxWidth (최대 너비)</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2">컨테이너가 커져도 최대 너비 제한</Text>\r
          <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
            <Frame width="400px" padding="sm">\r
              <Sizing width="100%" maxWidth="250px" height="60px">\r
                <SampleBox label="maxWidth: 250px" variant="warning" size="md" />\r
              </Sizing>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* MinHeight & MaxHeight */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">MinHeight & MaxHeight</Text>\r
        <Frame display="flex" gap="lg">\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">MinHeight</Text>\r
            <Text variant="caption-2">컨테이너가 작아져도 최소 높이 유지</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame height="120px" padding="sm" overflow="visible">\r
                <Sizing width="fit-content" height="100%" minHeight="80px">\r
                  <SampleBox label="최소 80px" variant="info" size="sm" />\r
                </Sizing>\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">\r
                  컨테이너 40px → minHeight 80px로 확장\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2" weight="medium">MaxHeight</Text>\r
            <Text variant="caption-2">컨테이너가 커져도 최대 높이 제한</Text>\r
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
              <Frame height="120px" padding="sm">\r
                <Sizing width="140px" height="100%" maxHeight="60px">\r
                  <SampleBox label="최대 60px" variant="error" size="sm" />\r
                </Sizing>\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">\r
                  컨테이너 120px → maxHeight 60px로 제한\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(R=(W=x.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var k,A,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'AspectRatio 시각화',
  parameters: {
    docs: {
      description: {
        story: '가로세로 비율 고정의 시각적 효과를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 일반적인 비율들 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">일반적인 가로세로 비율</Text>\r
        <Frame display="flex" gap="lg" wrap="wrap">\r
          {[{
          ratio: '1/1',
          name: '정사각형'
        }, {
          ratio: '4/3',
          name: '일반 사진'
        }, {
          ratio: '16/9',
          name: '와이드스크린'
        }, {
          ratio: '3/2',
          name: '35mm 필름'
        }].map(({
          ratio,
          name
        }) => <Frame key={ratio} display="flex" direction="column" gap="sm" align="center">\r
              <Sizing width="200px" aspectRatio={ratio}>\r
                <SampleBox label={ratio} variant="primary" size="md" />\r
              </Sizing>\r
              <Text variant="caption-1" textAlign="center">{ratio} ({name})</Text>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 반응형 비율 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">반응형 비율 변화</Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2">너비가 변해도 비율은 유지됩니다</Text>\r
          <Frame display="flex" gap="md">\r
            {['100px', '150px', '200px', '250px'].map(width => <Sizing key={width} width={width} aspectRatio="4/3">\r
                <SampleBox label={width} variant="primary" size="md" />\r
              </Sizing>)}\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,N,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'ObjectFit 시각화',
  parameters: {
    docs: {
      description: {
        story: '이미지/비디오의 objectFit 속성 효과를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* ObjectFit 기본 옵션들 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="LineIconsStarFilledIcon" size="md" />\r
          <Text variant="heading-3" weight="medium">기본 ObjectFit 옵션들</Text>\r
        </Frame>\r
        <Text variant="body-2">정사각형 컨테이너(200×200px)에 가로로 긴 이미지(400×200px)를 넣었을 때의 차이</Text>\r
        <Frame display="flex" gap="lg" wrap="wrap">\r
          {(['fill', 'contain', 'cover', 'none', 'scaleDown'] as const).map(fit => <Frame key={fit} display="flex" direction="column" gap="sm" align="center">\r
              <Surface borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame width="200px" height="200px" overflow="hidden">\r
                  <Sizing width="200px" height="200px" objectFit={fit}>\r
                    <img src="https://picsum.photos/id/1018/400/200" alt="Mountain landscape" className="fill" />\r
                  </Sizing>\r
                </Frame>\r
              </Surface>\r
              <Text variant="caption-1" textAlign="center" weight="medium">{fit === 'scaleDown' ? 'scale-down' : fit}</Text>\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Frame padding="xs">\r
                  <Text variant="caption-2" textAlign="center">\r
                    {fit === 'fill' && '강제로 늘려서 채움'}\r
                    {fit === 'contain' && '비율 유지하며 전체 보임'}\r
                    {fit === 'cover' && '비율 유지하며 꽉 채움'}\r
                    {fit === 'none' && '원본 크기 유지'}\r
                    {fit === 'scaleDown' && 'none과 contain 중 작은 것'}\r
                  </Text>\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 새로운 직관적인 별칭들 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="LineIconsStarFilledIcon" size="md" />\r
          <Text variant="heading-3" weight="medium">새로운 직관적인 별칭들</Text>\r
        </Frame>\r
        <Text variant="body-2">더 직관적인 이름으로 동일한 효과를 얻을 수 있습니다.</Text>\r
        <Frame display="flex" gap="lg" wrap="wrap">\r
          {([{
          name: 'stretch',
          iconName: 'ExpandIcon',
          desc: '늘려서 채움',
          original: 'fill'
        }, {
          name: 'fitInside',
          iconName: 'MinimizeIcon',
          desc: '안쪽에 맞춤',
          original: 'contain'
        }, {
          name: 'fillArea',
          iconName: 'PinIcon',
          desc: '영역 채움',
          original: 'cover'
        }, {
          name: 'crop',
          iconName: 'CropIcon',
          desc: '자르기',
          original: 'cover'
        }] as const).map(({
          name,
          iconName,
          desc,
          original
        }) => <Frame key={name} display="flex" direction="column" gap="sm" align="center">\r
              <Surface borderWidth="thin" borderStyle="solid" borderColor="cta-system01-2-rest" background="cta-system01-2-rest">\r
                <Frame width="200px" height="200px" overflow="hidden">\r
                  <Sizing width="200px" height="200px" objectFit={name}>\r
                    <img src="https://picsum.photos/id/1015/400/200" alt="Beach landscape" className="fill" />\r
                  </Sizing>\r
                </Frame>\r
              </Surface>\r
              <Frame display="flex" gap="xs" align="center">\r
                <Icon name={iconName as any} size="sm" />\r
                <Text variant="caption-1" textAlign="center" weight="medium">{name}</Text>\r
              </Frame>\r
              <Surface foreground="cta-system01-1-rest">\r
                <Frame padding="xs">\r
                  <Text variant="caption-2" textAlign="center">{desc}</Text>\r
                </Frame>\r
              </Surface>\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Frame padding="xs">\r
                  <Text variant="caption-2" textAlign="center">({original}과 동일)</Text>\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 세로로 긴 컨테이너에 가로로 긴 이미지 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="MaximizeIcon" size="md" />\r
          <Text variant="heading-3" weight="medium">극단적인 비율 차이</Text>\r
        </Frame>\r
        <Text variant="body-2">세로로 긴 컨테이너(120×300px)에 가로로 긴 이미지(400×200px)를 넣었을 때</Text>\r
        <Frame display="flex" gap="lg" wrap="wrap">\r
          {([{
          name: 'fitInside',
          desc: '전체 보임'
        }, {
          name: 'crop',
          desc: '자르기'
        }, {
          name: 'stretch',
          desc: '늘림'
        }] as const).map(({
          name,
          desc
        }) => <Frame key={name} display="flex" direction="column" gap="sm" align="center">\r
              <Surface borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame width="120px" height="300px" overflow="hidden">\r
                  <Sizing width="120px" height="300px" objectFit={name}>\r
                    <img src="https://picsum.photos/id/1016/400/200" alt="City panorama" className="fill" />\r
                  </Sizing>\r
                </Frame>\r
              </Surface>\r
              <Text variant="caption-1" textAlign="center" weight="medium">{name}</Text>\r
              <Surface foreground="secondary-system01-2-rest">\r
                <Frame padding="xs">\r
                  <Text variant="caption-2" textAlign="center">{desc}</Text>\r
                </Frame>\r
              </Surface>\r
            </Frame>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 실제 사용 예시 - 아바타와 배너 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="BriefcaseIcon" size="md" />\r
          <Text variant="heading-3" weight="medium">실제 사용 예시</Text>\r
        </Frame>\r
        <Frame display="flex" gap="xl" wrap="wrap">\r
          \r
          {/* 아바타 예시 */}\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Text variant="body-2" weight="medium">아바타 (정사각형 + crop)</Text>\r
            <Surface borderRadius="circular">\r
              <Frame overflow="hidden">\r
                <Sizing width="80px" height="80px" objectFit="crop">\r
                  <img src="https://picsum.photos/id/64/300/400" alt="Portrait photo" className="fill" />\r
                </Sizing>\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">세로가 긴 사진도</Text>\r
                <Text variant="caption-2" textAlign="center">정사각형으로 잘림</Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* 배너 예시 */}\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Text variant="body-2" weight="medium">배너 (16:9 + crop)</Text>\r
            <Surface borderRadius="md">\r
              <Frame overflow="hidden">\r
                <Sizing width="240px" height="135px" objectFit="crop">\r
                  <img src="https://picsum.photos/id/1036/400/600" alt="Nature vertical" className="fill" />\r
                </Sizing>\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">세로가 긴 사진을</Text>\r
                <Text variant="caption-2" textAlign="center">가로 배너에 맞춤</Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          {/* 썸네일 예시 */}\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Text variant="body-2" weight="medium">썸네일 (fitInside)</Text>\r
            <Surface borderRadius="md">\r
              <Frame overflow="hidden">\r
                <Sizing width="150px" height="150px" objectFit="fitInside">\r
                  <img src="https://picsum.photos/id/1043/600/300" alt="Wide panorama" className="fill" />\r
                </Sizing>\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">가로가 긴 사진을</Text>\r
                <Text variant="caption-2" textAlign="center">전체가 보이게 축소</Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
\r
      {/* ObjectPosition과 조합 (crop 맥락) */}\r
      <Frame display="flex" direction="column" gap="lg">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="CropIcon" size="md" /> \r
          <Text variant="heading-3" weight="medium">Crop + Position 조합</Text>\r
        </Frame>\r
        \r
        {/* 원본 이미지 먼저 보여주기 */}\r
        <Frame display="flex" direction="column" gap="md" align="center">\r
          <Frame display="flex" gap="xs" align="center">\r
            <Icon name="ImageIcon" size="sm" />\r
            <Text variant="body-2" weight="medium">원본 이미지 (800×600px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Surface borderWidth="thick" borderStyle="solid" borderColor="primary-system01-1-rest" background="cta-system01-1-rest" borderRadius="md">\r
              <Frame padding="xs">\r
                <img src="https://picsum.photos/id/1025/800/600" alt="Original large landscape" className="fill" />\r
              </Frame>\r
            </Surface>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">\r
                  이 큰 이미지를 작은 컨테이너(120×160px)에 crop으로 넣어 자릅니다\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
\r
        {/* crop + position 조합 */}\r
        <Frame display="flex" direction="column" gap="md">\r
          <Frame display="flex" gap="xs" align="center">\r
            <Icon name="SearchIcon" size="sm" />\r
            <Text variant="body-2" weight="medium">crop + position 조합 비교</Text>\r
          </Frame>\r
          <Frame display="flex" gap="md" wrap="wrap" justify="center">\r
            {[{
            position: 'cropCenter',
            label: 'cropCenter',
            desc: '중앙 기준으로 자르기'
          }, {
            position: 'cropTop',
            label: 'cropTop',
            desc: '상단 기준으로 자르기'
          }, {
            position: 'cropBottom',
            label: 'cropBottom',
            desc: '하단 기준으로 자르기'
          }, {
            position: 'cropLeft',
            label: 'cropLeft',
            desc: '좌측 기준으로 자르기'
          }, {
            position: 'cropRight',
            label: 'cropRight',
            desc: '우측 기준으로 자르기'
          }].map(({
            position,
            label,
            desc
          }) => <Frame key={position} display="flex" direction="column" gap="xs" align="center">\r
                <Surface borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest" background="cta-system01-1-rest" borderRadius="sm">\r
                  <Frame padding="xs">\r
                    <Sizing width="120px" height="160px" objectFit="crop" objectPosition={position as any}>\r
                      <img src="https://picsum.photos/id/1025/800/600" alt={\`\${position} position demo\`} className="fill" />\r
                    </Sizing>\r
                  </Frame>\r
                </Surface>\r
                <Surface foreground="cta-system01-1-rest">\r
                  <Text variant="caption-1" textAlign="center" weight="medium">\r
                    {label}\r
                  </Text>\r
                </Surface>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-2" textAlign="center">\r
                    {desc}\r
                  </Text>\r
                </Surface>\r
              </Frame>)}\r
          </Frame>\r
        </Frame>\r
\r
        {/* 코너 crop Position들 */}\r
        <Frame display="flex" direction="column" gap="md">\r
          <Frame display="flex" gap="xs" align="center">\r
            <Icon name="LineIconsCornerUpLeftIcon" size="sm" />\r
            <Text variant="body-2" weight="medium">코너 crop Position들</Text>\r
          </Frame>\r
          <Frame display="flex" gap="md" wrap="wrap" justify="center">\r
            {[{
            position: 'cropTopLeft',
            label: 'cropTopLeft',
            desc: '좌상단 기준으로 자르기'
          }, {
            position: 'cropTopRight',
            label: 'cropTopRight',
            desc: '우상단 기준으로 자르기'
          }, {
            position: 'cropBottomLeft',
            label: 'cropBottomLeft',
            desc: '좌하단 기준으로 자르기'
          }, {
            position: 'cropBottomRight',
            label: 'cropBottomRight',
            desc: '우하단 기준으로 자르기'
          }].map(({
            position,
            label,
            desc
          }) => <Frame key={position} display="flex" direction="column" gap="xs" align="center">\r
                <Surface borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest" background="cta-system01-1-rest" borderRadius="sm">\r
                  <Frame padding="xs">\r
                    <Sizing width="120px" height="160px" objectFit="crop" objectPosition={position as any}>\r
                      <img src="https://picsum.photos/id/1025/800/600" alt={\`\${position} position demo\`} className="fill" />\r
                    </Sizing>\r
                  </Frame>\r
                </Surface>\r
                <Surface foreground="cta-system01-1-rest">\r
                  <Text variant="caption-1" textAlign="center" weight="medium">\r
                    {label}\r
                  </Text>\r
                </Surface>\r
                <Surface foreground="secondary-system01-2-rest">\r
                  <Text variant="caption-2" textAlign="center">\r
                    {desc}\r
                  </Text>\r
                </Surface>\r
              </Frame>)}\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" gap="xs" align="center">\r
          <Icon name="InfoIcon" size="sm" />\r
          <Surface foreground="secondary-system01-2-rest">\r
            <Frame padding="xs">\r
              <Text variant="caption-2" weight="regular">\r
                모든 값이 시멘틱 토큰으로 관리되어 일관성을 보장합니다.\r
              </Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
        <Frame display="flex" gap="xs" align="center">\r
          <Icon name="LineIconsStarFilledIcon" size="sm" />\r
          <Surface foreground="cta-system01-1-rest">\r
            <Frame padding="xs">\r
              <Text variant="caption-2" weight="regular">\r
                "crop" + "cropCenter" 같은 조합으로 더 직관적으로 사용할 수 있습니다.\r
              </Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(M=(N=h.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var L,P,O;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'BoxSizing 시각화',
  parameters: {
    docs: {
      description: {
        story: '박스 모델의 차이점을 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* BoxSizing 비교 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">BoxSizing 비교</Text>\r
        <Frame display="flex" gap="xl">\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Text variant="body-2" weight="medium">content-box (기본값)</Text>\r
            <Sizing width="200px" height="100px" boxSizing="contentBox">\r
              <Surface borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">\r
                <Frame padding="lg">\r
                  <SampleBox label="content" variant="primary" size="md" />\r
                </Frame>\r
              </Surface>\r
            </Sizing>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">\r
                  전체 크기: 260px × 160px<br />\r
                  (content + padding + border)\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Text variant="body-2" weight="medium">border-box</Text>\r
            <Sizing width="200px" height="100px" boxSizing="borderBox">\r
              <Surface borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest" background="primary-system01-1-rest">\r
                <Frame padding="lg">\r
                  <SampleBox label="content" variant="primary" size="md" />\r
                </Frame>\r
              </Surface>\r
            </Sizing>\r
            <Surface foreground="secondary-system01-2-rest">\r
              <Frame padding="xs">\r
                <Text variant="caption-2" textAlign="center">\r
                  전체 크기: 200px × 100px<br />\r
                  (padding과 border 포함)\r
                </Text>\r
              </Frame>\r
            </Surface>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(O=(P=y.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var D,E,$;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Sizing을 다른 프리미티브와 조합하여 실제 컴포넌트를 구현한 예시입니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 실제 사용 사례: 다양한 Sizing 기능 조합 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Frame display="flex" gap="sm" align="center">\r
          <Icon name="LineIconsStarFilledIcon" size="lg" />\r
          <Text variant="heading-3" weight="medium">실제 사용 사례: 다양한 Sizing 기능 조합</Text>\r
        </Frame>\r
        <Text variant="body-2">Sizing의 핵심 기능들을 실제 UI 컴포넌트에서 어떻게 활용하는지 보여줍니다</Text>\r
        \r
        <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap="lg">\r
          \r
          {/* 1. 비디오 카드 - AspectRatio + ObjectFit */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame display="flex" direction="column">\r
              {/* 16:9 비율 고정 썸네일 */}\r
              <Surface borderRadius="md">\r
                <Frame overflow="hidden">\r
                  <Sizing width="100%" aspectRatio="16/9" objectFit="cover">\r
                    <img src="https://picsum.photos/id/111/640/360" alt="Video thumbnail" className="fill" />\r
                  </Sizing>\r
                </Frame>\r
              </Surface>\r
              <Frame padding="md" display="flex" direction="column" gap="xs">\r
                <Text variant="body-1" weight="medium">비디오 제목</Text>\r
                <Text variant="caption-1">AspectRatio + ObjectFit 활용</Text>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
\r
          {/* 2. 프로필 카드 - 고정 크기 + Min/Max 제약 */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame padding="lg" display="flex" gap="md" align="center">\r
              {/* 정사각형 아바타 */}\r
              <Surface borderRadius="circular">\r
                <Frame overflow="hidden">\r
                  <Sizing width="60px" aspectRatio="1/1" objectFit="cover">\r
                    <img src="https://picsum.photos/id/91/120/120" alt="Avatar" className="fill" />\r
                  </Sizing>\r
                </Frame>\r
              </Surface>\r
              \r
              {/* 컨텐츠 영역 - 최소/최대 제약 */}\r
              <Frame flex="1" display="flex" direction="column" gap="xs" minWidth="120px" maxWidth="200px">\r
                <Text variant="body-1" weight="medium">사용자 이름</Text>\r
                <Text variant="caption-1">minWidth/maxWidth 제약</Text>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
\r
          {/* 3. 이미지 갤러리 - 다양한 ObjectFit */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame padding="md" display="flex" direction="column" gap="sm">\r
              <Text variant="body-2" weight="medium">이미지 갤러리</Text>\r
              <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="xs">\r
                {/* Cover: 비율 유지하며 꽉 채움 */}\r
                <Surface borderRadius="sm">\r
                  <Frame overflow="hidden">\r
                    <Sizing width="100%" height="80px" objectFit="cover">\r
                      <img src="https://picsum.photos/id/1002/300/200" alt="Gallery nature" className="fill" />\r
                    </Sizing>\r
                  </Frame>\r
                </Surface>\r
                {/* Contain: 전체 이미지 보임 */}\r
                <Surface borderRadius="sm">\r
                  <Frame overflow="hidden">\r
                    <Sizing width="100%" height="80px" objectFit="contain">\r
                      <img src="https://picsum.photos/id/1003/200/300" alt="Gallery vertical" className="fill" />\r
                    </Sizing>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
              <Text variant="caption-2">좌: cover, 우: contain</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* 4. 반응형 배너 - 높이 토큰 활용 */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame display="flex" direction="column">\r
              {/* 시멘틱 높이 토큰 사용 */}\r
              <Sizing width="100%" height="xxxl" objectFit="cover">\r
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="md" fill>\r
                  <Frame width="100%" height="100%" display="flex" justify="center" align="center">\r
                    <Text variant="heading-2" weight="bold" color="onColor-primary">배너 영역</Text>\r
                  </Frame>\r
                </Surface>\r
              </Sizing>\r
              <Frame padding="md">\r
                <Text variant="caption-1">height="xxxl" 토큰 사용</Text>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
\r
          {/* 5. 아이콘 버튼 그리드 - 정사각형 제약 */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame padding="md" display="flex" direction="column" gap="sm">\r
              <Text variant="body-2" weight="medium">아이콘 버튼 그리드</Text>\r
              <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="sm">\r
                {[{
                icon: 'HomeIcon',
                label: '홈'
              }, {
                icon: 'LineIconsPersonPersonIcon',
                label: '사용자'
              }, {
                icon: 'LineIconsSettingsSetting1Icon',
                label: '설정'
              }, {
                icon: 'LineIconsMessageCircleIcon',
                label: '메시지'
              }, {
                icon: 'HeartIcon',
                label: '좋아요'
              }, {
                icon: 'SearchIcon',
                label: '검색'
              }].map(({
                icon,
                label
              }, index) => <Sizing key={index} width="100%" aspectRatio="1/1">\r
                    <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="md" fill>\r
                      <Frame width="100%" height="100%" display="flex" justify="center" align="center" direction="column" gap="xs">\r
                        <Icon name={icon as any} size="md" />\r
                        <Text variant="caption-2" textAlign="center" color="primary-system01-oncolor">{label}</Text>\r
                      </Frame>\r
                    </Surface>\r
                  </Sizing>)}\r
              </Frame>\r
              <Text variant="caption-2">aspectRatio="1/1" 정사각형 유지</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* 6. 차트 컨테이너 - 최소 높이 보장 */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">\r
            <Frame padding="md" display="flex" direction="column" gap="sm">\r
              <Text variant="body-2" weight="medium">차트 컨테이너</Text>\r
              {/* 최소 높이 보장 */}\r
              <Sizing width="100%" minHeight="120px" height="auto">\r
                <Surface background="primary-system01-2-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="dashed" borderColor="primary-system01-1-rest" borderRadius="md" fill>\r
                  <Frame width="100%" height="100%" display="flex" justify="center" align="center">\r
                    <Frame display="flex" direction="column" align="center" gap="xs">\r
                      <Icon name="LineIconsBarChart1Icon" size="xxl" />\r
                      <Text variant="caption-1" color="primary-system01-oncolor">차트 영역</Text>\r
                    </Frame>\r
                  </Frame>\r
                </Surface>\r
              </Sizing>\r
              <Text variant="caption-2">minHeight="120px" 최소 높이 보장</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...($=(E=u.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const q=["Playground","Width","HeightTokens","MinMaxConstraints","AspectRatio","ObjectFit","BoxSizing","CompoundComponentExample"];export{g as AspectRatio,y as BoxSizing,u as CompoundComponentExample,p as HeightTokens,x as MinMaxConstraints,h as ObjectFit,l as Playground,m as Width,q as __namedExportsOrder,_ as default};

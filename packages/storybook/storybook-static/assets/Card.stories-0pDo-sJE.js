import{j as t}from"./react-vendor-BFNgaz96.js";import{C as Q}from"./index.esm-ChTCnUjT.js";import{C as Z}from"./index.esm-BNdFApZa.js";import{F as n,T as r}from"./index.esm-WYP67xav.js";const w=["LineIconsPlusPlusIcon","LineIconsMinusMinusIcon","LineIconsCheckmarkCheckmarkIcon","LineIconsCloseCloseIcon","LineIconsEditEdit1Icon","LineIconsEditEdit2Icon","LineIconsTrashTrash1Icon","LineIconsTrashTrash2Icon","LineIconsEyeEyeIcon","LineIconsEyeOffIcon","LineIconsHeartIcon","LineIconsStarFilledIcon","LineIconsStarOutlinedIcon","LineIconsShoppingCartIcon","LineIconsShoppingBagIcon","LineIconsCartAddCartIcon","SearchIcon","HomeIcon","SettingIcon","Profile01Icon","CameraIcon","ImageIcon","ShareIcon","DownloadIcon","UploadIcon","SaveIcon","CopyIcon","RefreshIcon","SyncIcon","PowerIcon","LockIcon","UnlockIcon","InfoIcon","WarningIcon","SuccessIcon","LineIconsAlertCircleIcon","LineIconsAlertTriangleIcon","LineIconsArrowArrow1LeftIcon","LineIconsArrowArrow1RightIcon","LineIconsArrowArrow1UpIcon","LineIconsArrowArrow1DownIcon","LineIconsArrowChevronLeftIcon","LineIconsArrowChevronRightIcon","LineIconsArrowChevronUpIcon","LineIconsArrowChevronDownIcon","LineIconsMenuMenuIcon","LineIconsMoreHorizontalIcon","LineIconsMoreVerticalIcon"],tt={"system-01":Q,"system-02":Z},s=({system:i,...o})=>{const e=tt[i]||Q;return t.jsx(e,{...o})},rt={title:"Components/Card",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Universal Card component with comprehensive customization options for both System-01 and System-02"}}},argTypes:{system:{control:"select",options:["system-01","system-02"],description:"Design system to use",table:{category:"System Selection"}},variant:{control:"select",options:["filled","outlined","transparent"],description:"Card variant (style variation)",table:{category:"Card Layout"}},title:{control:"text",description:"Card main title (product name, etc.)",table:{category:"Card Layout"}},description:{control:"text",description:"Detailed description text (brand name)",table:{category:"Card Layout"}},width:{control:"text",description:"Card width",table:{category:"Card Layout"}},minWidth:{control:"text",description:"Card minimum width",table:{category:"Card Layout"}},maxWidth:{control:"number",description:"Card maximum width",table:{category:"Card Layout"}},onClick:{action:"clicked",description:"Card click event",table:{category:"Card Layout"}},showBadge:{control:"boolean",description:"Show badge",table:{category:"Badge Options"}},badge:{control:"object",description:"Badge settings (text, color, iconName)",table:{category:"Badge Options"}},badgeText:{control:"text",description:"Badge text",table:{category:"Badge Options"}},badgeColor:{control:"select",options:["primary","secondary","cta","error","warning"],description:"Badge color",table:{category:"Badge Options"}},badgeSize:{control:"select",options:["sm","md","lg"],description:"Badge size",table:{category:"Badge Options"}},badgeStyle:{control:"select",options:["filled","outlined","transparent"],description:"Badge style (variant)",table:{category:"Badge Options"}},badgeLayout:{control:"select",options:["only text","text+icon","only icon"],description:"Badge layout",table:{category:"Badge Options"}},badgeType:{control:"select",options:["round-square","circle"],description:"Badge type",table:{category:"Badge Options"}},badgeIconName:{control:"select",options:w,description:"Badge icon",table:{category:"Badge Options"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"TextDisplay size",table:{category:"TextDisplay Options"}},textStyle:{control:"select",options:["left","center","right"],description:"Text alignment",table:{category:"TextDisplay Options"}},showLabel:{control:"boolean",description:"Show label",table:{category:"TextDisplay Options"}},labelText:{control:"text",description:"Label text",table:{category:"TextDisplay Options"}},showDescription:{control:"boolean",description:"Show description",table:{category:"TextDisplay Options"}},showCaption:{control:"boolean",description:"Show caption",table:{category:"TextDisplay Options"}},captionText:{control:"text",description:"Caption text (price, etc.)",table:{category:"TextDisplay Options"}},showActionButton:{control:"boolean",description:"Show action button",table:{category:"Action Button Options"}},actionButton:{control:"object",description:"Footer action button",table:{category:"Action Button Options"}},buttonVariant:{control:"select",options:["filled","outlined","transparent"],description:"Button variant",table:{category:"Action Button Options"}},buttonType:{control:"select",options:["text-icon","text-only","icon-only"],description:"Button type",table:{category:"Action Button Options"}},buttonColorScheme:{control:"select",options:["primary","secondary","cta"],description:"Button color scheme",table:{category:"Action Button Options"}},buttonSize:{control:"select",options:["xs","sm","md","lg","xl"],description:"Button size",table:{category:"Action Button Options"}},buttonPosition:{control:"select",options:["top-right","bottom-full","bottom-right"],description:"Button position layout",table:{category:"Action Button Options"}},buttonText:{control:"text",description:"Button text (for text-icon and text-only types)",table:{category:"Action Button Options"}},buttonIcon:{control:"select",options:w,description:"Button icon (leftIcon)",table:{category:"Action Button Options"}},buttonRightIcon:{control:"select",options:w,description:"Button right icon",table:{category:"Action Button Options"}},buttonIsFullWidth:{control:"boolean",description:"Button full width",table:{category:"Action Button Options"}},buttonIsSelected:{control:"boolean",description:"Button selected state",table:{category:"Action Button Options"}},showImage:{control:"boolean",description:"Show image area",table:{category:"Image Options"}},imageUrl:{control:"text",description:"Image URL (profile, product image, etc.)",table:{category:"Image Options"}},imageHeight:{control:"text",description:"Image height (default: 242px for System-02, 200px for System-01)",table:{category:"Image Options"}},imageObjectFit:{control:"select",options:["fill","contain","cover","none","scaleDown","stretch","fitInside","fillArea","crop"],description:"Image object-fit setting (default: cover)",table:{category:"Image Options"}},imageObjectPosition:{control:"select",options:["center","top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight","cropCenter","cropTop","cropBottom","cropLeft","cropRight","cropTopLeft","cropTopRight","cropBottomLeft","cropBottomRight"],description:"Image object-position setting (default: center)",table:{category:"Image Options"}},imageAspectRatio:{control:"select",options:[void 0,"square","landscape.classic","landscape.wide","landscape.ultraWide","landscape.film","portrait.classic","portrait.tall","portrait.book"],description:"Image aspect-ratio setting",table:{category:"Image Options"}}}},a={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return e==="system-01"?t.jsx(s,{system:e,variant:"filled",title:"System-01 Default Card",showDescription:!0,description:"Classic & Compact",showBadge:!1,showActionButton:!0,buttonType:"text-icon",buttonPosition:"top-right",buttonText:"Add to Cart",showImage:!1,width:"100%",maxWidth:375}):t.jsx(s,{system:e,variant:"filled",title:"System-02 Default Card",showDescription:!0,description:"Modern & Spacious",showBadge:!1,showActionButton:!0,buttonType:"text-icon",buttonPosition:"top-right",buttonText:"Add to Cart",showImage:!1,width:"100%",maxWidth:375})}},c={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsx(s,{system:e,variant:"filled",title:"Premium Sneakers",showDescription:!0,description:"NIKE",showCaption:!0,captionText:"$129.99",showBadge:!1,showActionButton:!0,buttonType:"text-icon",buttonText:"Add to Cart",actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Added to cart!")},showImage:!1,width:"100%",maxWidth:375})}},l={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsx(s,{system:e,variant:"filled",title:"Nike Air Max 2024",showDescription:!0,description:"NIKE",showCaption:!0,captionText:"$120.00",showBadge:!1,showActionButton:!0,buttonType:"text-icon",buttonText:"Add to Cart",actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Added to cart!")},imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",showImage:!0,width:"100%",maxWidth:375})}},d={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsxs(n,{display:"flex",direction:"column",gap:"xl",children:[t.jsxs(r,{variant:"heading-2",color:e==="system-01"?"primary-system01-1-rest":"primary-system02-1-rest",children:["Card Variant Comparison (",e,")"]}),t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsxs(n,{display:"flex",direction:"column",gap:"md",children:[t.jsx(r,{variant:"heading-3",color:e==="system-01"?"secondary-system01-1-rest":"secondary-system02-1-rest",children:"Filled (Default)"}),t.jsx(s,{system:e,variant:"filled",title:"Filled Card",showDescription:!0,description:"Background + Border + Shadow",showCaption:!0,captionText:"$89.00",showActionButton:!0,buttonType:"text-icon",buttonText:"Add",actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"md",children:[t.jsx(r,{variant:"heading-3",color:e==="system-01"?"secondary-system01-1-rest":"secondary-system02-1-rest",children:"Outlined"}),t.jsx(s,{system:e,variant:"outlined",title:"Outlined Card",showDescription:!0,description:"Border Only",showCaption:!0,captionText:"$89.00",showActionButton:!0,buttonType:"text-icon",buttonText:"Add",actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"md",children:[t.jsx(r,{variant:"heading-3",color:e==="system-01"?"secondary-system01-1-rest":"secondary-system02-1-rest",children:"Transparent"}),t.jsx(s,{system:e,variant:"transparent",title:"Transparent Card",showDescription:!0,description:"No Background or Border",showCaption:!0,captionText:"$89.00",showActionButton:!0,buttonType:"text-icon",buttonText:"Add",actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300})]})]})]})}},u={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return e==="system-01"?t.jsxs(n,{display:"flex",direction:"column",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"박민수",showBadge:!0,badgeText:"서류심사",badgeColor:"warning",showDescription:!0,description:"백엔드 개발자 채용",showCaption:!0,captionText:"서류 제출 마감: 2024년 12월 31일",showActionButton:!1,showImage:!1}),t.jsx(s,{system:e,variant:"filled",title:"최영미",showBadge:!0,badgeText:"긴급",badgeColor:"error",badgeIconName:"WarningIcon",showDescription:!0,description:"UI/UX 디자이너 채용",showCaption:!0,captionText:"긴급 채용: 즉시 면접 가능",showActionButton:!0,buttonType:"text-only",buttonText:"연락",showImage:!1})]}):t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"New Product Card",showBadge:!0,badgeText:"NEW",badgeColor:"primary",showDescription:!0,description:"BRAND",showCaption:!0,captionText:"$89.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300}),t.jsx(s,{system:e,variant:"filled",title:"Sale Product",showBadge:!0,badgeText:"SALE",badgeColor:"secondary",showDescription:!0,description:"OUTLET",showCaption:!0,captionText:"$39.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300}),t.jsx(s,{system:e,variant:"filled",title:"Premium Product",showBadge:!0,badgeText:"PREMIUM",badgeColor:"cta",showDescription:!0,description:"LUXURY",showCaption:!0,captionText:"$299.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!1,maxWidth:300})]})}},p={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return e==="system-01"?t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"김철수",showBadge:!0,badgeText:"프로필",badgeColor:"primary",showDescription:!0,description:"시니어 개발자",showCaption:!0,captionText:"경력 8년",showActionButton:!0,buttonType:"icon-only",buttonIcon:"LineIconsPersonPersonIcon",showImage:!0,imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",imageHeight:"150",maxWidth:300}),t.jsx(s,{system:e,variant:"outlined",title:"이수진",showBadge:!0,badgeText:"신입",badgeColor:"secondary",showDescription:!0,description:"프론트엔드 개발자",showCaption:!0,captionText:"신입 지원자",showActionButton:!0,buttonType:"icon-only",buttonIcon:"LineIconsPersonPersonIcon",showImage:!0,imageUrl:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",imageHeight:"150",maxWidth:300})]}):t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"Nike Air Max 2024",showDescription:!0,description:"NIKE",showCaption:!0,captionText:"$120.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Nike Air Max added to cart!")},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",maxWidth:375}),t.jsx(s,{system:e,variant:"filled",title:"Adidas Ultraboost 22",showDescription:!0,description:"ADIDAS",showCaption:!0,captionText:"$180.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Adidas Ultraboost added to cart!")},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",maxWidth:375})]})}},m={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsxs(n,{display:"flex",direction:"column",gap:"xl",children:[t.jsxs(r,{variant:"heading-2",children:["Button Position Variations (",e,")"]}),t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Top Right (기본)"}),t.jsx(s,{system:e,variant:"filled",title:"Top Right Button",showDescription:!0,description:e==="system-01"?"채용 공고":"BRAND",showCaption:!0,captionText:e==="system-01"?"마감: 12월 31일":"$99.00",showActionButton:!0,buttonPosition:"top-right",buttonType:"icon-only",buttonIcon:"LineIconsPlusPlusIcon",showImage:!1,maxWidth:280})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Bottom Full"}),t.jsx(s,{system:e,variant:"filled",title:"Bottom Full Button",showDescription:!0,description:e==="system-01"?"채용 공고":"BRAND",showCaption:!0,captionText:e==="system-01"?"마감: 12월 31일":"$99.00",showActionButton:!0,buttonPosition:"bottom-full",buttonType:"text-icon",buttonText:e==="system-01"?"지원하기":"Add to Cart",buttonIcon:"LineIconsPlusPlusIcon",showImage:!1,maxWidth:280})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Bottom Right"}),t.jsx(s,{system:e,variant:"filled",title:"Bottom Right Button",showDescription:!0,description:e==="system-01"?"채용 공고":"BRAND",showCaption:!0,captionText:e==="system-01"?"마감: 12월 31일":"$99.00",showActionButton:!0,buttonPosition:"bottom-right",buttonType:"text-only",buttonText:e==="system-01"?"상세보기":"View",showImage:!1,maxWidth:280})]})]})]})}},h={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsxs(n,{display:"flex",direction:"column",gap:"xl",children:[t.jsxs(r,{variant:"heading-2",children:["Card Variants (",e,")"]}),t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Filled (기본)"}),t.jsx(s,{system:e,variant:"filled",title:"Filled Card",showDescription:!0,description:e==="system-01"?"백엔드 개발자":"PREMIUM",showCaption:!0,captionText:e==="system-01"?"경력 3년 이상":"$199.00",showActionButton:!0,buttonType:"icon-only",buttonIcon:"LineIconsPlusPlusIcon",showImage:!1,maxWidth:250})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Outlined"}),t.jsx(s,{system:e,variant:"outlined",title:"Outlined Card",showDescription:!0,description:e==="system-01"?"프론트엔드 개발자":"STANDARD",showCaption:!0,captionText:e==="system-01"?"신입 가능":"$99.00",showActionButton:!0,buttonType:"icon-only",buttonIcon:"LineIconsPlusPlusIcon",showImage:!1,maxWidth:250})]}),t.jsxs(n,{display:"flex",direction:"column",gap:"sm",children:[t.jsx(r,{variant:"body-2",children:"Transparent"}),t.jsx(s,{system:e,variant:"transparent",title:"Transparent Card",showDescription:!0,description:e==="system-01"?"디자이너":"BASIC",showCaption:!0,captionText:e==="system-01"?"포트폴리오 필수":"$49.00",showActionButton:!0,buttonType:"icon-only",buttonIcon:"LineIconsPlusPlusIcon",showImage:!1,maxWidth:250})]})]})]})}},y={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return e==="system-01"?t.jsx(n,{padding:"lg",children:t.jsxs(n,{display:"flex",direction:"column",gap:"xl",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:"600"},children:"오늘의 면접 일정"}),t.jsxs(n,{display:"flex",direction:"column",gap:"md",children:[t.jsx(s,{system:e,variant:"filled",title:"김도형",showBadge:!0,badgeText:"면접",badgeColor:"primary",showDescription:!0,description:"레이다 신호처리/알고리즘 개발 채용",showCaption:!0,captionText:"면접 일정: 2025년 5월 20일 화요일 15:00 - 16:00",statusText:"상태: 면접완료",showActionButton:!0,buttonType:"text-icon",buttonText:"열람",buttonIcon:"LineIconsCheckmarkCircleIcon",actionButton:{onClick:()=>alert("면접 결과 열람")},showImage:!1}),t.jsx(s,{system:e,variant:"filled",title:"이수진",showBadge:!0,badgeText:"면접",badgeColor:"primary",showDescription:!0,description:"프론트엔드 개발자 채용",showCaption:!0,captionText:"면접 일정: 2025년 5월 20일 화요일 16:30 - 17:30",statusText:"상태: 진행중",showActionButton:!0,buttonType:"text-icon",buttonText:"참가",buttonIcon:"LineIconsVideoOnIcon",actionButton:{onClick:()=>alert("화상 면접 참가")},showImage:!1})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:"600"},children:"서류 심사 대기"}),t.jsxs(n,{display:"flex",direction:"column",gap:"md",children:[t.jsx(s,{system:e,variant:"filled",title:"박민수",showBadge:!0,badgeText:"서류심사",badgeColor:"warning",showDescription:!0,description:"백엔드 개발자 채용",showCaption:!0,captionText:"서류 제출: 2024년 12월 15일",statusText:"상태: 심사중",showActionButton:!0,buttonType:"text-icon",buttonText:"검토",buttonIcon:"LineIconsFileTextIcon",actionButton:{onClick:()=>alert("서류 검토")},showImage:!1}),t.jsx(s,{system:e,variant:"filled",title:"최영미",showBadge:!0,badgeText:"보완요청",badgeColor:"error",showDescription:!0,description:"디자이너 채용",showCaption:!0,captionText:"포트폴리오 추가 제출 요청",statusText:"상태: 서류 보완",showActionButton:!0,buttonType:"text-icon",buttonText:"연락",buttonIcon:"LineIconsPhonePhoneIcon",actionButton:{onClick:()=>alert("지원자 연락")},showImage:!1})]})]})]})}):t.jsxs(n,{display:"flex",direction:"column",gap:"xl",children:[t.jsx(r,{variant:"heading-2",color:"primary-system02-1-rest",children:"Interactive Product Cards (System-02)"}),t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"Nike Air Max 2024",showDescription:!0,description:"NIKE",showCaption:!0,captionText:"$120.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Nike Air Max added to cart!")},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",onClick:()=>console.log("Nike card clicked"),maxWidth:375}),t.jsx(s,{system:e,variant:"filled",title:"Adidas Ultraboost 22",showDescription:!0,description:"ADIDAS",showCaption:!0,captionText:"$180.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Adidas Ultraboost added to cart!")},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",onClick:()=>console.log("Adidas card clicked"),maxWidth:375}),t.jsx(s,{system:e,variant:"filled",title:"Puma RS-X 2024",showDescription:!0,description:"PUMA",showCaption:!0,captionText:"$110.00",showActionButton:!0,actionButton:{iconName:"LineIconsPlusPlusIcon",onClick:()=>alert("Puma RS-X added to cart!")},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center",onClick:()=>console.log("Puma card clicked"),maxWidth:375})]})]})}},x={render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return e==="system-01"?t.jsxs(n,{display:"flex",direction:"column",gap:"lg",children:[t.jsx(r,{variant:"heading-2",children:"System-01 특화 기능 - Classic & Compact"}),t.jsxs(r,{variant:"body-1",children:["• 더 촘촘한 패딩과 간격 (md, sm 사용)",t.jsx("br",{}),"• 작은 border-radius (sm 사용)",t.jsx("br",{}),"• 컴팩트한 이미지 높이 (200px 기본)",t.jsx("br",{}),"• 작은 버튼 크기 (sm 기본)",t.jsx("br",{}),"• 기존 additionalInfo, statusText 호환성 유지",t.jsx("br",{}),"• 채용관리시스템에 최적화된 정보 표시"]}),t.jsx(s,{system:e,variant:"filled",title:"System-01 특화 카드",showBadge:!0,badgeText:"테스트",badgeColor:"primary",showDescription:!0,description:"Classic & Compact 스타일",showCaption:!0,captionText:"촘촘한 간격과 작은 radius",statusText:"상태: System-01 최적화",showActionButton:!0,buttonType:"text-icon",buttonText:"액션",buttonIcon:"LineIconsCheckmarkCircleIcon",showImage:!1})]}):t.jsxs(n,{display:"flex",direction:"column",gap:"lg",children:[t.jsx(r,{variant:"heading-2",color:"primary-system02-1-rest",children:"System-02 특화 기능 - Modern & Spacious"}),t.jsxs(r,{variant:"body-1",children:["• 넓은 패딩과 간격 (lg, xl 사용)",t.jsx("br",{}),"• 큰 border-radius (xl 사용)",t.jsx("br",{}),"• 큰 이미지 높이 (242px 기본)",t.jsx("br",{}),"• 큰 버튼 크기 (md 기본)",t.jsx("br",{}),"• 이미지 지원 (object-fit, object-position, aspect-ratio)",t.jsx("br",{}),"• 다양한 variant (filled, outlined, transparent)",t.jsx("br",{}),"• 상품 정보 표시에 최적화"]}),t.jsxs(n,{display:"flex",direction:"row",gap:"lg",children:[t.jsx(s,{system:e,variant:"filled",title:"System-02 특화 카드",showDescription:!0,description:"Modern & Spacious",showCaption:!0,captionText:"넓은 간격과 큰 radius",showActionButton:!0,buttonType:"text-icon",buttonText:"Add",actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",maxWidth:300}),t.jsx(s,{system:e,variant:"outlined",title:"Outlined with Shadow",showDescription:!0,description:"PREMIUM",showCaption:!0,captionText:"$299.00",showActionButton:!0,buttonType:"text-icon",buttonText:"Buy",actionButton:{iconName:"LineIconsPlusPlusIcon"},showImage:!0,imageUrl:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",maxWidth:300})]})]})}},g={args:{variant:"filled",title:"컨트롤 테스트",showBadge:!0,badgeText:"테스트",badgeColor:"primary",showDescription:!0,description:"컨트롤 패널에서 수정 가능한 카드입니다",showCaption:!0,captionText:"추가 정보를 입력해보세요",statusText:"상태: 테스트중",showActionButton:!0,buttonPosition:"top-right",buttonType:"icon-only",buttonText:"액션",showImage:!1},render:(i,{globals:o})=>{const e=(o==null?void 0:o.system)||"system-01";return t.jsx(s,{...i,system:e})},parameters:{docs:{description:{story:"컨트롤 패널에서 카드의 다양한 속성을 실시간으로 변경해보세요. 두 시스템 모두 동일한 기능을 제공하지만 스타일이 다릅니다."}}}};var I,b,f;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    if (system === 'system-01') {
      return <UniversalCard system={system} variant="filled" title="System-01 Default Card" showDescription={true} description="Classic & Compact" showBadge={false} showActionButton={true} buttonType="text-icon" buttonPosition="top-right" buttonText="Add to Cart" showImage={false} width="100%" maxWidth={375} />;
    } else {
      return <UniversalCard system={system} variant="filled" title="System-02 Default Card" showDescription={true} description="Modern & Spacious" showBadge={false} showActionButton={true} buttonType="text-icon" buttonPosition="top-right" buttonText="Add to Cart" showImage={false} width="100%" maxWidth={375} />;
    }
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,C,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCard system={system} variant="filled" title="Premium Sneakers" showDescription={true} description="NIKE" showCaption={true} captionText="$129.99" showBadge={false} showActionButton={true} buttonType="text-icon" buttonText="Add to Cart" actionButton={{
      iconName: 'LineIconsPlusPlusIcon',
      onClick: () => alert('Added to cart!')
    }} showImage={false} width="100%" maxWidth={375} />;
  }
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var A,v,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCard system={system} variant="filled" title="Nike Air Max 2024" showDescription={true} description="NIKE" showCaption={true} captionText="$120.00" showBadge={false} showActionButton={true} buttonType="text-icon" buttonText="Add to Cart" actionButton={{
      iconName: 'LineIconsPlusPlusIcon',
      onClick: () => alert('Added to cart!')
    }} imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center" showImage={true} width="100%" maxWidth={375} />;
  }
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var D,L,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" direction="column" gap="xl">\r
        <Text variant="heading-2" color={system === 'system-01' ? 'primary-system01-1-rest' : 'primary-system02-1-rest'}>\r
          Card Variant Comparison ({system})\r
        </Text>\r
        \r
        <Frame display="flex" direction="row" gap="lg">\r
          {/* Filled Variant */}\r
          <Frame display="flex" direction="column" gap="md">\r
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>\r
              Filled (Default)\r
            </Text>\r
            <UniversalCard system={system} variant="filled" title="Filled Card" showDescription={true} description="Background + Border + Shadow" showCaption={true} captionText="$89.00" showActionButton={true} buttonType="text-icon" buttonText="Add" actionButton={{
            iconName: 'LineIconsPlusPlusIcon'
          }} showImage={false} maxWidth={300} />\r
          </Frame>\r
\r
          {/* Outlined Variant */}\r
        <Frame display="flex" direction="column" gap="md">\r
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>\r
              Outlined\r
          </Text>\r
            <UniversalCard system={system} variant="outlined" title="Outlined Card" showDescription={true} description="Border Only" showCaption={true} captionText="$89.00" showActionButton={true} buttonType="text-icon" buttonText="Add" actionButton={{
            iconName: 'LineIconsPlusPlusIcon'
          }} showImage={false} maxWidth={300} />\r
        </Frame>\r
        \r
          {/* Transparent Variant */}\r
        <Frame display="flex" direction="column" gap="md">\r
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>\r
              Transparent\r
          </Text>\r
            <UniversalCard system={system} variant="transparent" title="Transparent Card" showDescription={true} description="No Background or Border" showCaption={true} captionText="$89.00" showActionButton={true} buttonType="text-icon" buttonText="Add" actionButton={{
            iconName: 'LineIconsPlusPlusIcon'
          }} showImage={false} maxWidth={300} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var S,U,F;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    if (system === 'system-01') {
      return <Frame display="flex" direction="column" gap="lg">\r
          <UniversalCard system={system} variant="filled" title="박민수" showBadge={true} badgeText="서류심사" badgeColor="warning" showDescription={true} description="백엔드 개발자 채용" showCaption={true} captionText="서류 제출 마감: 2024년 12월 31일" showActionButton={false} showImage={false} />\r
          \r
          <UniversalCard system={system} variant="filled" title="최영미" showBadge={true} badgeText="긴급" badgeColor="error" badgeIconName="WarningIcon" showDescription={true} description="UI/UX 디자이너 채용" showCaption={true} captionText="긴급 채용: 즉시 면접 가능" showActionButton={true} buttonType="text-only" buttonText="연락" showImage={false} />\r
        </Frame>;
    } else {
      return <Frame display="flex" direction="row" gap="lg">\r
          <UniversalCard system={system} variant="filled" title="New Product Card" showBadge={true} badgeText="NEW" badgeColor="primary" showDescription={true} description="BRAND" showCaption={true} captionText="$89.00" showActionButton={true} actionButton={{
          iconName: 'LineIconsPlusPlusIcon'
        }} showImage={false} maxWidth={300} />\r
\r
          <UniversalCard system={system} variant="filled" title="Sale Product" showBadge={true} badgeText="SALE" badgeColor="secondary" showDescription={true} description="OUTLET" showCaption={true} captionText="$39.00" showActionButton={true} actionButton={{
          iconName: 'LineIconsPlusPlusIcon'
        }} showImage={false} maxWidth={300} />\r
          \r
          <UniversalCard system={system} variant="filled" title="Premium Product" showBadge={true} badgeText="PREMIUM" badgeColor="cta" showDescription={true} description="LUXURY" showCaption={true} captionText="$299.00" showActionButton={true} actionButton={{
          iconName: 'LineIconsPlusPlusIcon'
        }} showImage={false} maxWidth={300} />\r
      </Frame>;
    }
  }
}`,...(F=(U=u.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var N,W,k;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    if (system === 'system-01') {
      return <Frame display="flex" direction="row" gap="lg">\r
          <UniversalCard system={system} variant="filled" title="김철수" showBadge={true} badgeText="프로필" badgeColor="primary" showDescription={true} description="시니어 개발자" showCaption={true} captionText="경력 8년" showActionButton={true} buttonType="icon-only" buttonIcon="LineIconsPersonPersonIcon" showImage={true} imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" imageHeight="150" maxWidth={300} />\r
          \r
          <UniversalCard system={system} variant="outlined" title="이수진" showBadge={true} badgeText="신입" badgeColor="secondary" showDescription={true} description="프론트엔드 개발자" showCaption={true} captionText="신입 지원자" showActionButton={true} buttonType="icon-only" buttonIcon="LineIconsPersonPersonIcon" showImage={true} imageUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" imageHeight="150" maxWidth={300} />\r
        </Frame>;
    } else {
      return <Frame display="flex" direction="row" gap="lg">\r
          <UniversalCard system={system} variant="filled" title="Nike Air Max 2024" showDescription={true} description="NIKE" showCaption={true} captionText="$120.00" showActionButton={true} actionButton={{
          iconName: 'LineIconsPlusPlusIcon',
          onClick: () => alert('Nike Air Max added to cart!')
        }} showImage={true} imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center" maxWidth={375} />\r
          \r
          <UniversalCard system={system} variant="filled" title="Adidas Ultraboost 22" showDescription={true} description="ADIDAS" showCaption={true} captionText="$180.00" showActionButton={true} actionButton={{
          iconName: 'LineIconsPlusPlusIcon',
          onClick: () => alert('Adidas Ultraboost added to cart!')
        }} showImage={true} imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center" maxWidth={375} />\r
        </Frame>;
    }
  }
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var O,R,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" direction="column" gap="xl">\r
        <Text variant="heading-2">\r
          Button Position Variations ({system})\r
        </Text>\r
        \r
        <Frame display="flex" direction="row" gap="lg">\r
          {/* Top Right */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Top Right (기본)</Text>\r
            <UniversalCard system={system} variant="filled" title="Top Right Button" showDescription={true} description={system === 'system-01' ? '채용 공고' : 'BRAND'} showCaption={true} captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'} showActionButton={true} buttonPosition="top-right" buttonType="icon-only" buttonIcon="LineIconsPlusPlusIcon" showImage={false} maxWidth={280} />\r
          </Frame>\r
\r
          {/* Bottom Full */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Bottom Full</Text>\r
            <UniversalCard system={system} variant="filled" title="Bottom Full Button" showDescription={true} description={system === 'system-01' ? '채용 공고' : 'BRAND'} showCaption={true} captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'} showActionButton={true} buttonPosition="bottom-full" buttonType="text-icon" buttonText={system === 'system-01' ? '지원하기' : 'Add to Cart'} buttonIcon="LineIconsPlusPlusIcon" showImage={false} maxWidth={280} />\r
          </Frame>\r
\r
          {/* Bottom Right */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Bottom Right</Text>\r
            <UniversalCard system={system} variant="filled" title="Bottom Right Button" showDescription={true} description={system === 'system-01' ? '채용 공고' : 'BRAND'} showCaption={true} captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'} showActionButton={true} buttonPosition="bottom-right" buttonType="text-only" buttonText={system === 'system-01' ? '상세보기' : 'View'} showImage={false} maxWidth={280} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var M,E,V;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" direction="column" gap="xl">\r
        <Text variant="heading-2">\r
          Card Variants ({system})\r
        </Text>\r
        \r
        <Frame display="flex" direction="row" gap="lg">\r
          {/* Filled */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Filled (기본)</Text>\r
            <UniversalCard system={system} variant="filled" title="Filled Card" showDescription={true} description={system === 'system-01' ? '백엔드 개발자' : 'PREMIUM'} showCaption={true} captionText={system === 'system-01' ? '경력 3년 이상' : '$199.00'} showActionButton={true} buttonType="icon-only" buttonIcon="LineIconsPlusPlusIcon" showImage={false} maxWidth={250} />\r
          </Frame>\r
\r
          {/* Outlined */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Outlined</Text>\r
          <UniversalCard system={system} variant="outlined" title="Outlined Card" showDescription={true} description={system === 'system-01' ? '프론트엔드 개발자' : 'STANDARD'} showCaption={true} captionText={system === 'system-01' ? '신입 가능' : '$99.00'} showActionButton={true} buttonType="icon-only" buttonIcon="LineIconsPlusPlusIcon" showImage={false} maxWidth={250} />\r
          </Frame>\r
\r
          {/* Transparent */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-2">Transparent</Text>\r
          <UniversalCard system={system} variant="transparent" title="Transparent Card" showDescription={true} description={system === 'system-01' ? '디자이너' : 'BASIC'} showCaption={true} captionText={system === 'system-01' ? '포트폴리오 필수' : '$49.00'} showActionButton={true} buttonType="icon-only" buttonIcon="LineIconsPlusPlusIcon" showImage={false} maxWidth={250} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(V=(E=h.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,H,K;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    if (system === 'system-01') {
      return <Frame padding="lg">\r
          <Frame display="flex" direction="column" gap="xl">\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '18px',
              fontWeight: '600'
            }}>오늘의 면접 일정</h3>\r
              <Frame display="flex" direction="column" gap="md">\r
                <UniversalCard system={system} variant="filled" title="김도형" showBadge={true} badgeText="면접" badgeColor="primary" showDescription={true} description="레이다 신호처리/알고리즘 개발 채용" showCaption={true} captionText="면접 일정: 2025년 5월 20일 화요일 15:00 - 16:00" statusText="상태: 면접완료" showActionButton={true} buttonType="text-icon" buttonText="열람" buttonIcon="LineIconsCheckmarkCircleIcon" actionButton={{
                onClick: () => alert('면접 결과 열람')
              }} showImage={false} />\r
                \r
                <UniversalCard system={system} variant="filled" title="이수진" showBadge={true} badgeText="면접" badgeColor="primary" showDescription={true} description="프론트엔드 개발자 채용" showCaption={true} captionText="면접 일정: 2025년 5월 20일 화요일 16:30 - 17:30" statusText="상태: 진행중" showActionButton={true} buttonType="text-icon" buttonText="참가" buttonIcon="LineIconsVideoOnIcon" actionButton={{
                onClick: () => alert('화상 면접 참가')
              }} showImage={false} />\r
              </Frame>\r
            </div>\r
\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '18px',
              fontWeight: '600'
            }}>서류 심사 대기</h3>\r
              <Frame display="flex" direction="column" gap="md">\r
                <UniversalCard system={system} variant="filled" title="박민수" showBadge={true} badgeText="서류심사" badgeColor="warning" showDescription={true} description="백엔드 개발자 채용" showCaption={true} captionText="서류 제출: 2024년 12월 15일" statusText="상태: 심사중" showActionButton={true} buttonType="text-icon" buttonText="검토" buttonIcon="LineIconsFileTextIcon" actionButton={{
                onClick: () => alert('서류 검토')
              }} showImage={false} />\r
                \r
                <UniversalCard system={system} variant="filled" title="최영미" showBadge={true} badgeText="보완요청" badgeColor="error" showDescription={true} description="디자이너 채용" showCaption={true} captionText="포트폴리오 추가 제출 요청" statusText="상태: 서류 보완" showActionButton={true} buttonType="text-icon" buttonText="연락" buttonIcon="LineIconsPhonePhoneIcon" actionButton={{
                onClick: () => alert('지원자 연락')
              }} showImage={false} />\r
              </Frame>\r
            </div>\r
          </Frame>\r
        </Frame>;
    } else {
      return <Frame display="flex" direction="column" gap="xl">\r
          <Text variant="heading-2" color="primary-system02-1-rest">\r
            Interactive Product Cards (System-02)\r
          </Text>\r
          \r
          <Frame display="flex" direction="row" gap="lg">\r
            <UniversalCard system={system} variant="filled" title="Nike Air Max 2024" showDescription={true} description="NIKE" showCaption={true} captionText="$120.00" showActionButton={true} actionButton={{
            iconName: 'LineIconsPlusPlusIcon',
            onClick: () => alert('Nike Air Max added to cart!')
          }} showImage={true} imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center" onClick={() => console.log('Nike card clicked')} maxWidth={375} />\r
\r
            <UniversalCard system={system} variant="filled" title="Adidas Ultraboost 22" showDescription={true} description="ADIDAS" showCaption={true} captionText="$180.00" showActionButton={true} actionButton={{
            iconName: 'LineIconsPlusPlusIcon',
            onClick: () => alert('Adidas Ultraboost added to cart!')
          }} showImage={true} imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center" onClick={() => console.log('Adidas card clicked')} maxWidth={375} />\r
\r
            <UniversalCard system={system} variant="filled" title="Puma RS-X 2024" showDescription={true} description="PUMA" showCaption={true} captionText="$110.00" showActionButton={true} actionButton={{
            iconName: 'LineIconsPlusPlusIcon',
            onClick: () => alert('Puma RS-X added to cart!')
          }} showImage={true} imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center" onClick={() => console.log('Puma card clicked')} maxWidth={375} />\r
          </Frame>\r
        </Frame>;
    }
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var X,q,Y;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    if (system === 'system-01') {
      return <Frame display="flex" direction="column" gap="lg">\r
          <Text variant="heading-2">\r
            System-01 특화 기능 - Classic & Compact\r
          </Text>\r
          <Text variant="body-1">\r
            • 더 촘촘한 패딩과 간격 (md, sm 사용)<br />\r
            • 작은 border-radius (sm 사용)<br />\r
            • 컴팩트한 이미지 높이 (200px 기본)<br />\r
            • 작은 버튼 크기 (sm 기본)<br />\r
            • 기존 additionalInfo, statusText 호환성 유지<br />\r
            • 채용관리시스템에 최적화된 정보 표시\r
        </Text>\r
        \r
          <UniversalCard system={system} variant="filled" title="System-01 특화 카드" showBadge={true} badgeText="테스트" badgeColor="primary" showDescription={true} description="Classic & Compact 스타일" showCaption={true} captionText="촘촘한 간격과 작은 radius" statusText="상태: System-01 최적화" showActionButton={true} buttonType="text-icon" buttonText="액션" buttonIcon="LineIconsCheckmarkCircleIcon" showImage={false} />\r
        </Frame>;
    } else {
      return <Frame display="flex" direction="column" gap="lg">\r
          <Text variant="heading-2" color="primary-system02-1-rest">\r
            System-02 특화 기능 - Modern & Spacious\r
          </Text>\r
          <Text variant="body-1">\r
            • 넓은 패딩과 간격 (lg, xl 사용)<br />\r
            • 큰 border-radius (xl 사용)<br />\r
            • 큰 이미지 높이 (242px 기본)<br />\r
            • 큰 버튼 크기 (md 기본)<br />\r
            • 이미지 지원 (object-fit, object-position, aspect-ratio)<br />\r
            • 다양한 variant (filled, outlined, transparent)<br />\r
            • 상품 정보 표시에 최적화\r
          </Text>\r
          \r
          <Frame display="flex" direction="row" gap="lg">\r
            <UniversalCard system={system} variant="filled" title="System-02 특화 카드" showDescription={true} description="Modern & Spacious" showCaption={true} captionText="넓은 간격과 큰 radius" showActionButton={true} buttonType="text-icon" buttonText="Add" actionButton={{
            iconName: 'LineIconsPlusPlusIcon'
          }} showImage={true} imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center" maxWidth={300} />\r
\r
            <UniversalCard system={system} variant="outlined" title="Outlined with Shadow" showDescription={true} description="PREMIUM" showCaption={true} captionText="$299.00" showActionButton={true} buttonType="text-icon" buttonText="Buy" actionButton={{
            iconName: 'LineIconsPlusPlusIcon'
          }} showImage={true} imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center" maxWidth={300} />\r
        </Frame>\r
      </Frame>;
    }
  }
}`,...(Y=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var _,G,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    title: '컨트롤 테스트',
    showBadge: true,
    badgeText: '테스트',
    badgeColor: 'primary',
    showDescription: true,
    description: '컨트롤 패널에서 수정 가능한 카드입니다',
    showCaption: true,
    captionText: '추가 정보를 입력해보세요',
    statusText: '상태: 테스트중',
    showActionButton: true,
    buttonPosition: 'top-right',
    buttonType: 'icon-only',
    buttonText: '액션',
    showImage: false
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCard {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '컨트롤 패널에서 카드의 다양한 속성을 실시간으로 변경해보세요. 두 시스템 모두 동일한 기능을 제공하지만 스타일이 다릅니다.'
      }
    }
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const it=["Default","ProductCard","ProductCardWithImage","VariantComparison","WithBadge","WithImage","ButtonPositions","Variants","RealWorldExample","SystemSpecificFeatures","Interactive"];export{m as ButtonPositions,a as Default,g as Interactive,c as ProductCard,l as ProductCardWithImage,y as RealWorldExample,x as SystemSpecificFeatures,d as VariantComparison,h as Variants,u as WithBadge,p as WithImage,it as __namedExportsOrder,rt as default};

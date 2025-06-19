import{j as e}from"./react-vendor-BFNgaz96.js";import{a as W}from"./index.esm-ChTCnUjT.js";import{a as R}from"./index.esm-BNdFApZa.js";import{F as s,T as a}from"./index.esm-WYP67xav.js";const t=({system:l,...n})=>{if(l==="system-02"){const i=R;return e.jsx(i,{...n})}const r=W;return e.jsx(r,{...n})},D={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","transparent"],description:"버튼의 스타일 변형"},colorScheme:{control:"select",options:["primary","secondary","cta"],description:"버튼의 색상 테마"},buttonType:{control:"select",options:["text-only","text-icon","icon-only"],description:"버튼의 타입"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"버튼의 크기"},isFullWidth:{control:"boolean",description:"전체 너비 적용 여부"},textAlign:{control:"select",options:["left","center","right"],description:"full width일 때 텍스트 정렬 방식 (isFullWidth=true일 때만 적용)"},isLoading:{control:"boolean",description:"로딩 상태 여부"},isSelected:{control:"boolean",description:"선택 상태 여부"},disabled:{control:"boolean",description:"비활성화 여부"},leftIcon:{control:"select",options:["LineIconsArrowChevronRightIcon","LineIconsArrowArrow1RightIcon","SearchIcon","DownloadIcon"],description:"버튼의 왼쪽에 표시될 아이콘 이름"},rightIcon:{control:"select",options:["LineIconsArrowChevronRightIcon","LineIconsArrowArrow1RightIcon","SearchIcon","DownloadIcon"],description:"버튼의 오른쪽에 표시될 아이콘 이름"}}},c={args:{children:"버튼",variant:"filled",colorScheme:"primary",buttonType:"text-only",size:"md"},render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",{buttonType:i,...p}=l;let o={...p,system:r};return i==="text-only"?(o.leftIcon=void 0,o.rightIcon=void 0):i==="text-icon"?(o.leftIcon="LineIconsArrowChevronRightIcon",o.rightIcon=void 0):i==="icon-only"&&(o.leftIcon="LineIconsArrowChevronRightIcon",o.rightIcon=void 0,o.children=void 0,o["aria-label"]="아이콘 버튼"),e.jsx(t,{...o})}},d={render:l=>{const n={children:"Primary Button",variant:"filled",colorScheme:"primary",buttonType:"text-only",size:"md"};return e.jsxs(s,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색)"}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{...n,system:"system-01",colorScheme:"primary",children:"Primary"}),e.jsx(t,{...n,system:"system-01",colorScheme:"secondary",children:"Secondary"}),e.jsx(t,{...n,system:"system-01",colorScheme:"cta",children:"CTA"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색)"}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{...n,system:"system-02",colorScheme:"primary",children:"Primary"}),e.jsx(t,{...n,system:"system-02",colorScheme:"secondary",children:"Secondary"}),e.jsx(t,{...n,system:"system-02",colorScheme:"cta",children:"CTA"})]})]})]})}},m={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",i=r==="system-01"?"Clean & Efficient":"Modern & Friendly",p=r==="system-01"?"(파란색)":"(초록색/오렌지)";return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[i," ",p]}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{system:r,variant:"filled",colorScheme:"primary",children:"Primary Filled"}),e.jsx(t,{system:r,variant:"outlined",colorScheme:"primary",children:"Primary Outlined"}),e.jsx(t,{system:r,variant:"transparent",colorScheme:"primary",children:"Primary Transparent"})]}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{system:r,variant:"filled",colorScheme:"secondary",children:"Secondary Filled"}),e.jsx(t,{system:r,variant:"outlined",colorScheme:"secondary",children:"Secondary Outlined"}),e.jsx(t,{system:r,variant:"transparent",colorScheme:"secondary",children:"Secondary Transparent"})]}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{system:r,variant:"filled",colorScheme:"cta",children:"CTA Filled"}),e.jsx(t,{system:r,variant:"outlined",colorScheme:"cta",children:"CTA Outlined"}),e.jsx(t,{system:r,variant:"transparent",colorScheme:"cta",children:"CTA Transparent"})]})]})}},y={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",i=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[i," - Button States"]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"Normal States"}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{system:r,children:"Normal"}),e.jsx(t,{system:r,isLoading:!0,children:"Loading"}),e.jsx(t,{system:r,isSelected:!0,children:"Selected"}),e.jsx(t,{system:r,disabled:!0,children:"Disabled"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"With Icons"}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",children:[e.jsx(t,{system:r,leftIcon:"LineIconsArrowChevronRightIcon",children:"Left Icon"}),e.jsx(t,{system:r,rightIcon:"LineIconsArrowChevronRightIcon",children:"Right Icon"}),e.jsx(t,{system:r,leftIcon:"LineIconsArrowChevronRightIcon","aria-label":"Icon Only"})]})]})]})}},h={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",i=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",width:"400px",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[i," - Full Width Text Alignment"]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"Text Only Buttons"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(t,{system:r,isFullWidth:!0,textAlign:"left",children:"Left Aligned"}),e.jsx(t,{system:r,isFullWidth:!0,textAlign:"center",children:"Center Aligned"}),e.jsx(t,{system:r,isFullWidth:!0,textAlign:"right",children:"Right Aligned"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"With Icons"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(t,{system:r,isFullWidth:!0,textAlign:"left",leftIcon:"LineIconsArrowArrow1LeftIcon",children:"← Back"}),e.jsx(t,{system:r,isFullWidth:!0,textAlign:"center",leftIcon:"SearchIcon",children:"Search"}),e.jsx(t,{system:r,isFullWidth:!0,textAlign:"right",rightIcon:"LineIconsArrowArrow1RightIcon",children:"Next →"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"Different Variants"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(t,{system:r,variant:"filled",isFullWidth:!0,textAlign:"left",children:"Filled Left"}),e.jsx(t,{system:r,variant:"outlined",isFullWidth:!0,textAlign:"center",children:"Outlined Center"}),e.jsx(t,{system:r,variant:"transparent",isFullWidth:!0,textAlign:"right",children:"Transparent Right"})]})]})]})}},u={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",i=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[i," - Button Sizes"]}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",align:"center",children:[e.jsx(t,{system:r,size:"xs",children:"Extra Small"}),e.jsx(t,{system:r,size:"sm",children:"Small"}),e.jsx(t,{system:r,size:"md",children:"Medium"}),e.jsx(t,{system:r,size:"lg",children:"Large"}),e.jsx(t,{system:r,size:"xl",children:"Extra Large"})]}),e.jsxs(s,{display:"flex",direction:"row",gap:"sm",align:"center",children:[e.jsx(t,{system:r,size:"xs",buttonType:"icon-only",leftIcon:"SearchIcon","aria-label":"검색"}),e.jsx(t,{system:r,size:"sm",buttonType:"icon-only",leftIcon:"SearchIcon","aria-label":"검색"}),e.jsx(t,{system:r,size:"md",buttonType:"icon-only",leftIcon:"SearchIcon","aria-label":"검색"}),e.jsx(t,{system:r,size:"lg",buttonType:"icon-only",leftIcon:"SearchIcon","aria-label":"검색"}),e.jsx(t,{system:r,size:"xl",buttonType:"icon-only",leftIcon:"SearchIcon","aria-label":"검색"})]})]})}};var x,g,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-only',
    size: 'md'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const {
      buttonType,
      ...rest
    } = args;
    let renderProps = {
      ...rest,
      system
    };

    // 버튼 타입에 따른 아이콘 표시 로직
    if (buttonType === 'text-only') {
      renderProps.leftIcon = undefined;
      renderProps.rightIcon = undefined;
    } else if (buttonType === 'text-icon') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
    } else if (buttonType === 'icon-only') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
      renderProps.children = undefined;
      renderProps['aria-label'] = '아이콘 버튼';
    }
    return <UniversalButton {...renderProps} />;
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,I,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const baseProps = {
      children: 'Primary Button',
      variant: 'filled' as const,
      colorScheme: 'primary' as const,
      buttonType: 'text-only' as const,
      size: 'md' as const
    };
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 01 - Clean & Efficient (파란색)\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm">\r
            <UniversalButton {...baseProps} system="system-01" colorScheme="primary">Primary</UniversalButton>\r
            <UniversalButton {...baseProps} system="system-01" colorScheme="secondary">Secondary</UniversalButton>\r
            <UniversalButton {...baseProps} system="system-01" colorScheme="cta">CTA</UniversalButton>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 02 - Modern & Friendly (초록색)\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm">\r
            <UniversalButton {...baseProps} system="system-02" colorScheme="primary">Primary</UniversalButton>\r
            <UniversalButton {...baseProps} system="system-02" colorScheme="secondary">Secondary</UniversalButton>\r
            <UniversalButton {...baseProps} system="system-02" colorScheme="cta">CTA</UniversalButton>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var F,B,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const systemColors = system === 'system-01' ? '(파란색)' : '(초록색/오렌지)';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} {systemColors}\r
        </Text>\r
        \r
        <Frame display="flex" direction="row" gap="sm">\r
          <UniversalButton system={system} variant="filled" colorScheme="primary">Primary Filled</UniversalButton>\r
          <UniversalButton system={system} variant="outlined" colorScheme="primary">Primary Outlined</UniversalButton>\r
          <UniversalButton system={system} variant="transparent" colorScheme="primary">Primary Transparent</UniversalButton>\r
        </Frame>\r
        <Frame display="flex" direction="row" gap="sm">\r
          <UniversalButton system={system} variant="filled" colorScheme="secondary">Secondary Filled</UniversalButton>\r
          <UniversalButton system={system} variant="outlined" colorScheme="secondary">Secondary Outlined</UniversalButton>\r
          <UniversalButton system={system} variant="transparent" colorScheme="secondary">Secondary Transparent</UniversalButton>\r
        </Frame>\r
        <Frame display="flex" direction="row" gap="sm">\r
          <UniversalButton system={system} variant="filled" colorScheme="cta">CTA Filled</UniversalButton>\r
          <UniversalButton system={system} variant="outlined" colorScheme="cta">CTA Outlined</UniversalButton>\r
          <UniversalButton system={system} variant="transparent" colorScheme="cta">CTA Transparent</UniversalButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...(j=(B=m.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var U,T,A;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Button States\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">\r
            Normal States\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm">\r
            <UniversalButton system={system}>Normal</UniversalButton>\r
            <UniversalButton system={system} isLoading>Loading</UniversalButton>\r
            <UniversalButton system={system} isSelected>Selected</UniversalButton>\r
            <UniversalButton system={system} disabled>Disabled</UniversalButton>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">\r
            With Icons\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm">\r
            <UniversalButton system={system} leftIcon="LineIconsArrowChevronRightIcon">Left Icon</UniversalButton>\r
            <UniversalButton system={system} rightIcon="LineIconsArrowChevronRightIcon">Right Icon</UniversalButton>\r
            <UniversalButton system={system} leftIcon="LineIconsArrowChevronRightIcon" aria-label="Icon Only" />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(A=(T=y.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var w,C,b;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" width="400px">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Full Width Text Alignment\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">\r
            Text Only Buttons\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalButton system={system} isFullWidth textAlign="left">Left Aligned</UniversalButton>\r
            <UniversalButton system={system} isFullWidth textAlign="center">Center Aligned</UniversalButton>\r
            <UniversalButton system={system} isFullWidth textAlign="right">Right Aligned</UniversalButton>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">\r
            With Icons\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalButton system={system} isFullWidth textAlign="left" leftIcon="LineIconsArrowArrow1LeftIcon">← Back</UniversalButton>\r
            <UniversalButton system={system} isFullWidth textAlign="center" leftIcon="SearchIcon">Search</UniversalButton>\r
            <UniversalButton system={system} isFullWidth textAlign="right" rightIcon="LineIconsArrowArrow1RightIcon">Next →</UniversalButton>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">\r
            Different Variants\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalButton system={system} variant="filled" isFullWidth textAlign="left">Filled Left</UniversalButton>\r
            <UniversalButton system={system} variant="outlined" isFullWidth textAlign="center">Outlined Center</UniversalButton>\r
            <UniversalButton system={system} variant="transparent" isFullWidth textAlign="right">Transparent Right</UniversalButton>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(b=(C=h.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var L,P,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Button Sizes\r
        </Text>\r
        \r
        <Frame display="flex" direction="row" gap="sm" align="center">\r
          <UniversalButton system={system} size="xs">Extra Small</UniversalButton>\r
          <UniversalButton system={system} size="sm">Small</UniversalButton>\r
          <UniversalButton system={system} size="md">Medium</UniversalButton>\r
          <UniversalButton system={system} size="lg">Large</UniversalButton>\r
          <UniversalButton system={system} size="xl">Extra Large</UniversalButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="row" gap="sm" align="center">\r
          <UniversalButton system={system} size="xs" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />\r
          <UniversalButton system={system} size="sm" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />\r
          <UniversalButton system={system} size="md" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />\r
          <UniversalButton system={system} size="lg" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />\r
          <UniversalButton system={system} size="xl" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />\r
        </Frame>\r
      </Frame>;
  }
}`,...(z=(P=u.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const V=["Default","SystemComparison","VariantShowcase","StateShowcase","FullWidthAlignment","SizeShowcase"];export{c as Default,h as FullWidthAlignment,u as SizeShowcase,y as StateShowcase,d as SystemComparison,m as VariantShowcase,V as __namedExportsOrder,D as default};

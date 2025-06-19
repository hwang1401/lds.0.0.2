import{j as e}from"./react-vendor-BFNgaz96.js";import{B as b}from"./index.esm-ChTCnUjT.js";import{B as M}from"./index.esm-BNdFApZa.js";import{F as n}from"./index.esm-WYP67xav.js";const D={"system-01":b,"system-02":M},s=({system:t,...o})=>{const r=D[t]||b;return e.jsx(r,{...o})},G={title:"Components/Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"배지 크기"},color:{control:{type:"select"},options:["primary","secondary","cta","error","warning"],description:"배지 색상"},layout:{control:{type:"select"},options:["only text","text+icon","only icon"],description:"배지 레이아웃"},text:{control:{type:"text"},description:"배지 텍스트"},iconName:{control:{type:"select"},options:["LineIconsStarFilledIcon","LineIconsCheckmarkCheckmarkIcon","LineIconsCloseCloseIcon","WarningIcon","InfoIcon","SuccessIcon"],description:"아이콘 이름"}}},a={args:{size:"md",color:"primary",layout:"only text",text:"배지"},render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsx(s,{...t,system:r})}},i={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"크기별 배지"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{size:"sm",color:"primary",text:"Small",system:r}),e.jsx(s,{size:"md",color:"primary",text:"Medium",system:r}),e.jsx(s,{size:"lg",color:"primary",text:"Large",system:r})]})]})}},c={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"색상별 배지"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{color:"primary",text:"Primary",system:r}),e.jsx(s,{color:"secondary",text:"Secondary",system:r}),e.jsx(s,{color:"cta",text:"CTA",system:r}),e.jsx(s,{color:"error",text:"Error",system:r}),e.jsx(s,{color:"warning",text:"Warning",system:r})]})]})}},l={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"lg",direction:"column",children:[e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"텍스트만"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"only text",color:"primary",text:"Text Only",system:r}),e.jsx(s,{layout:"only text",color:"secondary",text:"Text Only",system:r}),e.jsx(s,{layout:"only text",color:"error",text:"Text Only",system:r})]})]}),e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"아이콘 + 텍스트"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"text+icon",color:"primary",text:"Success",iconName:"SuccessIcon",system:r}),e.jsx(s,{layout:"text+icon",color:"warning",text:"Warning",iconName:"WarningIcon",system:r}),e.jsx(s,{layout:"text+icon",color:"secondary",text:"Info",iconName:"InfoIcon",system:r})]})]}),e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"아이콘만"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"only icon",color:"primary",iconName:"LineIconsStarFilledIcon",system:r}),e.jsx(s,{layout:"only icon",color:"secondary",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r}),e.jsx(s,{layout:"only icon",color:"error",iconName:"LineIconsCloseCloseIcon",system:r})]})]})]})}},m={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"md",direction:"column",children:[e.jsx("h3",{children:"긴 텍스트가 있는 배지"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"column",children:[e.jsx(s,{color:"primary",text:"This is a very long badge text that might wrap",system:r}),e.jsx(s,{layout:"text+icon",color:"secondary",text:"Long text with icon",iconName:"InfoIcon",system:r})]})]})}},d={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"lg",direction:"column",children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px",color:"var(--semantic-color-secondary-foreground-1)"},children:"Primary 배지들"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"column",children:[e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"텍스트만:"}),e.jsx(s,{color:"primary",text:"기본 상태",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘+텍스트:"}),e.jsx(s,{layout:"text+icon",color:"primary",text:"성공",iconName:"LineIconsStarFilledIcon",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘만:"}),e.jsx(s,{layout:"only icon",color:"primary",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px",color:"var(--semantic-color-secondary-foreground-1)"},children:"Warning 배지들"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"column",children:[e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"텍스트만:"}),e.jsx(s,{color:"warning",text:"경고",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘+텍스트:"}),e.jsx(s,{layout:"text+icon",color:"warning",text:"주의",iconName:"LineIconsCloseCloseIcon",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘만:"}),e.jsx(s,{layout:"only icon",color:"warning",iconName:"WarningIcon",system:r})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px",color:"var(--semantic-color-secondary-foreground-1)"},children:"Error 배지들"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"column",children:[e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"텍스트만:"}),e.jsx(s,{color:"error",text:"에러",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘+텍스트:"}),e.jsx(s,{layout:"text+icon",color:"error",text:"실패",iconName:"LineIconsStarFilledIcon",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘+텍스트:"}),e.jsx(s,{layout:"text+icon",color:"error",text:"확인",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r})]}),e.jsxs("div",{children:[e.jsx("span",{style:{display:"inline-block",width:"120px",fontSize:"14px",color:"var(--semantic-color-secondary-foreground-2)"},children:"아이콘만:"}),e.jsx(s,{layout:"only icon",color:"error",iconName:"LineIconsCloseCloseIcon",system:r})]})]})]})]})}},y={render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsxs(n,{display:"flex",gap:"lg",direction:"column",children:[e.jsx("h3",{children:"모든 크기와 색상 조합"}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Small 크기"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",style:{flexWrap:"wrap"},children:[e.jsx(s,{size:"sm",color:"primary",text:"Primary",system:r}),e.jsx(s,{size:"sm",color:"secondary",text:"Secondary",system:r}),e.jsx(s,{size:"sm",color:"cta",text:"CTA",system:r}),e.jsx(s,{size:"sm",color:"error",text:"Error",system:r}),e.jsx(s,{size:"sm",color:"warning",text:"Warning",system:r})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Medium 크기"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",style:{flexWrap:"wrap"},children:[e.jsx(s,{size:"md",color:"primary",text:"Primary",system:r}),e.jsx(s,{size:"md",color:"secondary",text:"Secondary",system:r}),e.jsx(s,{size:"md",color:"cta",text:"CTA",system:r}),e.jsx(s,{size:"md",color:"error",text:"Error",system:r}),e.jsx(s,{size:"md",color:"warning",text:"Warning",system:r})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Large 크기"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",style:{flexWrap:"wrap"},children:[e.jsx(s,{size:"lg",color:"primary",text:"Primary",system:r}),e.jsx(s,{size:"lg",color:"secondary",text:"Secondary",system:r}),e.jsx(s,{size:"lg",color:"cta",text:"CTA",system:r}),e.jsx(s,{size:"lg",color:"error",text:"Error",system:r}),e.jsx(s,{size:"lg",color:"warning",text:"Warning",system:r})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"아이콘과 함께"}),e.jsxs(n,{display:"flex",gap:"sm",direction:"column",children:[e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"text+icon",size:"sm",color:"warning",text:"경고",iconName:"WarningIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"md",color:"warning",text:"경고",iconName:"WarningIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"lg",color:"warning",text:"경고",iconName:"WarningIcon",system:r})]}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"text+icon",size:"sm",color:"secondary",text:"정보",iconName:"InfoIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"md",color:"secondary",text:"정보",iconName:"InfoIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"lg",color:"secondary",text:"정보",iconName:"InfoIcon",system:r})]}),e.jsxs(n,{display:"flex",gap:"sm",direction:"row",children:[e.jsx(s,{layout:"text+icon",size:"sm",color:"primary",text:"성공",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"md",color:"primary",text:"성공",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r}),e.jsx(s,{layout:"text+icon",size:"lg",color:"primary",text:"성공",iconName:"LineIconsCheckmarkCheckmarkIcon",system:r})]})]})]})]})}},x={args:{layout:"text+icon",color:"primary",text:"새로운",iconName:"LineIconsStarFilledIcon",size:"md"},render:(t,{globals:o})=>{const r=(o==null?void 0:o.system)||"system-01";return e.jsx(s,{...t,system:r})}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary',
    layout: 'only text',
    text: '배지'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalBadge {...args} system={system} />;
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,v,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="md" direction="column">\r
        <h3>크기별 배지</h3>\r
        <Frame display="flex" gap="sm" direction="row">\r
          <UniversalBadge size="sm" color="primary" text="Small" system={system} />\r
          <UniversalBadge size="md" color="primary" text="Medium" system={system} />\r
          <UniversalBadge size="lg" color="primary" text="Large" system={system} />\r
        </Frame>\r
      </Frame>;
  }
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,I,z;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="md" direction="column">\r
        <h3>색상별 배지</h3>\r
        <Frame display="flex" gap="sm" direction="row">\r
          <UniversalBadge color="primary" text="Primary" system={system} />\r
          <UniversalBadge color="secondary" text="Secondary" system={system} />\r
          <UniversalBadge color="cta" text="CTA" system={system} />\r
          <UniversalBadge color="error" text="Error" system={system} />\r
          <UniversalBadge color="warning" text="Warning" system={system} />\r
        </Frame>\r
      </Frame>;
  }
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var B,w,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="lg" direction="column">\r
        <Frame display="flex" gap="md" direction="column">\r
          <h3>텍스트만</h3>\r
          <Frame display="flex" gap="sm" direction="row">\r
            <UniversalBadge layout="only text" color="primary" text="Text Only" system={system} />\r
            <UniversalBadge layout="only text" color="secondary" text="Text Only" system={system} />\r
            <UniversalBadge layout="only text" color="error" text="Text Only" system={system} />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" gap="md" direction="column">\r
          <h3>아이콘 + 텍스트</h3>\r
          <Frame display="flex" gap="sm" direction="row">\r
            <UniversalBadge layout="text+icon" color="primary" text="Success" iconName="SuccessIcon" system={system} />\r
            <UniversalBadge layout="text+icon" color="warning" text="Warning" iconName="WarningIcon" system={system} />\r
            <UniversalBadge layout="text+icon" color="secondary" text="Info" iconName="InfoIcon" system={system} />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" gap="md" direction="column">\r
          <h3>아이콘만</h3>\r
          <Frame display="flex" gap="sm" direction="row">\r
            <UniversalBadge layout="only icon" color="primary" iconName="LineIconsStarFilledIcon" system={system} />\r
            <UniversalBadge layout="only icon" color="secondary" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
            <UniversalBadge layout="only icon" color="error" iconName="LineIconsCloseCloseIcon" system={system} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var F,S,U;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="md" direction="column">\r
        <h3>긴 텍스트가 있는 배지</h3>\r
        <Frame display="flex" gap="sm" direction="column">\r
          <UniversalBadge color="primary" text="This is a very long badge text that might wrap" system={system} />\r
          <UniversalBadge layout="text+icon" color="secondary" text="Long text with icon" iconName="InfoIcon" system={system} />\r
        </Frame>\r
      </Frame>;
  }
}`,...(U=(S=m.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var C,N,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="lg" direction="column">\r
        <div>\r
          <h4 style={{
          marginBottom: '12px',
          color: 'var(--semantic-color-secondary-foreground-1)'
        }}>Primary 배지들</h4>\r
          <Frame display="flex" gap="sm" direction="column">\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>텍스트만:</span>\r
              <UniversalBadge color="primary" text="기본 상태" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘+텍스트:</span>\r
              <UniversalBadge layout="text+icon" color="primary" text="성공" iconName="LineIconsStarFilledIcon" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘만:</span>\r
              <UniversalBadge layout="only icon" color="primary" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
            </div>\r
          </Frame>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: '12px',
          color: 'var(--semantic-color-secondary-foreground-1)'
        }}>Warning 배지들</h4>\r
          <Frame display="flex" gap="sm" direction="column">\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>텍스트만:</span>\r
              <UniversalBadge color="warning" text="경고" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘+텍스트:</span>\r
              <UniversalBadge layout="text+icon" color="warning" text="주의" iconName="LineIconsCloseCloseIcon" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘만:</span>\r
              <UniversalBadge layout="only icon" color="warning" iconName="WarningIcon" system={system} />\r
            </div>\r
          </Frame>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: '12px',
          color: 'var(--semantic-color-secondary-foreground-1)'
        }}>Error 배지들</h4>\r
          <Frame display="flex" gap="sm" direction="column">\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>텍스트만:</span>\r
              <UniversalBadge color="error" text="에러" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘+텍스트:</span>\r
              <UniversalBadge layout="text+icon" color="error" text="실패" iconName="LineIconsStarFilledIcon" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘+텍스트:</span>\r
              <UniversalBadge layout="text+icon" color="error" text="확인" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
            </div>\r
            <div>\r
              <span style={{
              display: 'inline-block',
              width: '120px',
              fontSize: '14px',
              color: 'var(--semantic-color-secondary-foreground-2)'
            }}>아이콘만:</span>\r
              <UniversalBadge layout="only icon" color="error" iconName="LineIconsCloseCloseIcon" system={system} />\r
            </div>\r
          </Frame>\r
        </div>\r
      </Frame>;
  }
}`,...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,T,E;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Frame display="flex" gap="lg" direction="column">\r
        <h3>모든 크기와 색상 조합</h3>\r
        \r
        <div>\r
          <h4 style={{
          marginBottom: '12px'
        }}>Small 크기</h4>\r
          <Frame display="flex" gap="sm" direction="row" style={{
          flexWrap: 'wrap'
        }}>\r
            <UniversalBadge size="sm" color="primary" text="Primary" system={system} />\r
            <UniversalBadge size="sm" color="secondary" text="Secondary" system={system} />\r
            <UniversalBadge size="sm" color="cta" text="CTA" system={system} />\r
            <UniversalBadge size="sm" color="error" text="Error" system={system} />\r
            <UniversalBadge size="sm" color="warning" text="Warning" system={system} />\r
          </Frame>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: '12px'
        }}>Medium 크기</h4>\r
          <Frame display="flex" gap="sm" direction="row" style={{
          flexWrap: 'wrap'
        }}>\r
            <UniversalBadge size="md" color="primary" text="Primary" system={system} />\r
            <UniversalBadge size="md" color="secondary" text="Secondary" system={system} />\r
            <UniversalBadge size="md" color="cta" text="CTA" system={system} />\r
            <UniversalBadge size="md" color="error" text="Error" system={system} />\r
            <UniversalBadge size="md" color="warning" text="Warning" system={system} />\r
          </Frame>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: '12px'
        }}>Large 크기</h4>\r
          <Frame display="flex" gap="sm" direction="row" style={{
          flexWrap: 'wrap'
        }}>\r
            <UniversalBadge size="lg" color="primary" text="Primary" system={system} />\r
            <UniversalBadge size="lg" color="secondary" text="Secondary" system={system} />\r
            <UniversalBadge size="lg" color="cta" text="CTA" system={system} />\r
            <UniversalBadge size="lg" color="error" text="Error" system={system} />\r
            <UniversalBadge size="lg" color="warning" text="Warning" system={system} />\r
          </Frame>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: '12px'
        }}>아이콘과 함께</h4>\r
          <Frame display="flex" gap="sm" direction="column">\r
            <Frame display="flex" gap="sm" direction="row">\r
              <UniversalBadge layout="text+icon" size="sm" color="warning" text="경고" iconName="WarningIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="md" color="warning" text="경고" iconName="WarningIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="lg" color="warning" text="경고" iconName="WarningIcon" system={system} />\r
            </Frame>\r
            <Frame display="flex" gap="sm" direction="row">\r
              <UniversalBadge layout="text+icon" size="sm" color="secondary" text="정보" iconName="InfoIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="md" color="secondary" text="정보" iconName="InfoIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="lg" color="secondary" text="정보" iconName="InfoIcon" system={system} />\r
            </Frame>\r
            <Frame display="flex" gap="sm" direction="row">\r
              <UniversalBadge layout="text+icon" size="sm" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="md" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
              <UniversalBadge layout="text+icon" size="lg" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />\r
            </Frame>\r
          </Frame>\r
        </div>\r
      </Frame>;
  }
}`,...(E=(T=y.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var A,P,O;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    layout: 'text+icon',
    color: 'primary',
    text: '새로운',
    iconName: 'LineIconsStarFilledIcon',
    size: 'md'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalBadge {...args} system={system} />;
  }
}`,...(O=(P=x.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const H=["Default","Sizes","Colors","Layouts","WithLongText","InteractiveStates","AllSizesAndColors","UsageExamples"];export{y as AllSizesAndColors,c as Colors,a as Default,d as InteractiveStates,l as Layouts,i as Sizes,x as UsageExamples,m as WithLongText,H as __namedExportsOrder,G as default};

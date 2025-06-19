import{j as e}from"./react-vendor-BFNgaz96.js";import{S as i,F as t}from"./index.esm-WYP67xav.js";import{f as E}from"./index.esm-ChTCnUjT.js";import{f as W}from"./index.esm-BNdFApZa.js";const Y={"system-01":E,"system-02":W},s=({system:r,...R})=>{const B=Y[r];return e.jsx(B,{...R})},$={title:"components/TextDisplay",component:s,parameters:{layout:"centered",docs:{description:{component:`
Universal TextDisplay 컴포넌트는 System-01과 System-02의 TextDisplay를 통합하여 제공합니다.
다양한 텍스트 요소들을 조합하여 표시하는 컴파운드 컴포넌트입니다.

### 시스템별 특징
- **System-01**: Professional & Clean - 파란색 계열, 각진 디자인
- **System-02**: Friendly & Bright - 보라색 계열, 둥근 디자인

### 주요 기능
- **Boolean 기반 제어**: 각 텍스트 요소를 boolean으로 on/off 제어
- **다양한 크기**: xsm, sm, md, lg, xlg 5단계 크기
- **정렬 옵션**: left, center 정렬 지원
- **아이콘 위치**: none, before, after, above 4가지 위치
        `}}},argTypes:{system:{control:"select",options:["system-01","system-02"],description:"사용할 디자인 시스템 선택"},size:{control:"select",options:["xsm","sm","md","lg","xlg"],description:"텍스트 디스플레이의 크기"},style:{control:"select",options:["left","center"],description:"텍스트 정렬 스타일"},iconPosition:{control:"select",options:["none","before","after","above"],description:"아이콘의 위치"},iconName:{control:"select",options:["LineIconsCheckmarkCircleIcon","LineIconsStarFilledIcon","InfoIcon","LineIconsAlertTriangleIcon","GiftIcon","HeartIcon"],description:"사용할 아이콘 이름"},iconType:{control:"select",options:["line","flat"],description:"아이콘 타입"},showLabel:{control:"boolean",description:"라벨 텍스트 표시 여부"},labelText:{control:"text",description:"라벨 텍스트 내용"},primaryText:{control:"text",description:"메인 텍스트 내용"},showDescription:{control:"boolean",description:"설명 텍스트 표시 여부"},descriptionText:{control:"text",description:"설명 텍스트 내용"},showCaption:{control:"boolean",description:"캡션 텍스트 표시 여부"},captionText:{control:"text",description:"캡션 텍스트 내용"}},tags:["autodocs"]},o={args:{system:"system-01",primaryText:"Hello World",size:"md",style:"left",iconPosition:"none"}},n={args:{system:"system-01",size:"lg",style:"left",iconPosition:"before",iconName:"LineIconsCheckmarkCircleIcon",iconType:"flat",showLabel:!0,labelText:"Success",primaryText:"Operation Completed",showDescription:!0,descriptionText:"Your task has been successfully completed without any errors.",showCaption:!0,captionText:"Completed at 2024-01-01 14:30"}},a={args:{system:"system-02",size:"xlg",style:"center",iconPosition:"above",iconName:"LineIconsStarFilledIcon",iconType:"flat",showLabel:!0,labelText:"Achievement",primaryText:"Congratulations!",showDescription:!0,descriptionText:"You have successfully completed all tasks.",showCaption:!0,captionText:"Level up!"}},c={args:{system:"system-01",primaryText:"Size Comparison"},render:r=>e.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",style:{minHeight:"400px",width:"600px"},children:e.jsx(t,{display:"flex",padding:"lg",align:"center",justify:"center",fill:!0,children:e.jsxs(t,{display:"flex",direction:"column",gap:"xl",align:"center",children:[e.jsx(s,{...r,size:"xlg",primaryText:"Extra Large (xlg)",showDescription:!0,descriptionText:"Hero-1 크기의 텍스트"}),e.jsx(s,{...r,size:"lg",primaryText:"Large (lg)",showDescription:!0,descriptionText:"Heading-1 크기의 텍스트"}),e.jsx(s,{...r,size:"md",primaryText:"Medium (md)",showDescription:!0,descriptionText:"Heading-2 크기의 텍스트"}),e.jsx(s,{...r,size:"sm",primaryText:"Small (sm)",showDescription:!0,descriptionText:"Body-2 크기의 텍스트"}),e.jsx(s,{...r,size:"xsm",primaryText:"Extra Small (xsm)",showDescription:!0,descriptionText:"Caption-1 크기의 텍스트"})]})})})},l={args:{system:"system-02",primaryText:"Icon Positions"},render:r=>e.jsx(i,{background:"secondary-system02-1-rest",borderRadius:"md",style:{minHeight:"300px",width:"700px"},children:e.jsx(t,{display:"flex",padding:"lg",align:"center",justify:"center",fill:!0,children:e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(t,{display:"flex",direction:"row",gap:"lg",children:[e.jsx(s,{...r,iconPosition:"none",primaryText:"No Icon",showDescription:!0,descriptionText:"아이콘 없음"}),e.jsx(s,{...r,iconPosition:"before",iconName:"InfoIcon",primaryText:"Icon Before",showDescription:!0,descriptionText:"아이콘이 앞에"})]}),e.jsxs(t,{display:"flex",direction:"row",gap:"lg",children:[e.jsx(s,{...r,iconPosition:"after",iconName:"InfoIcon",primaryText:"Icon After",showDescription:!0,descriptionText:"아이콘이 뒤에"}),e.jsx(s,{...r,style:"center",iconPosition:"above",iconName:"InfoIcon",primaryText:"Icon Above",showDescription:!0,descriptionText:"아이콘이 위에"})]})]})})})},p={args:{system:"system-01"},render:r=>e.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",style:{minHeight:"300px",width:"800px"},children:e.jsx(t,{display:"flex",padding:"lg",align:"center",justify:"center",fill:!0,children:e.jsxs(t,{display:"flex",direction:"row",gap:"xl",align:"flex-start",children:[e.jsx(t,{display:"flex",direction:"column",gap:"md",style:{flex:1},children:e.jsx(s,{...r,style:"left",iconPosition:"before",iconName:"LineIconsCheckmarkCircleIcon",showLabel:!0,labelText:"Left Aligned",primaryText:"좌측 정렬",showDescription:!0,descriptionText:"텍스트가 왼쪽으로 정렬됩니다.",showCaption:!0,captionText:"Left alignment example"})}),e.jsx(t,{display:"flex",direction:"column",gap:"md",style:{flex:1},children:e.jsx(s,{...r,style:"center",iconPosition:"above",iconName:"LineIconsStarFilledIcon",showLabel:!0,labelText:"Center Aligned",primaryText:"중앙 정렬",showDescription:!0,descriptionText:"텍스트가 중앙으로 정렬됩니다.",showCaption:!0,captionText:"Center alignment example"})})]})})})},m={args:{size:"lg",iconPosition:"before",iconName:"LineIconsCheckmarkCircleIcon",iconType:"flat",showLabel:!0,labelText:"System",primaryText:"Design System",showDescription:!0,descriptionText:"각 시스템의 고유한 스타일을 확인해보세요.",showCaption:!0,captionText:"System comparison"},render:r=>e.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",style:{minHeight:"300px",width:"800px"},children:e.jsx(t,{display:"flex",padding:"lg",align:"center",justify:"center",fill:!0,children:e.jsxs(t,{display:"flex",direction:"row",gap:"xl",align:"flex-start",children:[e.jsxs(t,{display:"flex",direction:"column",gap:"md",style:{flex:1},children:[e.jsx(i,{background:"secondary-system01-2-rest",borderRadius:"sm",style:{padding:"16px"},children:e.jsx(s,{...r,system:"system-01"})}),e.jsx("div",{style:{textAlign:"center",fontSize:"14px",color:"var(--foundation-foundation-color-grey-light-40)"},children:"System-01: Professional & Clean"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",style:{flex:1},children:[e.jsx(i,{background:"secondary-system02-2-rest",borderRadius:"sm",style:{padding:"16px"},children:e.jsx(s,{...r,system:"system-02"})}),e.jsx("div",{style:{textAlign:"center",fontSize:"14px",color:"var(--foundation-foundation-color-grey-light-40)"},children:"System-02: Friendly & Bright"})]})]})})})},d={args:{system:"system-01",size:"md",style:"left",iconPosition:"before",iconName:"LineIconsCheckmarkCircleIcon",iconType:"line",showLabel:!0,labelText:"Interactive",primaryText:"Text Display",showDescription:!0,descriptionText:"Controls에서 속성을 변경해보세요.",showCaption:!0,captionText:"Try changing the controls above"}};var x,y,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    primaryText: 'Hello World',
    size: 'md',
    style: 'left',
    iconPosition: 'none'
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,f,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    size: 'lg',
    style: 'left',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'Success',
    primaryText: 'Operation Completed',
    showDescription: true,
    descriptionText: 'Your task has been successfully completed without any errors.',
    showCaption: true,
    captionText: 'Completed at 2024-01-01 14:30'
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var h,b,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    system: 'system-02',
    size: 'xlg',
    style: 'center',
    iconPosition: 'above',
    iconName: 'LineIconsStarFilledIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'Achievement',
    primaryText: 'Congratulations!',
    showDescription: true,
    descriptionText: 'You have successfully completed all tasks.',
    showCaption: true,
    captionText: 'Level up!'
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var I,C,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    primaryText: 'Size Comparison'
  },
  render: args => <Surface background="secondary-system01-1-rest" borderRadius="md" style={{
    minHeight: '400px',
    width: '600px'
  }}>\r
      <Frame display="flex" padding="lg" align="center" justify="center" fill>\r
        <Frame display="flex" direction="column" gap="xl" align="center">\r
          <UniversalTextDisplay {...args} size="xlg" primaryText="Extra Large (xlg)" showDescription descriptionText="Hero-1 크기의 텍스트" />\r
          <UniversalTextDisplay {...args} size="lg" primaryText="Large (lg)" showDescription descriptionText="Heading-1 크기의 텍스트" />\r
          <UniversalTextDisplay {...args} size="md" primaryText="Medium (md)" showDescription descriptionText="Heading-2 크기의 텍스트" />\r
          <UniversalTextDisplay {...args} size="sm" primaryText="Small (sm)" showDescription descriptionText="Body-2 크기의 텍스트" />\r
          <UniversalTextDisplay {...args} size="xsm" primaryText="Extra Small (xsm)" showDescription descriptionText="Caption-1 크기의 텍스트" />\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,v,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    system: 'system-02',
    primaryText: 'Icon Positions'
  },
  render: args => <Surface background="secondary-system02-1-rest" borderRadius="md" style={{
    minHeight: '300px',
    width: '700px'
  }}>\r
      <Frame display="flex" padding="lg" align="center" justify="center" fill>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <Frame display="flex" direction="row" gap="lg">\r
            <UniversalTextDisplay {...args} iconPosition="none" primaryText="No Icon" showDescription descriptionText="아이콘 없음" />\r
            <UniversalTextDisplay {...args} iconPosition="before" iconName="InfoIcon" primaryText="Icon Before" showDescription descriptionText="아이콘이 앞에" />\r
          </Frame>\r
          <Frame display="flex" direction="row" gap="lg">\r
            <UniversalTextDisplay {...args} iconPosition="after" iconName="InfoIcon" primaryText="Icon After" showDescription descriptionText="아이콘이 뒤에" />\r
            <UniversalTextDisplay {...args} style="center" iconPosition="above" iconName="InfoIcon" primaryText="Icon Above" showDescription descriptionText="아이콘이 위에" />\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var F,L,k;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    system: 'system-01'
  },
  render: args => <Surface background="secondary-system01-1-rest" borderRadius="md" style={{
    minHeight: '300px',
    width: '800px'
  }}>\r
      <Frame display="flex" padding="lg" align="center" justify="center" fill>\r
        <Frame display="flex" direction="row" gap="xl" align="flex-start">\r
          <Frame display="flex" direction="column" gap="md" style={{
          flex: 1
        }}>\r
            <UniversalTextDisplay {...args} style="left" iconPosition="before" iconName="LineIconsCheckmarkCircleIcon" showLabel labelText="Left Aligned" primaryText="좌측 정렬" showDescription descriptionText="텍스트가 왼쪽으로 정렬됩니다." showCaption captionText="Left alignment example" />\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="md" style={{
          flex: 1
        }}>\r
            <UniversalTextDisplay {...args} style="center" iconPosition="above" iconName="LineIconsStarFilledIcon" showLabel labelText="Center Aligned" primaryText="중앙 정렬" showDescription descriptionText="텍스트가 중앙으로 정렬됩니다." showCaption captionText="Center alignment example" />\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var P,z,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'System',
    primaryText: 'Design System',
    showDescription: true,
    descriptionText: '각 시스템의 고유한 스타일을 확인해보세요.',
    showCaption: true,
    captionText: 'System comparison'
  },
  render: args => <Surface background="secondary-system01-1-rest" borderRadius="md" style={{
    minHeight: '300px',
    width: '800px'
  }}>\r
      <Frame display="flex" padding="lg" align="center" justify="center" fill>\r
        <Frame display="flex" direction="row" gap="xl" align="flex-start">\r
          <Frame display="flex" direction="column" gap="md" style={{
          flex: 1
        }}>\r
            <Surface background="secondary-system01-2-rest" borderRadius="sm" style={{
            padding: '16px'
          }}>\r
              <UniversalTextDisplay {...args} system="system-01" />\r
            </Surface>\r
            <div style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'var(--foundation-foundation-color-grey-light-40)'
          }}>\r
              System-01: Professional & Clean\r
            </div>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="md" style={{
          flex: 1
        }}>\r
            <Surface background="secondary-system02-2-rest" borderRadius="sm" style={{
            padding: '16px'
          }}>\r
              <UniversalTextDisplay {...args} system="system-02" />\r
            </Surface>\r
            <div style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'var(--foundation-foundation-color-grey-light-40)'
          }}>\r
              System-02: Friendly & Bright\r
            </div>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var A,H,U;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    size: 'md',
    style: 'left',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'line',
    showLabel: true,
    labelText: 'Interactive',
    primaryText: 'Text Display',
    showDescription: true,
    descriptionText: 'Controls에서 속성을 변경해보세요.',
    showCaption: true,
    captionText: 'Try changing the controls above'
  }
}`,...(U=(H=d.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const q=["Default","AllElements","CenteredWithIconAbove","SizeComparison","IconPositions","StyleComparison","SystemComparison","Interactive"];export{n as AllElements,a as CenteredWithIconAbove,o as Default,l as IconPositions,d as Interactive,c as SizeComparison,p as StyleComparison,m as SystemComparison,q as __namedExportsOrder,$ as default};

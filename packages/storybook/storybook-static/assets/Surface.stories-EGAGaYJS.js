import{j as r}from"./react-vendor-BFNgaz96.js";import{S as i,F as e,T as d}from"./index.esm-WYP67xav.js";const L={title:"Shared/Primitives/Surface",component:i,parameters:{componentSubtitle:"시각적 표면 프리미티브 - 각 props별 시각화",docs:{description:{component:`
Surface는 시각적 표면 속성만을 담당하는 순수한 프리미티브입니다.

## 핵심 특징
- **시멘틱 토큰 강제**: 일관된 디자인 시스템 유지
- **명확한 역할 분리**: 시각적 표면만 담당 (레이아웃은 Frame 사용)
- **옵셔널 테두리**: 필요시에만 borderColor, borderWidth, borderStyle 사용

## Props 시각화
각 story는 해당 prop이 어떻게 적용되는지 시각적으로 보여줍니다.

## Frame과의 조합
\`\`\`tsx
<Surface background="primary-system01-1-rest" borderRadius="button-md">
  <Frame padding="md" display="flex" justify="center">
    <Text variant="label-1">Content</Text>
  </Frame>
</Surface>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{background:{description:"배경색 (시멘틱 토큰)",control:"select",options:["primary-system01-1-rest","primary-system01-1-hovered","primary-system01-2-rest","secondary-system01-1-rest","secondary-system01-2-rest","secondary-system01-3-rest","cta-system01-1-rest","cta-system01-2-rest","error","warning","success","info","focused"]},foreground:{description:"전경색/텍스트색 (시멘틱 토큰)",control:"select",options:["primary-system01-1-rest","primary-system01-oncolor","secondary-system01-1-rest","secondary-system01-2-rest","secondary-system01-oncolor","cta-system01-1-rest","cta-system01-oncolor","error","warning","success","info"]},borderColor:{description:"테두리 색상 (시멘틱 토큰, 옵셔널)",control:"select",options:["primary-system01-1-rest","secondary-system01-1-rest","secondary-system01-2-rest","cta-system01-1-rest","error","warning","success","info"]},borderWidth:{description:"테두리 두께 (시멘틱 토큰, 옵셔널)",control:"select",options:["thin","medium","thick","button","card","input-default","input-focused","divider"]},borderStyle:{description:"테두리 스타일 (옵셔널)",control:"select",options:["none","solid","dashed","dotted"]},borderRadius:{description:"반지름 (시멘틱 토큰)",control:"select",options:["none","sm","md","lg","xl","xxl","circular","pill","button-sm","button-md","button-lg","card","input","badge-default","avatar","popover","modal"]},boxShadow:{description:"그림자 (시멘틱 토큰)",control:"select",options:["none","0","10","20","30","40","50"]},overlay:{description:"오버레이 효과 (시멘틱 토큰)",control:"select",options:["light","medium","heavy"]}}},I=({label:a="Sample"})=>r.jsx(e,{padding:"lg",display:"flex",justify:"center",align:"center",minHeight:"80px",children:r.jsx(d,{variant:"body-1",children:a})}),t={args:{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"button-md",children:r.jsx(I,{label:"Playground"})}},s={name:"Background 색상 시각화",parameters:{docs:{description:{story:"다양한 background 색상 토큰들의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Primary Background"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["primary-system01-1-rest","primary-system01-1-hovered","primary-system01-1-pressed","primary-system01-2-rest"].map(a=>r.jsx(i,{background:a,borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Secondary Background"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["secondary-system01-1-rest","secondary-system01-2-rest","secondary-system01-3-rest","secondary-system01-inverse-rest"].map(a=>r.jsx(i,{background:a,borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:a.includes("inverse")?"secondary-system01-oncolor":"secondary-system01-1-rest",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"CTA Background"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["cta-system01-1-rest","cta-system01-1-hovered","cta-system01-2-rest"].map(a=>r.jsx(i,{background:a,borderRadius:"md",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:"cta-system01-oncolor",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Status Background"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["success","warning","error","info","focused"].map(a=>r.jsx(i,{background:a,borderRadius:"md",children:r.jsx(e,{padding:"md",minWidth:"120px",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})})},a))})]})]})},n={name:"Foreground 색상 시각화",parameters:{docs:{description:{story:"다양한 foreground 색상 토큰들의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Primary Foreground"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["primary-system01-1-rest","primary-system01-oncolor"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:a,children:r.jsx(d,{variant:"body-2",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Secondary Foreground"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["secondary-system01-1-rest","secondary-system01-2-rest","secondary-system01-oncolor"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:a,children:r.jsx(d,{variant:"body-2",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"CTA Foreground"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["cta-system01-1-rest","cta-system01-oncolor"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"140px",children:r.jsx(i,{foreground:a,children:r.jsx(d,{variant:"body-2",textAlign:"center",children:a})})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Status Foreground"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["error","warning","success","info"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-2-rest",children:r.jsx(e,{padding:"md",minWidth:"120px",children:r.jsx(i,{foreground:a,children:r.jsx(d,{variant:"body-2",textAlign:"center",children:a})})})},a))})]})]})},o={name:"BorderRadius 시각화",parameters:{docs:{description:{story:"다양한 borderRadius 토큰들의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Global Radius"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["none","sm","md","lg","xl","xxl"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:a,borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-1-rest",children:r.jsx(e,{padding:"lg",minWidth:"100px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Shape Radius"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["button-sm","button-md","button-lg","card","input","badge-default","avatar","popover","modal"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:a,borderWidth:"thin",borderStyle:"solid",borderColor:"secondary-system01-1-rest",children:r.jsx(e,{padding:"lg",minWidth:"100px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Special Radius"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["circular","pill","badge-pill"].map(a=>r.jsx(i,{background:"primary-system01-1-rest",borderRadius:a,children:r.jsx(e,{padding:"lg",minWidth:"100px",minHeight:"100px",display:"flex",justify:"center",align:"center",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})})},a))})]})]})},m={name:"Border Width & Style 시각화",parameters:{docs:{description:{story:"테두리 두께와 스타일의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Border Width"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["thin","medium","thick"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderWidth:a,borderStyle:"solid",borderColor:"primary-system01-1-rest",borderRadius:"md",children:r.jsx(e,{padding:"lg",minWidth:"100px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Semantic Border Width"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["button","card","input-default","input-focused","divider"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderWidth:a,borderStyle:"solid",borderColor:"secondary-system01-1-rest",borderRadius:"md",children:r.jsx(e,{padding:"lg",minWidth:"120px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Border Style"}),r.jsx(e,{display:"flex",gap:"md",wrap:"wrap",children:["solid","dashed","dotted"].map(a=>r.jsx(i,{background:"secondary-system01-1-rest",borderWidth:"thick",borderStyle:a,borderColor:"primary-system01-1-rest",borderRadius:"md",children:r.jsx(e,{padding:"lg",minWidth:"100px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:a})})},a))})]})]})},c={name:"BoxShadow 시각화",parameters:{docs:{description:{story:"다양한 그림자 효과의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"xl",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Foundation Shadows (단계별)"}),r.jsx(e,{display:"flex",gap:"xl",wrap:"wrap",children:[{shadow:"0",label:"None (0)"},{shadow:"10",label:"Light (10)"},{shadow:"20",label:"Medium (20)"},{shadow:"30",label:"Strong (30)"},{shadow:"40",label:"Heavy (40)"},{shadow:"50",label:"Strongest (50)"}].map(({shadow:a,label:H})=>r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"md",boxShadow:a,children:r.jsx(e,{padding:"lg",minWidth:"140px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:H})})},a))})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Button Shadow 예시"}),r.jsxs(e,{display:"flex",gap:"xl",wrap:"wrap",children:[r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"button-md",boxShadow:"20",children:r.jsx(e,{padding:"md",minWidth:"120px",display:"flex",justify:"center",children:r.jsx(d,{variant:"label-1",weight:"medium",children:"Button (20)"})})}),r.jsx(i,{background:"cta-system01-1-rest",foreground:"cta-system01-oncolor",borderRadius:"button-md",boxShadow:"30",children:r.jsx(e,{padding:"md",minWidth:"120px",display:"flex",justify:"center",children:r.jsx(d,{variant:"label-1",weight:"medium",children:"CTA (30)"})})})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Card Shadow 예시"}),r.jsxs(e,{display:"flex",gap:"xl",wrap:"wrap",children:[r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",boxShadow:"30",children:r.jsx(e,{padding:"lg",minWidth:"140px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:"Card (30)"})})}),r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",boxShadow:"40",children:r.jsx(e,{padding:"lg",minWidth:"140px",children:r.jsx(d,{variant:"caption-1",textAlign:"center",children:"Modal (40)"})})})]})]})]})},l={name:"Overlay 효과 시각화",parameters:{docs:{description:{story:"오버레이 효과의 시각적 차이를 보여줍니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Overlay Effects"}),r.jsx(e,{display:"flex",gap:"xl",wrap:"wrap",children:["light","medium","heavy"].map(a=>r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"body-2",weight:"medium",textAlign:"center",children:a}),r.jsx(i,{background:"primary-system01-1-rest",borderRadius:"md",overlay:a,children:r.jsx(e,{padding:"xl",minWidth:"150px",minHeight:"100px",display:"flex",justify:"center",align:"center",children:r.jsx(i,{foreground:"primary-system01-oncolor",children:r.jsx(d,{variant:"body-1",children:"Base Content"})})})})]},a))})]})},p={name:"컴파운드 컴포넌트 조합 예시",parameters:{docs:{description:{story:"Surface와 Frame을 조합하여 실제 컴포넌트를 구현한 예시입니다."}}},render:()=>r.jsxs(e,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Button 컴포넌트 예시"}),r.jsxs(e,{display:"flex",gap:"md",wrap:"wrap",children:[r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"button-md",boxShadow:"20",children:r.jsx(e,{paddingY:"md",paddingX:"lg",display:"flex",justify:"center",align:"center",children:r.jsx(d,{variant:"label-1",weight:"medium",children:"Primary Button"})})}),r.jsx(i,{background:"secondary-system01-1-rest",foreground:"secondary-system01-1-rest",borderColor:"secondary-system01-1-rest",borderWidth:"button",borderStyle:"solid",borderRadius:"button-md",boxShadow:"20",children:r.jsx(e,{paddingY:"md",paddingX:"lg",display:"flex",justify:"center",align:"center",children:r.jsx(d,{variant:"label-1",weight:"medium",children:"Secondary Button"})})}),r.jsx(i,{background:"success",foreground:"primary-system01-oncolor",borderRadius:"button-md",boxShadow:"30",children:r.jsx(e,{paddingY:"md",paddingX:"lg",display:"flex",justify:"center",align:"center",children:r.jsx(d,{variant:"label-1",weight:"medium",children:"Success Button"})})})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Card 컴포넌트 예시"}),r.jsxs(e,{display:"flex",gap:"lg",wrap:"wrap",children:[r.jsx(i,{background:"secondary-system01-1-rest",borderRadius:"card",boxShadow:"30",children:r.jsxs(e,{padding:"lg",display:"flex",direction:"column",gap:"md",minWidth:"200px",children:[r.jsx(d,{variant:"heading-1",weight:"medium",children:"Card Title"}),r.jsx(d,{variant:"body-2",children:"Card content using Surface for styling and Frame for layout structure."}),r.jsxs(e,{display:"flex",gap:"sm",children:[r.jsx(i,{background:"primary-system01-1-rest",foreground:"primary-system01-oncolor",borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(d,{variant:"caption-1",weight:"medium",children:"Action"})})}),r.jsx(i,{foreground:"secondary-system01-2-rest",borderRadius:"button-sm",children:r.jsx(e,{paddingY:"xs",paddingX:"sm",children:r.jsx(d,{variant:"caption-1",weight:"medium",children:"Cancel"})})})]})]})}),r.jsx(i,{background:"success",foreground:"primary-system01-oncolor",borderRadius:"card",boxShadow:"40",children:r.jsxs(e,{padding:"lg",display:"flex",direction:"column",gap:"sm",minWidth:"200px",children:[r.jsx(d,{variant:"label-1",weight:"bold",children:"✓ Success"}),r.jsx(d,{variant:"body-2",children:"Operation completed successfully!"})]})})]})]}),r.jsxs(e,{display:"flex",direction:"column",gap:"md",children:[r.jsx(d,{variant:"heading-3",weight:"medium",children:"Input 컴포넌트 예시"}),r.jsxs(e,{display:"flex",direction:"column",gap:"sm",maxWidth:"300px",children:[r.jsx(i,{background:"secondary-system01-1-rest",borderColor:"secondary-system01-1-rest",borderWidth:"input-default",borderStyle:"solid",borderRadius:"input",children:r.jsx(e,{paddingY:"md",paddingX:"lg",children:r.jsx(d,{variant:"body-2",children:"Input placeholder text"})})}),r.jsx(i,{background:"secondary-system01-1-rest",borderColor:"primary-system01-1-rest",borderWidth:"input-focused",borderStyle:"solid",borderRadius:"input",boxShadow:"20",children:r.jsx(e,{paddingY:"md",paddingX:"lg",children:r.jsx(d,{variant:"body-2",children:"Focused input state"})})})]})]})]})};var u,g,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    background: 'primary-system01-1-rest',
    foreground: 'primary-system01-oncolor',
    borderRadius: 'button-md',
    children: <SampleContent label="Playground" />
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Background 색상 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 background 색상 토큰들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Primary Background */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Primary Background</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['primary-system01-1-rest', 'primary-system01-1-hovered', 'primary-system01-1-pressed', 'primary-system01-2-rest'].map(bg => <Surface key={bg} background={bg as BackgroundToken} borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="caption-1" textAlign="center">{bg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Secondary Background */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Secondary Background</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['secondary-system01-1-rest', 'secondary-system01-2-rest', 'secondary-system01-3-rest', 'secondary-system01-inverse-rest'].map(bg => <Surface key={bg} background={bg as BackgroundToken} borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground={bg.includes('inverse') ? 'secondary-system01-oncolor' : 'secondary-system01-1-rest'}>\r
                  <Text variant="caption-1" textAlign="center">{bg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* CTA Background */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">CTA Background</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['cta-system01-1-rest', 'cta-system01-1-hovered', 'cta-system01-2-rest'].map(bg => <Surface key={bg} background={bg as BackgroundToken} borderRadius="md">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground="cta-system01-oncolor">\r
                  <Text variant="caption-1" textAlign="center">{bg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Status Background */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Status Background</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['success', 'warning', 'error', 'info', 'focused'].map(bg => <Surface key={bg} background={bg as BackgroundToken} borderRadius="md">\r
              <Frame padding="md" minWidth="120px">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="caption-1" textAlign="center">{bg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,S,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Foreground 색상 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 foreground 색상 토큰들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Primary Foreground */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Primary Foreground</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['primary-system01-1-rest', 'primary-system01-oncolor'].map(fg => <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground={fg as ForegroundToken}>\r
                  <Text variant="body-2" textAlign="center">{fg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Secondary Foreground */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Secondary Foreground</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['secondary-system01-1-rest', 'secondary-system01-2-rest', 'secondary-system01-oncolor'].map(fg => <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground={fg as ForegroundToken}>\r
                  <Text variant="body-2" textAlign="center">{fg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* CTA Foreground */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">CTA Foreground</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['cta-system01-1-rest', 'cta-system01-oncolor'].map(fg => <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="140px">\r
                <Surface foreground={fg as ForegroundToken}>\r
                  <Text variant="body-2" textAlign="center">{fg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Status Foreground */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Status Foreground</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['error', 'warning', 'success', 'info'].map(fg => <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">\r
              <Frame padding="md" minWidth="120px">\r
                <Surface foreground={fg as ForegroundToken}>\r
                  <Text variant="body-2" textAlign="center">{fg}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var F,j,v;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'BorderRadius 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 borderRadius 토큰들의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Global Radius */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Global Radius</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['none', 'sm', 'md', 'lg', 'xl', 'xxl'].map(radius => <Surface key={radius} background="secondary-system01-1-rest" borderRadius={radius as RadiusToken} borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-1-rest">\r
              <Frame padding="lg" minWidth="100px">\r
                <Text variant="caption-1" textAlign="center">{radius}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Shape Radius */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Shape Radius</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['button-sm', 'button-md', 'button-lg', 'card', 'input', 'badge-default', 'avatar', 'popover', 'modal'].map(radius => <Surface key={radius} background="secondary-system01-1-rest" borderRadius={radius as RadiusToken} borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-1-rest">\r
              <Frame padding="lg" minWidth="100px">\r
                <Text variant="caption-1" textAlign="center">{radius}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Special Radius */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Special Radius</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['circular', 'pill', 'badge-pill'].map(radius => <Surface key={radius} background="primary-system01-1-rest" borderRadius={radius as RadiusToken}>\r
              <Frame padding="lg" minWidth="100px" minHeight="100px" display="flex" justify="center" align="center">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="caption-1" textAlign="center">{radius}</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var T,k,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Border Width & Style 시각화',
  parameters: {
    docs: {
      description: {
        story: '테두리 두께와 스타일의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* Border Width */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Border Width</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['thin', 'medium', 'thick'].map(width => <Surface key={width} background="secondary-system01-1-rest" borderWidth={width as BorderWidthToken} borderStyle="solid" borderColor="primary-system01-1-rest" borderRadius="md">\r
              <Frame padding="lg" minWidth="100px">\r
                <Text variant="caption-1" textAlign="center">{width}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Semantic Border Width */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Semantic Border Width</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['button', 'card', 'input-default', 'input-focused', 'divider'].map(width => <Surface key={width} background="secondary-system01-1-rest" borderWidth={width as BorderWidthToken} borderStyle="solid" borderColor="secondary-system01-1-rest" borderRadius="md">\r
              <Frame padding="lg" minWidth="120px">\r
                <Text variant="caption-1" textAlign="center">{width}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* Border Style */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Border Style</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          {['solid', 'dashed', 'dotted'].map(style => <Surface key={style} background="secondary-system01-1-rest" borderWidth="thick" borderStyle={style as any} borderColor="primary-system01-1-rest" borderRadius="md">\r
              <Frame padding="lg" minWidth="100px">\r
                <Text variant="caption-1" textAlign="center">{style}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var R,C,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'BoxShadow 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 그림자 효과의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="xl">\r
      \r
      {/* Foundation Shadows - 단계별 진한 그림자 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Foundation Shadows (단계별)</Text>\r
        <Frame display="flex" gap="xl" wrap="wrap">\r
          {[{
          shadow: '0',
          label: 'None (0)'
        }, {
          shadow: '10',
          label: 'Light (10)'
        }, {
          shadow: '20',
          label: 'Medium (20)'
        }, {
          shadow: '30',
          label: 'Strong (30)'
        }, {
          shadow: '40',
          label: 'Heavy (40)'
        }, {
          shadow: '50',
          label: 'Strongest (50)'
        }].map(({
          shadow,
          label
        }) => <Surface key={shadow} background="secondary-system01-1-rest" borderRadius="md" boxShadow={shadow as ShadowToken}>\r
              <Frame padding="lg" minWidth="140px">\r
                <Text variant="caption-1" textAlign="center">{label}</Text>\r
              </Frame>\r
            </Surface>)}\r
        </Frame>\r
      </Frame>\r
\r
      {/* 사용 예시 - 버튼 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Button Shadow 예시</Text>\r
        <Frame display="flex" gap="xl" wrap="wrap">\r
          <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-md" boxShadow="20">\r
            <Frame padding="md" minWidth="120px" display="flex" justify="center">\r
              <Text variant="label-1" weight="medium">Button (20)</Text>\r
            </Frame>\r
          </Surface>\r
          \r
          <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="button-md" boxShadow="30">\r
            <Frame padding="md" minWidth="120px" display="flex" justify="center">\r
              <Text variant="label-1" weight="medium">CTA (30)</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* 사용 예시 - 카드 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Card Shadow 예시</Text>\r
        <Frame display="flex" gap="xl" wrap="wrap">\r
          <Surface background="secondary-system01-1-rest" borderRadius="card" boxShadow="30">\r
            <Frame padding="lg" minWidth="140px">\r
              <Text variant="caption-1" textAlign="center">Card (30)</Text>\r
            </Frame>\r
          </Surface>\r
          \r
          <Surface background="secondary-system01-1-rest" borderRadius="card" boxShadow="40">\r
            <Frame padding="lg" minWidth="140px">\r
              <Text variant="caption-1" textAlign="center">Modal (40)</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var A,P,X;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Overlay 효과 시각화',
  parameters: {
    docs: {
      description: {
        story: '오버레이 효과의 시각적 차이를 보여줍니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      <Text variant="heading-3" weight="medium">Overlay Effects</Text>\r
      \r
      <Frame display="flex" gap="xl" wrap="wrap">\r
        {['light', 'medium', 'heavy'].map(overlay => <Frame key={overlay} display="flex" direction="column" gap="md">\r
            <Text variant="body-2" weight="medium" textAlign="center">{overlay}</Text>\r
            <Surface background="primary-system01-1-rest" borderRadius="md" overlay={overlay as OverlayToken}>\r
              <Frame padding="xl" minWidth="150px" minHeight="100px" display="flex" justify="center" align="center">\r
                <Surface foreground="primary-system01-oncolor">\r
                  <Text variant="body-1">Base Content</Text>\r
                </Surface>\r
              </Frame>\r
            </Surface>\r
          </Frame>)}\r
      </Frame>\r
    </Frame>
}`,...(X=(P=l.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,O,E;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Surface와 Frame을 조합하여 실제 컴포넌트를 구현한 예시입니다.'
      }
    }
  },
  render: () => <Frame display="flex" direction="column" gap="xl" padding="lg">\r
      \r
      {/* 버튼 예시 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Button 컴포넌트 예시</Text>\r
        <Frame display="flex" gap="md" wrap="wrap">\r
          \r
          {/* Primary Button */}\r
          <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-md" boxShadow="20">\r
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">\r
              <Text variant="label-1" weight="medium">Primary Button</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Secondary Button */}\r
          <Surface background="secondary-system01-1-rest" foreground="secondary-system01-1-rest" borderColor="secondary-system01-1-rest" borderWidth="button" borderStyle="solid" borderRadius="button-md" boxShadow="20">\r
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">\r
              <Text variant="label-1" weight="medium">Secondary Button</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Status Button */}\r
          <Surface background="success" foreground="primary-system01-oncolor" borderRadius="button-md" boxShadow="30">\r
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">\r
              <Text variant="label-1" weight="medium">Success Button</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* 카드 예시 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Card 컴포넌트 예시</Text>\r
        <Frame display="flex" gap="lg" wrap="wrap">\r
          \r
          {/* Basic Card */}\r
          <Surface background="secondary-system01-1-rest" borderRadius="card" boxShadow="30">\r
            <Frame padding="lg" display="flex" direction="column" gap="md" minWidth="200px">\r
              <Text variant="heading-1" weight="medium">Card Title</Text>\r
              <Text variant="body-2">Card content using Surface for styling and Frame for layout structure.</Text>\r
              <Frame display="flex" gap="sm">\r
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-sm">\r
                  <Frame paddingY="xs" paddingX="sm">\r
                    <Text variant="caption-1" weight="medium">Action</Text>\r
                  </Frame>\r
                </Surface>\r
                <Surface foreground="secondary-system01-2-rest" borderRadius="button-sm">\r
                  <Frame paddingY="xs" paddingX="sm">\r
                    <Text variant="caption-1" weight="medium">Cancel</Text>\r
                  </Frame>\r
                </Surface>\r
              </Frame>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Status Card */}\r
          <Surface background="success" foreground="primary-system01-oncolor" borderRadius="card" boxShadow="40">\r
            <Frame padding="lg" display="flex" direction="column" gap="sm" minWidth="200px">\r
              <Text variant="label-1" weight="bold">✓ Success</Text>\r
              <Text variant="body-2">Operation completed successfully!</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
\r
      {/* 입력 예시 */}\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text variant="heading-3" weight="medium">Input 컴포넌트 예시</Text>\r
        <Frame display="flex" direction="column" gap="sm" maxWidth="300px">\r
          \r
          {/* Default Input */}\r
          <Surface background="secondary-system01-1-rest" borderColor="secondary-system01-1-rest" borderWidth="input-default" borderStyle="solid" borderRadius="input">\r
            <Frame paddingY="md" paddingX="lg">\r
              <Text variant="body-2">Input placeholder text</Text>\r
            </Frame>\r
          </Surface>\r
\r
          {/* Focused Input */}\r
          <Surface background="secondary-system01-1-rest" borderColor="primary-system01-1-rest" borderWidth="input-focused" borderStyle="solid" borderRadius="input" boxShadow="20">\r
            <Frame paddingY="md" paddingX="lg">\r
              <Text variant="body-2">Focused input state</Text>\r
            </Frame>\r
          </Surface>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const N=["Playground","BackgroundColors","ForegroundColors","BorderRadius","BorderWidthAndStyle","BoxShadows","OverlayEffects","CompoundComponentExample"];export{s as BackgroundColors,o as BorderRadius,m as BorderWidthAndStyle,c as BoxShadows,p as CompoundComponentExample,n as ForegroundColors,l as OverlayEffects,t as Playground,N as __namedExportsOrder,L as default};

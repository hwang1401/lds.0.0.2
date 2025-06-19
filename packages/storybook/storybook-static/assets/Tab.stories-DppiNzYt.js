import{r as f,j as e}from"./react-vendor-BFNgaz96.js";import{F as n,T as c}from"./index.esm-WYP67xav.js";import{T as g}from"./index.esm-ChTCnUjT.js";import{T as b}from"./index.esm-BNdFApZa.js";const B=[{id:"tab1",label:"홈",icon:"LineIconsPersonPersonIcon"},{id:"tab2",label:"제품",icon:"LineIconsSettingsSetting1Icon"},{id:"tab3",label:"서비스",icon:"LineIconsBellOnIcon"},{id:"tab4",label:"연락처",icon:"LineIconsMessageCircleIcon"}],j=({system:a="system-01",defaultSelectedId:s="tab1",size:t="lg",showBorder:r=!0})=>{const[o,i]=f.useState(s),F=a==="system-01"?g:b;return e.jsx(n,{display:"flex",direction:"column",gap:"md",children:e.jsx(F,{items:B,selectedId:o,size:t,showBorder:r,onChange:i})},a)},v={title:"components/Tab",component:j,parameters:{layout:"padded",docs:{description:{component:`
탭 네비게이션 컴포넌트입니다. 두 시스템 간의 시각적 차이를 보여줍니다.

## 시스템별 특징
- **System-01**: Professional & Clean (블루 계열, 작은 radius)
- **System-02**: Friendly & Bright (퍼플 계열, 큰 radius)

## 사용법
\`\`\`tsx
import { Tab } from 'lumir-design-system-01'; // 또는 lumir-design-system-02

const tabItems = [
  { id: 'tab1', label: '홈', icon: 'LineIconsPersonPersonIcon' },
  { id: 'tab2', label: '설정', icon: 'LineIconsSettingsSetting1Icon' }
];

<Tab 
  items={tabItems}
  defaultSelectedId="tab1" 
  size="lg" 
  showBorder={true}
  onChange={(selectedId) => console.log(selectedId)}
/>
\`\`\`
        `}}},argTypes:{defaultSelectedId:{control:{type:"select"},options:["tab1","tab2","tab3","tab4"],description:"기본 선택된 탭"},size:{control:{type:"select"},options:["md","lg"],description:"탭 크기"},showBorder:{control:{type:"boolean"},description:"하단 테두리 표시 여부"}}},d={args:{defaultSelectedId:"tab1",size:"lg",showBorder:!0},render:(a,{globals:s})=>{const t=(s==null?void 0:s.system)||"system-01";return e.jsx(j,{...a,system:t})}},l={render:(a,{globals:s})=>{const t=(s==null?void 0:s.system)||"system-01",r=t==="system-01"?g:b,o=[{id:"large1",label:"Large Tab",icon:"LineIconsPersonPersonIcon"},{id:"large2",label:"Large Tab",icon:"LineIconsSettingsSetting1Icon"},{id:"large3",label:"Large Tab",icon:"LineIconsBellOnIcon"}],i=[{id:"medium1",label:"Medium Tab",icon:"LineIconsPersonPersonIcon"},{id:"medium2",label:"Medium Tab",icon:"LineIconsSettingsSetting1Icon"},{id:"medium3",label:"Medium Tab",icon:"LineIconsBellOnIcon"}];return e.jsxs(n,{gap:"xl",maxWidth:"800px",children:[e.jsxs(n,{gap:"md",children:[e.jsx(c,{variant:"heading-3",weight:"bold",children:"Large 크기 (기본)"}),e.jsx(n,{gap:"sm",children:e.jsx(r,{items:o,defaultSelectedId:"large1",size:"lg",showBorder:!0})})]}),e.jsxs(n,{gap:"md",children:[e.jsx(c,{variant:"heading-3",weight:"bold",children:"Medium 크기"}),e.jsx(n,{gap:"sm",children:e.jsx(r,{items:i,defaultSelectedId:"medium1",size:"md",showBorder:!0})})]})]},t)}},m={render:(a,{globals:s})=>{const t=(s==null?void 0:s.system)||"system-01",r=t==="system-01"?g:b,o=[{id:"normal1",label:"정상",icon:"LineIconsPersonPersonIcon"},{id:"normal2",label:"정상",icon:"LineIconsSettingsSetting1Icon"},{id:"normal3",label:"정상",icon:"LineIconsBellOnIcon"}],i=[{id:"disabled1",label:"활성",icon:"LineIconsPersonPersonIcon"},{id:"disabled2",label:"비활성",icon:"LineIconsSettingsSetting1Icon",disabled:!0},{id:"disabled3",label:"활성",icon:"LineIconsBellOnIcon"}];return e.jsxs(n,{gap:"xl",maxWidth:"800px",children:[e.jsxs(n,{gap:"md",children:[e.jsx(c,{variant:"heading-3",weight:"bold",children:"정상 상태"}),e.jsx(n,{gap:"sm",children:e.jsx(r,{items:o,defaultSelectedId:"normal1",size:"lg",showBorder:!0})})]}),e.jsxs(n,{gap:"md",children:[e.jsx(c,{variant:"heading-3",weight:"bold",children:"비활성화 상태"}),e.jsx(n,{gap:"sm",children:e.jsx(r,{items:i,defaultSelectedId:"disabled1",size:"lg",showBorder:!0})})]})]},t)}};var I,u,p;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultSelectedId: 'tab1',
    size: 'lg',
    showBorder: true
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalTab {...args} system={system} />;
  }
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,x,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
    const largeItems = [{
      id: 'large1',
      label: 'Large Tab',
      icon: 'LineIconsPersonPersonIcon'
    }, {
      id: 'large2',
      label: 'Large Tab',
      icon: 'LineIconsSettingsSetting1Icon'
    }, {
      id: 'large3',
      label: 'Large Tab',
      icon: 'LineIconsBellOnIcon'
    }];
    const mediumItems = [{
      id: 'medium1',
      label: 'Medium Tab',
      icon: 'LineIconsPersonPersonIcon'
    }, {
      id: 'medium2',
      label: 'Medium Tab',
      icon: 'LineIconsSettingsSetting1Icon'
    }, {
      id: 'medium3',
      label: 'Medium Tab',
      icon: 'LineIconsBellOnIcon'
    }];
    return <Frame gap="xl" maxWidth="800px" key={system}>\r
        <Frame gap="md">\r
          <Text variant="heading-3" weight="bold">Large 크기 (기본)</Text>\r
          <Frame gap="sm">\r
            <TabComponent items={largeItems} defaultSelectedId="large1" size="lg" showBorder={true} />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame gap="md">\r
          <Text variant="heading-3" weight="bold">Medium 크기</Text>\r
          <Frame gap="sm">\r
            <TabComponent items={mediumItems} defaultSelectedId="medium1" size="md" showBorder={true} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,T,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
    const normalItems = [{
      id: 'normal1',
      label: '정상',
      icon: 'LineIconsPersonPersonIcon'
    }, {
      id: 'normal2',
      label: '정상',
      icon: 'LineIconsSettingsSetting1Icon'
    }, {
      id: 'normal3',
      label: '정상',
      icon: 'LineIconsBellOnIcon'
    }];
    const disabledItems = [{
      id: 'disabled1',
      label: '활성',
      icon: 'LineIconsPersonPersonIcon'
    }, {
      id: 'disabled2',
      label: '비활성',
      icon: 'LineIconsSettingsSetting1Icon',
      disabled: true
    }, {
      id: 'disabled3',
      label: '활성',
      icon: 'LineIconsBellOnIcon'
    }];
    return <Frame gap="xl" maxWidth="800px" key={system}>\r
        <Frame gap="md">\r
          <Text variant="heading-3" weight="bold">정상 상태</Text>\r
          <Frame gap="sm">\r
            <TabComponent items={normalItems} defaultSelectedId="normal1" size="lg" showBorder={true} />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame gap="md">\r
          <Text variant="heading-3" weight="bold">비활성화 상태</Text>\r
          <Frame gap="sm">\r
            <TabComponent items={disabledItems} defaultSelectedId="disabled1" size="lg" showBorder={true} />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const O=["Default","Sizes","States"];export{d as Default,l as Sizes,m as States,O as __namedExportsOrder,v as default};

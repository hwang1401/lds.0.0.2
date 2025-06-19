import{j as e,R as L}from"./react-vendor-BFNgaz96.js";import{O as $}from"./index.esm-ChTCnUjT.js";import{O as H}from"./index.esm-BNdFApZa.js";import{S as l,a as m,F as i,T as p}from"./index.esm-WYP67xav.js";const I={"system-01":$,"system-02":H},t=({system:n,...r})=>{const s=I[n]||$;return e.jsx(s,{...r})},Y={title:"Components/OptionList",component:t,parameters:{layout:"padded",docs:{description:{component:"OptionList 컴포넌트는 선택 가능한 옵션 아이템을 나타냅니다. ComboBox, 드롭다운 메뉴, 선택 목록 등에서 사용할 수 있는 범용적인 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["menu-header","single-select","radio","multi-select","radio-component","checkbox-component"],description:"옵션 아이템의 타입"},state:{control:{type:"select"},options:["default","hovered","pressed","focused","disabled","selected"],description:"옵션 아이템의 상태"},selected:{control:{type:"boolean"},description:"선택 상태 여부"},disabled:{control:{type:"boolean"},description:"비활성화 상태 여부"},children:{control:{type:"text"},description:"옵션 아이템 텍스트"}}},h={args:{type:"single-select",children:"기본 옵션"},decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"200px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01";return e.jsx(t,{...n,system:s})},parameters:{docs:{description:{story:"기본 OptionList 컴포넌트입니다."}}}},x={render:()=>e.jsxs(i,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(i,{display:"flex",direction:"column",gap:"md",children:[e.jsx(p,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색, 직각)"}),e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"250px",children:e.jsxs(i,{display:"flex",padding:"lg",direction:"column",gap:"xs",fill:!0,children:[e.jsx(t,{system:"system-01",type:"menu-header",children:"메뉴 헤더"}),e.jsx(t,{system:"system-01",type:"single-select",children:"단일 선택 옵션"}),e.jsx(t,{system:"system-01",type:"radio",selected:!0,children:"라디오 옵션 (선택됨)"}),e.jsx(t,{system:"system-01",type:"multi-select",selected:!0,children:"다중 선택 옵션 (선택됨)"}),e.jsx(t,{system:"system-01",type:"single-select",disabled:!0,children:"비활성화 옵션"})]})})})]}),e.jsxs(i,{display:"flex",direction:"column",gap:"md",children:[e.jsx(p,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색, 둥근 모서리)"}),e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"250px",children:e.jsxs(i,{display:"flex",padding:"lg",direction:"column",gap:"xs",fill:!0,children:[e.jsx(t,{system:"system-02",type:"menu-header",children:"메뉴 헤더"}),e.jsx(t,{system:"system-02",type:"single-select",children:"단일 선택 옵션"}),e.jsx(t,{system:"system-02",type:"radio",selected:!0,children:"라디오 옵션 (선택됨)"}),e.jsx(t,{system:"system-02",type:"multi-select",selected:!0,children:"다중 선택 옵션 (선택됨)"}),e.jsx(t,{system:"system-02",type:"single-select",disabled:!0,children:"비활성화 옵션"})]})})})]})]})},u={decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"250px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[d," - Option Types"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"xs",children:[e.jsx(t,{system:s,type:"menu-header",children:"헤더 옵션"}),e.jsx(t,{system:s,type:"single-select",children:"단일 선택 옵션"}),e.jsx(t,{system:s,type:"radio",selected:!0,children:"라디오 옵션 (선택됨)"}),e.jsx(t,{system:s,type:"radio",children:"라디오 옵션"}),e.jsx(t,{system:s,type:"multi-select",selected:!0,children:"다중 선택 옵션 (선택됨)"}),e.jsx(t,{system:s,type:"multi-select",children:"다중 선택 옵션"})]})]})},parameters:{docs:{description:{story:"다양한 타입의 OptionList를 보여줍니다."}}}},g={decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"200px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[d," - Option States"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"xs",children:[e.jsx(t,{system:s,state:"default",children:"기본 상태"}),e.jsx(t,{system:s,state:"hovered",children:"호버 상태"}),e.jsx(t,{system:s,state:"pressed",children:"눌림 상태"}),e.jsx(t,{system:s,state:"focused",children:"포커스 상태"}),e.jsx(t,{system:s,state:"selected",children:"선택 상태"}),e.jsx(t,{system:s,state:"disabled",disabled:!0,children:"비활성화 상태"})]})]})},parameters:{docs:{description:{story:"OptionList의 다양한 상태를 보여줍니다."}}}},f={decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"250px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[a,o]=L.useState("option1");return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[d," - Radio Component"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"xs",children:[e.jsx(t,{system:s,type:"menu-header",children:"우선순위 선택"}),e.jsx(t,{system:s,type:"radio-component",radioName:"priority",radioValue:"option1",radioChecked:a==="option1",onRadioChange:o,children:"높음"}),e.jsx(t,{system:s,type:"radio-component",radioName:"priority",radioValue:"option2",radioChecked:a==="option2",onRadioChange:o,children:"보통"}),e.jsx(t,{system:s,type:"radio-component",radioName:"priority",radioValue:"option3",radioChecked:a==="option3",onRadioChange:o,children:"낮음"})]})]})},parameters:{docs:{description:{story:"OptionList에 실제 Radio 컴포넌트를 사용하는 예시입니다."}}}},O={decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"250px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[a,o]=L.useState({read:!0,write:!1,delete:!1,admin:!1}),y=(c,q)=>{o(G=>({...G,[c]:q}))};return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[d," - Checkbox Component"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"xs",children:[e.jsx(t,{system:s,type:"menu-header",children:"권한 설정"}),e.jsx(t,{system:s,type:"checkbox-component",checkboxChecked:a.read,onCheckboxChange:c=>y("read",c),children:"읽기 권한"}),e.jsx(t,{system:s,type:"checkbox-component",checkboxChecked:a.write,onCheckboxChange:c=>y("write",c),children:"쓰기 권한"}),e.jsx(t,{system:s,type:"checkbox-component",checkboxChecked:a.delete,onCheckboxChange:c=>y("delete",c),children:"삭제 권한"}),e.jsx(t,{system:s,type:"checkbox-component",checkboxChecked:a.admin,onCheckboxChange:c=>y("admin",c),children:"관리자 권한"})]})]})},parameters:{docs:{description:{story:"OptionList에 실제 Checkbox 컴포넌트를 사용하는 예시입니다."}}}},v={decorators:[n=>e.jsx(l,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(m,{width:"300px",children:e.jsx(i,{display:"flex",padding:"lg",fill:!0,children:e.jsx(n,{})})})})],render:(n,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[a,o]=L.useState("");return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[d," - 컨텍스트 메뉴 예시"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"xs",children:[e.jsx(t,{system:s,type:"single-select",state:a==="copy"?"selected":"default",onClick:()=>o("copy"),children:"복사"}),e.jsx(t,{system:s,type:"single-select",state:a==="cut"?"selected":"default",onClick:()=>o("cut"),children:"잘라내기"}),e.jsx(t,{system:s,type:"single-select",state:a==="paste"?"selected":"default",onClick:()=>o("paste"),children:"붙여넣기"}),e.jsx(t,{system:s,type:"menu-header",children:"---"}),e.jsx(t,{system:s,type:"single-select",state:a==="delete"?"selected":"default",onClick:()=>o("delete"),children:"삭제"})]}),a&&e.jsxs(p,{variant:"caption-1",color:"secondary-foreground-2",children:["선택된 액션: ",a]})]})},parameters:{docs:{description:{story:"실제 컨텍스트 메뉴에서 사용되는 OptionList의 예시입니다."}}}};var j,C,S;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'single-select',
    children: '기본 옵션'
  },
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="200px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalOptionList {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '기본 OptionList 컴포넌트입니다.'
      }
    }
  }
}`,...(S=(C=h.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var k,U,b;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색, 직각)\r
        </Text>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <Sizing width="250px">\r
            <Frame display="flex" padding="lg" direction="column" gap="xs" fill>\r
              <UniversalOptionList system="system-01" type="menu-header">메뉴 헤더</UniversalOptionList>\r
              <UniversalOptionList system="system-01" type="single-select">단일 선택 옵션</UniversalOptionList>\r
              <UniversalOptionList system="system-01" type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>\r
              <UniversalOptionList system="system-01" type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>\r
              <UniversalOptionList system="system-01" type="single-select" disabled>비활성화 옵션</UniversalOptionList>\r
            </Frame>\r
          </Sizing>\r
        </Surface>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색, 둥근 모서리)\r
        </Text>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <Sizing width="250px">\r
            <Frame display="flex" padding="lg" direction="column" gap="xs" fill>\r
              <UniversalOptionList system="system-02" type="menu-header">메뉴 헤더</UniversalOptionList>\r
              <UniversalOptionList system="system-02" type="single-select">단일 선택 옵션</UniversalOptionList>\r
              <UniversalOptionList system="system-02" type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>\r
              <UniversalOptionList system="system-02" type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>\r
              <UniversalOptionList system="system-02" type="single-select" disabled>비활성화 옵션</UniversalOptionList>\r
            </Frame>\r
          </Sizing>\r
        </Surface>\r
      </Frame>\r
    </Frame>
}`,...(b=(U=x.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};var F,R,T;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="250px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Option Types\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xs">\r
          <UniversalOptionList system={system} type="menu-header">헤더 옵션</UniversalOptionList>\r
          <UniversalOptionList system={system} type="single-select">단일 선택 옵션</UniversalOptionList>\r
          <UniversalOptionList system={system} type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>\r
          <UniversalOptionList system={system} type="radio">라디오 옵션</UniversalOptionList>\r
          <UniversalOptionList system={system} type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>\r
          <UniversalOptionList system={system} type="multi-select">다중 선택 옵션</UniversalOptionList>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 타입의 OptionList를 보여줍니다.'
      }
    }
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,N,z;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="200px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Option States\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xs">\r
          <UniversalOptionList system={system} state="default">기본 상태</UniversalOptionList>\r
          <UniversalOptionList system={system} state="hovered">호버 상태</UniversalOptionList>\r
          <UniversalOptionList system={system} state="pressed">눌림 상태</UniversalOptionList>\r
          <UniversalOptionList system={system} state="focused">포커스 상태</UniversalOptionList>\r
          <UniversalOptionList system={system} state="selected">선택 상태</UniversalOptionList>\r
          <UniversalOptionList system={system} state="disabled" disabled>비활성화 상태</UniversalOptionList>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList의 다양한 상태를 보여줍니다.'
      }
    }
  }
}`,...(z=(N=g.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var E,V,A;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="250px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = React.useState('option1');
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Radio Component\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xs">\r
          <UniversalOptionList system={system} type="menu-header">우선순위 선택</UniversalOptionList>\r
          <UniversalOptionList system={system} type="radio-component" radioName="priority" radioValue="option1" radioChecked={selectedValue === 'option1'} onRadioChange={setSelectedValue}>\r
            높음\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="radio-component" radioName="priority" radioValue="option2" radioChecked={selectedValue === 'option2'} onRadioChange={setSelectedValue}>\r
            보통\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="radio-component" radioName="priority" radioValue="option3" radioChecked={selectedValue === 'option3'} onRadioChange={setSelectedValue}>\r
            낮음\r
          </UniversalOptionList>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList에 실제 Radio 컴포넌트를 사용하는 예시입니다.'
      }
    }
  }
}`,...(A=(V=f.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var M,P,W;O.parameters={...O.parameters,docs:{...(M=O.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="250px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [permissions, setPermissions] = React.useState({
      read: true,
      write: false,
      delete: false,
      admin: false
    });
    const handlePermissionChange = (permission: string, checked: boolean) => {
      setPermissions(prev => ({
        ...prev,
        [permission]: checked
      }));
    };
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Checkbox Component\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xs">\r
          <UniversalOptionList system={system} type="menu-header">권한 설정</UniversalOptionList>\r
          <UniversalOptionList system={system} type="checkbox-component" checkboxChecked={permissions.read} onCheckboxChange={(checked: boolean) => handlePermissionChange('read', checked)}>\r
            읽기 권한\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="checkbox-component" checkboxChecked={permissions.write} onCheckboxChange={(checked: boolean) => handlePermissionChange('write', checked)}>\r
            쓰기 권한\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="checkbox-component" checkboxChecked={permissions.delete} onCheckboxChange={(checked: boolean) => handlePermissionChange('delete', checked)}>\r
            삭제 권한\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="checkbox-component" checkboxChecked={permissions.admin} onCheckboxChange={(checked: boolean) => handlePermissionChange('admin', checked)}>\r
            관리자 권한\r
          </UniversalOptionList>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList에 실제 Checkbox 컴포넌트를 사용하는 예시입니다.'
      }
    }
  }
}`,...(W=(P=O.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,_,B;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [Story => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
        <Sizing width="300px">\r
          <Frame display="flex" padding="lg" fill>\r
            <Story />\r
          </Frame>\r
        </Sizing>\r
      </Surface>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedAction, setSelectedAction] = React.useState('');
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 컨텍스트 메뉴 예시\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xs">\r
          <UniversalOptionList system={system} type="single-select" state={selectedAction === 'copy' ? 'selected' : 'default'} onClick={() => setSelectedAction('copy')}>\r
            복사\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="single-select" state={selectedAction === 'cut' ? 'selected' : 'default'} onClick={() => setSelectedAction('cut')}>\r
            잘라내기\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="single-select" state={selectedAction === 'paste' ? 'selected' : 'default'} onClick={() => setSelectedAction('paste')}>\r
            붙여넣기\r
          </UniversalOptionList>\r
          <UniversalOptionList system={system} type="menu-header">---</UniversalOptionList>\r
          <UniversalOptionList system={system} type="single-select" state={selectedAction === 'delete' ? 'selected' : 'default'} onClick={() => setSelectedAction('delete')}>\r
            삭제\r
          </UniversalOptionList>\r
        </Frame>\r
        {selectedAction && <Text variant="caption-1" color="secondary-foreground-2">\r
            선택된 액션: {selectedAction}\r
          </Text>}\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 컨텍스트 메뉴에서 사용되는 OptionList의 예시입니다.'
      }
    }
  }
}`,...(B=(_=v.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Z=["Default","SystemComparison","Types","States","WithRadioComponent","WithCheckboxComponent","MenuExample"];export{h as Default,v as MenuExample,g as States,x as SystemComparison,u as Types,O as WithCheckboxComponent,f as WithRadioComponent,Z as __namedExportsOrder,Y as default};

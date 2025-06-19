import{j as e}from"./react-vendor-BFNgaz96.js";import{b as E}from"./index.esm-ChTCnUjT.js";import{b as z}from"./index.esm-BNdFApZa.js";import{F as t,T as a}from"./index.esm-WYP67xav.js";const N={"system-01":E,"system-02":z},s=({system:i,...n})=>{const r=N[i]||E;return e.jsx(r,{...n})},V={title:"Components/Checkbox",component:s,parameters:{layout:"centered",docs:{description:{component:"다양한 시스템에서 사용되는 범용 Checkbox 컴포넌트입니다. 시스템별로 디자인이 다르게 적용됩니다."}}},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"체크박스 라벨 텍스트"},checked:{control:{type:"boolean"},description:"체크 상태"},indeterminate:{control:{type:"boolean"},description:"중간 상태 (일부 선택)"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},size:{control:"select",options:["sm","md","lg"],description:"체크박스 크기"}}},d={args:{children:"기본 체크박스",checked:!1},render:(i,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01";return e.jsx(s,{...i,system:r})}},m={render:()=>e.jsxs(t,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:"system-01",checked:!1,children:"체크 안됨"}),e.jsx(s,{system:"system-01",checked:!0,children:"체크됨"}),e.jsx(s,{system:"system-01",indeterminate:!0,children:"중간 상태"}),e.jsx(s,{system:"system-01",disabled:!0,children:"비활성화"})]})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:"system-02",checked:!1,children:"체크 안됨"}),e.jsx(s,{system:"system-02",checked:!0,children:"체크됨"}),e.jsx(s,{system:"system-02",indeterminate:!0,children:"중간 상태"}),e.jsx(s,{system:"system-02",disabled:!0,children:"비활성화"})]})]})]})},l={render:(i,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",c=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[c," - Size Variations"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(s,{system:r,size:"sm",checked:!0,children:"Small 체크박스"}),e.jsx(s,{system:r,size:"md",checked:!0,children:"Medium 체크박스"}),e.jsx(s,{system:r,size:"lg",checked:!0,children:"Large 체크박스"})]})]})}},o={render:(i,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",c=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[c," - All States"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"Normal States"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:r,checked:!1,children:"체크 안됨"}),e.jsx(s,{system:r,checked:!0,children:"체크됨"}),e.jsx(s,{system:r,indeterminate:!0,children:"중간 상태 (일부 선택)"})]}),e.jsx(a,{as:"h3",variant:"heading-3",children:"Disabled States"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:r,checked:!1,disabled:!0,children:"비활성화 (체크 안됨)"}),e.jsx(s,{system:r,checked:!0,disabled:!0,children:"비활성화 (체크됨)"}),e.jsx(s,{system:r,indeterminate:!0,disabled:!0,children:"비활성화 (중간 상태)"})]})]})]})}},h={render:(i,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",c=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[c," - 실제 사용 예시"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h3",variant:"heading-3",children:"지원자 필터링"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:r,checked:!0,children:"면접 완료"}),e.jsx(s,{system:r,checked:!1,children:"서류심사 중"}),e.jsx(s,{system:r,indeterminate:!0,children:"일부 단계 완료"}),e.jsx(s,{system:r,checked:!0,children:"최종합격"})]}),e.jsx(a,{as:"h3",variant:"heading-3",children:"권한 설정"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(s,{system:r,checked:!0,children:"지원자 정보 열람"}),e.jsx(s,{system:r,checked:!0,children:"면접 일정 관리"}),e.jsx(s,{system:r,checked:!1,children:"최종 결정 권한"}),e.jsx(s,{system:r,disabled:!0,children:"시스템 관리 (관리자만)"})]})]})]})}};var x,y,p;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '기본 체크박스',
    checked: false
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCheckbox {...args} system={system} />;
  }
}`,...(p=(y=d.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var u,k,C;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 01 - Clean & Efficient (파란색)\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system="system-01" checked={false}>체크 안됨</UniversalCheckbox>\r
            <UniversalCheckbox system="system-01" checked={true}>체크됨</UniversalCheckbox>\r
            <UniversalCheckbox system="system-01" indeterminate={true}>중간 상태</UniversalCheckbox>\r
            <UniversalCheckbox system="system-01" disabled={true}>비활성화</UniversalCheckbox>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 02 - Modern & Friendly (초록색)\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system="system-02" checked={false}>체크 안됨</UniversalCheckbox>\r
            <UniversalCheckbox system="system-02" checked={true}>체크됨</UniversalCheckbox>\r
            <UniversalCheckbox system="system-02" indeterminate={true}>중간 상태</UniversalCheckbox>\r
            <UniversalCheckbox system="system-02" disabled={true}>비활성화</UniversalCheckbox>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(C=(k=m.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,v,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Size Variations\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <UniversalCheckbox system={system} size="sm" checked={true}>\r
            Small 체크박스\r
          </UniversalCheckbox>\r
          <UniversalCheckbox system={system} size="md" checked={true}>\r
            Medium 체크박스\r
          </UniversalCheckbox>\r
          <UniversalCheckbox system={system} size="lg" checked={true}>\r
            Large 체크박스\r
          </UniversalCheckbox>\r
        </Frame>\r
      </Frame>;
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,U,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - All States\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">Normal States</Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system={system} checked={false}>체크 안됨</UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={true}>체크됨</UniversalCheckbox>\r
            <UniversalCheckbox system={system} indeterminate={true}>중간 상태 (일부 선택)</UniversalCheckbox>\r
          </Frame>\r
          \r
          <Text as="h3" variant="heading-3">Disabled States</Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system={system} checked={false} disabled={true}>비활성화 (체크 안됨)</UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={true} disabled={true}>비활성화 (체크됨)</UniversalCheckbox>\r
            <UniversalCheckbox system={system} indeterminate={true} disabled={true}>비활성화 (중간 상태)</UniversalCheckbox>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(j=(U=o.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var F,S,T;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 실제 사용 예시\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h3" variant="heading-3">지원자 필터링</Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system={system} checked={true}>\r
              면접 완료\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={false}>\r
              서류심사 중\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} indeterminate={true}>\r
              일부 단계 완료\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={true}>\r
              최종합격\r
            </UniversalCheckbox>\r
          </Frame>\r
          \r
          <Text as="h3" variant="heading-3">권한 설정</Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalCheckbox system={system} checked={true}>\r
              지원자 정보 열람\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={true}>\r
              면접 일정 관리\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} checked={false}>\r
              최종 결정 권한\r
            </UniversalCheckbox>\r
            <UniversalCheckbox system={system} disabled={true}>\r
              시스템 관리 (관리자만)\r
            </UniversalCheckbox>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const _=["Default","SystemComparison","Sizes","States","UseCaseExample"];export{d as Default,l as Sizes,o as States,m as SystemComparison,h as UseCaseExample,_ as __namedExportsOrder,V as default};

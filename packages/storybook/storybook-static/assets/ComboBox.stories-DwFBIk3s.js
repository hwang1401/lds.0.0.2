import{j as e,r as c}from"./react-vendor-BFNgaz96.js";import{d as P}from"./index.esm-ChTCnUjT.js";import{d as Z}from"./index.esm-BNdFApZa.js";import{a as d,F as a,T as p}from"./index.esm-WYP67xav.js";const ee={"system-01":P,"system-02":Z},n=({system:t,...s})=>{const r=ee[t]||P;return e.jsx(r,{...s})},oe={title:"Components/ComboBox",component:n,parameters:{layout:"padded",docs:{description:{component:"ComboBox 컴포넌트는 검색 기능과 단일/다중 선택을 지원하는 드롭다운 메뉴입니다. 선택된 항목은 Chip으로 표시됩니다."}}},tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"선택 가능한 옵션들"},multiple:{control:{type:"boolean"},description:"다중 선택 허용 여부"},searchable:{control:{type:"boolean"},description:"검색 가능 여부"},placeholder:{control:{type:"text"},description:"플레이스홀더 텍스트"},label:{control:{type:"text"},description:"라벨"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},errorMessage:{control:{type:"text"},description:"에러 메시지"},helperText:{control:{type:"text"},description:"도움말 텍스트"},required:{control:{type:"boolean"},description:"필수 입력 여부"},direction:{control:{type:"select"},options:["up","down"],description:"드롭다운 방향"},fieldWidth:{control:{type:"text"},description:"컴보박스 필드 너비"},fieldVariant:{control:{type:"select"},options:["outlined","filled"],description:"컴보박스 필드 변형"},fieldSize:{control:{type:"select"},options:["md","lg"],description:"컴보박스 필드 크기"}}},u=[{value:"react",label:"React"},{value:"vue",label:"Vue.js"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"next",label:"Next.js"},{value:"nuxt",label:"Nuxt.js"}],$=[{value:"js",label:"JavaScript",group:"Languages"},{value:"ts",label:"TypeScript",group:"Languages"},{value:"python",label:"Python",group:"Languages"},{value:"react",label:"React",group:"Frameworks"},{value:"vue",label:"Vue.js",group:"Frameworks"},{value:"angular",label:"Angular",group:"Frameworks"},{value:"node",label:"Node.js",group:"Runtime"},{value:"deno",label:"Deno",group:"Runtime"}],x={decorators:[t=>e.jsx(d,{width:"300px",style:{minHeight:"250px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",[o,l]=c.useState("");return e.jsx(n,{...t,system:r,options:u,value:o,placeholder:"프레임워크를 선택하세요",label:"프레임워크",onChange:i=>l(i)})},parameters:{docs:{description:{story:"기본 단일 선택 ComboBox입니다."}}}},g={decorators:[t=>e.jsx(a,{display:"flex",direction:"column",gap:"xl",style:{minHeight:"400px"},children:e.jsx(t,{})})],render:()=>{const[t,s]=c.useState(""),[r,o]=c.useState("");return e.jsxs(a,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(p,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색, 직각)"}),e.jsx(d,{width:"300px",children:e.jsx(n,{system:"system-01",options:u,value:t,placeholder:"프레임워크를 선택하세요",label:"프레임워크",onChange:l=>s(l)})})]}),e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(p,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색, 둥근 모서리)"}),e.jsx(d,{width:"300px",children:e.jsx(n,{system:"system-02",options:u,value:r,placeholder:"프레임워크를 선택하세요",label:"프레임워크",onChange:l=>o(l)})})]})]})}},h={decorators:[t=>e.jsx(d,{width:"300px",style:{minHeight:"250px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly",[l,i]=c.useState("");return e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - Searchable"]}),e.jsx(n,{system:r,options:u,value:l,searchable:!0,placeholder:"검색하여 선택하세요",label:"검색 가능한 선택",onChange:m=>i(m)})]})},parameters:{docs:{description:{story:"검색 기능이 있는 ComboBox입니다. 타이핑하여 옵션을 필터링할 수 있습니다."}}}},S={decorators:[t=>e.jsx(d,{width:"400px",style:{minHeight:"300px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly",[l,i]=c.useState(["react","vue"]);return e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - Multiple Selection"]}),e.jsx(n,{system:r,options:u,value:l,multiple:!0,placeholder:"여러 개를 선택하세요",label:"다중 선택 (칩 표시)",onChange:m=>i(m)})]})},parameters:{docs:{description:{story:"다중 선택이 가능한 ComboBox입니다. 선택된 항목들이 칩으로 표시되며, 칩의 X 버튼으로 개별 제거가 가능합니다."}}}},v={decorators:[t=>e.jsx(d,{width:"350px",style:{minHeight:"300px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly",[l,i]=c.useState("");return e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - Grouped Options"]}),e.jsx(n,{system:r,options:$,value:l,searchable:!0,placeholder:"기술을 선택하세요",label:"기술 스택",onChange:m=>i(m)})]})},parameters:{docs:{description:{story:"그룹으로 분류된 옵션들을 보여주는 ComboBox입니다."}}}},b={decorators:[t=>e.jsx(d,{width:"300px",style:{minHeight:"250px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly",[l,i]=c.useState("");return e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - Error State"]}),e.jsx(n,{system:r,options:u,value:l,placeholder:"프레임워크를 선택하세요",label:"필수 선택",required:!0,errorMessage:"프레임워크를 선택해주세요",onChange:m=>i(m)})]})},parameters:{docs:{description:{story:"에러 상태의 ComboBox입니다."}}}},C={decorators:[t=>e.jsx(d,{width:"300px",style:{minHeight:"250px"},children:e.jsx(a,{padding:"lg",children:e.jsx(t,{})})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - Disabled State"]}),e.jsx(n,{system:r,options:u,value:"react",placeholder:"프레임워크를 선택하세요",label:"비활성화된 선택",disabled:!0,helperText:"현재 선택할 수 없습니다",onChange:()=>{}})]})},parameters:{docs:{description:{story:"비활성화된 ComboBox입니다."}}}},f={decorators:[t=>e.jsx(a,{display:"flex",direction:"column",gap:"lg",style:{minHeight:"400px"},children:e.jsx(t,{})})],render:(t,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",o=r==="system-01"?"Clean & Efficient":"Modern & Friendly",[l,i]=c.useState(""),[m,I]=c.useState([]),[K,Q]=c.useState(""),Y=[{value:"1",label:"1년 미만"},{value:"2",label:"1-3년"},{value:"3",label:"3-5년"},{value:"4",label:"5-10년"},{value:"5",label:"10년 이상"}];return e.jsxs(a,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(p,{as:"h2",variant:"heading-2",children:[o," - 개발자 정보 입력 폼"]}),e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(d,{width:"350px",children:e.jsx(n,{system:r,options:u,value:l,placeholder:"주 사용 프레임워크",label:"메인 프레임워크",required:!0,helperText:"가장 자주 사용하는 프레임워크를 선택하세요",onChange:y=>i(y)})}),e.jsx(d,{width:"400px",children:e.jsx(n,{system:r,options:$,value:m,multiple:!0,searchable:!0,placeholder:"보유 기술을 선택하세요",label:"보유 기술",helperText:"여러 개 선택 가능합니다",onChange:y=>I(y)})}),e.jsx(d,{width:"300px",children:e.jsx(n,{system:r,options:Y,value:K,placeholder:"경력을 선택하세요",label:"개발 경력",required:!0,onChange:y=>Q(y)})})]})]})},parameters:{docs:{description:{story:"실제 폼에서 사용되는 다양한 ComboBox의 예시입니다."}}}};var j,F,V;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="300px" style={{
    minHeight: '250px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const [selectedValue, setSelectedValue] = useState<string>('');
    return <UniversalComboBox {...args} system={system} options={sampleOptions} value={selectedValue} placeholder="프레임워크를 선택하세요" label="프레임워크" onChange={(value: any) => setSelectedValue(value as string)} />;
  },
  parameters: {
    docs: {
      description: {
        story: '기본 단일 선택 ComboBox입니다.'
      }
    }
  }
}`,...(V=(F=x.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var w,B,T;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <Frame display="flex" direction="column" gap="xl" style={{
    minHeight: '400px'
  }}>\r
        <Story />\r
      </Frame>],
  render: () => {
    const [system01Value, setSystem01Value] = useState<string>('');
    const [system02Value, setSystem02Value] = useState<string>('');
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 01 - Clean & Efficient (파란색, 직각)\r
          </Text>\r
          <Sizing width="300px">\r
            <UniversalComboBox system="system-01" options={sampleOptions} value={system01Value} placeholder="프레임워크를 선택하세요" label="프레임워크" onChange={(value: any) => setSystem01Value(value as string)} />\r
          </Sizing>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 02 - Modern & Friendly (초록색, 둥근 모서리)\r
          </Text>\r
          <Sizing width="300px">\r
            <UniversalComboBox system="system-02" options={sampleOptions} value={system02Value} placeholder="프레임워크를 선택하세요" label="프레임워크" onChange={(value: any) => setSystem02Value(value as string)} />\r
          </Sizing>\r
        </Frame>\r
      </Frame>;
  }
}`,...(T=(B=g.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,z,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="300px" style={{
    minHeight: '250px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    return <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Searchable\r
        </Text>\r
        <UniversalComboBox system={system} options={sampleOptions} value={selectedValue} searchable placeholder="검색하여 선택하세요" label="검색 가능한 선택" onChange={(value: any) => setSelectedValue(value as string)} />\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '검색 기능이 있는 ComboBox입니다. 타이핑하여 옵션을 필터링할 수 있습니다.'
      }
    }
  }
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var N,O,H;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="400px" style={{
    minHeight: '300px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValues, setSelectedValues] = useState<string[]>(['react', 'vue']);
    return <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Multiple Selection\r
        </Text>\r
        <UniversalComboBox system={system} options={sampleOptions} value={selectedValues} multiple placeholder="여러 개를 선택하세요" label="다중 선택 (칩 표시)" onChange={(value: any) => setSelectedValues(value as string[])} />\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다중 선택이 가능한 ComboBox입니다. 선택된 항목들이 칩으로 표시되며, 칩의 X 버튼으로 개별 제거가 가능합니다.'
      }
    }
  }
}`,...(H=(O=S.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var k,U,q;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="350px" style={{
    minHeight: '300px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    return <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Grouped Options\r
        </Text>\r
        <UniversalComboBox system={system} options={groupedOptions} value={selectedValue} searchable placeholder="기술을 선택하세요" label="기술 스택" onChange={(value: any) => setSelectedValue(value as string)} />\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '그룹으로 분류된 옵션들을 보여주는 ComboBox입니다.'
      }
    }
  }
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var D,R,W;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="300px" style={{
    minHeight: '250px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    return <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Error State\r
        </Text>\r
        <UniversalComboBox system={system} options={sampleOptions} value={selectedValue} placeholder="프레임워크를 선택하세요" label="필수 선택" required errorMessage="프레임워크를 선택해주세요" onChange={(value: any) => setSelectedValue(value as string)} />\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '에러 상태의 ComboBox입니다.'
      }
    }
  }
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,L,A;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [Story => <Sizing width="300px" style={{
    minHeight: '250px'
  }}>\r
        <Frame padding="lg">\r
          <Story />\r
        </Frame>\r
      </Sizing>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Disabled State\r
        </Text>\r
        <UniversalComboBox system={system} options={sampleOptions} value="react" placeholder="프레임워크를 선택하세요" label="비활성화된 선택" disabled helperText="현재 선택할 수 없습니다" onChange={() => {}} />\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 ComboBox입니다.'
      }
    }
  }
}`,...(A=(L=C.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var X,_,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [Story => <Frame display="flex" direction="column" gap="lg" style={{
    minHeight: '400px'
  }}>\r
        <Story />\r
      </Frame>],
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [framework, setFramework] = useState<string>('');
    const [skills, setSkills] = useState<string[]>([]);
    const [experience, setExperience] = useState<string>('');
    const experienceOptions = [{
      value: '1',
      label: '1년 미만'
    }, {
      value: '2',
      label: '1-3년'
    }, {
      value: '3',
      label: '3-5년'
    }, {
      value: '4',
      label: '5-10년'
    }, {
      value: '5',
      label: '10년 이상'
    }];
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 개발자 정보 입력 폼\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Sizing width="350px">\r
            <UniversalComboBox system={system} options={sampleOptions} value={framework} placeholder="주 사용 프레임워크" label="메인 프레임워크" required helperText="가장 자주 사용하는 프레임워크를 선택하세요" onChange={(value: any) => setFramework(value as string)} />\r
          </Sizing>\r
          \r
          <Sizing width="400px">\r
            <UniversalComboBox system={system} options={groupedOptions} value={skills} multiple searchable placeholder="보유 기술을 선택하세요" label="보유 기술" helperText="여러 개 선택 가능합니다" onChange={(value: any) => setSkills(value as string[])} />\r
          </Sizing>\r
          \r
          <Sizing width="300px">\r
            <UniversalComboBox system={system} options={experienceOptions} value={experience} placeholder="경력을 선택하세요" label="개발 경력" required onChange={(value: any) => setExperience(value as string)} />\r
          </Sizing>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 ComboBox의 예시입니다.'
      }
    }
  }
}`,...(J=(_=f.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};const le=["Default","SystemComparison","Searchable","MultipleWithChips","WithGroups","ErrorState","Disabled","FormExample"];export{x as Default,C as Disabled,b as ErrorState,f as FormExample,S as MultipleWithChips,h as Searchable,g as SystemComparison,v as WithGroups,le as __namedExportsOrder,oe as default};

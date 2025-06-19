import{j as e,r as T}from"./react-vendor-BFNgaz96.js";import{c as W}from"./index.esm-ChTCnUjT.js";import{c as Y}from"./index.esm-BNdFApZa.js";import{S as m,F as a,T as n}from"./index.esm-WYP67xav.js";const Z={"system-01":W,"system-02":Y},i=({system:o,...r})=>{const s=Z[o]||W;return e.jsx(s,{...r})},ae={title:"Components/Chip",component:i,parameters:{layout:"padded",docs:{description:{component:"Chip 컴포넌트는 선택된 항목이나 태그를 표시하는 컴포넌트입니다. ComboBox에서 선택된 항목을 표시하거나 태그 입력에서 사용할 수 있습니다."}}},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"칩에 표시할 텍스트"},variant:{control:{type:"select"},options:["filled","outlined"],description:"칩의 변형"},size:{control:{type:"select"},options:["sm","md"],description:"칩의 크기"},state:{control:{type:"select"},options:["default","hovered","pressed","disabled"],description:"칩의 상태"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},removable:{control:{type:"boolean"},description:"삭제 가능 여부"},selectable:{control:{type:"boolean"},description:"선택 가능 여부"},selected:{control:{type:"boolean"},description:"선택 상태"}}},u={args:{children:"React"},render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01";return e.jsx(m,{children:e.jsx(a,{display:"flex",padding:"lg",children:e.jsx(i,{...o,system:s})})})},parameters:{docs:{description:{story:"기본 Chip 컴포넌트입니다."}}}},x={render:()=>e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색)"}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:"system-01",variant:"filled",children:"기본"}),e.jsx(i,{system:"system-01",variant:"filled",selected:!0,children:"선택됨"}),e.jsx(i,{system:"system-01",variant:"filled",removable:!0,onRemove:()=>{},children:"삭제가능"}),e.jsx(i,{system:"system-01",variant:"outlined",children:"Outlined"})]})]}),e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색)"}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:"system-02",variant:"filled",children:"기본"}),e.jsx(i,{system:"system-02",variant:"filled",selected:!0,children:"선택됨"}),e.jsx(i,{system:"system-02",variant:"filled",removable:!0,onRemove:()=>{},children:"삭제가능"}),e.jsx(i,{system:"system-02",variant:"outlined",children:"Outlined"})]})]})]})})},f={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - Variants"]}),e.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(n,{variant:"body-1",weight:"bold",children:"Filled Variant"}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:s,variant:"filled",children:"기본"}),e.jsx(i,{system:s,variant:"filled",selected:!0,children:"선택됨"}),e.jsx(i,{system:s,variant:"filled",removable:!0,onRemove:()=>{},children:"삭제가능"}),e.jsx(i,{system:s,variant:"filled",disabled:!0,children:"비활성화"})]})]}),e.jsxs(a,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(n,{variant:"body-1",weight:"bold",children:"Outlined Variant"}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:s,variant:"outlined",children:"기본"}),e.jsx(i,{system:s,variant:"outlined",selected:!0,children:"선택됨"}),e.jsx(i,{system:s,variant:"outlined",removable:!0,onRemove:()=>{},children:"삭제가능"}),e.jsx(i,{system:s,variant:"outlined",disabled:!0,children:"비활성화"})]})]})]})})},parameters:{docs:{description:{story:"Chip의 filled와 outlined 변형을 비교합니다."}}}},C={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - Sizes"]}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:s,size:"sm",children:"Small"}),e.jsx(i,{system:s,size:"md",children:"Medium"})]})]})})},parameters:{docs:{description:{story:"Chip의 다양한 크기를 보여줍니다."}}}},j={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - States"]}),e.jsxs(a,{display:"flex",direction:"row",gap:"md",align:"center",children:[e.jsx(i,{system:s,state:"default",children:"기본 상태"}),e.jsx(i,{system:s,state:"hovered",children:"호버 상태"}),e.jsx(i,{system:s,state:"pressed",children:"눌림 상태"}),e.jsx(i,{system:s,state:"disabled",disabled:!0,children:"비활성화 상태"})]})]})})},parameters:{docs:{description:{story:"Chip의 다양한 상태를 보여줍니다."}}}},S={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[p,g]=T.useState(["react"]),h=l=>{g(y=>y.includes(l)?y.filter(t=>t!==l):[...y,l])},c=[{id:"react",label:"React"},{id:"vue",label:"Vue"},{id:"angular",label:"Angular"},{id:"svelte",label:"Svelte"},{id:"typescript",label:"TypeScript"}];return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - 선택 가능한 칩"]}),e.jsx(a,{display:"flex",direction:"row",gap:"sm",wrap:"wrap",children:c.map(l=>e.jsx(i,{system:s,selectable:!0,selected:p.includes(l.id),onClick:()=>h(l.id),children:l.label},l.id))}),e.jsxs(n,{variant:"body-2",color:"secondary-foreground-1",children:["선택된 항목: ",p.join(", ")||"없음"]})]})})},parameters:{docs:{description:{story:"선택 가능한 Chip들을 보여줍니다. 클릭하여 선택/해제할 수 있습니다."}}}},b={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[p,g]=T.useState([{id:"react",label:"React"},{id:"vue",label:"Vue"},{id:"angular",label:"Angular"},{id:"svelte",label:"Svelte"}]),h=c=>{g(l=>l.filter(y=>y.id!==c))};return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - 삭제 가능한 칩"]}),e.jsx(a,{display:"flex",direction:"row",gap:"sm",wrap:"wrap",children:p.map(c=>e.jsx(i,{system:s,removable:!0,onRemove:()=>h(c.id),children:c.label},c.id))}),p.length===0&&e.jsx(n,{variant:"body-2",color:"secondary-foreground-1",children:"모든 칩이 삭제되었습니다."})]})})},parameters:{docs:{description:{story:"삭제 가능한 Chip들을 보여줍니다. X 버튼을 클릭하여 삭제할 수 있습니다."}}}},F={render:(o,{globals:r})=>{const s=(r==null?void 0:r.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[p,g]=T.useState(["JavaScript","React","TypeScript"]),[h,c]=T.useState([]),l=t=>{g(v=>v.filter(U=>U!==t))},y=t=>{c(v=>v.includes(t)?v.filter(U=>U!==t):[...v,t])};return e.jsx(m,{children:e.jsxs(a,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[d," - 태그 입력 예시"]}),e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"body-1",weight:"bold",children:"기술 스택 (삭제 가능)"}),e.jsx(a,{display:"flex",direction:"row",gap:"sm",wrap:"wrap",children:p.map(t=>e.jsx(i,{system:s,variant:"filled",removable:!0,onRemove:()=>l(t),children:t},t))})]}),e.jsxs(a,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"body-1",weight:"bold",children:"관심 분야 (선택 가능)"}),e.jsx(a,{display:"flex",direction:"row",gap:"sm",wrap:"wrap",children:["프론트엔드","백엔드","모바일","DevOps","AI/ML"].map(t=>e.jsx(i,{system:s,variant:"outlined",selectable:!0,selected:h.includes(t),onClick:()=>y(t),children:t},t))}),e.jsxs(n,{variant:"body-2",color:"secondary-foreground-1",children:["선택된 관심 분야: ",h.join(", ")||"없음"]})]})]})})},parameters:{docs:{description:{story:"실제 태그 입력 시나리오에서 사용되는 Chip의 예시입니다."}}}};var w,R,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'React'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <Surface>\r
        <Frame display="flex" padding="lg">\r
          <UniversalChip {...args} system={system} />\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: '기본 Chip 컴포넌트입니다.'
      }
    }
  }
}`,...(E=(R=u.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,N,V;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Surface>\r
      <Frame display="flex" direction="column" gap="xl" padding="lg">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 01 - Clean & Efficient (파란색)\r
          </Text>\r
          <Frame display="flex" direction="row" gap="md" align="center">\r
            <UniversalChip system="system-01" variant="filled">기본</UniversalChip>\r
            <UniversalChip system="system-01" variant="filled" selected>선택됨</UniversalChip>\r
            <UniversalChip system="system-01" variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>\r
            <UniversalChip system="system-01" variant="outlined">Outlined</UniversalChip>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text as="h2" variant="heading-2">\r
            System 02 - Modern & Friendly (초록색)\r
          </Text>\r
          <Frame display="flex" direction="row" gap="md" align="center">\r
            <UniversalChip system="system-02" variant="filled">기본</UniversalChip>\r
            <UniversalChip system="system-02" variant="filled" selected>선택됨</UniversalChip>\r
            <UniversalChip system="system-02" variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>\r
            <UniversalChip system="system-02" variant="outlined">Outlined</UniversalChip>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var O,z,k;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - Variants\r
          </Text>\r
          \r
          {/* Filled Variant */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-1" weight="bold">Filled Variant</Text>\r
            <Frame display="flex" direction="row" gap="md" align="center">\r
              <UniversalChip system={system} variant="filled">기본</UniversalChip>\r
              <UniversalChip system={system} variant="filled" selected>선택됨</UniversalChip>\r
              <UniversalChip system={system} variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>\r
              <UniversalChip system={system} variant="filled" disabled>비활성화</UniversalChip>\r
            </Frame>\r
          </Frame>\r
          \r
          {/* Outlined Variant */}\r
          <Frame display="flex" direction="column" gap="sm">\r
            <Text variant="body-1" weight="bold">Outlined Variant</Text>\r
            <Frame display="flex" direction="row" gap="md" align="center">\r
              <UniversalChip system={system} variant="outlined">기본</UniversalChip>\r
              <UniversalChip system={system} variant="outlined" selected>선택됨</UniversalChip>\r
              <UniversalChip system={system} variant="outlined" removable onRemove={() => {}}>삭제가능</UniversalChip>\r
              <UniversalChip system={system} variant="outlined" disabled>비활성화</UniversalChip>\r
            </Frame>\r
          </Frame>\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip의 filled와 outlined 변형을 비교합니다.'
      }
    }
  }
}`,...(k=(z=f.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,A,D;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - Sizes\r
          </Text>\r
          <Frame display="flex" direction="row" gap="md" align="center">\r
            <UniversalChip system={system} size="sm">Small</UniversalChip>\r
            <UniversalChip system={system} size="md">Medium</UniversalChip>\r
          </Frame>\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 크기를 보여줍니다.'
      }
    }
  }
}`,...(D=(A=C.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var J,L,X;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - States\r
          </Text>\r
          <Frame display="flex" direction="row" gap="md" align="center">\r
            <UniversalChip system={system} state="default">기본 상태</UniversalChip>\r
            <UniversalChip system={system} state="hovered">호버 상태</UniversalChip>\r
            <UniversalChip system={system} state="pressed">눌림 상태</UniversalChip>\r
            <UniversalChip system={system} state="disabled" disabled>비활성화 상태</UniversalChip>\r
          </Frame>\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 상태를 보여줍니다.'
      }
    }
  }
}`,...(X=(L=j.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var _,B,$;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedChips, setSelectedChips] = useState<string[]>(['react']);
    const toggleChip = (chipId: string) => {
      setSelectedChips(prev => prev.includes(chipId) ? prev.filter(id => id !== chipId) : [...prev, chipId]);
    };
    const chips = [{
      id: 'react',
      label: 'React'
    }, {
      id: 'vue',
      label: 'Vue'
    }, {
      id: 'angular',
      label: 'Angular'
    }, {
      id: 'svelte',
      label: 'Svelte'
    }, {
      id: 'typescript',
      label: 'TypeScript'
    }];
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - 선택 가능한 칩\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm" wrap="wrap">\r
            {chips.map(chip => <UniversalChip key={chip.id} system={system} selectable selected={selectedChips.includes(chip.id)} onClick={() => toggleChip(chip.id)}>\r
                {chip.label}\r
              </UniversalChip>)}\r
          </Frame>\r
          <Text variant="body-2" color="secondary-foreground-1">\r
            선택된 항목: {selectedChips.join(', ') || '없음'}\r
          </Text>\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: '선택 가능한 Chip들을 보여줍니다. 클릭하여 선택/해제할 수 있습니다.'
      }
    }
  }
}`,...($=(B=S.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var q,G,H;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [chips, setChips] = useState([{
      id: 'react',
      label: 'React'
    }, {
      id: 'vue',
      label: 'Vue'
    }, {
      id: 'angular',
      label: 'Angular'
    }, {
      id: 'svelte',
      label: 'Svelte'
    }]);
    const removeChip = (chipId: string) => {
      setChips(prev => prev.filter(chip => chip.id !== chipId));
    };
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - 삭제 가능한 칩\r
          </Text>\r
          <Frame display="flex" direction="row" gap="sm" wrap="wrap">\r
            {chips.map(chip => <UniversalChip key={chip.id} system={system} removable onRemove={() => removeChip(chip.id)}>\r
                {chip.label}\r
              </UniversalChip>)}\r
          </Frame>\r
          {chips.length === 0 && <Text variant="body-2" color="secondary-foreground-1">\r
              모든 칩이 삭제되었습니다.\r
            </Text>}\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: '삭제 가능한 Chip들을 보여줍니다. X 버튼을 클릭하여 삭제할 수 있습니다.'
      }
    }
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,P,Q;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [tags, setTags] = useState(['JavaScript', 'React', 'TypeScript']);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const removeTag = (tagToRemove: string) => {
      setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };
    const toggleTag = (tag: string) => {
      setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };
    return <Surface>\r
        <Frame display="flex" direction="column" gap="lg" padding="lg">\r
          <Text as="h2" variant="heading-2">\r
            {systemName} - 태그 입력 예시\r
          </Text>\r
          \r
          <Frame display="flex" direction="column" gap="md">\r
            <Text variant="body-1" weight="bold">기술 스택 (삭제 가능)</Text>\r
                         <Frame display="flex" direction="row" gap="sm" wrap="wrap">\r
               {tags.map(tag => <UniversalChip key={tag} system={system} variant="filled" removable onRemove={() => removeTag(tag)}>\r
                   {tag}\r
                 </UniversalChip>)}\r
            </Frame>\r
          </Frame>\r
          \r
          <Frame display="flex" direction="column" gap="md">\r
            <Text variant="body-1" weight="bold">관심 분야 (선택 가능)</Text>\r
                         <Frame display="flex" direction="row" gap="sm" wrap="wrap">\r
               {['프론트엔드', '백엔드', '모바일', 'DevOps', 'AI/ML'].map(interest => <UniversalChip key={interest} system={system} variant="outlined" selectable selected={selectedTags.includes(interest)} onClick={() => toggleTag(interest)}>\r
                   {interest}\r
                 </UniversalChip>)}\r
            </Frame>\r
            <Text variant="body-2" color="secondary-foreground-1">\r
              선택된 관심 분야: {selectedTags.join(', ') || '없음'}\r
            </Text>\r
          </Frame>\r
        </Frame>\r
      </Surface>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 태그 입력 시나리오에서 사용되는 Chip의 예시입니다.'
      }
    }
  }
}`,...(Q=(P=F.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const te=["Default","SystemComparison","Variants","Sizes","States","SelectableChips","RemovableChips","TagInputExample"];export{u as Default,b as RemovableChips,S as SelectableChips,C as Sizes,j as States,x as SystemComparison,F as TagInputExample,f as Variants,te as __namedExportsOrder,ae as default};

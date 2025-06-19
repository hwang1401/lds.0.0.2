import{j as e,r as M}from"./react-vendor-BFNgaz96.js";import{M as X}from"./index.esm-ChTCnUjT.js";import{M as Y}from"./index.esm-BNdFApZa.js";import{F as t,T as a,S as l}from"./index.esm-WYP67xav.js";const Z={"system-01":X,"system-02":Y},r=({system:i,...n})=>{const s=Z[i]||X;return e.jsx(s,{...n})},te={title:"Components/Menu",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["md","lg","xlg"]},state:{control:"select",options:["default","hovered","pressed","focused","selected","disabled"]},expanded:{control:"boolean"},disabled:{control:"boolean"},leftIcon:{control:"text"},rightIcon:{control:"text"}}},u={args:{children:"메뉴 헤더",size:"lg",expanded:!1,disabled:!1},render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01";return e.jsx(r,{...i,system:s})}},x={render:()=>e.jsxs(t,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색, 직각)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:"system-01",size:"lg",leftIcon:"LineIconsFolderFolderIcon",children:"문서 폴더"}),e.jsx(r,{system:"system-01",size:"lg",leftIcon:"LineIconsSettingsSetting1Icon",state:"selected",children:"설정 (선택됨)"}),e.jsx(r,{system:"system-01",size:"lg",leftIcon:"LineIconsPersonPersonIcon",disabled:!0,children:"사용자 관리 (비활성화)"})]})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색, 둥근 모서리)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:"system-02",size:"lg",leftIcon:"LineIconsFolderFolderIcon",children:"문서 폴더"}),e.jsx(r,{system:"system-02",size:"lg",leftIcon:"LineIconsSettingsSetting1Icon",state:"selected",children:"설정 (선택됨)"}),e.jsx(r,{system:"system-02",size:"lg",leftIcon:"LineIconsPersonPersonIcon",disabled:!0,children:"사용자 관리 (비활성화)"})]})]})]})},p={args:{children:"아이콘이 있는 메뉴",leftIcon:"LineIconsFolderFolderIcon",rightIcon:"LineIconsStarOutlinedIcon",size:"lg",expanded:!1},render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01";return e.jsx(r,{...i,system:s})}},f={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - Menu Sizes"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:s,size:"md",children:"Small 메뉴 헤더"}),e.jsx(r,{system:s,size:"lg",children:"Medium 메뉴 헤더"}),e.jsx(r,{system:s,size:"xlg",children:"Large 메뉴 헤더"})]})]})}},g={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - Menu States"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:s,state:"default",children:"기본 상태"}),e.jsx(r,{system:s,state:"selected",leftIcon:"LineIconsFolderFolderIcon",children:"선택된 상태"}),e.jsx(r,{system:s,state:"disabled",disabled:!0,leftIcon:"LineIconsFolderFolderIcon",children:"비활성화 상태"})]})]})}},I={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - Interaction States"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",children:[e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"기본 상태"})}),e.jsx(r,{system:s,leftIcon:"LineIconsFolderFolderIcon",children:"기본 메뉴"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"호버 상태"})}),e.jsx(r,{system:s,state:"hovered",leftIcon:"LineIconsFolderFolderIcon",children:"호버된 메뉴"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"눌림 상태"})}),e.jsx(r,{system:s,state:"pressed",leftIcon:"LineIconsFolderFolderIcon",children:"눌린 메뉴"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"포커스 상태"})}),e.jsx(r,{system:s,state:"focused",leftIcon:"LineIconsFolderFolderIcon",children:"포커스된 메뉴"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"선택된 상태"})}),e.jsx(r,{system:s,state:"selected",leftIcon:"LineIconsFolderFolderIcon",children:"선택된 메뉴"})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(l,{foreground:"secondary-system01-1-rest",children:e.jsx(a,{variant:"body-2",weight:"medium",children:"비활성화 상태"})}),e.jsx(r,{system:s,state:"disabled",disabled:!0,leftIcon:"LineIconsFolderFolderIcon",children:"비활성화된 메뉴"})]})]})]})}},h={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[o,m]=M.useState({menu1:!1,menu2:!0,menu3:!1}),y=c=>{m(S=>({...S,[c]:!S[c]}))};return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - Interactive Menu"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"xxs",children:[e.jsx(r,{system:s,leftIcon:"LineIconsFolderFolderIcon",expanded:o.menu1,onClick:()=>y("menu1"),children:"문서 폴더"}),e.jsx(r,{system:s,leftIcon:"LineIconsSettingsSetting1Icon",expanded:o.menu2,onClick:()=>y("menu2"),children:"설정"}),e.jsx(r,{system:s,leftIcon:"LineIconsPersonPersonIcon",rightIcon:"LineIconsStarFilledIcon",expanded:o.menu3,onClick:()=>y("menu3"),children:"사용자 관리"})]})]})}},F={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[o,m]=M.useState(!1);return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - Accordion Example"]}),e.jsxs(t,{display:"flex",direction:"column",children:[e.jsx(r,{system:s,leftIcon:"LineIconsFolderFolderIcon",expanded:o,onClick:()=>m(!o),size:"lg",children:"프로젝트 파일"}),o&&e.jsxs(t,{display:"flex",direction:"column",gap:"xxxs",style:{marginLeft:"32px"},padding:"xxs",children:[e.jsx(r,{system:s,size:"md",leftIcon:"LineIconsFileFileIcon",children:"문서1.pdf"}),e.jsx(r,{system:s,size:"md",leftIcon:"LineIconsFileFileIcon",children:"문서2.docx"}),e.jsx(r,{system:s,size:"md",leftIcon:"LineIconsFileFileIcon",children:"이미지.jpg"})]})]})]})}},v={render:(i,{globals:n})=>{const s=(n==null?void 0:n.system)||"system-01",d=s==="system-01"?"Clean & Efficient":"Modern & Friendly",[o,m]=M.useState("dashboard"),y=[{id:"dashboard",label:"대시보드",icon:"LineIconsBarChart1Icon"},{id:"users",label:"사용자 관리",icon:"LineIconsPersonPersonIcon"},{id:"settings",label:"설정",icon:"LineIconsSettingsSetting1Icon"},{id:"reports",label:"보고서",icon:"LineIconsFileFileIcon"},{id:"help",label:"도움말",icon:"LineIconsQuestionMarkIcon"}];return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(a,{as:"h2",variant:"heading-2",children:[d," - 사이드바 네비게이션 예시"]}),e.jsx(t,{display:"flex",direction:"column",gap:"xxs",children:y.map(c=>e.jsx(r,{system:s,leftIcon:c.icon,state:o===c.id?"selected":"default",onClick:()=>m(c.id),children:c.label},c.id))})]})},parameters:{docs:{description:{story:"실제 사이드바 네비게이션에서 사용되는 메뉴의 예시입니다."}}}};var j,L,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: '메뉴 헤더',
    size: 'lg',
    expanded: false,
    disabled: false
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalMenuHeader {...args} system={system} />;
  }
}`,...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var U,z,E;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색, 직각)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsFolderFolderIcon">\r
            문서 폴더\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsSettingsSetting1Icon" state="selected">\r
            설정 (선택됨)\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsPersonPersonIcon" disabled>\r
            사용자 관리 (비활성화)\r
          </UniversalMenuHeader>\r
        </Frame>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색, 둥근 모서리)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsFolderFolderIcon">\r
            문서 폴더\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsSettingsSetting1Icon" state="selected">\r
            설정 (선택됨)\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsPersonPersonIcon" disabled>\r
            사용자 관리 (비활성화)\r
          </UniversalMenuHeader>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(E=(z=x.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var C,T,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: '아이콘이 있는 메뉴',
    leftIcon: 'LineIconsFolderFolderIcon',
    rightIcon: 'LineIconsStarOutlinedIcon',
    size: 'lg',
    expanded: false
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalMenuHeader {...args} system={system} />;
  }
}`,...(b=(T=p.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var N,P,k;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Menu Sizes\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalMenuHeader system={system} size="md">Small 메뉴 헤더</UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} size="lg">Medium 메뉴 헤더</UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} size="xlg">Large 메뉴 헤더</UniversalMenuHeader>\r
        </Frame>\r
      </Frame>;
  }
}`,...(k=(P=f.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,A,O;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Menu States\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalMenuHeader system={system} state="default">기본 상태</UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 상태</UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화 상태</UniversalMenuHeader>\r
        </Frame>\r
      </Frame>;
  }
}`,...(O=(A=g.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var B,D,K;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Interaction States\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">기본 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} leftIcon="LineIconsFolderFolderIcon">기본 메뉴</UniversalMenuHeader>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">호버 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} state="hovered" leftIcon="LineIconsFolderFolderIcon">호버된 메뉴</UniversalMenuHeader>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">눌림 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} state="pressed" leftIcon="LineIconsFolderFolderIcon">눌린 메뉴</UniversalMenuHeader>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">포커스 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} state="focused" leftIcon="LineIconsFolderFolderIcon">포커스된 메뉴</UniversalMenuHeader>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">선택된 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 메뉴</UniversalMenuHeader>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="xxs">\r
            <Surface foreground="secondary-system01-1-rest">\r
              <Text variant="body-2" weight="medium">비활성화 상태</Text>\r
            </Surface>\r
            <UniversalMenuHeader system={system} state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화된 메뉴</UniversalMenuHeader>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(K=(D=I.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var Q,W,_;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [expandedStates, setExpandedStates] = useState({
      menu1: false,
      menu2: true,
      menu3: false
    });
    const toggleExpanded = (menuKey: string) => {
      setExpandedStates(prev => ({
        ...prev,
        [menuKey]: !prev[menuKey as keyof typeof prev]
      }));
    };
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Interactive Menu\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xxs">\r
          <UniversalMenuHeader system={system} leftIcon="LineIconsFolderFolderIcon" expanded={expandedStates.menu1} onClick={() => toggleExpanded('menu1')}>\r
            문서 폴더\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} leftIcon="LineIconsSettingsSetting1Icon" expanded={expandedStates.menu2} onClick={() => toggleExpanded('menu2')}>\r
            설정\r
          </UniversalMenuHeader>\r
          <UniversalMenuHeader system={system} leftIcon="LineIconsPersonPersonIcon" rightIcon="LineIconsStarFilledIcon" expanded={expandedStates.menu3} onClick={() => toggleExpanded('menu3')}>\r
            사용자 관리\r
          </UniversalMenuHeader>\r
        </Frame>\r
      </Frame>;
  }
}`,...(_=(W=h.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,$,q;F.parameters={...F.parameters,docs:{...(R=F.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [expanded, setExpanded] = useState(false);
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Accordion Example\r
        </Text>\r
        <Frame display="flex" direction="column">\r
          <UniversalMenuHeader system={system} leftIcon="LineIconsFolderFolderIcon" expanded={expanded} onClick={() => setExpanded(!expanded)} size="lg">\r
            프로젝트 파일\r
          </UniversalMenuHeader>\r
          {expanded && <Frame display="flex" direction="column" gap="xxxs" style={{
          marginLeft: '32px'
        }} padding="xxs">\r
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">문서1.pdf</UniversalMenuHeader>\r
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">문서2.docx</UniversalMenuHeader>\r
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">이미지.jpg</UniversalMenuHeader>\r
            </Frame>}\r
        </Frame>\r
      </Frame>;
  }
}`,...(q=($=F.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,J,V;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedMenu, setSelectedMenu] = useState('dashboard');
    const menuItems = [{
      id: 'dashboard',
      label: '대시보드',
      icon: 'LineIconsBarChart1Icon'
    }, {
      id: 'users',
      label: '사용자 관리',
      icon: 'LineIconsPersonPersonIcon'
    }, {
      id: 'settings',
      label: '설정',
      icon: 'LineIconsSettingsSetting1Icon'
    }, {
      id: 'reports',
      label: '보고서',
      icon: 'LineIconsFileFileIcon'
    }, {
      id: 'help',
      label: '도움말',
      icon: 'LineIconsQuestionMarkIcon'
    }];
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 사이드바 네비게이션 예시\r
        </Text>\r
        <Frame display="flex" direction="column" gap="xxs">\r
          {menuItems.map(item => <UniversalMenuHeader key={item.id} system={system} leftIcon={item.icon} state={selectedMenu === item.id ? 'selected' : 'default'} onClick={() => setSelectedMenu(item.id)}>\r
              {item.label}\r
            </UniversalMenuHeader>)}\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 사이드바 네비게이션에서 사용되는 메뉴의 예시입니다.'
      }
    }
  }
}`,...(V=(J=v.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};const ae=["Default","SystemComparison","WithIcons","Sizes","States","InteractionStates","Interactive","AccordionExample","NavigationExample"];export{F as AccordionExample,u as Default,I as InteractionStates,h as Interactive,v as NavigationExample,f as Sizes,g as States,x as SystemComparison,p as WithIcons,ae as __namedExportsOrder,te as default};

import{j as e}from"./react-vendor-BFNgaz96.js";import{e as _}from"./index.esm-ChTCnUjT.js";import{e as O}from"./index.esm-BNdFApZa.js";import{F as t,T as i}from"./index.esm-WYP67xav.js";const $={"system-01":_,"system-02":O},s=({system:l,...n})=>{const r=$[l]||_;return e.jsx(r,{...n})},X={title:"Components/Link",component:s,parameters:{layout:"centered",docs:{description:{component:"다른 페이지나 외부 사이트로 이동하는 컴파운드 컴포넌트입니다. Text와 Icon을 조합하여 만들어지며, 다양한 크기, 색상, 상태를 지원하고 접근성을 고려한 설계가 적용되어 있습니다."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","subtle","prominent"],description:"링크 스타일 변형",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["hero-1","hero-2","title-1","title-2","heading-1","heading-2","heading-3","body-1","body-2","reading","label-1","label-2","caption-1","caption-2","caption-3"],description:"링크 크기",table:{defaultValue:{summary:"body-1"}}},color:{control:"select",options:["primary-foreground-1","primary-foreground-2","secondary-foreground-1","secondary-foreground-2","secondary-foreground-3","cta-foreground-1","cta-foreground-2","status-error","status-warning","status-success","status-info"],description:"링크 색상",table:{defaultValue:{summary:"primary-foreground-1"}}},underline:{control:"select",options:["none","always","hover"],description:"밑줄 표시 방식",table:{defaultValue:{summary:"hover"}}},external:{control:"boolean",description:"외부 링크 여부",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{defaultValue:{summary:"false"}}},href:{control:"text",description:"링크 URL"},children:{control:"text",description:"링크 텍스트"}}},o={args:{href:"#",children:"기본 링크"},render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01";return e.jsx(s,{...l,system:r})},parameters:{docs:{description:{story:"가장 기본적인 링크 컴포넌트입니다."}}}},m={render:()=>e.jsxs(t,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",align:"flex-start",children:[e.jsx(s,{system:"system-01",href:"#",variant:"default",children:"Default 링크"}),e.jsx(s,{system:"system-01",href:"#",variant:"subtle",children:"Subtle 링크"}),e.jsx(s,{system:"system-01",href:"#",variant:"prominent",children:"Prominent 링크"}),e.jsx(s,{system:"system-01",href:"https://example.com",external:!0,children:"외부 링크"})]})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색)"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",align:"flex-start",children:[e.jsx(s,{system:"system-02",href:"#",variant:"default",children:"Default 링크"}),e.jsx(s,{system:"system-02",href:"#",variant:"subtle",children:"Subtle 링크"}),e.jsx(s,{system:"system-02",href:"#",variant:"prominent",children:"Prominent 링크"}),e.jsx(s,{system:"system-02",href:"https://example.com",external:!0,children:"외부 링크"})]})]})]})},d={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - Link Variants"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",variant:"default",children:"Default 링크"}),e.jsx(s,{system:r,href:"#",variant:"subtle",children:"Subtle 링크"}),e.jsx(s,{system:r,href:"#",variant:"prominent",children:"Prominent 링크"})]})]})},parameters:{docs:{description:{story:"다양한 링크 스타일 변형을 보여줍니다."}}}},c={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - Link Sizes"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",size:"hero-1",children:"Hero 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"title-1",children:"Title 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"heading-1",children:"Heading 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"body-1",children:"Body 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"body-2",children:"Body 2 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"label-1",children:"Label 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"caption-1",children:"Caption 1 크기 링크"}),e.jsx(s,{system:r,href:"#",size:"caption-2",children:"Caption 2 크기 링크"})]})]})},parameters:{docs:{description:{story:"다양한 크기의 링크를 보여줍니다. Text 컴포넌트와 동일한 크기 옵션을 지원합니다."}}}},y={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - Link Colors"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",color:"primary-foreground-1",children:"Primary Foreground 1"}),e.jsx(s,{system:r,href:"#",color:"primary-foreground-2",children:"Primary Foreground 2"}),e.jsx(s,{system:r,href:"#",color:"secondary-foreground-1",children:"Secondary Foreground 1"}),e.jsx(s,{system:r,href:"#",color:"secondary-foreground-2",children:"Secondary Foreground 2"}),e.jsx(s,{system:r,href:"#",color:"cta-foreground-1",children:"CTA Foreground 1"}),e.jsx(s,{system:r,href:"#",color:"status-error",children:"Status Error"}),e.jsx(s,{system:r,href:"#",color:"status-warning",children:"Status Warning"}),e.jsx(s,{system:r,href:"#",color:"status-success",children:"Status Success"}),e.jsx(s,{system:r,href:"#",color:"status-info",children:"Status Info"})]})]})},parameters:{docs:{description:{story:"다양한 색상의 링크를 보여줍니다. 시멘틱 토큰 기반의 색상을 사용합니다."}}}},f={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - Underline Styles"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",underline:"none",children:"밑줄 없음"}),e.jsx(s,{system:r,href:"#",underline:"always",children:"항상 밑줄"}),e.jsx(s,{system:r,href:"#",underline:"hover",children:"호버 시 밑줄"})]})]})},parameters:{docs:{description:{story:"다양한 밑줄 스타일을 보여줍니다."}}}},p={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - External Links"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"https://example.com",external:!0,children:"외부 사이트로 이동"}),e.jsx(s,{system:r,href:"https://google.com",external:!0,variant:"prominent",children:"Google로 이동"}),e.jsx(s,{system:r,href:"#",external:!1,children:"내부 링크 (external=false)"})]})]})},parameters:{docs:{description:{story:"외부 링크는 자동으로 새 탭에서 열리며 화살표 아이콘이 표시됩니다."}}}},h={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - Disabled States"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",disabled:!0,children:"비활성화된 링크"}),e.jsx(s,{system:r,href:"#",disabled:!0,variant:"prominent",children:"비활성화된 Prominent 링크"}),e.jsx(s,{system:r,href:"#",disabled:!0,external:!0,children:"비활성화된 외부 링크"})]})]})},parameters:{docs:{description:{story:"비활성화된 상태의 링크들을 보여줍니다."}}}},x={render:(l,{globals:n})=>{const r=(n==null?void 0:n.system)||"system-01",a=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(t,{display:"flex",direction:"column",gap:"lg",align:"flex-start",children:[e.jsxs(i,{as:"h2",variant:"heading-2",children:[a," - 네비게이션 예시"]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"body-1",weight:"bold",children:"메인 네비게이션"}),e.jsxs(t,{display:"flex",direction:"row",gap:"lg",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",variant:"prominent",children:"홈"}),e.jsx(s,{system:r,href:"#",variant:"default",children:"제품"}),e.jsx(s,{system:r,href:"#",variant:"default",children:"서비스"}),e.jsx(s,{system:r,href:"#",variant:"default",children:"회사소개"}),e.jsx(s,{system:r,href:"#",variant:"default",children:"연락처"})]})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"body-1",weight:"bold",children:"푸터 링크"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",align:"flex-start",children:[e.jsx(s,{system:r,href:"#",variant:"subtle",size:"caption-1",children:"개인정보처리방침"}),e.jsx(s,{system:r,href:"#",variant:"subtle",size:"caption-1",children:"이용약관"}),e.jsx(s,{system:r,href:"mailto:support@example.com",external:!0,size:"caption-1",children:"고객지원"})]})]}),e.jsxs(t,{display:"flex",direction:"column",gap:"md",children:[e.jsx(i,{variant:"body-1",weight:"bold",children:"외부 리소스"}),e.jsxs(t,{display:"flex",direction:"column",gap:"sm",align:"flex-start",children:[e.jsx(s,{system:r,href:"https://github.com",external:!0,children:"GitHub"}),e.jsx(s,{system:r,href:"https://docs.example.com",external:!0,children:"문서"}),e.jsx(s,{system:r,href:"https://blog.example.com",external:!0,children:"블로그"})]})]})]})},parameters:{docs:{description:{story:"실제 웹사이트에서 사용되는 다양한 링크의 예시입니다."}}}};var u,g,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: '기본 링크'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLink {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 링크 컴포넌트입니다.'
      }
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var L,k,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm" align="flex-start">\r
          <UniversalLink system="system-01" href="#" variant="default">Default 링크</UniversalLink>\r
          <UniversalLink system="system-01" href="#" variant="subtle">Subtle 링크</UniversalLink>\r
          <UniversalLink system="system-01" href="#" variant="prominent">Prominent 링크</UniversalLink>\r
          <UniversalLink system="system-01" href="https://example.com" external>외부 링크</UniversalLink>\r
        </Frame>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm" align="flex-start">\r
          <UniversalLink system="system-02" href="#" variant="default">Default 링크</UniversalLink>\r
          <UniversalLink system="system-02" href="#" variant="subtle">Subtle 링크</UniversalLink>\r
          <UniversalLink system="system-02" href="#" variant="prominent">Prominent 링크</UniversalLink>\r
          <UniversalLink system="system-02" href="https://example.com" external>외부 링크</UniversalLink>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(U=(k=m.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var j,F,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Link Variants\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="#" variant="default">Default 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" variant="subtle">Subtle 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" variant="prominent">Prominent 링크</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 링크 스타일 변형을 보여줍니다.'
      }
    }
  }
}`,...(b=(F=d.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var S,T,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Link Sizes\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="#" size="hero-1">Hero 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="title-1">Title 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="heading-1">Heading 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="body-1">Body 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="body-2">Body 2 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="label-1">Label 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="caption-1">Caption 1 크기 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" size="caption-2">Caption 2 크기 링크</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 링크를 보여줍니다. Text 컴포넌트와 동일한 크기 옵션을 지원합니다.'
      }
    }
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var z,E,N;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Link Colors\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="#" color="primary-foreground-1">Primary Foreground 1</UniversalLink>\r
          <UniversalLink system={system} href="#" color="primary-foreground-2">Primary Foreground 2</UniversalLink>\r
          <UniversalLink system={system} href="#" color="secondary-foreground-1">Secondary Foreground 1</UniversalLink>\r
          <UniversalLink system={system} href="#" color="secondary-foreground-2">Secondary Foreground 2</UniversalLink>\r
          <UniversalLink system={system} href="#" color="cta-foreground-1">CTA Foreground 1</UniversalLink>\r
          <UniversalLink system={system} href="#" color="status-error">Status Error</UniversalLink>\r
          <UniversalLink system={system} href="#" color="status-warning">Status Warning</UniversalLink>\r
          <UniversalLink system={system} href="#" color="status-success">Status Success</UniversalLink>\r
          <UniversalLink system={system} href="#" color="status-info">Status Info</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 링크를 보여줍니다. 시멘틱 토큰 기반의 색상을 사용합니다.'
      }
    }
  }
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,w,D;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Underline Styles\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="#" underline="none">밑줄 없음</UniversalLink>\r
          <UniversalLink system={system} href="#" underline="always">항상 밑줄</UniversalLink>\r
          <UniversalLink system={system} href="#" underline="hover">호버 시 밑줄</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 밑줄 스타일을 보여줍니다.'
      }
    }
  }
}`,...(D=(w=f.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var P,V,H;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - External Links\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="https://example.com" external>외부 사이트로 이동</UniversalLink>\r
          <UniversalLink system={system} href="https://google.com" external variant="prominent">Google로 이동</UniversalLink>\r
          <UniversalLink system={system} href="#" external={false}>내부 링크 (external=false)</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '외부 링크는 자동으로 새 탭에서 열리며 화살표 아이콘이 표시됩니다.'
      }
    }
  }
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var B,G,I;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Disabled States\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md" align="flex-start">\r
          <UniversalLink system={system} href="#" disabled>비활성화된 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" disabled variant="prominent">비활성화된 Prominent 링크</UniversalLink>\r
          <UniversalLink system={system} href="#" disabled external>비활성화된 외부 링크</UniversalLink>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 링크들을 보여줍니다.'
      }
    }
  }
}`,...(I=(G=h.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var A,R,W;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg" align="flex-start">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 네비게이션 예시\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">메인 네비게이션</Text>\r
          <Frame display="flex" direction="row" gap="lg" align="flex-start">\r
            <UniversalLink system={system} href="#" variant="prominent">홈</UniversalLink>\r
            <UniversalLink system={system} href="#" variant="default">제품</UniversalLink>\r
            <UniversalLink system={system} href="#" variant="default">서비스</UniversalLink>\r
            <UniversalLink system={system} href="#" variant="default">회사소개</UniversalLink>\r
            <UniversalLink system={system} href="#" variant="default">연락처</UniversalLink>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">푸터 링크</Text>\r
          <Frame display="flex" direction="column" gap="sm" align="flex-start">\r
            <UniversalLink system={system} href="#" variant="subtle" size="caption-1">개인정보처리방침</UniversalLink>\r
            <UniversalLink system={system} href="#" variant="subtle" size="caption-1">이용약관</UniversalLink>\r
            <UniversalLink system={system} href="mailto:support@example.com" external size="caption-1">고객지원</UniversalLink>\r
          </Frame>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">외부 리소스</Text>\r
          <Frame display="flex" direction="column" gap="sm" align="flex-start">\r
            <UniversalLink system={system} href="https://github.com" external>GitHub</UniversalLink>\r
            <UniversalLink system={system} href="https://docs.example.com" external>문서</UniversalLink>\r
            <UniversalLink system={system} href="https://blog.example.com" external>블로그</UniversalLink>\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 웹사이트에서 사용되는 다양한 링크의 예시입니다.'
      }
    }
  }
}`,...(W=(R=x.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const Y=["Default","SystemComparison","Variants","Sizes","Colors","UnderlineStyles","ExternalLinks","DisabledStates","NavigationExample"];export{y as Colors,o as Default,h as DisabledStates,p as ExternalLinks,x as NavigationExample,c as Sizes,m as SystemComparison,f as UnderlineStyles,d as Variants,Y as __namedExportsOrder,X as default};

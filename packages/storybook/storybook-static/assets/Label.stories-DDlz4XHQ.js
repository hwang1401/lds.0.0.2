import{j as e}from"./react-vendor-BFNgaz96.js";import{L as I}from"./index.esm-ChTCnUjT.js";import{L as _}from"./index.esm-BNdFApZa.js";import{F as i,T as t,S as d}from"./index.esm-WYP67xav.js";const O={"system-01":I,"system-02":_},a=({system:n,...s})=>{const r=O[n]||I;return e.jsx(r,{...s})},K={title:"Components/Label",component:a,parameters:{layout:"centered",docs:{description:{component:"폼 요소에 사용되는 레이블 컴포넌트입니다. 크기, 글꼴 두께, 필수 입력 표시 등을 지원하며, 디자인 시스템의 시멘틱 토큰을 따릅니다."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"라벨 크기",table:{defaultValue:{summary:"md"}}},type:{control:"select",options:["regular","medium","bold"],description:"폰트 두께",table:{defaultValue:{summary:"regular"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{defaultValue:{summary:"false"}}},asterisk:{control:"boolean",description:"필수 입력 표시",table:{defaultValue:{summary:"false"}}},align:{control:"select",options:["top","center"],description:"별표 정렬 위치",table:{defaultValue:{summary:"center"}}},className:{control:"text",description:"추가 클래스명"}}},o={args:{children:"이름",size:"md",type:"regular"},render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01";return e.jsx(a,{...n,system:r})},parameters:{docs:{description:{story:"기본적인 라벨 스타일입니다. 중간 크기와 일반 폰트 두께를 사용합니다."}}}},l={render:()=>e.jsxs(i,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(i,{display:"flex",direction:"column",gap:"md",children:[e.jsx(t,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색)"}),e.jsxs(i,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(a,{system:"system-01",size:"md",type:"regular",children:"기본 라벨"}),e.jsx(a,{system:"system-01",size:"md",type:"medium",asterisk:!0,children:"필수 입력 라벨"}),e.jsx(a,{system:"system-01",size:"md",type:"regular",disabled:!0,children:"비활성화 라벨"})]})]}),e.jsxs(i,{display:"flex",direction:"column",gap:"md",children:[e.jsx(t,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색)"}),e.jsxs(i,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(a,{system:"system-02",size:"md",type:"regular",children:"기본 라벨"}),e.jsx(a,{system:"system-02",size:"md",type:"medium",asterisk:!0,children:"필수 입력 라벨"}),e.jsx(a,{system:"system-02",size:"md",type:"regular",disabled:!0,children:"비활성화 라벨"})]})]})]})},c={args:{children:"이메일 주소",asterisk:!0,type:"medium"},render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01";return e.jsx(a,{...n,system:r})},parameters:{docs:{description:{story:"필수 입력 필드를 나타내는 별표(*)가 있는 라벨입니다. 시각적 강조를 위해 medium 폰트 두께를 사용합니다."}}}},y={args:{children:"비활성화된 필드",disabled:!0,asterisk:!0,type:"regular"},render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01";return e.jsx(a,{...n,system:r})},parameters:{docs:{description:{story:"비활성화된 상태의 라벨입니다. 시멘틱 컬러의 disabled 상태와 opacity가 적용됩니다."}}}},u={render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",m=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(t,{as:"h2",variant:"heading-2",children:[m," - Sizes"]}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(a,{system:r,size:"sm",asterisk:!0,children:e.jsx(t,{variant:"caption-1",children:"작은 크기 라벨 (label-2 variant)"})})}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(a,{system:r,size:"md",asterisk:!0,children:e.jsx(t,{variant:"caption-1",children:"중간 크기 라벨 (label-1 variant)"})})}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(a,{system:r,size:"lg",asterisk:!0,children:e.jsx(t,{variant:"caption-1",children:"큰 크기 라벨 (heading-3 variant)"})})})]})},parameters:{docs:{description:{story:"라벨은 디자인 시스템의 시멘틱 폰트 사이즈를 따르는 세 가지 크기를 지원합니다."}}}},p={render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",m=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(t,{as:"h2",variant:"heading-2",children:[m," - Font Weights"]}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsxs(a,{system:r,type:"regular",children:[e.jsx(t,{variant:"body-1",children:"Regular - 기본 본문"}),e.jsx(t,{variant:"caption-2",children:" (var(--semantic-font-weight-regular))"})]})}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsxs(a,{system:r,type:"medium",children:[e.jsx(t,{variant:"body-1",children:"Medium - 중요 라벨"}),e.jsx(t,{variant:"caption-2",children:" (var(--semantic-font-weight-medium))"})]})}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsxs(a,{system:r,type:"bold",children:[e.jsx(t,{variant:"body-1",children:"Bold - 강조 라벨"}),e.jsx(t,{variant:"caption-2",children:" (var(--semantic-font-weight-bold))"})]})})]})},parameters:{docs:{description:{story:"디자인 시스템의 시멘틱 폰트 웨이트를 사용하여 텍스트의 강조 수준을 조절할 수 있습니다."}}}},g={render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",m=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(t,{as:"h2",variant:"heading-2",children:[m," - Asterisk Alignment"]}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(a,{system:r,asterisk:!0,align:"top",size:"lg",children:e.jsxs(t,{variant:"body-1",children:["여러 줄 텍스트의 경우",e.jsx("br",{}),"별표를 상단에 정렬합니다"]})})}),e.jsx(d,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsx(a,{system:r,asterisk:!0,align:"center",size:"lg",children:e.jsxs(t,{variant:"body-1",children:["한 줄 텍스트는",e.jsx("br",{}),"별표를 중앙에 정렬합니다"]})})})]})},parameters:{docs:{description:{story:"필수 입력 표시(*)의 정렬 위치를 제어할 수 있습니다. 여러 줄 텍스트에서는 top 정렬을, 한 줄 텍스트에서는 center 정렬을 권장합니다."}}}},x={render:(n,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",m=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(i,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(t,{as:"h2",variant:"heading-2",children:[m," - 폼 사용 예시"]}),e.jsxs(i,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{system:r,size:"md",type:"medium",asterisk:!0,children:"사용자 이름"}),e.jsx(a,{system:r,size:"md",type:"medium",asterisk:!0,children:"이메일 주소"}),e.jsx(a,{system:r,size:"md",type:"regular",children:"전화번호 (선택사항)"}),e.jsx(a,{system:r,size:"md",type:"regular",disabled:!0,children:"자동 생성된 ID"})]})]})},parameters:{docs:{description:{story:"실제 폼에서 사용되는 다양한 라벨의 예시입니다."}}}};var b,h,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '이름',
    size: 'md',
    type: 'regular'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 라벨 스타일입니다. 중간 크기와 일반 폰트 두께를 사용합니다.'
      }
    }
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,j,L;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalLabel system="system-01" size="md" type="regular">기본 라벨</UniversalLabel>\r
          <UniversalLabel system="system-01" size="md" type="medium" asterisk>필수 입력 라벨</UniversalLabel>\r
          <UniversalLabel system="system-01" size="md" type="regular" disabled>비활성화 라벨</UniversalLabel>\r
        </Frame>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalLabel system="system-02" size="md" type="regular">기본 라벨</UniversalLabel>\r
          <UniversalLabel system="system-02" size="md" type="medium" asterisk>필수 입력 라벨</UniversalLabel>\r
          <UniversalLabel system="system-02" size="md" type="regular" disabled>비활성화 라벨</UniversalLabel>\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var k,U,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: '이메일 주소',
    asterisk: true,
    type: 'medium'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 필드를 나타내는 별표(*)가 있는 라벨입니다. 시각적 강조를 위해 medium 폰트 두께를 사용합니다.'
      }
    }
  }
}`,...(F=(U=c.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var z,T,S;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: '비활성화된 필드',
    disabled: true,
    asterisk: true,
    type: 'regular'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 라벨입니다. 시멘틱 컬러의 disabled 상태와 opacity가 적용됩니다.'
      }
    }
  }
}`,...(S=(T=y.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var R,C,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Sizes\r
        </Text>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} size="sm" asterisk>\r
            <Text variant="caption-1">작은 크기 라벨 (label-2 variant)</Text>\r
          </UniversalLabel>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} size="md" asterisk>\r
            <Text variant="caption-1">중간 크기 라벨 (label-1 variant)</Text>\r
          </UniversalLabel>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} size="lg" asterisk>\r
            <Text variant="caption-1">큰 크기 라벨 (heading-3 variant)</Text>\r
          </UniversalLabel>\r
        </Surface>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '라벨은 디자인 시스템의 시멘틱 폰트 사이즈를 따르는 세 가지 크기를 지원합니다.'
      }
    }
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,M,A;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Font Weights\r
        </Text>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} type="regular">\r
            <Text variant="body-1">Regular - 기본 본문</Text>\r
            <Text variant="caption-2"> (var(--semantic-font-weight-regular))</Text>\r
          </UniversalLabel>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} type="medium">\r
            <Text variant="body-1">Medium - 중요 라벨</Text>\r
            <Text variant="caption-2"> (var(--semantic-font-weight-medium))</Text>\r
          </UniversalLabel>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} type="bold">\r
            <Text variant="body-1">Bold - 강조 라벨</Text>\r
            <Text variant="caption-2"> (var(--semantic-font-weight-bold))</Text>\r
          </UniversalLabel>\r
        </Surface>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '디자인 시스템의 시멘틱 폰트 웨이트를 사용하여 텍스트의 강조 수준을 조절할 수 있습니다.'
      }
    }
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var w,D,V;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Asterisk Alignment\r
        </Text>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} asterisk align="top" size="lg">\r
            <Text variant="body-1">\r
              여러 줄 텍스트의 경우\r
              <br />\r
              별표를 상단에 정렬합니다\r
            </Text>\r
          </UniversalLabel>\r
        </Surface>\r
        <Surface background="secondary-system01-1-rest" borderRadius="md">\r
          <UniversalLabel system={system} asterisk align="center" size="lg">\r
            <Text variant="body-1">\r
              한 줄 텍스트는\r
              <br />\r
              별표를 중앙에 정렬합니다\r
            </Text>\r
          </UniversalLabel>\r
        </Surface>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)의 정렬 위치를 제어할 수 있습니다. 여러 줄 텍스트에서는 top 정렬을, 한 줄 텍스트에서는 center 정렬을 권장합니다.'
      }
    }
  }
}`,...(V=(D=g.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,q,B;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 폼 사용 예시\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md">\r
          <UniversalLabel system={system} size="md" type="medium" asterisk>\r
            사용자 이름\r
          </UniversalLabel>\r
          <UniversalLabel system={system} size="md" type="medium" asterisk>\r
            이메일 주소\r
          </UniversalLabel>\r
          <UniversalLabel system={system} size="md" type="regular">\r
            전화번호 (선택사항)\r
          </UniversalLabel>\r
          <UniversalLabel system={system} size="md" type="regular" disabled>\r
            자동 생성된 ID\r
          </UniversalLabel>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 라벨의 예시입니다.'
      }
    }
  }
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const P=["Default","SystemComparison","Required","Disabled","Sizes","FontWeights","AsteriskAlignment","FormExample"];export{g as AsteriskAlignment,o as Default,y as Disabled,p as FontWeights,x as FormExample,c as Required,u as Sizes,l as SystemComparison,P as __namedExportsOrder,K as default};

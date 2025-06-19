import{j as e}from"./react-vendor-BFNgaz96.js";import{F as W}from"./index.esm-ChTCnUjT.js";import{F as A}from"./index.esm-BNdFApZa.js";import{F as l,T as o}from"./index.esm-WYP67xav.js";const D={"system-01":W,"system-02":A},a=({system:i,...s})=>{const r=D[i]||W;return e.jsx(r,{...s})},H={title:"Components/Field",component:a,parameters:{layout:"centered",docs:{description:{component:`
Field 컴포넌트는 사용자 입력을 받기 위한 텍스트 필드입니다.

## 주요 특징
- **3가지 스타일**: outlined, transparent, filled
- **3가지 라벨 위치**: above, before, none
- **상태 관리**: 기본, 비활성화, 에러 상태
- **접근성**: 라벨과 입력 필드의 적절한 연결
- **프리미티브 컴포넌트 활용**: Surface, Frame, Sizing, Text, Label 조합

## 디자인 토큰 활용
- 색상: 시맨틱 컬러 토큰 (secondary, error 등)
- 높이: sizing 토큰 (lg, xl, xxl)
- 간격: gap 토큰 (xs, md 등)
- 테두리: borderRadius, borderWidth 토큰
        `}}},argTypes:{variant:{control:"select",options:["outlined","transparent","filled"],description:"필드의 스타일 변형"},labelPosition:{control:"select",options:["above","before","none"],description:"라벨의 위치"},size:{control:"select",options:["md","lg","xlg"],description:"필드의 크기 (32px, 36px, 40px)"},fieldWidth:{control:"text",description:"필드의 너비 (fit, 100%, 300px 등)"},label:{control:"text",description:"라벨 텍스트"},required:{control:"boolean",description:"필수 입력 표시 (*)"},disabled:{control:"boolean",description:"비활성화 상태"},error:{control:"boolean",description:"에러 상태"},errorMessage:{control:"text",description:"에러 메시지"},helperText:{control:"text",description:"도움말 텍스트"},placeholder:{control:"text",description:"플레이스홀더 텍스트"},leftIcon:{control:"text",description:"왼쪽 아이콘"},rightIcon:{control:"text",description:"오른쪽 아이콘"}},tags:["autodocs"]},n={args:{variant:"outlined",labelPosition:"above",label:"이름",placeholder:"이름을 입력하세요",helperText:"실명을 입력해주세요"},render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01";return e.jsx(a,{...i,system:r})}},d={render:()=>e.jsxs(l,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(l,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색, 직각)"}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:"system-01",variant:"outlined",labelPosition:"above",label:"이름",placeholder:"이름을 입력하세요",helperText:"실명을 입력해주세요"}),e.jsx(a,{system:"system-01",variant:"outlined",labelPosition:"above",label:"이메일",required:!0,placeholder:"example@email.com",type:"email"}),e.jsx(a,{system:"system-01",variant:"outlined",labelPosition:"above",label:"에러 상태",error:!0,errorMessage:"유효한 값을 입력하세요",value:"invalid"})]})]}),e.jsxs(l,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색, 둥근 모서리)"}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:"system-02",variant:"outlined",labelPosition:"above",label:"이름",placeholder:"이름을 입력하세요",helperText:"실명을 입력해주세요"}),e.jsx(a,{system:"system-02",variant:"outlined",labelPosition:"above",label:"이메일",required:!0,placeholder:"example@email.com",type:"email"}),e.jsx(a,{system:"system-02",variant:"outlined",labelPosition:"above",label:"에러 상태",error:!0,errorMessage:"유효한 값을 입력하세요",value:"invalid"})]})]})]})},m={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - Outlined Variations"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"라벨 위쪽 (Above)",placeholder:"텍스트를 입력하세요",helperText:"도움말 텍스트"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"before",label:"라벨 앞쪽",placeholder:"텍스트를 입력하세요"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"none",placeholder:"라벨 없음",helperText:"라벨이 없는 필드"})]})]})},parameters:{docs:{description:{story:"Outlined 스타일의 다양한 라벨 위치를 보여줍니다."}}}},c={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - Required Fields"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"이메일",required:!0,type:"email",placeholder:"example@email.com",helperText:"유효한 이메일 주소를 입력하세요"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"before",label:"전화번호",required:!0,type:"tel",placeholder:"010-0000-0000"})]})]})},parameters:{docs:{description:{story:"필수 입력 표시(*)가 있는 필드입니다."}}}},p={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - Error States"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"이메일",required:!0,error:!0,errorMessage:"유효한 이메일 주소를 입력하세요",value:"invalid-email",type:"email"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"before",label:"비밀번호",required:!0,error:!0,errorMessage:"비밀번호는 8자 이상이어야 합니다",value:"123",type:"password"})]})]})},parameters:{docs:{description:{story:"에러 상태의 필드를 보여줍니다."}}}},y={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - Field Sizes"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"Medium (md)",size:"md",placeholder:"32px 높이"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"Large (lg)",size:"lg",placeholder:"36px 높이"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"Extra Large (xlg)",size:"xlg",placeholder:"40px 높이"})]})]})},parameters:{docs:{description:{story:"다양한 크기의 필드를 보여줍니다."}}}},u={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - Fields with Icons"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"검색",leftIcon:"search",placeholder:"검색어를 입력하세요"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"이메일",leftIcon:"mail",rightIcon:"checkmark-circle",placeholder:"example@email.com",type:"email"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"비밀번호",leftIcon:"lock-closed",rightIcon:"eye",placeholder:"비밀번호를 입력하세요",type:"password"})]})]})},parameters:{docs:{description:{story:"아이콘이 포함된 필드를 보여줍니다."}}}},x={render:(i,{globals:s})=>{const r=(s==null?void 0:s.system)||"system-01",t=r==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(l,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(o,{as:"h2",variant:"heading-2",children:[t," - 회원가입 폼 예시"]}),e.jsxs(l,{display:"flex",direction:"column",gap:"md",children:[e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"이름",required:!0,placeholder:"실명을 입력하세요",helperText:"한글 또는 영문으로 입력"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"이메일",required:!0,type:"email",leftIcon:"mail",placeholder:"example@email.com",helperText:"로그인 시 사용할 이메일 주소"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"비밀번호",required:!0,type:"password",leftIcon:"lock-closed",placeholder:"8자 이상 입력하세요",helperText:"영문, 숫자, 특수문자 조합"}),e.jsx(a,{system:r,variant:"outlined",labelPosition:"above",label:"전화번호",type:"tel",leftIcon:"phone",placeholder:"010-0000-0000",helperText:"선택사항입니다"})]})]})},parameters:{docs:{description:{story:"실제 폼에서 사용되는 다양한 필드의 예시입니다."}}}};var v,b,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    labelPosition: 'above',
    label: '이름',
    placeholder: '이름을 입력하세요',
    helperText: '실명을 입력해주세요'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalField {...args} system={system} />;
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,f,F;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색, 직각)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system="system-01" variant="outlined" labelPosition="above" label="이름" placeholder="이름을 입력하세요" helperText="실명을 입력해주세요" />\r
          <UniversalField system="system-01" variant="outlined" labelPosition="above" label="이메일" required placeholder="example@email.com" type="email" />\r
          <UniversalField system="system-01" variant="outlined" labelPosition="above" label="에러 상태" error errorMessage="유효한 값을 입력하세요" value="invalid" />\r
        </Frame>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색, 둥근 모서리)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system="system-02" variant="outlined" labelPosition="above" label="이름" placeholder="이름을 입력하세요" helperText="실명을 입력해주세요" />\r
          <UniversalField system="system-02" variant="outlined" labelPosition="above" label="이메일" required placeholder="example@email.com" type="email" />\r
          <UniversalField system="system-02" variant="outlined" labelPosition="above" label="에러 상태" error errorMessage="유효한 값을 입력하세요" value="invalid" />\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(F=(f=d.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var j,P,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Outlined Variations\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="라벨 위쪽 (Above)" placeholder="텍스트를 입력하세요" helperText="도움말 텍스트" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="before" label="라벨 앞쪽" placeholder="텍스트를 입력하세요" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="none" placeholder="라벨 없음" helperText="라벨이 없는 필드" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined 스타일의 다양한 라벨 위치를 보여줍니다.'
      }
    }
  }
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,U,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Required Fields\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="이메일" required type="email" placeholder="example@email.com" helperText="유효한 이메일 주소를 입력하세요" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="before" label="전화번호" required type="tel" placeholder="010-0000-0000" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)가 있는 필드입니다.'
      }
    }
  }
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var S,q,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Error States\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="이메일" required error errorMessage="유효한 이메일 주소를 입력하세요" value="invalid-email" type="email" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="before" label="비밀번호" required error errorMessage="비밀번호는 8자 이상이어야 합니다" value="123" type="password" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '에러 상태의 필드를 보여줍니다.'
      }
    }
  }
}`,...(I=(q=p.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var C,N,z;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Field Sizes\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="Medium (md)" size="md" placeholder="32px 높이" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="Large (lg)" size="lg" placeholder="36px 높이" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="Extra Large (xlg)" size="xlg" placeholder="40px 높이" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 필드를 보여줍니다.'
      }
    }
  }
}`,...(z=(N=y.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var k,w,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Fields with Icons\r
        </Text>\r
        <Frame display="flex" direction="column" gap="lg">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="검색" leftIcon="search" placeholder="검색어를 입력하세요" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="이메일" leftIcon="mail" rightIcon="checkmark-circle" placeholder="example@email.com" type="email" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="비밀번호" leftIcon="lock-closed" rightIcon="eye" placeholder="비밀번호를 입력하세요" type="password" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 필드를 보여줍니다.'
      }
    }
  }
}`,...(O=(w=u.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var R,L,V;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 회원가입 폼 예시\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md">\r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="이름" required placeholder="실명을 입력하세요" helperText="한글 또는 영문으로 입력" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="이메일" required type="email" leftIcon="mail" placeholder="example@email.com" helperText="로그인 시 사용할 이메일 주소" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="비밀번호" required type="password" leftIcon="lock-closed" placeholder="8자 이상 입력하세요" helperText="영문, 숫자, 특수문자 조합" />\r
          \r
          <UniversalField system={system} variant="outlined" labelPosition="above" label="전화번호" type="tel" leftIcon="phone" placeholder="010-0000-0000" helperText="선택사항입니다" />\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 필드의 예시입니다.'
      }
    }
  }
}`,...(V=(L=x.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const J=["Default","SystemComparison","OutlinedVariations","Required","ErrorState","Sizes","WithIcons","FormExample"];export{n as Default,p as ErrorState,x as FormExample,m as OutlinedVariations,c as Required,y as Sizes,d as SystemComparison,u as WithIcons,J as __namedExportsOrder,H as default};

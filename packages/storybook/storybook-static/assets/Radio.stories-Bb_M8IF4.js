import{j as e,r as k}from"./react-vendor-BFNgaz96.js";import{R as A}from"./index.esm-ChTCnUjT.js";import{R as G}from"./index.esm-BNdFApZa.js";import{F as s,T as n}from"./index.esm-WYP67xav.js";const I={"system-01":A,"system-02":G},r=({system:o,...t})=>{const a=I[o]||A;return e.jsx(a,{...t})},B={title:"Components/Radio",component:r,parameters:{layout:"centered",docs:{description:{component:`
Radio 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있게 해주는 입력 컴포넌트입니다.

## 주요 특징
- **단일 선택**: 같은 그룹 내에서 하나의 옵션만 선택 가능
- **두 가지 스타일**: radio (원형 + 점), checkmark (사각형 + 체크)
- **상태 표시**: 선택된 상태에서 내부에 점 또는 체크 표시
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원
- **반응형**: 다양한 화면 크기에 대응

## 사용 시나리오
- 설정 옵션 선택
- 설문조사 응답
- 결제 방법 선택
- 배송 옵션 선택
        `}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"라디오 버튼의 선택 상태"},disabled:{control:"boolean",description:"비활성화 상태"},label:{control:"text",description:"라벨 텍스트"},showLabel:{control:"boolean",description:"라벨 표시 여부"},variant:{control:"select",options:["radio","checkmark"],description:"라디오 버튼 스타일"},name:{control:"text",description:"라디오 버튼 그룹 이름"},value:{control:"text",description:"라디오 버튼 값"},onChange:{action:"changed",description:"선택 상태 변경 핸들러"}}},y={args:{label:"Option 1",name:"default-group",value:"option1",variant:"radio"},render:(o,{globals:t})=>{const a=(t==null?void 0:t.system)||"system-01";return e.jsx(r,{...o,system:a})}},u={render:()=>e.jsxs(s,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{as:"h2",variant:"heading-2",children:"System 01 - Clean & Efficient (파란색, 직각)"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:"system-01",label:"Radio 스타일",name:"system01-radio",value:"radio",variant:"radio"}),e.jsx(r,{system:"system-01",label:"Checkmark 스타일",name:"system01-checkmark",value:"checkmark",variant:"checkmark"}),e.jsx(r,{system:"system-01",label:"선택된 상태",checked:!0,name:"system01-selected",value:"selected",variant:"radio"}),e.jsx(r,{system:"system-01",label:"비활성화",disabled:!0,name:"system01-disabled",value:"disabled",variant:"radio"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{as:"h2",variant:"heading-2",children:"System 02 - Modern & Friendly (초록색, 둥근 모서리)"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:"system-02",label:"Radio 스타일",name:"system02-radio",value:"radio",variant:"radio"}),e.jsx(r,{system:"system-02",label:"Checkmark 스타일",name:"system02-checkmark",value:"checkmark",variant:"checkmark"}),e.jsx(r,{system:"system-02",label:"선택된 상태",checked:!0,name:"system02-selected",value:"selected",variant:"radio"}),e.jsx(r,{system:"system-02",label:"비활성화",disabled:!0,name:"system02-disabled",value:"disabled",variant:"radio"})]})]})]})},p={args:{label:"Option 1",name:"checkmark-group",value:"option1",variant:"checkmark"},render:(o,{globals:t})=>{const a=(t==null?void 0:t.system)||"system-01";return e.jsx(r,{...o,system:a})}},v={render:(o,{globals:t})=>{const a=(t==null?void 0:t.system)||"system-01",c=a==="system-01"?"Clean & Efficient":"Modern & Friendly";return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[c," - Radio 버튼 모든 상태"]}),e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(n,{variant:"body-1",weight:"medium",color:"secondary-foreground-1",children:"Radio 스타일 (원형)"}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"caption-1",color:"secondary-foreground-3",children:"기본 상태"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"기본 상태",name:"radio-states",value:"default",variant:"radio"}),e.jsx(r,{system:a,label:"선택된 상태",checked:!0,name:"radio-states",value:"checked",variant:"radio"})]}),e.jsx(n,{variant:"caption-1",color:"secondary-foreground-3",children:"비활성화 상태"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"비활성화",disabled:!0,name:"radio-disabled",value:"disabled",variant:"radio"}),e.jsx(r,{system:a,label:"비활성화 + 선택",checked:!0,disabled:!0,name:"radio-disabled",value:"disabled-checked",variant:"radio"})]})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsx(n,{variant:"body-1",weight:"medium",color:"secondary-foreground-1",children:"Checkmark 스타일 (사각형)"}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"caption-1",color:"secondary-foreground-3",children:"기본 상태"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"기본 상태",name:"checkmark-states",value:"default",variant:"checkmark"}),e.jsx(r,{system:a,label:"선택된 상태",checked:!0,name:"checkmark-states",value:"checked",variant:"checkmark"})]}),e.jsx(n,{variant:"caption-1",color:"secondary-foreground-3",children:"비활성화 상태"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"비활성화",disabled:!0,name:"checkmark-disabled",value:"disabled",variant:"checkmark"}),e.jsx(r,{system:a,label:"비활성화 + 선택",checked:!0,disabled:!0,name:"checkmark-disabled",value:"disabled-checked",variant:"checkmark"})]})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"body-1",weight:"medium",color:"secondary-foreground-1",children:"라벨 없음"}),e.jsxs(s,{display:"flex",direction:"row",gap:"md",children:[e.jsx(r,{system:a,showLabel:!1,name:"no-label-radio",value:"no-label-1",variant:"radio"}),e.jsx(r,{system:a,showLabel:!1,checked:!0,name:"no-label-radio",value:"no-label-2",variant:"radio"}),e.jsx(r,{system:a,showLabel:!1,name:"no-label-checkmark",value:"no-label-3",variant:"checkmark"}),e.jsx(r,{system:a,showLabel:!1,checked:!0,name:"no-label-checkmark",value:"no-label-4",variant:"checkmark"})]})]})]})}},h={render:(o,{globals:t})=>{const a=(t==null?void 0:t.system)||"system-01",c=a==="system-01"?"Clean & Efficient":"Modern & Friendly",[d,m]=k.useState("option1");return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[c," - 인터랙티브 라디오 그룹"]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsxs(n,{variant:"body-1",weight:"medium",children:["선택된 값: ",d]}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"첫 번째 옵션",name:"interactive-group",value:"option1",checked:d==="option1",onChange:l=>m(l.target.value),variant:"radio"}),e.jsx(r,{system:a,label:"두 번째 옵션",name:"interactive-group",value:"option2",checked:d==="option2",onChange:l=>m(l.target.value),variant:"radio"}),e.jsx(r,{system:a,label:"세 번째 옵션",name:"interactive-group",value:"option3",checked:d==="option3",onChange:l=>m(l.target.value),variant:"radio"})]})]})]})}},x={render:(o,{globals:t})=>{const a=(t==null?void 0:t.system)||"system-01",c=a==="system-01"?"Clean & Efficient":"Modern & Friendly",[d,m]=k.useState("card"),[l,g]=k.useState("standard");return e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(n,{as:"h2",variant:"heading-2",children:[c," - 주문 폼 예시"]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"body-1",weight:"medium",children:"결제 방법"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"신용카드",name:"payment-method",value:"card",checked:d==="card",onChange:i=>m(i.target.value),variant:"radio"}),e.jsx(r,{system:a,label:"계좌이체",name:"payment-method",value:"transfer",checked:d==="transfer",onChange:i=>m(i.target.value),variant:"radio"}),e.jsx(r,{system:a,label:"무통장입금",name:"payment-method",value:"deposit",checked:d==="deposit",onChange:i=>m(i.target.value),variant:"radio"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(n,{variant:"body-1",weight:"medium",children:"배송 옵션"}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(r,{system:a,label:"일반 배송 (2-3일)",name:"delivery-option",value:"standard",checked:l==="standard",onChange:i=>g(i.target.value),variant:"checkmark"}),e.jsx(r,{system:a,label:"빠른 배송 (1일)",name:"delivery-option",value:"express",checked:l==="express",onChange:i=>g(i.target.value),variant:"checkmark"}),e.jsx(r,{system:a,label:"당일 배송",name:"delivery-option",value:"same-day",checked:l==="same-day",onChange:i=>g(i.target.value),variant:"checkmark"})]})]}),e.jsx(s,{display:"flex",direction:"column",gap:"md",children:e.jsxs(n,{variant:"body-2",color:"secondary-foreground-2",children:["선택된 옵션: 결제방법 - ",d,", 배송 - ",l]})})]})},parameters:{docs:{description:{story:"실제 주문 폼에서 사용되는 라디오 버튼의 예시입니다."}}}};var b,f,j;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    name: 'default-group',
    value: 'option1',
    variant: 'radio'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalRadio {...args} system={system} />;
  }
}`,...(j=(f=y.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var F,R,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="xl">\r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 01 - Clean & Efficient (파란색, 직각)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalRadio system="system-01" label="Radio 스타일" name="system01-radio" value="radio" variant="radio" />\r
          <UniversalRadio system="system-01" label="Checkmark 스타일" name="system01-checkmark" value="checkmark" variant="checkmark" />\r
          <UniversalRadio system="system-01" label="선택된 상태" checked name="system01-selected" value="selected" variant="radio" />\r
          <UniversalRadio system="system-01" label="비활성화" disabled name="system01-disabled" value="disabled" variant="radio" />\r
        </Frame>\r
      </Frame>\r
      \r
      <Frame display="flex" direction="column" gap="md">\r
        <Text as="h2" variant="heading-2">\r
          System 02 - Modern & Friendly (초록색, 둥근 모서리)\r
        </Text>\r
        <Frame display="flex" direction="column" gap="sm">\r
          <UniversalRadio system="system-02" label="Radio 스타일" name="system02-radio" value="radio" variant="radio" />\r
          <UniversalRadio system="system-02" label="Checkmark 스타일" name="system02-checkmark" value="checkmark" variant="checkmark" />\r
          <UniversalRadio system="system-02" label="선택된 상태" checked name="system02-selected" value="selected" variant="radio" />\r
          <UniversalRadio system="system-02" label="비활성화" disabled name="system02-disabled" value="disabled" variant="radio" />\r
        </Frame>\r
      </Frame>\r
    </Frame>
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,U,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    name: 'checkmark-group',
    value: 'option1',
    variant: 'checkmark'
  },
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    return <UniversalRadio {...args} system={system} />;
  }
}`,...(S=(U=p.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var w,M,O;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - Radio 버튼 모든 상태\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="lg">\r
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">\r
            Radio 스타일 (원형)\r
          </Text>\r
          <Frame display="flex" direction="column" gap="md">\r
            <Text variant="caption-1" color="secondary-foreground-3">기본 상태</Text>\r
            <Frame display="flex" direction="column" gap="sm">\r
              <UniversalRadio system={system} label="기본 상태" name="radio-states" value="default" variant="radio" />\r
              <UniversalRadio system={system} label="선택된 상태" checked name="radio-states" value="checked" variant="radio" />\r
            </Frame>\r
            \r
            <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>\r
            <Frame display="flex" direction="column" gap="sm">\r
              <UniversalRadio system={system} label="비활성화" disabled name="radio-disabled" value="disabled" variant="radio" />\r
              <UniversalRadio system={system} label="비활성화 + 선택" checked disabled name="radio-disabled" value="disabled-checked" variant="radio" />\r
            </Frame>\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" direction="column" gap="lg">\r
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">\r
            Checkmark 스타일 (사각형)\r
          </Text>\r
          <Frame display="flex" direction="column" gap="md">\r
            <Text variant="caption-1" color="secondary-foreground-3">기본 상태</Text>\r
            <Frame display="flex" direction="column" gap="sm">\r
              <UniversalRadio system={system} label="기본 상태" name="checkmark-states" value="default" variant="checkmark" />\r
              <UniversalRadio system={system} label="선택된 상태" checked name="checkmark-states" value="checked" variant="checkmark" />\r
            </Frame>\r
            \r
            <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>\r
            <Frame display="flex" direction="column" gap="sm">\r
              <UniversalRadio system={system} label="비활성화" disabled name="checkmark-disabled" value="disabled" variant="checkmark" />\r
              <UniversalRadio system={system} label="비활성화 + 선택" checked disabled name="checkmark-disabled" value="disabled-checked" variant="checkmark" />\r
            </Frame>\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">\r
            라벨 없음\r
          </Text>\r
          <Frame display="flex" direction="row" gap="md">\r
            <UniversalRadio system={system} showLabel={false} name="no-label-radio" value="no-label-1" variant="radio" />\r
            <UniversalRadio system={system} showLabel={false} checked name="no-label-radio" value="no-label-2" variant="radio" />\r
            <UniversalRadio system={system} showLabel={false} name="no-label-checkmark" value="no-label-3" variant="checkmark" />\r
            <UniversalRadio system={system} showLabel={false} checked name="no-label-checkmark" value="no-label-4" variant="checkmark" />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(O=(M=v.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var E,V,L;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState('option1');
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 인터랙티브 라디오 그룹\r
        </Text>\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="medium">\r
            선택된 값: {selectedValue}\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalRadio system={system} label="첫 번째 옵션" name="interactive-group" value="option1" checked={selectedValue === 'option1'} onChange={(e: any) => setSelectedValue(e.target.value)} variant="radio" />\r
            <UniversalRadio system={system} label="두 번째 옵션" name="interactive-group" value="option2" checked={selectedValue === 'option2'} onChange={(e: any) => setSelectedValue(e.target.value)} variant="radio" />\r
            <UniversalRadio system={system} label="세 번째 옵션" name="interactive-group" value="option3" checked={selectedValue === 'option3'} onChange={(e: any) => setSelectedValue(e.target.value)} variant="radio" />\r
          </Frame>\r
        </Frame>\r
      </Frame>;
  }
}`,...(L=(V=h.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var N,D,P;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [deliveryOption, setDeliveryOption] = useState('standard');
    return <Frame display="flex" direction="column" gap="lg">\r
        <Text as="h2" variant="heading-2">\r
          {systemName} - 주문 폼 예시\r
        </Text>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="medium">\r
            결제 방법\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalRadio system={system} label="신용카드" name="payment-method" value="card" checked={paymentMethod === 'card'} onChange={(e: any) => setPaymentMethod(e.target.value)} variant="radio" />\r
            <UniversalRadio system={system} label="계좌이체" name="payment-method" value="transfer" checked={paymentMethod === 'transfer'} onChange={(e: any) => setPaymentMethod(e.target.value)} variant="radio" />\r
            <UniversalRadio system={system} label="무통장입금" name="payment-method" value="deposit" checked={paymentMethod === 'deposit'} onChange={(e: any) => setPaymentMethod(e.target.value)} variant="radio" />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="medium">\r
            배송 옵션\r
          </Text>\r
          <Frame display="flex" direction="column" gap="sm">\r
            <UniversalRadio system={system} label="일반 배송 (2-3일)" name="delivery-option" value="standard" checked={deliveryOption === 'standard'} onChange={(e: any) => setDeliveryOption(e.target.value)} variant="checkmark" />\r
            <UniversalRadio system={system} label="빠른 배송 (1일)" name="delivery-option" value="express" checked={deliveryOption === 'express'} onChange={(e: any) => setDeliveryOption(e.target.value)} variant="checkmark" />\r
            <UniversalRadio system={system} label="당일 배송" name="delivery-option" value="same-day" checked={deliveryOption === 'same-day'} onChange={(e: any) => setDeliveryOption(e.target.value)} variant="checkmark" />\r
          </Frame>\r
        </Frame>\r
\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-2" color="secondary-foreground-2">\r
            선택된 옵션: 결제방법 - {paymentMethod}, 배송 - {deliveryOption}\r
          </Text>\r
        </Frame>\r
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 주문 폼에서 사용되는 라디오 버튼의 예시입니다.'
      }
    }
  }
}`,...(P=(D=x.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const H=["Default","SystemComparison","Checkmark","AllStates","InteractiveGroup","FormExample"];export{v as AllStates,p as Checkmark,y as Default,x as FormExample,h as InteractiveGroup,u as SystemComparison,H as __namedExportsOrder,B as default};

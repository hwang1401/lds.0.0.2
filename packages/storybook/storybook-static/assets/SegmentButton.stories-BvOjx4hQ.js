import{j as e,r as d}from"./react-vendor-BFNgaz96.js";import{S as c}from"./index.esm-ChTCnUjT.js";import{S as y}from"./index.esm-BNdFApZa.js";import{F as s,T as o}from"./index.esm-WYP67xav.js";const Y={"system-01":c,"system-02":y},l=({system:t,children:r,...n})=>{const i=Y[t]||c;return typeof r=="function"?r(i,i.Item):e.jsx(i,{...n,children:r})},re={title:"Components/SegmentButton",component:l,parameters:{layout:"centered",docs:{description:{component:"연결된 버튼 그룹으로 단일 또는 다중 선택을 지원하는 SegmentButton 컴포넌트입니다."}}},argTypes:{system:{control:{type:"select"},options:["system-01","system-02"],description:"디자인 시스템 테마",table:{type:{summary:"string"},defaultValue:{summary:"system-01"}}},mode:{control:{type:"select"},options:["single","multi"],description:"선택 모드 (단일/다중)",table:{type:{summary:"single | multi"},defaultValue:{summary:"single"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"버튼 크기",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},variant:{control:{type:"select"},options:["primary","secondary"],description:"버튼 스타일 변형",table:{type:{summary:"primary | secondary"},defaultValue:{summary:"primary"}}},selectedValues:{control:"object",description:"선택된 값들 (controlled)"},defaultSelectedValues:{control:"object",description:"기본 선택된 값들 (uncontrolled)"}}},v={args:{system:"system-01",mode:"single",size:"md",variant:"primary"},render:t=>{const[r,n]=d.useState(["option1"]);return e.jsx(l,{...t,selectedValues:r,onChange:n,children:(i,a)=>e.jsxs(i,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(a,{value:"option1",children:"옵션 1"}),e.jsx(a,{value:"option2",children:"옵션 2"}),e.jsx(a,{value:"option3",children:"옵션 3"})]})})}},x={args:{system:"system-01",mode:"multi",size:"md",variant:"primary"},render:t=>{const[r,n]=d.useState(["under-50"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"가격대 필터"}),e.jsx(l,{...t,children:(i,a)=>e.jsxs(i,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(a,{value:"under-50",children:"5만원 미만"}),e.jsx(a,{value:"50-100",children:"5-10만원"}),e.jsx(a,{value:"100-200",children:"10-20만원"}),e.jsx(a,{value:"over-200",children:"20만원 이상"})]})})]})}},S={args:{system:"system-01",mode:"single",size:"sm",variant:"secondary"},render:t=>{const[r,n]=d.useState(["grid"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-2",weight:"bold",children:"보기 모드"}),e.jsx(l,{...t,children:(i,a)=>e.jsxs(i,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(a,{value:"list",children:"목록"}),e.jsx(a,{value:"grid",children:"격자"}),e.jsx(a,{value:"card",children:"카드"})]})})]})}},h={args:{system:"system-01",mode:"single",variant:"primary"},render:t=>e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(o,{variant:"body-2",weight:"medium",children:"Small (sm)"}),e.jsx(l,{...t,children:(r,n)=>e.jsxs(r,{mode:t.mode,size:"sm",variant:t.variant,defaultSelectedValues:["option1"],children:[e.jsx(n,{value:"option1",children:"옵션 1"}),e.jsx(n,{value:"option2",children:"옵션 2"}),e.jsx(n,{value:"option3",children:"옵션 3"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(o,{variant:"body-2",weight:"medium",children:"Medium (md)"}),e.jsx(l,{...t,children:(r,n)=>e.jsxs(r,{mode:t.mode,size:"md",variant:t.variant,defaultSelectedValues:["option2"],children:[e.jsx(n,{value:"option1",children:"옵션 1"}),e.jsx(n,{value:"option2",children:"옵션 2"}),e.jsx(n,{value:"option3",children:"옵션 3"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(o,{variant:"body-2",weight:"medium",children:"Large (lg)"}),e.jsx(l,{...t,children:(r,n)=>e.jsxs(r,{mode:t.mode,size:"lg",variant:t.variant,defaultSelectedValues:["option3"],children:[e.jsx(n,{value:"option1",children:"옵션 1"}),e.jsx(n,{value:"option2",children:"옵션 2"}),e.jsx(n,{value:"option3",children:"옵션 3"})]})})]})]})},j={args:{system:"system-01",mode:"single",size:"md"},render:t=>e.jsxs(s,{display:"flex",direction:"column",gap:"lg",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(o,{variant:"body-2",weight:"medium",children:"Primary"}),e.jsx(l,{...t,children:(r,n)=>e.jsxs(r,{mode:t.mode,size:t.size,variant:"primary",defaultSelectedValues:["option1"],children:[e.jsx(n,{value:"option1",children:"옵션 1"}),e.jsx(n,{value:"option2",children:"옵션 2"}),e.jsx(n,{value:"option3",children:"옵션 3"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(o,{variant:"body-2",weight:"medium",children:"Secondary"}),e.jsx(l,{...t,children:(r,n)=>e.jsxs(r,{mode:t.mode,size:t.size,variant:"secondary",defaultSelectedValues:["option2"],children:[e.jsx(n,{value:"option1",children:"옵션 1"}),e.jsx(n,{value:"option2",children:"옵션 2"}),e.jsx(n,{value:"option3",children:"옵션 3"})]})})]})]})},B={args:{mode:"single",size:"md",variant:"primary"},render:t=>{const[r,n]=d.useState(["option1"]),[i,a]=d.useState(["option1"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"System-01 (Blue Theme)"}),e.jsxs(c,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(c.Item,{value:"option1",children:"옵션 1"}),e.jsx(c.Item,{value:"option2",children:"옵션 2"}),e.jsx(c.Item,{value:"option3",children:"옵션 3"})]})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"System-02 (Purple Theme)"}),e.jsxs(y,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:i,onChange:a,children:[e.jsx(y.Item,{value:"option1",children:"옵션 1"}),e.jsx(y.Item,{value:"option2",children:"옵션 2"}),e.jsx(y.Item,{value:"option3",children:"옵션 3"})]})]})]})}},I={args:{system:"system-01",size:"md",variant:"primary"},render:t=>{const[r,n]=d.useState(["option2"]),[i,a]=d.useState(["option1","option3"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"Single Select Mode"}),e.jsx(l,{...t,children:(g,u)=>e.jsxs(g,{mode:"single",size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(u,{value:"option1",children:"옵션 1"}),e.jsx(u,{value:"option2",children:"옵션 2"}),e.jsx(u,{value:"option3",children:"옵션 3"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"Multi Select Mode"}),e.jsx(l,{...t,children:(g,u)=>e.jsxs(g,{mode:"multi",size:t.size,variant:t.variant,selectedValues:i,onChange:a,children:[e.jsx(u,{value:"option1",children:"옵션 1"}),e.jsx(u,{value:"option2",children:"옵션 2"}),e.jsx(u,{value:"option3",children:"옵션 3"})]})})]})]})}},V={args:{system:"system-01",mode:"single",size:"md",variant:"primary"},render:t=>{const[r,n]=d.useState(["option1"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"비활성화된 옵션 포함"}),e.jsx(l,{...t,children:(i,a)=>e.jsxs(i,{mode:t.mode,size:t.size,variant:t.variant,selectedValues:r,onChange:n,children:[e.jsx(a,{value:"option1",children:"활성 옵션"}),e.jsx(a,{value:"option2",disabled:!0,children:"비활성 옵션"}),e.jsx(a,{value:"option3",children:"활성 옵션"})]})})]})}},f={args:{system:"system-01"},render:t=>{const[r,n]=d.useState(["today"]),[i,a]=d.useState(["date"]),[g,u]=d.useState(["beginner","intermediate"]);return e.jsxs(s,{display:"flex",direction:"column",gap:"xl",children:[e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"시간 범위 선택"}),e.jsx(l,{...t,children:(p,m)=>e.jsxs(p,{mode:"single",size:"sm",variant:"secondary",selectedValues:r,onChange:n,children:[e.jsx(m,{value:"today",children:"오늘"}),e.jsx(m,{value:"week",children:"이번 주"}),e.jsx(m,{value:"month",children:"이번 달"}),e.jsx(m,{value:"year",children:"올해"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"정렬 기준"}),e.jsx(l,{...t,children:(p,m)=>e.jsxs(p,{mode:"single",size:"md",variant:"primary",selectedValues:i,onChange:a,children:[e.jsx(m,{value:"date",children:"날짜순"}),e.jsx(m,{value:"name",children:"이름순"}),e.jsx(m,{value:"size",children:"크기순"}),e.jsx(m,{value:"type",children:"유형순"})]})})]}),e.jsxs(s,{display:"flex",direction:"column",gap:"md",children:[e.jsx(o,{variant:"body-1",weight:"bold",children:"난이도 필터 (다중 선택)"}),e.jsx(l,{...t,children:(p,m)=>e.jsxs(p,{mode:"multi",size:"md",variant:"primary",selectedValues:g,onChange:u,children:[e.jsx(m,{value:"beginner",children:"초급"}),e.jsx(m,{value:"intermediate",children:"중급"}),e.jsx(m,{value:"advanced",children:"고급"}),e.jsx(m,{value:"expert",children:"전문가"})]})})]})]})}};var z,b,F;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md',
    variant: 'primary'
  },
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
    return <UniversalSegmentButton {...args} selectedValues={selectedValues} onChange={setSelectedValues}>\r
        {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={selectedValues} onChange={setSelectedValues}>\r
            <Item value="option1">옵션 1</Item>\r
            <Item value="option2">옵션 2</Item>\r
            <Item value="option3">옵션 3</Item>\r
          </SegmentButton>}\r
      </UniversalSegmentButton>;
  }
}`,...(F=(b=v.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var T,w,C;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'multi',
    size: 'md',
    variant: 'primary'
  },
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['under-50']);
    return <Frame display="flex" direction="column" gap="md">\r
        <Text variant="body-1" weight="bold">가격대 필터</Text>\r
        <UniversalSegmentButton {...args}>\r
          {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={selectedValues} onChange={setSelectedValues}>\r
              <Item value="under-50">5만원 미만</Item>\r
              <Item value="50-100">5-10만원</Item>\r
              <Item value="100-200">10-20만원</Item>\r
              <Item value="over-200">20만원 이상</Item>\r
            </SegmentButton>}\r
        </UniversalSegmentButton>\r
      </Frame>;
  }
}`,...(C=(w=x.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var U,M,R;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'sm',
    variant: 'secondary'
  },
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['grid']);
    return <Frame display="flex" direction="column" gap="md">\r
        <Text variant="body-2" weight="bold">보기 모드</Text>\r
        <UniversalSegmentButton {...args}>\r
          {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={selectedValues} onChange={setSelectedValues}>\r
              <Item value="list">목록</Item>\r
              <Item value="grid">격자</Item>\r
              <Item value="card">카드</Item>\r
            </SegmentButton>}\r
        </UniversalSegmentButton>\r
      </Frame>;
  }
}`,...(R=(M=S.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,P,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'single',
    variant: 'primary'
  },
  render: args => {
    return <Frame display="flex" direction="column" gap="lg">\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Small (sm)</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size="sm" variant={args.variant} defaultSelectedValues={['option1']}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Medium (md)</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size="md" variant={args.variant} defaultSelectedValues={['option2']}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Large (lg)</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size="lg" variant={args.variant} defaultSelectedValues={['option3']}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var k,L,W;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md'
  },
  render: args => {
    return <Frame display="flex" direction="column" gap="lg">\r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Primary</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant="primary" defaultSelectedValues={['option1']}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="sm">\r
          <Text variant="body-2" weight="medium">Secondary</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant="secondary" defaultSelectedValues={['option2']}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...(W=(L=j.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,O,$;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    size: 'md',
    variant: 'primary'
  },
  render: args => {
    const [system01Values, setSystem01Values] = useState<string[]>(['option1']);
    const [system02Values, setSystem02Values] = useState<string[]>(['option1']);
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">System-01 (Blue Theme)</Text>\r
          <System01SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={system01Values} onChange={setSystem01Values}>\r
            <System01SegmentButton.Item value="option1">옵션 1</System01SegmentButton.Item>\r
            <System01SegmentButton.Item value="option2">옵션 2</System01SegmentButton.Item>\r
            <System01SegmentButton.Item value="option3">옵션 3</System01SegmentButton.Item>\r
          </System01SegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">System-02 (Purple Theme)</Text>\r
          <System02SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={system02Values} onChange={setSystem02Values}>\r
            <System02SegmentButton.Item value="option1">옵션 1</System02SegmentButton.Item>\r
            <System02SegmentButton.Item value="option2">옵션 2</System02SegmentButton.Item>\r
            <System02SegmentButton.Item value="option3">옵션 3</System02SegmentButton.Item>\r
          </System02SegmentButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...($=(O=B.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,A,G;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    size: 'md',
    variant: 'primary'
  },
  render: args => {
    const [singleValues, setSingleValues] = useState<string[]>(['option2']);
    const [multiValues, setMultiValues] = useState<string[]>(['option1', 'option3']);
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">Single Select Mode</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode="single" size={args.size} variant={args.variant} selectedValues={singleValues} onChange={setSingleValues}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">Multi Select Mode</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode="multi" size={args.size} variant={args.variant} selectedValues={multiValues} onChange={setMultiValues}>\r
                <Item value="option1">옵션 1</Item>\r
                <Item value="option2">옵션 2</Item>\r
                <Item value="option3">옵션 3</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...(G=(A=I.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,K;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md',
    variant: 'primary'
  },
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
    return <Frame display="flex" direction="column" gap="md">\r
        <Text variant="body-1" weight="bold">비활성화된 옵션 포함</Text>\r
        <UniversalSegmentButton {...args}>\r
          {(SegmentButton: any, Item: any) => <SegmentButton mode={args.mode} size={args.size} variant={args.variant} selectedValues={selectedValues} onChange={setSelectedValues}>\r
              <Item value="option1">활성 옵션</Item>\r
              <Item value="option2" disabled>비활성 옵션</Item>\r
              <Item value="option3">활성 옵션</Item>\r
            </SegmentButton>}\r
        </UniversalSegmentButton>\r
      </Frame>;
  }
}`,...(K=(J=V.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    system: 'system-01'
  },
  render: args => {
    const [timeRange, setTimeRange] = useState<string[]>(['today']);
    const [sortBy, setSortBy] = useState<string[]>(['date']);
    const [difficulty, setDifficulty] = useState<string[]>(['beginner', 'intermediate']);
    return <Frame display="flex" direction="column" gap="xl">\r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">시간 범위 선택</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode="single" size="sm" variant="secondary" selectedValues={timeRange} onChange={setTimeRange}>\r
                <Item value="today">오늘</Item>\r
                <Item value="week">이번 주</Item>\r
                <Item value="month">이번 달</Item>\r
                <Item value="year">올해</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">정렬 기준</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode="single" size="md" variant="primary" selectedValues={sortBy} onChange={setSortBy}>\r
                <Item value="date">날짜순</Item>\r
                <Item value="name">이름순</Item>\r
                <Item value="size">크기순</Item>\r
                <Item value="type">유형순</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
        \r
        <Frame display="flex" direction="column" gap="md">\r
          <Text variant="body-1" weight="bold">난이도 필터 (다중 선택)</Text>\r
          <UniversalSegmentButton {...args}>\r
            {(SegmentButton: any, Item: any) => <SegmentButton mode="multi" size="md" variant="primary" selectedValues={difficulty} onChange={setDifficulty}>\r
                <Item value="beginner">초급</Item>\r
                <Item value="intermediate">중급</Item>\r
                <Item value="advanced">고급</Item>\r
                <Item value="expert">전문가</Item>\r
              </SegmentButton>}\r
          </UniversalSegmentButton>\r
        </Frame>\r
      </Frame>;
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ae=["Default","PriceFilter","ViewModeToggle","SizeShowcase","VariantShowcase","SystemComparison","ModeComparison","DisabledState","RealWorldExamples"];export{v as Default,V as DisabledState,I as ModeComparison,x as PriceFilter,f as RealWorldExamples,h as SizeShowcase,B as SystemComparison,j as VariantShowcase,S as ViewModeToggle,ae as __namedExportsOrder,re as default};

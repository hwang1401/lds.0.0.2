import{j as r}from"./react-vendor-BFNgaz96.js";import{D as d,F as l,T as e}from"./index.esm-WYP67xav.js";const X={title:"Shared/Primitives/Divider",component:d,parameters:{layout:"padded",docs:{description:{component:"콘텐츠를 구분하는 선을 그리는 순수한 프리미티브 컴포넌트입니다. 수평/수직 방향, 다양한 스타일과 색상을 지원하며 시멘틱 토큰만을 사용합니다."}}},decorators:[(s,C)=>{const{orientation:E}=C.args;return E==="vertical"?r.jsxs(l,{display:"flex",align:"center",gap:"md",style:{height:"100px"},children:[r.jsx("span",{children:"왼쪽"}),r.jsx(s,{}),r.jsx("span",{children:"오른쪽"})]}):r.jsx("div",{style:{minWidth:"300px"},children:r.jsx(s,{})})}],tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"구분선 방향",table:{defaultValue:{summary:"horizontal"}}},thickness:{control:"select",options:["thin","medium","thick"],description:"구분선 두께",table:{defaultValue:{summary:"thin"}}},color:{control:"select",options:["primary-stroke-1","secondary-stroke-1","secondary-stroke-2","secondary-stroke-3","secondary-stroke-inverse","cta-stroke-1","cta-stroke-2","status-error","status-warning","status-success","status-info","status-focused"],description:"구분선 색상",table:{defaultValue:{summary:"secondary-stroke-2"}}},variant:{control:"select",options:["solid","dashed","dotted"],description:"구분선 스타일",table:{defaultValue:{summary:"solid"}}},length:{control:"text",description:"구분선 길이 (px, %, rem 등)"},spacing:{control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"],description:"전체 마진"},spacingY:{control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"],description:"수직 마진"},spacingX:{control:"select",options:["none","xxxs","xxs","xs","sm","md","lg","xl","xxl","xxxl"],description:"수평 마진"}}},t={args:{thickness:"medium",color:"secondary-stroke-2",variant:"solid",orientation:"horizontal"},parameters:{docs:{description:{story:"하단 Controls 패널에서 모든 속성을 실시간으로 조작할 수 있습니다."}}}},o={args:{orientation:"horizontal",thickness:"medium",color:"primary-stroke-1",variant:"solid"},parameters:{docs:{description:{story:"수평 구분선의 다양한 설정을 테스트할 수 있습니다."}}}},a={args:{orientation:"vertical",thickness:"medium",color:"cta-stroke-1",variant:"solid"},parameters:{docs:{description:{story:"수직 구분선의 다양한 설정을 테스트할 수 있습니다."}}}},n={args:{orientation:"horizontal",thickness:"thick",color:"status-success",variant:"dashed",length:"200px"},parameters:{docs:{description:{story:"length 속성으로 구분선의 길이를 조정할 수 있습니다. (px, %, rem 등 지원)"}}}},i={args:{orientation:"horizontal",thickness:"medium",color:"status-error",variant:"solid",spacing:"lg"},render:s=>r.jsxs(l,{display:"flex",direction:"column",children:[r.jsx(e,{variant:"body-2",children:"위 텍스트"}),r.jsx(d,{...s}),r.jsx(e,{variant:"body-2",children:"아래 텍스트"})]}),parameters:{docs:{description:{story:"spacing, spacingX, spacingY 속성으로 구분선 주변 여백을 조정할 수 있습니다."}}}},c={render:()=>r.jsxs(l,{display:"flex",direction:"column",gap:"md",children:[r.jsx(e,{variant:"heading-2",children:"사용자 정보"}),r.jsx(e,{variant:"body-2",children:"이름: 홍길동"}),r.jsx(e,{variant:"body-2",children:"이메일: hong@example.com"}),r.jsx(d,{thickness:"thin",color:"secondary-stroke-2"}),r.jsx(e,{variant:"heading-3",children:"연락처"}),r.jsx(e,{variant:"body-2",children:"전화: 010-1234-5678"}),r.jsx(e,{variant:"body-2",children:"주소: 서울시 강남구"}),r.jsx(d,{thickness:"medium",color:"cta-stroke-1",variant:"dashed"}),r.jsx(e,{variant:"body-2",children:"정보 수정일: 2024년 1월 15일"})]}),parameters:{docs:{description:{story:"실제 UI에서 콘텐츠를 구분하는 구분선의 사용 예시입니다."}}}};var p,m,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    thickness: 'medium',
    color: 'secondary-stroke-2',
    variant: 'solid',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: '하단 Controls 패널에서 모든 속성을 실시간으로 조작할 수 있습니다.'
      }
    }
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
    color: 'primary-stroke-1',
    variant: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: '수평 구분선의 다양한 설정을 테스트할 수 있습니다.'
      }
    }
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    thickness: 'medium',
    color: 'cta-stroke-1',
    variant: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: '수직 구분선의 다양한 설정을 테스트할 수 있습니다.'
      }
    }
  }
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var T,j,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 'thick',
    color: 'status-success',
    variant: 'dashed',
    length: '200px'
  },
  parameters: {
    docs: {
      description: {
        story: 'length 속성으로 구분선의 길이를 조정할 수 있습니다. (px, %, rem 등 지원)'
      }
    }
  }
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,z,V;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
    color: 'status-error',
    variant: 'solid',
    spacing: 'lg'
  },
  render: args => <Frame display="flex" direction="column">\r
      <Text variant="body-2">위 텍스트</Text>\r
      <Divider {...args} />\r
      <Text variant="body-2">아래 텍스트</Text>\r
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: 'spacing, spacingX, spacingY 속성으로 구분선 주변 여백을 조정할 수 있습니다.'
      }
    }
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var D,S,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Frame display="flex" direction="column" gap="md">\r
      <Text variant="heading-2">사용자 정보</Text>\r
      <Text variant="body-2">이름: 홍길동</Text>\r
      <Text variant="body-2">이메일: hong@example.com</Text>\r
      \r
      <Divider thickness="thin" color="secondary-stroke-2" />\r
      \r
      <Text variant="heading-3">연락처</Text>\r
      <Text variant="body-2">전화: 010-1234-5678</Text>\r
      <Text variant="body-2">주소: 서울시 강남구</Text>\r
      \r
      <Divider thickness="medium" color="cta-stroke-1" variant="dashed" />\r
      \r
      <Text variant="body-2">정보 수정일: 2024년 1월 15일</Text>\r
    </Frame>,
  parameters: {
    docs: {
      description: {
        story: '실제 UI에서 콘텐츠를 구분하는 구분선의 사용 예시입니다.'
      }
    }
  }
}`,...(F=(S=c.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Y=["Default","HorizontalVariations","VerticalVariations","CustomLength","SpacingTest","RealWorldExample"];export{n as CustomLength,t as Default,o as HorizontalVariations,c as RealWorldExample,i as SpacingTest,a as VerticalVariations,Y as __namedExportsOrder,X as default};

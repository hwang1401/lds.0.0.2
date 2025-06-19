import{j as e,r as l}from"./react-vendor-BFNgaz96.js";import{I as a,S as s,F as r,T as n,G}from"./index.esm-WYP67xav.js";import{F as M,B as A}from"./index.esm-ChTCnUjT.js";const D={title:"Shared/Primitives/Icon",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{description:"아이콘 이름",control:"select",options:["SearchIcon","HomeIcon","HeartIcon","DownloadIcon","UploadIcon","InfoIcon","WarningIcon","LineIconsCheckmarkCheckmarkIcon","LineIconsCloseCloseIcon","LineIconsPlusPlusIcon","LineIconsMinusMinusIcon","LineIconsMenuMenuIcon","LineIconsSettingsSetting1Icon","LineIconsPersonPersonIcon","ClockIcon","CalendarIcon","EmailIcon"]},size:{description:"아이콘 크기 (토큰 기반)",control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl","xxxxl"]}}},d={args:{name:"SearchIcon",size:"md"}},m={render:()=>e.jsx(s,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsxs(r,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsx(n,{variant:"heading-2",weight:"medium",children:"아이콘 크기"}),e.jsxs(r,{display:"flex",direction:"row",gap:"xl",justify:"center",align:"center",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"xs"}),e.jsx(n,{variant:"caption-1",children:"xs (12px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"sm"}),e.jsx(n,{variant:"caption-1",children:"sm (16px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"md"}),e.jsx(n,{variant:"caption-1",children:"md (20px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"lg"}),e.jsx(n,{variant:"caption-1",children:"lg (24px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"xl (28px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"xxl"}),e.jsx(n,{variant:"caption-1",children:"xxl (32px)"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"xxxl"}),e.jsx(n,{variant:"caption-1",children:"xxxl (36px)"})]})]})]})})},x={render:()=>e.jsx(s,{background:"secondary-system01-1-rest",borderRadius:"md",children:e.jsxs(r,{display:"flex",direction:"column",gap:"lg",padding:"lg",children:[e.jsx(n,{variant:"heading-2",weight:"medium",children:"아이콘 색상"}),e.jsx(n,{variant:"body-2",children:"아이콘은 현재 CSS에서 색상을 제어합니다. 다양한 상황에서의 아이콘을 확인해보세요."}),e.jsxs(r,{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"lg",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"HeartIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Heart Icon"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"HeartIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Heart Icon"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"HeartIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Heart Icon"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"HeartIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Heart Icon"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"WarningIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Warning"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"InfoIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Success"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"InfoIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Error"})]}),e.jsxs(r,{display:"flex",direction:"column",gap:"sm",align:"center",children:[e.jsx(a,{name:"InfoIcon",size:"xl"}),e.jsx(n,{variant:"caption-1",children:"Info"})]})]})]})})},p={args:{name:"SearchIcon",size:"lg"}},g={render:()=>{const[o,W]=l.useState(""),[L,u]=l.useState(null),t=l.useMemo(()=>Object.keys(G).filter(i=>i!=="GeneratedIconName").sort(),[]),h=l.useMemo(()=>o?t.filter(i=>i.toLowerCase().includes(o.toLowerCase())):t,[o,t]),N=async i=>{try{await navigator.clipboard.writeText(`<Icon name="${i}" />`),u(i),setTimeout(()=>u(null),2e3)}catch(c){console.error("클립보드 복사 실패:",c)}};return e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"lg",children:[e.jsx(s,{background:"secondary-system01-1-rest",borderRadius:"lg",children:e.jsxs(r,{display:"flex",direction:"column",gap:"xl",padding:"xl",children:[e.jsxs(r,{display:"flex",direction:"column",gap:"sm",children:[e.jsx(n,{variant:"title-1",weight:"bold",children:"Icon Gallery"}),e.jsxs(n,{variant:"body-2",children:["총 ",t.length,"개의 아이콘을 사용할 수 있습니다. 아이콘을 클릭하면 React 코드가 클립보드에 복사됩니다."]})]}),e.jsx(r,{display:"flex",direction:"column",gap:"lg",children:e.jsx(M,{placeholder:"아이콘 검색... (예: search, home, arrow)",value:o,onChange:i=>W(i.target.value),leftIcon:"SearchIcon",size:"lg",variant:"filled"})})]})}),h.length>0?e.jsx(s,{background:"secondary-system01-1-rest",borderRadius:"lg",borderWidth:"thin",borderColor:"secondary-system01-2-rest",children:e.jsx(r,{display:"flex",direction:"column",padding:"xl",gap:"xl",children:e.jsx(r,{display:"flex",direction:"row",gap:"lg",wrap:"wrap",justify:"center",children:h.map(i=>{const c=L===i;return e.jsx(s,{background:c?"cta-system01-1-rest":"secondary-system01-2-rest",borderRadius:"md",borderWidth:"thin",borderColor:c?"cta-system01-1-rest":"secondary-system01-3-rest",style:{cursor:"pointer",transition:"all 0.2s ease"},onClick:()=>N(i),children:e.jsxs(r,{padding:"md",display:"flex",direction:"column",gap:"sm",align:"center",minWidth:"120px",children:[e.jsx(a,{name:i,size:"xl"}),e.jsx(n,{variant:"caption-2",textAlign:"center",noWrap:!0,style:{color:c?"var(--color-oncolor)":"inherit",fontSize:"10px",maxWidth:"100px"},children:i}),c&&e.jsx(A,{color:"cta",size:"sm",text:"복사됨!"})]})},i)})})})}):e.jsx(s,{background:"secondary-system01-1-rest",borderRadius:"lg",children:e.jsx(r,{padding:"xl",display:"flex",justify:"center",align:"center",minHeight:"200px",children:e.jsxs(r,{display:"flex",direction:"column",gap:"md",align:"center",children:[e.jsx(a,{name:"SearchIcon",size:"xxl"}),e.jsxs(n,{variant:"body-1",textAlign:"center",children:['"',o,'"에 해당하는 아이콘을 찾을 수 없습니다.']}),e.jsx(n,{variant:"caption-1",textAlign:"center",children:"다른 검색어를 시도해보세요."})]})})})]})}};var I,y,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'SearchIcon',
    size: 'md'
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,T,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
      <Frame display="flex" direction="column" gap="lg" padding="lg">\r
        <Text variant="heading-2" weight="medium">아이콘 크기</Text>\r
        <Frame display="flex" direction="row" gap="xl" justify="center" align="center">\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="xs" />\r
            <Text variant="caption-1">xs (12px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="sm" />\r
            <Text variant="caption-1">sm (16px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="md" />\r
            <Text variant="caption-1">md (20px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="lg" />\r
            <Text variant="caption-1">lg (24px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="xl" />\r
            <Text variant="caption-1">xl (28px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="xxl" />\r
            <Text variant="caption-1">xxl (32px)</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="SearchIcon" size="xxxl" />\r
            <Text variant="caption-1">xxxl (36px)</Text>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var F,v,b;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Surface background="secondary-system01-1-rest" borderRadius="md">\r
      <Frame display="flex" direction="column" gap="lg" padding="lg">\r
        <Text variant="heading-2" weight="medium">아이콘 색상</Text>\r
        <Text variant="body-2">아이콘은 현재 CSS에서 색상을 제어합니다. 다양한 상황에서의 아이콘을 확인해보세요.</Text>\r
        <Frame display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="lg">\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="HeartIcon" size="xl" />\r
            <Text variant="caption-1">Heart Icon</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="HeartIcon" size="xl" />\r
            <Text variant="caption-1">Heart Icon</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="HeartIcon" size="xl" />\r
            <Text variant="caption-1">Heart Icon</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="HeartIcon" size="xl" />\r
            <Text variant="caption-1">Heart Icon</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="WarningIcon" size="xl" />\r
            <Text variant="caption-1">Warning</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="InfoIcon" size="xl" />\r
            <Text variant="caption-1">Success</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="InfoIcon" size="xl" />\r
            <Text variant="caption-1">Error</Text>\r
          </Frame>\r
          <Frame display="flex" direction="column" gap="sm" align="center">\r
            <Icon name="InfoIcon" size="xl" />\r
            <Text variant="caption-1">Info</Text>\r
          </Frame>\r
        </Frame>\r
      </Frame>\r
    </Surface>
}`,...(b=(v=x.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var z,C,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'SearchIcon',
    size: 'lg'
  }
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,H,R;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    // 모든 아이콘 리스트 (자동 생성된 아이콘에서 동적으로 추출)
    const allIcons: IconName[] = useMemo(() => {
      return Object.keys(GeneratedIcons).filter(key => key !== 'GeneratedIconName') // 타입 정의 제외
      .sort() as IconName[]; // 알파벳 순으로 정렬
    }, []);

    // 검색 필터링
    const filteredIcons = useMemo(() => {
      if (!searchTerm) return allIcons;
      return allIcons.filter(iconName => iconName.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, allIcons]);
    const copyToClipboard = async (iconName: string) => {
      try {
        await navigator.clipboard.writeText(\`<Icon name="\${iconName}" />\`);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    };
    return <Frame display="flex" direction="column" gap="xl" padding="lg">\r
        \r
        {/* 헤더 섹션 */}\r
        <Surface background="secondary-system01-1-rest" borderRadius="lg">\r
          <Frame display="flex" direction="column" gap="xl" padding="xl">\r
            <Frame display="flex" direction="column" gap="sm">\r
              <Text variant="title-1" weight="bold">Icon Gallery</Text>\r
              <Text variant="body-2">\r
                총 {allIcons.length}개의 아이콘을 사용할 수 있습니다. 아이콘을 클릭하면 React 코드가 클립보드에 복사됩니다.\r
              </Text>\r
            </Frame>\r
\r
            {/* 검색 및 필터 */}\r
            <Frame display="flex" direction="column" gap="lg">\r
              <Field placeholder="아이콘 검색... (예: search, home, arrow)" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} leftIcon="SearchIcon" size="lg" variant="filled" />\r
            </Frame>\r
          </Frame>\r
        </Surface>\r
\r
        {/* 아이콘 그리드 */}\r
        {filteredIcons.length > 0 ? <Surface background="secondary-system01-1-rest" borderRadius="lg" borderWidth="thin" borderColor="secondary-system01-2-rest">\r
            <Frame display="flex" direction="column" padding="xl" gap="xl">\r
              <Frame display="flex" direction="row" gap="lg" wrap="wrap" justify="center">\r
                {filteredIcons.map(iconName => {
              const isCopied = copiedIcon === iconName;
              return <Surface key={iconName} background={isCopied ? "cta-system01-1-rest" : "secondary-system01-2-rest"} borderRadius="md" borderWidth="thin" borderColor={isCopied ? "cta-system01-1-rest" : "secondary-system01-3-rest"} style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }} onClick={() => copyToClipboard(iconName)}>\r
                      <Frame padding="md" display="flex" direction="column" gap="sm" align="center" minWidth="120px">\r
                        <Icon name={iconName} size="xl" />\r
                        <Text variant="caption-2" textAlign="center" noWrap style={{
                    color: isCopied ? 'var(--color-oncolor)' : 'inherit',
                    fontSize: '10px',
                    maxWidth: '100px'
                  }}>\r
                          {iconName}\r
                        </Text>\r
                                                 {isCopied && <Badge color="cta" size="sm" text="복사됨!" />}\r
                      </Frame>\r
                    </Surface>;
            })}\r
              </Frame>\r
            </Frame>\r
          </Surface> : <Surface background="secondary-system01-1-rest" borderRadius="lg">\r
            <Frame padding="xl" display="flex" justify="center" align="center" minHeight="200px">\r
              <Frame display="flex" direction="column" gap="md" align="center">\r
                <Icon name="SearchIcon" size="xxl" />\r
                <Text variant="body-1" textAlign="center">\r
                  "{searchTerm}"에 해당하는 아이콘을 찾을 수 없습니다.\r
                </Text>\r
                <Text variant="caption-1" textAlign="center">\r
                  다른 검색어를 시도해보세요.\r
                </Text>\r
              </Frame>\r
            </Frame>\r
          </Surface>}\r
      </Frame>;
  }
}`,...(R=(H=g.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const O=["Default","Sizes","Colors","Interactive","IconGallery"];export{x as Colors,d as Default,g as IconGallery,p as Interactive,m as Sizes,O as __namedExportsOrder,D as default};

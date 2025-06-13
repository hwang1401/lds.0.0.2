// 🔧 CSS 변수를 포함한 스타일 시트 가져오기 (npm 패키지 기반)
import 'lumir-shared/dist/css/foundation-tokens.css';   // 1️⃣ Foundation 토큰 정의
import 'lumir-shared/dist/styles.css';                  // 2️⃣ Primitives CSS
import 'lumir-system-01/dist/css/tokens.css';           // 3️⃣ System-01 CSS
import 'lumir-system-02/dist/css/tokens.css';           // 4️⃣ System-02 CSS

console.log('✅ Storybook CSS 로드 완료 - npm 패키지 기반');

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        disable: true,
      },
    },
    // 배경색 설정
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'subtle',
          value: '#F4F4F4',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    // 뷰포트 크기 설정
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1366px',
            height: '900px',
          },
        },
      },
    },
  },
  globalTypes: {
    system: {
      description: 'Design System Selection',
      defaultValue: 'system-01',
      toolbar: {
        title: 'System',
        icon: 'component',
        items: [
          { value: 'system-01', title: 'System 01 - Clean & Efficient (파란색)' },
          { value: 'system-02', title: 'System 02 - Modern & Friendly (초록색)' },
        ],
      },
    },
  },
};

export default preview; 
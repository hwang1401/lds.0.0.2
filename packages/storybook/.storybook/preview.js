import React from 'react';

// 🔧 실시간 개발을 위한 소스 파일 직접 참조
import '../../shared/dist/css/foundation-tokens.css';   // 1️⃣ Foundation 토큰 정의
import '../../shared/dist/styles.css';                  // 2️⃣ Primitives CSS
import '../../system-01/dist/css/tokens.css';           // 3️⃣ System-01 CSS
import '../../system-02/dist/css/tokens.css';           // 4️⃣ System-02 CSS

console.log('✅ Storybook CSS 로드 완료 - 소스 파일 직접 참조');

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
    theme: {
      description: 'Theme Selection',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: '🌞 Light Mode', left: '🌞' },
          { value: 'dark', title: '🌙 Dark Mode', left: '🌙' },
        ],
        dynamicTitle: true,
      },
    },
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
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      
      // HTML 문서에 data-theme 속성 적용 (Surface.module.css와 일치)
      React.useEffect(() => {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;
        
        // data-theme 속성 설정
        htmlElement.setAttribute('data-theme', theme);
        bodyElement.setAttribute('data-theme', theme);
        
        // 배경색도 테마에 맞게 설정
        if (theme === 'dark') {
          bodyElement.style.backgroundColor = 'var(--foundation-foundation-color-grey-dark-100, #000000)';
          bodyElement.style.color = 'var(--foundation-foundation-color-grey-dark-0, #FFFFFF)';
        } else {
          bodyElement.style.backgroundColor = 'var(--foundation-foundation-color-grey-light-100, #FFFFFF)';
          bodyElement.style.color = 'var(--foundation-foundation-color-grey-light-0, #000000)';
        }
      }, [theme]);
      
      return React.createElement(
        'div',
        { 'data-theme': theme },
        React.createElement(Story)
      );
    },
  ],
};

export default preview; 
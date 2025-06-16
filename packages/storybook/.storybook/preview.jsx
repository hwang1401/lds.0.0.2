// 🔧 CSS 변수를 포함한 스타일 시트 가져오기 (npm 패키지 기반)
import 'lumir-shared/dist/css/foundation-tokens.css';   // 1️⃣ Foundation 토큰 정의
import 'lumir-shared/dist/styles.css';                  // 2️⃣ Primitives CSS
import 'lumir-system-01/dist/css/tokens.css';           // 3️⃣ System-01 CSS
import 'lumir-system-02/dist/css/tokens.css';           // 4️⃣ System-02 CSS

console.log('✅ Storybook CSS 로드 완료 - npm 패키지 기반');

// 실제 디자인 시스템 컴포넌트를 사용한 시스템 선택기
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Button as System01Button } from 'lumir-system-01';
import { Button as System02Button } from 'lumir-system-02';
import { Text, Frame } from 'lumir-shared';

const SystemSelectorComponent = () => {
  const [selectedSystem, setSelectedSystem] = useState('system-01');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const systems = [
    { 
      value: 'system-01', 
      title: 'System 01', 
      subtitle: 'Clean & Efficient (파란색)',
      ButtonComponent: System01Button 
    },
    { 
      value: 'system-02', 
      title: 'System 02', 
      subtitle: 'Modern & Friendly (초록색)',
      ButtonComponent: System02Button 
    },
  ];

  const currentSystem = systems.find(s => s.value === selectedSystem) || systems[0];
  const ButtonComponent = currentSystem.ButtonComponent;

  const handleSystemSelect = (systemValue) => {
    setSelectedSystem(systemValue);
    setIsMenuOpen(false);
    
    // 스토리북 globals 업데이트
    if (window.__STORYBOOK_ADDONS_CHANNEL__) {
      window.__STORYBOOK_ADDONS_CHANNEL__.emit('updateGlobals', {
        globals: { system: systemValue }
      });
    }
    
    // 페이지 새로고침으로 변경사항 적용
    setTimeout(() => window.location.reload(), 100);
  };

  useEffect(() => {
    // 스토리북 globals에서 현재 시스템 읽기
    const urlParams = new URLSearchParams(window.location.search);
    const systemFromUrl = urlParams.get('globals');
    if (systemFromUrl) {
      try {
        const globals = JSON.parse(decodeURIComponent(systemFromUrl));
        if (globals.system) {
          setSelectedSystem(globals.system);
        }
      } catch (e) {
        // URL 파싱 실패 시 기본값 유지
      }
    }
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* 메인 버튼 */}
      <ButtonComponent
        variant="outlined"
        size="sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          minWidth: '200px',
          justifyContent: 'space-between',
          fontSize: '12px'
        }}
      >
        <Frame display="flex" direction="column" align="flex-start" gap="xxxs">
          <Text variant="label-1" style={{ fontSize: '12px', fontWeight: 500 }}>
            {currentSystem.title}
          </Text>
          <Text variant="caption-1" style={{ fontSize: '10px', opacity: 0.7 }}>
            {currentSystem.subtitle}
          </Text>
        </Frame>
        <span style={{ fontSize: '12px' }}>
          {isMenuOpen ? '▲' : '▼'}
        </span>
      </ButtonComponent>

      {/* 드롭다운 메뉴 */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            marginTop: '4px',
            overflow: 'hidden'
          }}
        >
          {systems.map((system) => {
            const SystemButtonComponent = system.ButtonComponent;
            const isSelected = system.value === selectedSystem;
            
            return (
              <div
                key={system.value}
                style={{
                  padding: '8px',
                  borderBottom: system.value !== systems[systems.length - 1].value ? '1px solid #f0f0f0' : 'none'
                }}
              >
                <SystemButtonComponent
                  variant={isSelected ? "filled" : "transparent"}
                  size="sm"
                  onClick={() => handleSystemSelect(system.value)}
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    fontSize: '12px'
                  }}
                >
                  <Frame display="flex" direction="column" align="flex-start" gap="xxxs">
                    <Text variant="label-1" style={{ fontSize: '12px', fontWeight: 500 }}>
                      {system.title}
                    </Text>
                    <Text variant="caption-1" style={{ fontSize: '10px', opacity: 0.7 }}>
                      {system.subtitle}
                    </Text>
                  </Frame>
                </SystemButtonComponent>
              </div>
            );
          })}
        </div>
      )}

      {/* 클릭 외부 영역 감지 */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

// 전역 함수로 시스템 선택기 렌더링
window.renderSystemSelector = (container) => {
  const root = createRoot(container);
  root.render(<SystemSelectorComponent />);
};

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
    },
  },
};

export default preview; 
import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * 다크/라이트 모드 테마 관리 훅
 * 
 * @example
 * ```tsx
 * function App() {
 *   const { theme, setTheme, toggleTheme } = useTheme();
 *   
 *   return (
 *     <div>
 *       <p>현재 테마: {theme}</p>
 *       <button onClick={toggleTheme}>테마 전환</button>
 *       <button onClick={() => setTheme('dark')}>다크 모드</button>
 *       <button onClick={() => setTheme('light')}>라이트 모드</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTheme(): UseThemeReturn {
  // 초기 테마 설정 (localStorage에서 가져오거나 시스템 설정 사용)
  const [theme, setThemeState] = useState<Theme>(() => {
    // 서버 사이드 렌더링 대응
    if (typeof window === 'undefined') {
      return 'light';
    }

    // localStorage에서 저장된 테마 확인
    const savedTheme = localStorage.getItem('lumir-theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }

    // 시스템 다크 모드 설정 확인
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  // 테마 변경 함수
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('lumir-theme', newTheme);
    
    // HTML root 요소에 data-theme 속성 설정
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // 컴포넌트 마운트 시 HTML에 테마 속성 설정
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 시스템 다크 모드 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // localStorage에 저장된 테마가 없을 때만 시스템 설정 따라감
      const savedTheme = localStorage.getItem('lumir-theme');
      if (!savedTheme) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
} 
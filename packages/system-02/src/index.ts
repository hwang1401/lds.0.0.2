// System-02: Modern & Friendly Design System
// 모든 컴포넌트 export

// 🎨 프리미티브 CSS 스타일 import (컴파운드 컴포넌트에서 프리미티브 사용 시 필요)
import '../../shared/dist/styles.css';

// Compounds 컴포넌트들
export * from './components/compounds';

// Patterns 컴포넌트들 (향후 추가 예정)
// export * from './components/patterns';

// 타입 정의들
export type { ComponentProps } from 'react'; 
/**
 * 반응형 브레이크포인트 타입
 * 
 * - mobile: ~479px
 * - tablet: 480px~639px  
 * - desktop: 640px~1023px
 * - desktopL: 1024px~1365px
 * - desktopXL: 1366px+
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'desktopL' | 'desktopXL';

/**
 * 각 브레이크포인트별 값을 설정할 수 있는 반응형 값 인터페이스
 */
export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  desktopL?: T;
  desktopXL?: T;
}

/**
 * 단일 값 또는 반응형 값을 받을 수 있는 타입
 */
export type ResponsiveOrSingle<T> = T | ResponsiveValue<T>;

/**
 * 반응형 클래스 생성을 위한 유틸리티 함수
 * 
 * @param value 반응형 값 또는 단일 값
 * @param prefix CSS 클래스 접두사
 * @param styles CSS 모듈 스타일 객체
 * @returns 생성된 CSS 클래스명 배열
 */
export const generateResponsiveClasses = (
  value: ResponsiveOrSingle<any>,
  prefix: string,
  styles: Record<string, string>
): string[] => {
  if (!value) return [];
  
  // 단일 값인 경우
  if (typeof value === 'string' || typeof value === 'number') {
    return [styles[`${prefix}-${value}`]].filter(Boolean);
  }
  
  // 반응형 값인 경우
  const classes: string[] = [];
  const responsiveValue = value as ResponsiveValue<any>;
  
  if (responsiveValue.mobile) {
    classes.push(styles[`${prefix}-${responsiveValue.mobile}--mobile`]);
  }
  if (responsiveValue.tablet) {
    classes.push(styles[`${prefix}-${responsiveValue.tablet}--tablet`]);
  }
  if (responsiveValue.desktop) {
    classes.push(styles[`${prefix}-${responsiveValue.desktop}--desktop`]);
  }
  if (responsiveValue.desktopL) {
    classes.push(styles[`${prefix}-${responsiveValue.desktopL}--desktopL`]);
  }
  if (responsiveValue.desktopXL) {
    classes.push(styles[`${prefix}-${responsiveValue.desktopXL}--desktopXL`]);
  }
  
  return classes.filter(Boolean);
};

/**
 * 반응형 스타일을 CSS 변수로 변환하는 유틸리티 함수
 * 
 * @param value 반응형 값 또는 단일 값
 * @param cssProperty CSS 속성명
 * @returns CSS 변수가 포함된 스타일 객체
 */
export const generateResponsiveStyles = (
  value: ResponsiveOrSingle<string | number> | undefined,
  cssProperty: string
): Record<string, string> => {
  if (!value) return {};
  
  // 단일 값인 경우
  if (typeof value === 'string' || typeof value === 'number') {
    return { [cssProperty]: typeof value === 'number' ? `${value}px` : value };
  }
  
  // 반응형 객체인 경우 - CSS 변수로 처리
  const styles: Record<string, string> = {};
  if (value.mobile) {
    styles[`--${cssProperty}-mobile`] = typeof value.mobile === 'number' ? `${value.mobile}px` : value.mobile;
  }
  if (value.tablet) {
    styles[`--${cssProperty}-tablet`] = typeof value.tablet === 'number' ? `${value.tablet}px` : value.tablet;
  }
  if (value.desktop) {
    styles[`--${cssProperty}-desktop`] = typeof value.desktop === 'number' ? `${value.desktop}px` : value.desktop;
  }
  if (value.desktopL) {
    styles[`--${cssProperty}-desktopL`] = typeof value.desktopL === 'number' ? `${value.desktopL}px` : value.desktopL;
  }
  if (value.desktopXL) {
    styles[`--${cssProperty}-desktopXL`] = typeof value.desktopXL === 'number' ? `${value.desktopXL}px` : value.desktopXL;
  }
  
  return styles;
}; 
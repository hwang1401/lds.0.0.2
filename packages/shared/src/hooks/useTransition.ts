import { useState, useEffect, useRef } from 'react';

export type TransitionDuration = 'instant' | 'fast' | 'normal' | 'slow' | 'slower';
export type TransitionEasing = 'default' | 'enter' | 'exit' | 'emphasis';

interface UseTransitionOptions {
  /**
   * 지속시간 타입 - 시멘틱 토큰 활용
   */
  duration?: TransitionDuration;
  
  /**
   * 이징 타입 - 시멘틱 토큰 활용
   */
  easing?: TransitionEasing;
  
  /**
   * 트랜지션 완료 콜백
   */
  onTransitionEnd?: () => void;
}

/**
 * 애니메이션 트랜지션을 관리하는 커스텀 훅
 * 시멘틱 토큰을 활용하여 일관된 애니메이션 경험을 제공합니다.
 */
export const useTransition = (
  show: boolean,
  options: UseTransitionOptions = {}
) => {
  const {
    duration = 'normal',
    easing = 'default',
    onTransitionEnd,
  } = options;

  const [isVisible, setIsVisible] = useState<boolean>(show);
  const [shouldRender, setShouldRender] = useState<boolean>(show);
  const timeoutRef = useRef<number | undefined>(undefined);

  // 시멘틱 토큰 매핑
  const getDurationValue = (): string => {
    const durationMap = {
      instant: 'var(--semantic-animation-duration-global-instant)',
      fast: 'var(--semantic-animation-duration-global-fast)',
      normal: 'var(--semantic-animation-duration-global-normal)',
      slow: 'var(--semantic-animation-duration-global-slow)',
      slower: 'var(--semantic-animation-duration-global-slower)',
    };
    return durationMap[duration];
  };

  const getEasingValue = (): string => {
    const easingMap = {
      default: 'var(--semantic-animation-easing-global-default)',
      enter: 'var(--semantic-animation-easing-global-enter)',
      exit: 'var(--semantic-animation-easing-global-exit)',
      emphasis: 'var(--semantic-animation-easing-global-emphasis)',
    };
    return easingMap[easing];
  };

  // show prop 변경 감지
  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    if (show) {
      setShouldRender(true);
      // 다음 프레임에서 애니메이션 시작
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
      // 애니메이션 완료 후 언마운트
      const durationMs = parseInt(getDurationValue().replace(/[^0-9]/g, ''));
      timeoutRef.current = window.setTimeout(() => {
        setShouldRender(false);
        onTransitionEnd?.();
      }, durationMs);
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [show, duration, onTransitionEnd]);

  // 기본 트랜지션 스타일
  const getTransitionStyles = (): React.CSSProperties => {
    return {
      transition: `all ${getDurationValue()} ${getEasingValue()}`,
      willChange: 'transform, opacity',
    };
  };

  return {
    isVisible,
    shouldRender,
    transitionStyles: getTransitionStyles(),
    durationValue: getDurationValue(),
    easingValue: getEasingValue(),
  };
}; 
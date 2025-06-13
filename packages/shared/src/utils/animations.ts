import { TransitionDuration, TransitionEasing } from '../hooks/useTransition';

export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce';
export type SlideDirection = 'up' | 'down' | 'left' | 'right';

/**
 * 애니메이션 타입별 스타일을 생성하는 유틸리티 함수들
 */
export const AnimationUtils = {
  /**
   * 기본 트랜지션 스타일 생성
   */
  getBaseTransition: (duration: TransitionDuration, easing: TransitionEasing): React.CSSProperties => {
    const durationMap = {
      instant: 'var(--semantic-animation-duration-global-instant)',
      fast: 'var(--semantic-animation-duration-global-fast)',
      normal: 'var(--semantic-animation-duration-global-normal)',
      slow: 'var(--semantic-animation-duration-global-slow)',
      slower: 'var(--semantic-animation-duration-global-slower)',
    };

    const easingMap = {
      default: 'var(--semantic-animation-easing-global-default)',
      enter: 'var(--semantic-animation-easing-global-enter)',
      exit: 'var(--semantic-animation-easing-global-exit)',
      emphasis: 'var(--semantic-animation-easing-global-emphasis)',
    };

    return {
      transition: `all ${durationMap[duration]} ${easingMap[easing]}`,
      willChange: 'transform, opacity',
    };
  },

  /**
   * 페이드 애니메이션 스타일
   */
  getFadeStyles: (
    isVisible: boolean,
    duration: TransitionDuration = 'normal',
    easing: TransitionEasing = 'default'
  ): React.CSSProperties => ({
    ...AnimationUtils.getBaseTransition(duration, easing),
    opacity: isVisible ? 1 : 0,
  }),

  /**
   * 슬라이드 애니메이션 스타일
   */
  getSlideStyles: (
    isVisible: boolean,
    direction: SlideDirection = 'up',
    duration: TransitionDuration = 'normal',
    easing: TransitionEasing = 'default'
  ): React.CSSProperties => {
    const transforms = {
      up: 'translateY(20px)',
      down: 'translateY(-20px)',
      left: 'translateX(20px)',
      right: 'translateX(-20px)',
    };

    return {
      ...AnimationUtils.getBaseTransition(duration, easing),
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0) translateY(0)' : transforms[direction],
    };
  },

  /**
   * 스케일 애니메이션 스타일
   */
  getScaleStyles: (
    isVisible: boolean,
    duration: TransitionDuration = 'normal',
    easing: TransitionEasing = 'default'
  ): React.CSSProperties => ({
    ...AnimationUtils.getBaseTransition(duration, easing),
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
  }),

  /**
   * 바운스 애니메이션 스타일
   */
  getBounceStyles: (
    isVisible: boolean,
    duration: TransitionDuration = 'normal',
    easing: TransitionEasing = 'emphasis'
  ): React.CSSProperties => ({
    ...AnimationUtils.getBaseTransition(duration, easing),
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.3)',
  }),

  /**
   * 애니메이션 타입에 따른 스타일 반환
   */
  getAnimationStyles: (
    type: AnimationType,
    isVisible: boolean,
    options: {
      duration?: TransitionDuration;
      easing?: TransitionEasing;
      direction?: SlideDirection;
    } = {}
  ): React.CSSProperties => {
    const { duration = 'normal', easing = 'default', direction = 'up' } = options;

    switch (type) {
      case 'fade':
        return AnimationUtils.getFadeStyles(isVisible, duration, easing);
      case 'slide':
        return AnimationUtils.getSlideStyles(isVisible, direction, duration, easing);
      case 'scale':
        return AnimationUtils.getScaleStyles(isVisible, duration, easing);
      case 'bounce':
        return AnimationUtils.getBounceStyles(isVisible, duration, easing);
      default:
        return AnimationUtils.getFadeStyles(isVisible, duration, easing);
    }
  },
};

/**
 * 컴포넌트별 애니메이션 프리셋
 */
export const AnimationPresets = {
  // Modal 애니메이션
  modal: {
    enter: {
      duration: 'normal' as TransitionDuration,
      easing: 'enter' as TransitionEasing,
      type: 'scale' as AnimationType,
    },
    exit: {
      duration: 'fast' as TransitionDuration,
      easing: 'exit' as TransitionEasing,
      type: 'scale' as AnimationType,
    },
  },

  // Dropdown 애니메이션
  dropdown: {
    enter: {
      duration: 'fast' as TransitionDuration,
      easing: 'enter' as TransitionEasing,
      type: 'slide' as AnimationType,
      direction: 'up' as SlideDirection,
    },
    exit: {
      duration: 'fast' as TransitionDuration,
      easing: 'exit' as TransitionEasing,
      type: 'slide' as AnimationType,
      direction: 'up' as SlideDirection,
    },
  },

  // Tooltip 애니메이션
  tooltip: {
    enter: {
      duration: 'fast' as TransitionDuration,
      easing: 'enter' as TransitionEasing,
      type: 'fade' as AnimationType,
    },
    exit: {
      duration: 'fast' as TransitionDuration,
      easing: 'exit' as TransitionEasing,
      type: 'fade' as AnimationType,
    },
  },

  // Toast 애니메이션
  toast: {
    enter: {
      duration: 'normal' as TransitionDuration,
      easing: 'emphasis' as TransitionEasing,
      type: 'slide' as AnimationType,
      direction: 'right' as SlideDirection,
    },
    exit: {
      duration: 'fast' as TransitionDuration,
      easing: 'exit' as TransitionEasing,
      type: 'slide' as AnimationType,
      direction: 'right' as SlideDirection,
    },
  },
}; 
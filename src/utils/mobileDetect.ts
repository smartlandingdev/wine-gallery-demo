/**
 * Detect if device is mobile
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

/**
 * Get animation props based on device
 * Returns empty object on mobile to disable Framer Motion animations
 */
export const getAnimationProps = (props: any) => {
  if (isMobile()) {
    return {};
  }
  return props;
};

/**
 * Conditional animation for Framer Motion
 * Use this to wrap animation props
 */
export const conditionalAnimation = {
  initial: isMobile() ? false : undefined,
  animate: isMobile() ? false : undefined,
  exit: isMobile() ? false : undefined,
  whileHover: isMobile() ? undefined : undefined,
  whileTap: isMobile() ? undefined : undefined,
};

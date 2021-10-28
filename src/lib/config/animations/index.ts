const easing = [0.4, 0.1, -0.3, 0.95];

export const fadeInUp = {
  initial: {
    y: 250,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: easing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 2,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.6
    }
  }
};

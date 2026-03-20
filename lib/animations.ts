export const standardTransition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const };

export const fadeUp = {
  hidden:  { y: 24, opacity: 0 },
  visible: { y: 0,  opacity: 1 }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn = {
  hidden:  { scale: 0.95, opacity: 0 },
  visible: { scale: 1,    opacity: 1 }
};

export const slideLeft = {
  hidden:  { x: 40,  opacity: 0 },
  visible: { x: 0,   opacity: 1 }
};

export const slideRight = {
  hidden:  { x: -40, opacity: 0 },
  visible: { x: 0,   opacity: 1 }
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } }
};

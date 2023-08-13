export const getTransition = (
  delay: number = 0,
  duration: number = 1,
  ease: string = "easeInOut"
) => {
  return { ease, duration, delay };
};

export const shutterDown = () => {
  return {
    from: { y: 200 },
    to: { y: 0 },
  };
};

export const shutterUp = () => {
  return {
    from: { y: 200, opacity: 0 },
    to: { y: 0, opacity: 1 },
  };
};

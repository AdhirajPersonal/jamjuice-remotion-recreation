import { interpolate, spring, Easing } from 'remotion';

export const smoothEaseOut = Easing.bezier(0.16, 1, 0.3, 1);
export const smoothEaseInOut = Easing.bezier(0.65, 0, 0.35, 1);
export const easeOutCubic = Easing.out(Easing.cubic);
export const easeInOutCubic = Easing.inOut(Easing.cubic);
export const easeOutExpo = Easing.out(Easing.exp);

export const getRelativeFrame = (frame: number, startFrame: number): number => {
  return Math.max(0, frame - startFrame);
};

export const fadeSlideUp = (
  frame: number,
  start: number,
  duration: number = 16,
  distance: number = 24
) => {
  const progress = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const opacity = progress;
  const translateY = (1 - progress) * distance;

  return { opacity, transform: `translateY(${translateY}px)` };
};

export const scaleIn = (
  frame: number,
  start: number,
  duration: number = 18,
  fromScale: number = 0.92
) => {
  const opacity = interpolate(frame, [start, start + duration * 0.6], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [start, start + duration], [fromScale, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  return { opacity, transform: `scale(${scale})` };
};

export const getFloatingOffset = (
  frame: number,
  speed: number = 0.04,
  amplitudeX: number = 6,
  amplitudeY: number = 8,
  phaseOffset: number = 0
) => {
  const t = frame * speed + phaseOffset;
  const x = Math.sin(t) * amplitudeX;
  const y = Math.cos(t * 0.85) * amplitudeY;
  const rotate = Math.sin(t * 0.4) * 1.8;
  return { x, y, rotate };
};

export const getSpring = (
  fps: number,
  frame: number,
  delay: number = 0,
  damping: number = 12,
  stiffness: number = 140
) => {
  return spring({
    fps,
    frame: Math.max(0, frame - delay),
    config: {
      damping,
      stiffness,
      mass: 0.7,
    },
  });
};

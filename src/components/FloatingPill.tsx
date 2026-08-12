import React from 'react';
import { interpolate } from 'remotion';
import { COLORS } from '../constants/theme';
import { smoothEaseOut, getFloatingOffset } from '../animations/helpers';

export interface FloatingPillProps {
  text: string;
  frame: number;
  startFrame: number;
  entryDirection?: 'left' | 'right' | 'top' | 'bottom';
  x: number;
  y: number;
  variant?: 'burgundy' | 'pink' | 'coral' | 'cream' | 'dark';
  icon?: string;
  speed?: number;
  amplitude?: number;
  phase?: number;
  fontSize?: number;
}

export const FloatingPill: React.FC<FloatingPillProps> = ({
  text,
  frame,
  startFrame,
  entryDirection = 'bottom',
  x,
  y,
  variant = 'pink',
  icon,
  speed = 0.04,
  amplitude = 6,
  phase = 0,
  fontSize = 13,
}) => {
  const relFrame = Math.max(0, frame - startFrame);
  const entryProgress = interpolate(relFrame, [0, 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  let entryX = 0;
  let entryY = 0;
  if (entryDirection === 'left') entryX = (1 - entryProgress) * -100;
  if (entryDirection === 'right') entryX = (1 - entryProgress) * 100;
  if (entryDirection === 'top') entryY = (1 - entryProgress) * -70;
  if (entryDirection === 'bottom') entryY = (1 - entryProgress) * 70;

  const float = getFloatingOffset(relFrame, speed, amplitude, amplitude * 1.2, phase);

  const stylesMap = {
    burgundy: {
      bg: COLORS.deepBurgundy,
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.2)',
      shadow: '0 12px 35px rgba(84, 13, 23, 0.45)',
    },
    pink: {
      bg: COLORS.lightSoftPink,
      color: COLORS.deepBurgundy,
      border: `1px solid ${COLORS.accentPink}44`,
      shadow: '0 8px 24px rgba(232, 91, 103, 0.18)',
    },
    coral: {
      bg: COLORS.lightCoral,
      color: COLORS.darkText,
      border: '1px solid rgba(244, 184, 184, 0.6)',
      shadow: '0 8px 20px rgba(244, 184, 184, 0.35)',
    },
    cream: {
      bg: '#FFFFFF',
      color: COLORS.darkText,
      border: '1px solid rgba(0, 0, 0, 0.08)',
      shadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
    },
    dark: {
      bg: COLORS.darkCardBg,
      color: COLORS.darkTextPrimary,
      border: `1px solid ${COLORS.darkCardBorder}`,
      shadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
    },
  };

  const currentStyle = stylesMap[variant];

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) translate(${entryX + float.x}px, ${entryY + float.y}px) rotate(${float.rotate}deg)`,
        opacity: entryProgress,
        backgroundColor: currentStyle.bg,
        color: currentStyle.color,
        border: currentStyle.border,
        boxShadow: currentStyle.shadow,
        padding: '9px 20px',
        borderRadius: '30px',
        fontSize,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        fontFamily: 'Inter, system-ui, sans-serif',
        zIndex: variant === 'burgundy' ? 10 : 5,
      }}
    >
      {icon && <span style={{ fontSize: fontSize * 1.1 }}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

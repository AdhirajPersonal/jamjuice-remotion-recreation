import React from 'react';
import { COLORS } from '../constants/theme';

interface GlassCardProps {
  children: React.ReactNode;
  mode?: 'light' | 'dark';
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  borderRadius?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  translateZ?: number;
  scale?: number;
  opacity?: number;
  glow?: boolean;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  mode = 'dark',
  width = 'auto',
  height = 'auto',
  padding = '20px',
  borderRadius = 16,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  translateZ = 0,
  scale = 1,
  opacity = 1,
  glow = false,
  style = {},
}) => {
  const isDark = mode === 'dark';

  const background = isDark
    ? 'rgba(18, 10, 14, 0.88)'
    : 'rgba(255, 255, 255, 0.92)';

  const border = isDark
    ? '1px solid rgba(232, 91, 103, 0.28)'
    : '1px solid rgba(232, 91, 103, 0.18)';

  const boxShadow = glow
    ? isDark
      ? `0 20px 50px rgba(0, 0, 0, 0.75), 0 0 35px ${COLORS.darkGlow}`
      : '0 20px 50px rgba(84, 13, 23, 0.14), 0 0 30px rgba(232, 91, 103, 0.18)'
    : isDark
    ? '0 16px 40px rgba(0, 0, 0, 0.65)'
    : '0 16px 40px rgba(84, 13, 23, 0.09)';

  return (
    <div
      style={{
        perspective: 1200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width,
          height,
          padding,
          borderRadius,
          background,
          border,
          boxShadow,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          opacity,
          transformStyle: 'preserve-3d',
          transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px)`,
          fontFamily: 'Inter, system-ui, sans-serif',
          color: isDark ? COLORS.darkTextPrimary : COLORS.darkText,
          boxSizing: 'border-box',
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../constants/theme';

interface BackgroundProps {
  mode?: 'light' | 'dark' | 'orange' | 'burgundy';
  opacity?: number;
}

export const Background: React.FC<BackgroundProps> = ({ mode = 'light', opacity = 1 }) => {
  const frame = useCurrentFrame();

  const blob1X = interpolate(Math.sin(frame * 0.02), [-1, 1], [15, 35]);
  const blob1Y = interpolate(Math.cos(frame * 0.015), [-1, 1], [20, 45]);

  if (mode === 'dark') {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 85% 75% at 85% 15%, rgba(140, 35, 58, 0.60) 0%, rgba(95, 20, 38, 0.35) 30%, rgba(42, 8, 18, 0.20) 55%, transparent 80%),
            radial-gradient(ellipse 85% 75% at 15% 55%, rgba(120, 28, 48, 0.50) 0%, rgba(80, 16, 32, 0.28) 32%, rgba(38, 6, 14, 0.18) 55%, transparent 80%),
            radial-gradient(ellipse 90% 70% at 50% 10%, rgba(100, 22, 42, 0.40) 0%, rgba(50, 10, 20, 0.22) 40%, transparent 75%),
            #050506
          `,
          opacity,
          overflow: 'hidden',
          zIndex: 0,
        }}
      />
    );
  }

  if (mode === 'burgundy') {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: COLORS.darkBurgundyBg,
          opacity,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${blob1Y}%`,
            left: `${blob1X}%`,
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: COLORS.deepBurgundy,
            filter: 'blur(80px)',
            opacity: 0.75,
          }}
        />
      </div>
    );
  }

  if (mode === 'orange') {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: COLORS.orangeBgGrad,
          opacity,
          overflow: 'hidden',
          zIndex: 0,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 10% 10%, #FCEAEC 0%, transparent 45%),
          radial-gradient(circle at 85% 15%, #F8D8DC 0%, transparent 50%),
          radial-gradient(circle at 65% 85%, #F3B8BE 0%, transparent 55%),
          radial-gradient(circle at 15% 75%, #FCEAEC 0%, transparent 40%),
          #FFF9F8
        `,
        opacity,
        overflow: 'hidden',
        zIndex: 0,
      }}
    />
  );
};

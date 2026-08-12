import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { smoothEaseOut } from '../animations/helpers';

export const Scene16_Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const scale = interpolate(progress, [0, 1], [0.88, 1]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Background mode="light" />

      <Logo
        size="large"
        opacity={progress}
        scale={scale}
        showTagline={false}
      />
    </div>
  );
};

import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { smoothEaseOut } from '../animations/helpers';

export const Scene05_DarkTransition: React.FC = () => {
  const frame = useCurrentFrame();

  const phrase1Words = ['who', 'want', 'to', 'book', 'talent'];
  const phrase2Words = ['without', 'the', 'headache'];

  const shiftProgress = interpolate(frame, [44, 68], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const phrase1ShiftX = interpolate(shiftProgress, [0, 1], [0, -750]);
  const phrase1Opacity = interpolate(shiftProgress, [0, 0.7], [1, 0]);

  const phrase2SlideX = interpolate(shiftProgress, [0, 1], [650, 0]);
  const phrase2Opacity = interpolate(shiftProgress, [0, 0.7], [0, 1]);

  const exitProgress = interpolate(frame, [85, 105], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.35]);
  const exitOpacity = interpolate(exitProgress, [0, 0.7], [1, 0]);
  const exitBlur = interpolate(exitProgress, [0, 1], [0, 12]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        backgroundColor: '#050506',
      }}
    >
      <Background mode="dark" />

      {frame < 72 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: phrase1Opacity,
            transform: `translateX(${phrase1ShiftX}px)`,
          }}
        >
          {phrase1Words.map((word, i) => {
            const wordStart = i * 2.5;
            const wordOpacity = interpolate(frame, [wordStart, wordStart + 5], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <span
                key={i}
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: '#FFFFFF',
                  display: 'inline-block',
                  letterSpacing: '-0.01em',
                  opacity: wordOpacity,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}

      {frame >= 44 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: phrase2Opacity * exitOpacity,
            transform: `translateX(${phrase2SlideX}px) scale(${exitScale})`,
            filter: `blur(${exitBlur}px)`,
          }}
        >
          {phrase2Words.map((word, i) => {
            const isHeadache = word === 'headache';

            return (
              <span
                key={i}
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: isHeadache ? '#FA5B78' : '#FFFFFF',
                  display: 'inline-block',
                  letterSpacing: '-0.01em',
                  textShadow: isHeadache ? '0 0 24px rgba(250, 91, 120, 0.65)' : 'none',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

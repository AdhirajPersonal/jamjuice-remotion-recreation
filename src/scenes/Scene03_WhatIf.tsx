import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { smoothEaseOut } from '../animations/helpers';

export const Scene03_WhatIf: React.FC = () => {
  const frame = useCurrentFrame();

  const phrase1Words = ['What', 'if', 'one', 'platform'];
  const phrase2Words = ['could', 'manage', 'it', 'all'];

  const phrase2UpProgress = interpolate(frame, [66, 78], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const phrase2UpY = interpolate(phrase2UpProgress, [0, 1], [0, -60]);
  const phrase2UpOpacity = interpolate(phrase2UpProgress, [0, 0.7], [1, 0]);

  const instantlyProgress = interpolate(frame, [78, 92], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const instantlyY = interpolate(instantlyProgress, [0, 1], [50, 0]);
  const instantlyOpacity = interpolate(instantlyProgress, [0, 0.8], [0, 1]);

  const instantlyExitProgress = interpolate(frame, [114, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const instantlyExitScale = interpolate(instantlyExitProgress, [0, 1], [1, 0.72]);
  const instantlyExitOpacity = interpolate(instantlyExitProgress, [0, 0.7], [1, 0]);
  const instantlyExitBlur = interpolate(instantlyExitProgress, [0, 1], [0, 10]);

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
        backgroundColor: '#FFF9F8',
      }}
    >
      <Background mode="light" />

      {frame < 60 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
          }}
        >
          {phrase1Words.map((word, i) => {
            const entryStart = i * 2.2;
            const entryProgress = interpolate(frame, [entryStart, entryStart + 8], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: smoothEaseOut,
            });

            const entryScale = interpolate(entryProgress, [0, 1], [1.6, 1]);
            const entryOpacity = interpolate(entryProgress, [0, 0.5], [0, 1]);
            const entryBlur = interpolate(entryProgress, [0, 1], [6, 0]);

            const exitStart = 32 + i * 2.2;
            const exitProgress = interpolate(frame, [exitStart, exitStart + 10], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: smoothEaseOut,
            });

            const exitShiftX = interpolate(exitProgress, [0, 1], [0, -70]);
            const exitScale = interpolate(exitProgress, [0, 1], [1, 0.75]);
            const exitOpacity = interpolate(exitProgress, [0, 0.8], [1, 0]);

            const finalOpacity = entryOpacity * exitOpacity;
            const finalScale = entryScale * exitScale;

            return (
              <span
                key={i}
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: '#1A1819',
                  display: 'inline-block',
                  letterSpacing: '-0.01em',
                  opacity: finalOpacity,
                  transform: `translateX(${exitShiftX}px) scale(${finalScale})`,
                  filter: `blur(${entryBlur}px)`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}

      {frame >= 40 && frame < 80 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            opacity: phrase2UpOpacity,
            transform: `translateY(${phrase2UpY}px)`,
          }}
        >
          {phrase2Words.map((word, i) => {
            const wordStart = 40 + i * 2;
            const wordProgress = interpolate(frame, [wordStart, wordStart + 7], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: smoothEaseOut,
            });

            const wordSlideX = interpolate(wordProgress, [0, 1], [50, 0]);
            const wordOpacity = interpolate(wordProgress, [0, 0.8], [0, 1]);

            return (
              <span
                key={i}
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: '#1A1819',
                  display: 'inline-block',
                  letterSpacing: '-0.01em',
                  opacity: wordOpacity,
                  transform: `translateX(${wordSlideX}px)`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}

      {frame >= 78 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: instantlyOpacity * instantlyExitOpacity,
            transform: `translateY(${instantlyY}px) scale(${instantlyExitScale})`,
            filter: `blur(${instantlyExitBlur}px)`,
          }}
        >
          <span
            style={{
              fontSize: 82,
              fontWeight: 500,
              color: '#D84D69',
              letterSpacing: '-0.02em',
              textShadow: '0 0 32px rgba(216, 77, 105, 0.3)',
            }}
          >
            instantly?
          </span>
        </div>
      )}
    </div>
  );
};

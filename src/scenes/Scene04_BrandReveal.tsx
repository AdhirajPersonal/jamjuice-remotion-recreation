import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { smoothEaseOut } from '../animations/helpers';

export const Scene04_BrandReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const jOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const jScale = interpolate(frame, [0, 10], [0.6, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const aOpacity = interpolate(frame, [5, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const mOpacity = interpolate(frame, [8, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const uOpacity = interpolate(frame, [13, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const iOpacity = interpolate(frame, [16, 23], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cOpacity = interpolate(frame, [19, 26], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const eOpacity = interpolate(frame, [22, 29], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const line1Words = ['the', "world's", 'first', 'entertainment', 'operating'];
  const line2Words = ['system', 'built', 'for', 'hospitality', 'pros'];

  const line1ShiftY = interpolate(frame, [60, 80], [0, -6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const exitProgress = interpolate(frame, [98, 116], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const logoExitScale = interpolate(exitProgress, [0, 1], [1, 1.85]);
  const logoExitOpacity = interpolate(exitProgress, [0, 0.7], [1, 0]);
  const logoExitBlur = interpolate(exitProgress, [0, 1], [0, 14]);

  const taglineExitOpacity = interpolate(exitProgress, [0, 0.6], [1, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        backgroundColor: '#FFF9F8',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@800&display=swap');
      `}</style>

      <Background mode="light" />

      <div
        style={{
          position: 'absolute',
          top: '36%',
          transform: `translateY(-50%) scale(${logoExitScale})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          opacity: logoExitOpacity,
          filter: `blur(${logoExitBlur}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              opacity: jOpacity,
              transform: `scale(${jScale})`,
              marginRight: 6,
            }}
          >
            <svg width="42" height="108" viewBox="0 0 42 108" fill="none">
              <path
                d="M 28 0 L 28 82 C 28 96 20 106 10 102 C 4 100 0 94 4 86 L 12 89 C 14 91 18 88 18 82 L 18 0 Z"
                fill="#FA5B78"
              />
              <path
                d="M 28 0 L 40 0 C 42 0 44 2 44 4 L 44 80 C 44 98 30 108 12 106 C 2 104 -4 92 2 82 L 12 86 C 14 89 22 90 28 88 C 36 87 36 80 36 74 L 36 0 Z"
                fill="#FA5B78"
              />
            </svg>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 0,
              fontFamily: "'Bebas Neue', 'Syne', sans-serif",
              color: '#FA5B78',
              letterSpacing: '0.02em',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 58,
                lineHeight: 0.8,
              }}
            >
              <span style={{ opacity: aOpacity, position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                A
                <svg
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <line x1="3" y1="6" x2="3" y2="16" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="6.5" y1="2" x2="6.5" y2="20" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="10" y1="6" x2="10" y2="16" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span style={{ opacity: mOpacity, marginLeft: 3 }}>M</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 50,
                lineHeight: 0.8,
                letterSpacing: '0.04em',
                fontStyle: 'italic',
                marginTop: -4,
              }}
            >
              <span style={{ opacity: uOpacity }}>U</span>
              <span style={{ opacity: iOpacity }}>I</span>
              <span style={{ opacity: cOpacity }}>C</span>
              <span style={{ opacity: eOpacity }}>E</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          zIndex: 10,
          fontFamily: 'Inter, system-ui, sans-serif',
          opacity: taglineExitOpacity,
        }}
      >
        {frame >= 32 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transform: `translateY(${line1ShiftY}px)`,
            }}
          >
            {line1Words.map((word, i) => {
              const wordStart = 32 + i * 3.2;
              const wordProgress = interpolate(frame, [wordStart, wordStart + 8], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: smoothEaseOut,
              });

              const wordY = interpolate(wordProgress, [0, 1], [16, 0]);
              const wordOpacity = interpolate(wordProgress, [0, 0.8], [0, 1]);

              return (
                <span
                  key={i}
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#1A1819',
                    display: 'inline-block',
                    letterSpacing: '-0.01em',
                    opacity: wordOpacity,
                    transform: `translateY(${wordY}px)`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        )}

        {frame >= 60 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {line2Words.map((word, i) => {
              const wordStart = 60 + i * 3.2;
              const wordProgress = interpolate(frame, [wordStart, wordStart + 8], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: smoothEaseOut,
              });

              const wordY = interpolate(wordProgress, [0, 1], [16, 0], { easing: smoothEaseOut });
              const wordOpacity = interpolate(wordProgress, [0, 0.8], [0, 1]);

              return (
                <span
                  key={i}
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#1A1819',
                    display: 'inline-block',
                    letterSpacing: '-0.01em',
                    opacity: wordOpacity,
                    transform: `translateY(${wordY}px)`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

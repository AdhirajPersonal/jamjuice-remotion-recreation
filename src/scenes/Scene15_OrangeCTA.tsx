import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Logo } from '../components/Logo';
import { smoothEaseInOut } from '../animations/helpers';

export const Scene15_OrangeCTA: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeInOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const fadeOutOpacity = interpolate(frame, [65, 80], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cursorX = interpolate(frame, [15, 38], [520, 308], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const cursorY = interpolate(frame, [15, 38], [320, 266], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const isClicking = frame >= 38 && frame <= 42;
  const cursorScale = isClicking ? 0.82 : 1;
  const buttonClickScale = isClicking ? 0.94 : 1;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, #FFA834 0%, #FF801A 50%, #E66000 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        opacity: fadeInOpacity * fadeOutOpacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: -10,
          bottom: -10,
          width: 210,
          height: 330,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 200 320" width="210" height="330">
          <path d="M-20,120 Q20,40 50,-10 Q80,40 40,120 Z" fill="#2E7D32" opacity="0.8" />
          <path d="M-40,180 Q30,100 70,30 Q90,100 30,180 Z" fill="#1B5E20" opacity="0.9" />

          <g transform="rotate(-18, 90, 180)">
            <rect x="80" y="10" width="16" height="150" fill="#5C2E0B" rx="3" />
            <rect x="75" y="0" width="26" height="30" fill="#3D1E07" rx="4" />
            <circle cx="82" cy="10" r="3" fill="#DDD" />
            <circle cx="94" cy="10" r="3" fill="#DDD" />

            <path
              d="M 50 140 C 30 160 30 200 50 220 C 30 240 30 280 60 300 C 110 300 140 280 120 260 C 140 240 140 200 120 180 C 140 160 140 140 90 140 Z"
              fill="#D97724"
              stroke="#6B3508"
              strokeWidth="4"
            />
            <circle cx="85" cy="200" r="22" fill="#3D1E07" stroke="#8A460E" strokeWidth="3" />
            <rect x="65" y="250" width="40" height="10" fill="#3D1E07" rx="2" />
          </g>
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          right: -10,
          bottom: -10,
          width: 290,
          height: 240,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 300 240" width="290" height="240">
          <g transform="rotate(-8, 150, 120)">
            <rect x="10" y="30" width="280" height="180" rx="16" fill="#24140E" stroke="#8A460E" strokeWidth="4" />
            <rect x="20" y="40" width="260" height="160" rx="12" fill="#170B07" />

            <circle cx="95" cy="120" r="62" fill="#0A0402" stroke="#3D1E07" strokeWidth="4" />
            <circle cx="95" cy="120" r="50" fill="#140905" />
            <circle cx="95" cy="120" r="22" fill="#E8315A" />
            <circle cx="95" cy="120" r="5" fill="#000" />

            <rect x="175" y="55" width="90" height="130" rx="8" fill="#1F0E09" stroke="#3D1E07" strokeWidth="1" />
            {[...Array(6)].map((_, i) => (
              <circle key={i} cx={190 + (i % 3) * 30} cy={75 + Math.floor(i / 3) * 30} r="7" fill="#E8315A" />
            ))}
            {[...Array(3)].map((_, i) => (
              <rect key={i} x={190 + i * 30} y={135} width="6" height="35" rx="3" fill="#3D1E07" />
            ))}
          </g>
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 40,
          bottom: 10,
          width: 110,
          height: 60,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 120 70" width="110" height="60">
          <path d="M 10 60 A 50 50 0 0 1 110 60 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="3" />
          <path d="M 18 55 A 42 42 0 0 1 102 55 Z" fill="#FF3B60" />
          <circle cx="40" cy="40" r="2.5" fill="#111" />
          <circle cx="60" cy="32" r="2.5" fill="#111" />
          <circle cx="80" cy="40" r="2.5" fill="#111" />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 60,
          bottom: 10,
          width: 100,
          height: 55,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 120 70" width="100" height="55">
          <path d="M 10 60 A 50 50 0 0 1 110 60 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="3" />
          <path d="M 18 55 A 42 42 0 0 1 102 55 Z" fill="#FF3B60" />
          <circle cx="45" cy="38" r="2.5" fill="#111" />
          <circle cx="75" cy="38" r="2.5" fill="#111" />
        </svg>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <div style={{ transform: 'scale(0.85)', marginBottom: 8 }}>
          <Logo size="large" showTagline={false} />
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 12px rgba(0,0,0,0.3)',
            marginBottom: 18,
          }}
        >
          Find Talent.<br />
          Book Gigs.<br />
          Let's Jam!
        </div>

        <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
          <button
            style={{
              backgroundColor: '#E8315A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 22,
              padding: '10px 24px',
              fontSize: 12.5,
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(232, 49, 90, 0.45)',
              transform: `scale(${buttonClickScale})`,
              transition: 'transform 0.1s ease',
            }}
          >
            Book Talent Now
          </button>

          <button
            style={{
              backgroundColor: '#FFF0D0',
              color: '#E8315A',
              border: 'none',
              borderRadius: 22,
              padding: '10px 24px',
              fontSize: 12.5,
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            }}
          >
            Artist Sign Up
          </button>
        </div>
      </div>

      {frame >= 15 && frame <= 60 && (
        <div
          style={{
            position: 'absolute',
            left: cursorX,
            top: cursorY,
            transform: `scale(${cursorScale})`,
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFF" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>
            <path d="M3 3l7 18 3-7 7-3L3 3z" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
};

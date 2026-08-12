import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut } from '../animations/helpers';

export const Scene11_Pricing: React.FC = () => {
  const frame = useCurrentFrame();

  const cardProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const cardY = (1 - cardProgress) * 60;
  const cardScale = interpolate(cardProgress, [0, 1], [0.92, 1]);

  const fullText = 'with or without hands-on concierge support';
  const textChars = interpolate(frame, [28, 75], [0, fullText.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const typedText = fullText.slice(0, Math.floor(textChars));

  const tableRows = [
    { name: 'Verified Artist Network', lite: true, pro: true },
    { name: 'Venue Marketing Tools', lite: true, pro: true },
    { name: 'Website Calendar Integration', lite: true, pro: true },
    { name: 'Direct Artist Messaging', lite: true, pro: true },
    { name: 'Instant Booking Confirmation', lite: true, pro: true },
    { name: 'Full-Service Booking Management', lite: false, pro: true },
  ];

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
        background: 'linear-gradient(135deg, #FFEBF0 0%, #FFD6E0 100%)',
      }}
    >
      <div
        style={{
          width: 500,
          backgroundColor: '#FFFFFF',
          borderRadius: 28,
          padding: '24px 28px',
          boxShadow: '0 25px 70px rgba(250, 91, 120, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          transform: `translateY(${cardY}px) scale(${cardScale})`,
          opacity: cardProgress,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #FFE6EC',
            paddingBottom: 14,
            marginBottom: 12,
          }}
        >
          <div style={{ flex: 2, fontSize: 16, fontWeight: 700, color: '#FA5B78' }}>
            Features
          </div>
          <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: '#FA5B78', textAlign: 'center' }}>
            Lite
          </div>
          <div style={{ flex: 1, fontSize: 16, fontWeight: 700, color: '#FA5B78', textAlign: 'center' }}>
            Pro
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tableRows.map((row, i) => {
            const rowProg = interpolate(frame, [10 + i * 3, 22 + i * 3], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 0',
                  opacity: rowProg,
                  transform: `translateY(${(1 - rowProg) * 10}px)`,
                }}
              >
                <div style={{ flex: 2, fontSize: 11.5, color: '#4A4A58', fontWeight: 500 }}>
                  {row.name}
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  {row.lite ? (
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        backgroundColor: '#FFE6EC',
                        color: '#FA5B78',
                        fontSize: 12,
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      ✓
                    </div>
                  ) : (
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        backgroundColor: '#FFF0F3',
                        color: '#FF4D4D',
                        fontSize: 12,
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      ✕
                    </div>
                  )}
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      backgroundColor: '#FFE6EC',
                      color: '#FA5B78',
                      fontSize: 12,
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✓
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          fontSize: 16,
          fontWeight: 600,
          color: '#222',
          letterSpacing: '-0.02em',
          height: 24,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span>{typedText}</span>
        {frame < 80 && (
          <span style={{ color: '#FA5B78', fontWeight: 400, marginLeft: 2 }}>|</span>
        )}
      </div>
    </div>
  );
};

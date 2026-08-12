import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { COLORS } from '../constants/theme';
import { smoothEaseOut, getFloatingOffset } from '../animations/helpers';

export const Scene08_NoInvoices: React.FC = () => {
  const frame = useCurrentFrame();

  const cardProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const float = getFloatingOffset(frame, 0.03, 2, 3, 0);
  const cardScale = interpolate(cardProgress, [0, 1], [0.85, 1]);
  const cardEntryY = (1 - cardProgress) * 600 + float.y;

  const leftTextProg = interpolate(frame, [24, 38], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const rightTextProg = interpolate(frame, [44, 58], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pagePushUpY = interpolate(frame, [72, 92], [0, -850], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pagePushUpOpacity = interpolate(frame, [72, 88], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

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
        opacity: pagePushUpOpacity,
        transform: `translateY(${pagePushUpY}px)`,
      }}
    >
      <Background mode="light" />

      <div
        style={{
          position: 'absolute',
          left: 48,
          top: '50%',
          transform: `translateY(-50%) translateX(${(1 - leftTextProg) * -60}px)`,
          opacity: leftTextProg,
          zIndex: 20,
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 900, color: COLORS.darkText, letterSpacing: '-0.03em' }}>
          no invoices
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 48,
          top: '50%',
          transform: `translateY(-50%) translateX(${(1 - rightTextProg) * 60}px)`,
          opacity: rightTextProg,
          zIndex: 20,
          textAlign: 'right',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 900, color: COLORS.darkText, letterSpacing: '-0.03em' }}>
          no waiting
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          transform: `translateY(${cardEntryY}px) scale(${cardScale})`,
        }}
      >
        <div
          style={{
            width: 390,
            backgroundColor: '#FFFFFF',
            borderRadius: 32,
            padding: 16,
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.12), 0 4px 20px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
              padding: '4px 6px',
            }}
          >
            <div style={{ width: 34, height: 34, flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="34" height="34">
                <path fill="#4285F4" d="M1.5 17.5V6.5C1.5 5.4 2.4 4.5 3.5 4.5H5.5V17.5H1.5Z" />
                <path fill="#34A853" d="M18.5 17.5H20.5C21.6 17.5 22.5 16.6 22.5 15.5V6.5H18.5V17.5Z" />
                <path fill="#EA4335" d="M18.5 4.5L12 9.5L5.5 4.5H3.5C2.7 4.5 2.1 4.9 1.8 5.5L12 13.5L22.2 5.5C21.9 4.9 21.3 4.5 20.5 4.5H18.5Z" />
                <path fill="#FBBC04" d="M18.5 4.5V17.5H20.5C21.6 17.5 22.5 16.6 22.5 15.5V6.5C22.5 5.4 21.6 4.5 20.5 4.5H18.5Z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#111', lineHeight: 1.1 }}>
                Gmail
              </div>
              <div style={{ fontSize: 11, color: '#666', fontWeight: 500, marginTop: 2 }}>
                <span style={{ fontWeight: 700, color: '#222' }}>Andrew Owczarzak</span> &lt;andrew@jamjuice.com&gt;
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#FDE4EA',
              borderRadius: 24,
              padding: '22px 18px 18px',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 14 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  backgroundColor: '#2ECC71',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 6px',
                  boxShadow: '0 2px 8px rgba(46, 204, 113, 0.4)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20' }}>Payment Success!</div>
              <div
                style={{
                  width: 110,
                  height: 12,
                  backgroundColor: 'rgba(250, 91, 120, 0.25)',
                  borderRadius: 10,
                  margin: '8px auto 0',
                }}
              />
            </div>

            <div
              style={{
                backgroundColor: '#230A14',
                borderRadius: 18,
                padding: 14,
                boxShadow: '0 20px 45px rgba(35, 10, 20, 0.4)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FA5B78',
                  padding: '9px 12px',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#FFF',
                  textAlign: 'center',
                  borderRadius: 12,
                  marginBottom: 12,
                }}
              >
                Payment Details
              </div>

              {[
                { label: 'Ref Number', width: 90 },
                { label: 'Payment Time', width: 110 },
                { label: 'Payment Method', width: 85 },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '6px 4px',
                  }}
                >
                  <div style={{ fontSize: 11, color: '#A09095', fontWeight: 500 }}>{row.label}</div>
                  <div
                    style={{
                      width: row.width,
                      height: 10,
                      backgroundColor: 'rgba(250, 91, 120, 0.35)',
                      borderRadius: 6,
                    }}
                  />
                </div>
              ))}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '6px 4px',
                }}
              >
                <div style={{ fontSize: 11, color: '#A09095', fontWeight: 500 }}>Sender Name</div>
                <div style={{ fontSize: 11, color: '#FFFFFF', fontWeight: 700 }}>Andrew Owczarzak</div>
              </div>

              <div style={{ margin: '8px 0', borderTop: '1px dashed rgba(255, 255, 255, 0.18)' }} />

              {[
                { label: 'Amount', width: 80 },
                { label: 'Admin Fee', width: 75 },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '6px 4px',
                  }}
                >
                  <div style={{ fontSize: 11, color: '#A09095', fontWeight: 500 }}>{row.label}</div>
                  <div
                    style={{
                      width: row.width,
                      height: 10,
                      backgroundColor: 'rgba(250, 91, 120, 0.35)',
                      borderRadius: 6,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

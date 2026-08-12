import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut } from '../animations/helpers';

export const Scene06_TalentProfile: React.FC = () => {
  const frame = useCurrentFrame();

  const twistProgress = interpolate(frame, [0, 48], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const cardOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rotateY = interpolate(twistProgress, [0, 1], [-32, 0]);
  const rotateX = interpolate(twistProgress, [0, 1], [-12, 0]);
  const cardScale = interpolate(twistProgress, [0, 1], [0.68, 0.78]);

  const strokeDashLen = interpolate(frame, [0, 20], [10, 90], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const antiClockwiseTravel = frame * 14;
  const strokeOffset = 1100 + antiClockwiseTravel;

  const strokeOpacity = interpolate(frame, [36, 48], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scrollY = interpolate(frame, [48, 80], [0, -180], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pushUpY = interpolate(frame, [80, 100], [0, -750], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pushUpOpacity = interpolate(frame, [80, 95], [1, 0], {
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
        backgroundColor: '#0A0A0D',
        perspective: 1200,
        opacity: pushUpOpacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'blur(35px) brightness(0.35) saturate(0.8)',
          transform: `scale(1.15) translateY(${pushUpY}px)`,
          pointerEvents: 'none',
        }}
      >
        <ProfileCardContent scrollY={scrollY} />
      </div>

      <div
        style={{
          position: 'relative',
          opacity: cardOpacity,
          transformStyle: 'preserve-3d',
          transform: `translateY(${pushUpY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${cardScale})`,
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
          borderRadius: 20,
          zIndex: 10,
        }}
      >
        <ProfileCardContent scrollY={scrollY} />

        {strokeOpacity > 0 && (
          <svg
            width="660"
            height="480"
            viewBox="0 0 660 480"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              overflow: 'visible',
              zIndex: 30,
              opacity: strokeOpacity,
            }}
          >
            <rect
              x="0"
              y="0"
              width="660"
              height="480"
              rx="20"
              fill="none"
              stroke="#FFB6C1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${strokeDashLen} ${1100 - strokeDashLen} ${strokeDashLen} ${1100 - strokeDashLen}`}
              strokeDashoffset={strokeOffset}
              style={{
                filter: 'drop-shadow(0 0 8px #FF4D7E) drop-shadow(0 0 2px #FFFFFF)',
              }}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

const ProfileCardContent: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  return (
    <div
      style={{
        width: 660,
        height: 480,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#111116',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          backgroundColor: '#1A1A20',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          padding: '10px 16px',
          position: 'relative',
          minHeight: 38,
          zIndex: 2,
        }}
      >
        <p style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#6E6E80', margin: 0 }}>
          https://jamjuice.com/<span style={{ color: '#A0A0B0' }}>@kathrynrosewood</span>
        </p>
        <button
          style={{
            position: 'absolute',
            right: 14,
            width: 22,
            height: 22,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#888',
            fontSize: 11,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div style={{ transform: `translateY(${scrollY}px)` }}>
          <div
            style={{
              position: 'relative',
              minHeight: 240,
              display: 'flex',
              alignItems: 'center',
              padding: '24px 28px',
              overflow: 'hidden',
              gap: 22,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(3px) brightness(0.35) saturate(0.6)',
                transform: 'scale(1.06)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(ellipse at 50% 100%, rgba(10,10,14,0.7) 0%, transparent 70%),
                  linear-gradient(to bottom, rgba(10,10,14,0.45) 0%, rgba(10,10,14,0.1) 40%, rgba(17,17,22,0.8) 100%)
                `,
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, flexShrink: 0 }}>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Kathryn Rose Wood"
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 255, 255, 0.18)',
                  display: 'block',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
                }}
              />
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <h1
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#FFF',
                  letterSpacing: '-0.03em',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Kathryn Rose Wood
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: '#1D9BF0',
                    flexShrink: 0,
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFF">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
              </h1>

              <p style={{ marginTop: 4, fontSize: 11.5, color: '#A0A0B0', margin: '4px 0 0 0' }}>
                📍 Nashville, TN
              </p>

              <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#C0C0CC' }}>
                <span style={{ fontWeight: 700, color: '#FFF' }}>5.0/5</span>
                <span style={{ color: '#F5C518' }}>★</span>
                <span style={{ color: '#888898' }}>0 performances</span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FF7A00, #FFB000)',
                    color: '#FFF',
                    fontSize: 8.5,
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: 20,
                  }}
                >
                  NEW!
                </span>
              </div>

              <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {['Country', 'Pop', 'Pop/Top 40', 'R&B', 'Soul'].map((g, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#D0D0DC',
                      fontSize: 10.5,
                      fontWeight: 500,
                      padding: '3px 10px',
                      borderRadius: 16,
                    }}
                  >
                    {g}
                  </span>
                ))}
              </div>

              <button
                style={{
                  marginTop: 14,
                  background: 'linear-gradient(135deg, #FF4D7E, #FF2255)',
                  border: 'none',
                  color: '#FFF',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: '9px 32px',
                  borderRadius: 30,
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(255, 50, 100, 0.45)',
                  alignSelf: 'center',
                }}
              >
                Book Now
              </button>
            </div>
          </div>

          <div style={{ backgroundColor: '#111116', padding: '20px 24px 28px' }}>
            <h2 style={{ fontSize: 15, fontWeight: 800, color: '#FFF', margin: '0 0 10px 0' }}>
              Booking Details
            </h2>

            <div
              style={{
                backgroundColor: '#18181F',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: 14,
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 9.5, fontWeight: 600, color: '#606070', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
                  Performances
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 16, backgroundColor: '#5B2BA8', color: '#D4B8FF' }}>Solo</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 16, backgroundColor: '#B81F3A', color: '#FFBCC8' }}>Duo</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 16, backgroundColor: '#B84A12', color: '#FFD0B0' }}>Trio</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, padding: '4px 10px', borderRadius: 16, backgroundColor: '#252530', color: '#9090A8', border: '1px solid rgba(255,255,255,0.1)' }}>Guitarist</span>
                </div>
              </div>

              <div style={{ flex: 1, borderLeft: '1px solid rgba(255, 255, 255, 0.07)', paddingLeft: 20 }}>
                <p style={{ fontSize: 9.5, fontWeight: 600, color: '#606070', textTransform: 'uppercase', margin: '0 0 6px 0' }}>
                  Pricing
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#E8E8F4', margin: 0 }}>
                  $100 - $1000/hr
                </p>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h2 style={{ fontSize: 15, fontWeight: 800, color: '#FFF', margin: '0 0 10px 0' }}>
                About
              </h2>
              <div
                style={{
                  backgroundColor: '#18181F',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 14,
                  padding: '16px 20px',
                }}
              >
                <p style={{ fontSize: 12, lineHeight: 1.65, color: '#9090A4', fontWeight: 400, margin: 0 }}>
                  With national praise from the likes of American Songwriter Magazine, Americana UK, and mental
                  health organizations like To Write Love on Her Arms and NAMI, I don't just play – I connect with the
                  audience's musical heart. Offering customized live music for every aspect of an event – weddings
                  and celebrations, corporate gatherings, private parties, and intimate venues – Kathryn brings
                  a soul-centered presence that transforms any room into something unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

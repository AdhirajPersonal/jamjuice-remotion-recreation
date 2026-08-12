import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut } from '../animations/helpers';

export const Scene12_FAQInterface: React.FC = () => {
  const frame = useCurrentFrame();

  const entryX = interpolate(frame, [0, 20], [1000, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const scrollY = interpolate(frame, [15, 80], [0, -180], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const fadeOutOpacity = interpolate(frame, [72, 88], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const navItems = ['ABOUT US', 'MENU', 'LOCATIONS', 'EVENTS', 'UPSTAIRS LOUNGE', 'PEACOCK CLUB'];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#050505',
        color: '#FFF',
        fontFamily: 'Inter, system-ui, sans-serif',
        overflow: 'hidden',
        transform: `translateX(${entryX}px)`,
        opacity: fadeOutOpacity,
      }}
    >
      <div
        style={{
          height: 48,
          backgroundColor: '#0A0A0A',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: '0.15em',
            fontFamily: "'Playfair Display', serif",
            color: '#E0C890',
          }}
        >
          ZUZU
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          {navItems.map((item) => (
            <div
              key={item}
              style={{
                fontSize: 9.5,
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.65)',
                letterSpacing: '0.08em',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          padding: '40px 50px',
          gap: 60,
          height: 'calc(100% - 48px)',
        }}
      >
        <div style={{ flex: 1, paddingTop: 60 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 400,
              color: '#FFFFFF',
              fontFamily: "'Brush Script MT', 'Playfair Display', cursive, serif",
              fontStyle: 'italic',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Upstairs
          </div>
        </div>

        <div
          style={{
            flex: 1.2,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              transform: `translateY(${scrollY}px)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <div
              style={{
                fontSize: 11.5,
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: 440,
              }}
            >
              Upstairs Bar is an ultra luxurious lounge and club serving craft cocktails and
              bottles in a show-stopping atmosphere. As the evening progresses we turn up the
              music and turn down the lights so everyone can keep the fun going all night long.
            </div>

            <div
              style={{
                backgroundColor: '#EBEBEB',
                borderRadius: 14,
                padding: 16,
                color: '#111',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 800, color: '#111' }}>Experience ZuZu</div>
              <div style={{ fontSize: 9.5, color: '#666', marginBottom: 12 }}>16 Upcoming Events</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  {
                    title: 'DJ @ Experience ZuZu',
                    date: 'Sep 12, 2025, 2:00 AM – 6:00 AM',
                    loc: '📍 First Floor',
                    artist: 'Ryan Lee',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
                  },
                  {
                    title: 'Duo @ Experience ZuZu',
                    date: 'Sep 13, 2025, 12:30 AM – 4:30 AM',
                    loc: '📍 Upstairs Acoustic',
                    artist: 'Rachel Horter',
                    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
                  },
                  {
                    title: 'DJ @ Experience ZuZu',
                    date: 'Sep 13, 2025, 2:00 AM – 6:00 AM',
                    loc: '📍 First Floor',
                    artist: 'Dumb Groove',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
                  },
                ].map((ev, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: '#1E1E22',
                      borderRadius: 10,
                      padding: '10px 12px',
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700 }}>{ev.title}</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                        📅 {ev.date}
                      </div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>
                        {ev.loc}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          backgroundImage: `url("${ev.avatar}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700 }}>{ev.artist}</div>
                        <div
                          style={{
                            backgroundColor: '#2ECC71',
                            color: '#FFF',
                            fontSize: 7.5,
                            fontWeight: 700,
                            padding: '1px 5px',
                            borderRadius: 8,
                            marginTop: 2,
                            display: 'inline-block',
                          }}
                        >
                          Confirmed Event
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

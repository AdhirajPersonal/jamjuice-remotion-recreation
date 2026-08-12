import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut, smoothEaseInOut } from '../animations/helpers';

export const Scene07_TalentDiscovery: React.FC = () => {
  const frame = useCurrentFrame();

  const slideInY = interpolate(frame, [0, 24], [1080, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const zoomScale = interpolate(frame, [24, 45], [0.85, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const cursorX = interpolate(
    frame,
    [24, 32, 42, 48, 58, 64, 74, 80, 90, 96, 105],
    [650, 260, 330, 420, 500, 585, 665, 750, 830, 915, 980],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: smoothEaseInOut,
    }
  );

  const cursorY = interpolate(
    frame,
    [24, 32, 42, 48, 58, 64, 74, 80, 90, 96, 105],
    [480, 315, 310, 315, 310, 315, 310, 315, 310, 315, 420],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: smoothEaseInOut,
    }
  );

  const isClicking =
    (frame >= 30 && frame <= 34) ||
    (frame >= 46 && frame <= 50) ||
    (frame >= 62 && frame <= 66) ||
    (frame >= 78 && frame <= 82) ||
    (frame >= 94 && frame <= 98);

  const cursorScale = isClicking ? 0.82 : 1;

  const isLiked0 = frame >= 32;
  const isLiked1 = frame >= 48;
  const isLiked2 = frame >= 64;
  const isLiked3 = frame >= 80;
  const isLiked4 = frame >= 96;

  const likedState = [isLiked0, isLiked1, isLiked2, isLiked3, isLiked4];

  const marqueeX = interpolate(frame, [100, 135], [0, -320], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const siteExitX = interpolate(frame, [105, 135], [0, -1600], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const siteExitOpacity = interpolate(frame, [108, 132], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const artists = [
    { name: 'Charles Smith', tags: ['R&B'], color: '#1a3a5c', initials: 'CS', badge: '✓' },
    { name: 'Jonah Krull', tags: ['Country', 'Folk', 'Indie', 'Pop'], color: '#1a1a2e', initials: 'JK' },
    { name: 'Virginia Vision', tags: ['Dance', 'EDM', 'House'], color: '#1a2e2a', initials: 'VV' },
    { name: 'Cameron Dettman', tags: ['Folk', 'Pop', 'Soul'], color: '#2e1a1a', initials: 'CD' },
    { name: 'Taylor Wachman', tags: ['Country', 'Classic Rock'], color: '#1e1a2e', initials: 'TW' },
    { name: 'Kathryn Rose Wood', tags: ['Pop', 'R&B'], color: '#0a1a0a', initials: 'KW' },
    { name: 'Ryan Mundy', tags: ['Hip-Hop'], color: '#1a1a2e', initials: 'RM' },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#0A0A0A',
        color: '#FFF',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: siteExitOpacity,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transform: `translateY(${slideInY}px) translateX(${siteExitX}px) scale(${zoomScale})`,
          transformOrigin: 'center center',
        }}
      >
        <div
          style={{
            width: 42,
            backgroundColor: '#111',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px 0',
            gap: 20,
            borderRight: '1px solid #222',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <svg width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <svg width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <svg width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 4v16"/></svg>
          <svg width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19V6l12-3v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          <svg width="16" height="16" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              height: 44,
              backgroundColor: '#111',
              display: 'flex',
              alignItems: 'center',
              padding: '0 20px',
              gap: 16,
              borderBottom: '1px solid #222',
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: 2, color: '#E8315A' }}>
              JAMJUICE
            </div>
            <span style={{ fontSize: 13, color: '#AAA', marginLeft: 6 }}>Explore Artists</span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 10, textAlign: 'right', lineHeight: 1.3 }}>
                <div style={{ fontWeight: 600 }}>fivenome</div>
                <div style={{ color: '#888' }}>Organizer</div>
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                }}
              >
                FO
              </div>
            </div>
          </div>

          <div style={{ flex: 1, padding: '20px 24px' }}>
            <div
              style={{
                background: 'linear-gradient(180deg, #3A0A12 0%, #1A0508 60%, #0A0A0A 100%)',
                margin: '-20px -24px 16px',
                padding: '24px 24px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ maxWidth: 540, margin: '0 auto', position: 'relative' }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Artists..."
                  style={{
                    width: '100%',
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #333',
                    borderRadius: 6,
                    padding: '8px 16px 8px 38px',
                    color: '#FFF',
                    fontSize: 13,
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Genres ▾', 'Type ▾', 'Location ▾', 'Price ▾', 'Favorites ▾'].map((btn) => (
                  <button
                    key={btn}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: 'none',
                      color: '#CCC',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: 11,
                      cursor: 'pointer',
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: '#DDD' }}>
              Featured Artists
            </div>

            <div
              style={{
                display: 'flex',
                gap: 14,
                overflowX: 'hidden',
                paddingBottom: 8,
                transform: `translateX(${marqueeX}px)`,
              }}
            >
              {artists.map((a, i) => {
                const isLiked = likedState[i];

                return (
                  <div
                    key={i}
                    style={{
                      minWidth: 165,
                      backgroundColor: '#161616',
                      borderRadius: 10,
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{
                          width: '100%',
                          height: 160,
                          background: `linear-gradient(135deg, ${a.color} 0%, #111 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 40,
                          fontWeight: 900,
                          color: 'rgba(255, 255, 255, 0.15)',
                        }}
                      >
                        {a.initials}
                      </div>

                      {a.badge && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            backgroundColor: '#E8315A',
                            borderRadius: '50%',
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 9,
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </div>
                      )}

                      <button
                        style={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: isLiked ? '#E8315A' : 'rgba(0, 0, 0, 0.5)',
                          border: 'none',
                          borderRadius: '50%',
                          width: 26,
                          height: 26,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          color: '#FFF',
                          fontSize: 13,
                          boxShadow: isLiked ? '0 0 12px rgba(232, 49, 90, 0.6)' : 'none',
                          transition: 'background-color 0.2s',
                        }}
                      >
                        {isLiked ? '♥' : '♡'}
                      </button>
                    </div>

                    <div style={{ padding: '8px 10px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            backgroundColor: a.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 8.5,
                            fontWeight: 700,
                          }}
                        >
                          {a.initials}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: 12 }}>{a.name}</div>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                        {a.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              backgroundColor: 'rgba(232, 49, 90, 0.15)',
                              color: '#E8315A',
                              borderRadius: 4,
                              padding: '2px 5px',
                              fontSize: 9,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {frame >= 24 && frame < 105 && (
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
    </div>
  );
};

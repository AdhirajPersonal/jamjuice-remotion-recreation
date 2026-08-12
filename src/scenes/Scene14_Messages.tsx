import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut } from '../animations/helpers';

export const Scene14_Messages: React.FC = () => {
  const frame = useCurrentFrame();

  const slideInY = interpolate(frame, [0, 24], [800, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const fadeOutOpacity = interpolate(frame, [85, 100], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#070305',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        opacity: fadeOutOpacity,
      }}
    >
      <div
        style={{
          width: 720,
          height: 480,
          backgroundColor: '#0D0407',
          borderRadius: 20,
          border: '2px solid #FA5B78',
          boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
          overflow: 'hidden',
          display: 'flex',
          transform: `translateY(${slideInY}px)`,
        }}
      >
        <div
          style={{
            width: 42,
            backgroundColor: '#0A0306',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '14px 0',
            gap: 18,
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
          <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/></svg>
          <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <svg width="14" height="14" fill="none" stroke="#FA5B78" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              height: 42,
              backgroundColor: '#0A0306',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 18px',
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 16, letterSpacing: 1.5, color: '#FFF' }}>
              JAMJUICE
            </div>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginLeft: 4 }}>
              Explore Artists
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex' }}>
            <div
              style={{
                width: 170,
                backgroundColor: '#14080D',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                padding: 12,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: '#FFF' }}>Messages</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
                1 Conversations
              </div>

              <div
                style={{
                  backgroundColor: '#200D15',
                  borderRadius: 10,
                  padding: '8px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '1px solid rgba(250, 91, 120, 0.3)',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80")',
                    backgroundSize: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: '#FFF' }}>Hunter West</div>
                  <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>
                    Hey Hunter, Hope you are d...
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#FFF', marginBottom: 14 }}>
                Hunter West
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 10 }}>
                <div
                  style={{
                    backgroundColor: '#1F1218',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: 12,
                    maxWidth: 440,
                    alignSelf: 'flex-start',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, fontWeight: 700, color: '#FA5B78', marginBottom: 4 }}>
                    <span>Really Cool Venue</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>8:23 pm</span>
                  </div>
                  <div style={{ fontSize: 9.5, color: '#E0D0D8', lineHeight: 1.5 }}>
                    Hey Hunter, Hope you are doing well. This is Andrew with JamJuice. I have been working with Matt to get more venues on JamJuice. I have been trying to get a meeting with Roberts Western World and we were wondering if you had any info with them. Any info or connections would be greatly appreciated. Also if you want to talk on the phone my number is 2192526311 I can call or text me any time. Thanks in advance!!
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 12,
                  backgroundColor: '#14080D',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: '8px 12px',
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Type your message...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

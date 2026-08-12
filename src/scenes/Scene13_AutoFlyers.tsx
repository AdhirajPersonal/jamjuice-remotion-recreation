import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut } from '../animations/helpers';

const MiniPosterCard: React.FC<{
  artist: string;
  date: string;
  location: string;
  venue: string;
  avatar: string;
}> = ({ artist, date, location, venue, avatar }) => (
  <div
    style={{
      width: 170,
      height: 265,
      backgroundColor: '#0C060A',
      borderRadius: 18,
      border: '1.5px solid #FA5B78',
      boxShadow: '0 0 22px rgba(250, 91, 120, 0.45), 0 12px 35px rgba(0,0,0,0.85)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#FFF',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}
  >
    <div style={{ fontSize: 7, color: '#A09098', letterSpacing: 1, textTransform: 'uppercase' }}>
      {venue} PRESENTS:
    </div>

    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 2, color: '#FFF', textTransform: 'uppercase', marginBottom: 6 }}>
        {artist}
      </div>

      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundImage: `url("${avatar}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '2px solid rgba(255,255,255,0.2)',
          margin: '0 auto',
        }}
      />
    </div>

    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 8, fontWeight: 700, color: '#FFF' }}>{date}</div>
      <div style={{ fontSize: 7, color: '#888', marginTop: 2 }}>{location}</div>
      <div style={{ fontSize: 7.5, fontWeight: 900, color: '#FA5B78', letterSpacing: 1.5, marginTop: 4 }}>
        JAMJUICE
      </div>
    </div>
  </div>
);

export const Scene13_AutoFlyers: React.FC = () => {
  const frame = useCurrentFrame();

  const fullTextLine1 = 'Auto-generated';
  const fullTextLine2 = 'flyers';

  const charsLine1 = interpolate(frame, [5, 25], [0, fullTextLine1.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const charsLine2 = interpolate(frame, [25, 45], [0, fullTextLine2.length], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const typedLine1 = fullTextLine1.slice(0, Math.floor(charsLine1));
  const typedLine2 = fullTextLine2.slice(0, Math.floor(charsLine2));

  const spreadProgress = interpolate(frame, [12, 48], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pushUpY = interpolate(frame, [65, 80], [0, -900], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pushUpOpacity = interpolate(frame, [65, 78], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const cards = [
    {
      artist: 'RYAN LEE',
      date: 'January 3rd | 4:00PM-8:00PM',
      location: '212 Broadway, Nashville, TN',
      venue: 'RAISING CANES',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
      rot: -22,
      x: -40,
      y: 0,
      zIndex: 40,
    },
    {
      artist: 'SHAN SCOTT',
      date: 'April 12th | 11:00AM-2:00PM',
      location: '139 2nd Ave N, Nashville',
      venue: 'THE LOUNGE AT 2ND',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
      rot: -8,
      x: 25,
      y: 10,
      zIndex: 30,
    },
    {
      artist: 'RYAN MUNDY',
      date: 'Sep 12th | 2:00AM-6:00AM',
      location: 'Nashville, TN',
      venue: 'ZUZU LOUNGE',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
      rot: 6,
      x: 85,
      y: 28,
      zIndex: 20,
    },
    {
      artist: 'RYA',
      date: 'August 15th | 8:00PM-10:00PM',
      location: '1116 Grundy St, Nashville',
      venue: 'GOODFELLAS PIZZERIA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
      rot: 20,
      x: 140,
      y: 52,
      zIndex: 10,
    },
  ];

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
        transform: `translateY(${pushUpY}px)`,
        opacity: pushUpOpacity,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {typedLine1}
            {frame >= 5 && frame < 25 && (
              <span style={{ color: '#FA5B78', fontWeight: 400, marginLeft: 2 }}>|</span>
            )}
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#FA5B78',
              letterSpacing: '-0.02em',
              marginTop: 2,
              filter: 'drop-shadow(0 0 10px rgba(250, 91, 120, 0.5))',
            }}
          >
            {typedLine2}
            {frame >= 25 && frame < 50 && (
              <span style={{ color: '#FFF', fontWeight: 400, marginLeft: 2 }}>|</span>
            )}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            width: 380,
            height: 340,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {cards.map((c, i) => {
            const rotZ = c.rot * spreadProgress;
            const translateX = c.x * spreadProgress;
            const translateY = c.y * spreadProgress;

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  transform: `translate(${translateX}px, ${translateY}px) rotate(${rotZ}deg)`,
                  transformOrigin: 'bottom center',
                  zIndex: c.zIndex,
                }}
              >
                <MiniPosterCard
                  artist={c.artist}
                  date={c.date}
                  location={c.location}
                  venue={c.venue}
                  avatar={c.avatar}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

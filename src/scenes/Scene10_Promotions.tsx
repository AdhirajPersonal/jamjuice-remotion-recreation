import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut, smoothEaseInOut } from '../animations/helpers';

const FlyerPoster: React.FC<{
  artist: string;
  date: string;
  location: string;
  venue: string;
  avatar: string;
}> = ({ artist, date, location, venue, avatar }) => (
  <div
    style={{
      width: 170,
      height: 270,
      backgroundColor: '#0D060A',
      borderRadius: 18,
      border: '1.5px solid #FA5B78',
      boxShadow: '0 0 20px rgba(250, 91, 120, 0.4), 0 10px 30px rgba(0,0,0,0.8)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#FFF',
      fontFamily: 'Inter, system-ui, sans-serif',
      backfaceVisibility: 'visible',
    }}
  >
    <div style={{ fontSize: 7.5, color: '#A09098', letterSpacing: 1, textTransform: 'uppercase' }}>
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
      <div style={{ fontSize: 8.5, fontWeight: 700, color: '#FFF' }}>{date}</div>
      <div style={{ fontSize: 7.5, color: '#888', marginTop: 2 }}>{location}</div>
      <div style={{ fontSize: 8, fontWeight: 900, color: '#FA5B78', letterSpacing: 1.5, marginTop: 4 }}>
        JAMJUICE
      </div>
    </div>
  </div>
);

export const Scene10_Promotions: React.FC = () => {
  const frame = useCurrentFrame();

  const text1Opacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const text2Opacity = interpolate(frame, [18, 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const cardEntryY = interpolate(frame, [0, 24], [600, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const carouselRotation = interpolate(frame, [20, 95], [0, -720], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const shrinkScale = interpolate(frame, [20, 95], [1.0, 0.1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const opacityExit = interpolate(frame, [80, 95], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const posters = [
    {
      artist: 'CLIFF WADDELL',
      date: 'May 11th | 6:00PM-10:00PM',
      location: 'Nashville, TN',
      venue: 'THE TALENTSHED',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
    {
      artist: 'RYA',
      date: 'August 15th | 8:00PM-10:00PM',
      location: '1116 Grundy St, Nashville, TN',
      venue: 'GOODFELLAS PIZZERIA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    },
    {
      artist: 'SHAN SCOTT',
      date: 'April 12th | 11:00AM-2:00PM',
      location: '139 2nd Ave N, Nashville, TN',
      venue: 'THE LOUNGE AT 2ND',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
    },
    {
      artist: 'RYAN LEE',
      date: 'January 3rd | 4:00PM-8:00PM',
      location: '212 Broadway, Nashville, TN',
      venue: 'RAISING CANES',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    },
    {
      artist: 'DYLAN J',
      date: 'August 22nd | 4:00PM-8:00PM',
      location: 'Nashville, TN',
      venue: 'HARD ROCK CAFE',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&q=80',
    },
  ];

  const count = posters.length;
  const radius = 240;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#0A0408',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: 1200,
        opacity: opacityExit,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 20,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 22,
          fontWeight: 800,
          color: '#FFF',
        }}
      >
        <span style={{ opacity: text1Opacity, display: 'inline-block' }}>
          and promotions
        </span>
        <span style={{ opacity: text2Opacity, display: 'inline-block', marginLeft: 8 }}>
          all in one place
        </span>
      </div>

      <div
        style={{
          position: 'relative',
          width: 170,
          height: 270,
          transformStyle: 'preserve-3d',
          transform: `translateY(${cardEntryY}px) scale(${shrinkScale}) rotateY(${carouselRotation}deg)`,
          marginTop: 40,
        }}
      >
        {posters.map((p, i) => {
          const angle = (i / count) * 360;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <FlyerPoster
                artist={p.artist}
                date={p.date}
                location={p.location}
                venue={p.venue}
                avatar={p.avatar}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

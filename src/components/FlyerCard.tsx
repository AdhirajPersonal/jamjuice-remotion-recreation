import React from 'react';
import { COLORS } from '../constants/theme';

export interface FlyerData {
  title: string;
  artist: string;
  date: string;
  venue: string;
  bgGradient: string;
  tag: string;
}

interface FlyerCardProps {
  flyer: FlyerData;
}

export const FlyerCard: React.FC<FlyerCardProps> = ({ flyer }) => {
  return (
    <div
      style={{
        width: 170,
        height: 240,
        borderRadius: 14,
        background: flyer.bgGradient,
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#FFFFFF',
        fontFamily: 'Inter, system-ui, sans-serif',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(232, 91, 103, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            padding: '3px 8px',
            borderRadius: 10,
          }}
        >
          {flyer.tag}
        </span>
        <span style={{ fontSize: 9, fontWeight: 700, opacity: 0.8 }}>AUTO-FLYER</span>
      </div>

      <div style={{ marginTop: 'auto', marginBottom: 12 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 900,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {flyer.title}
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: COLORS.pinkHighlight,
            marginTop: 4,
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          FEAT. {flyer.artist}
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.25)',
          paddingTop: 8,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 9,
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        <span>{flyer.date}</span>
        <span>{flyer.venue}</span>
      </div>
    </div>
  );
};

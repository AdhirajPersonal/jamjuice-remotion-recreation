import React from 'react';
import { COLORS } from '../constants/theme';

export const PricingTable: React.FC = () => {
  const features = [
    { name: 'Verified Artist Network', lite: true, pro: true },
    { name: 'Venue Marketing Tools', lite: true, pro: true },
    { name: 'Website Calendar Integration', lite: true, pro: true },
    { name: 'Direct Artist Messaging', lite: true, pro: true },
    { name: 'Verified Artist Network', lite: true, pro: true },
    { name: 'Full-Service Booking Management', lite: false, pro: true },
  ];

  return (
    <div
      style={{
        width: 460,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 22,
        padding: '16px 20px',
        boxShadow: '0 24px 60px rgba(100, 20, 30, 0.14)',
        border: `1px solid ${COLORS.lightCardBorder}`,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: COLORS.darkText,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2.6fr 1fr 1fr',
          padding: '6px 10px',
          fontWeight: 800,
          fontSize: 12,
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          marginBottom: 4,
        }}
      >
        <div style={{ color: COLORS.accentPink }}>Features</div>
        <div style={{ textAlign: 'center', color: COLORS.accentPink }}>Lite</div>
        <div style={{ textAlign: 'center', color: COLORS.accentPink }}>Pro</div>
      </div>

      {features.map((feat, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '2.6fr 1fr 1fr',
            alignItems: 'center',
            padding: '8px 10px',
            fontSize: 10,
            fontWeight: 500,
            borderBottom: i < features.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
          }}
        >
          <div style={{ color: COLORS.darkText }}>{feat.name}</div>
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            {feat.lite ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentPink} strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E74C3C" strokeWidth="3.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            )}
          </div>
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentPink} strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { COLORS } from '../constants/theme';

export interface TalentData {
  name: string;
  role: string;
  rating: string;
  price: string;
  gradient: string;
  tag: string;
  verified?: boolean;
}

interface TalentCardProps {
  talent: TalentData;
  mode?: 'light' | 'dark';
  compact?: boolean;
  active?: boolean;
}

export const TalentCard: React.FC<TalentCardProps> = ({
  talent,
  mode = 'dark',
  compact = false,
  active = false,
}) => {
  const isDark = mode === 'dark';

  return (
    <div
      style={{
        width: compact ? 190 : 260,
        borderRadius: 14,
        background: isDark ? 'rgba(25, 12, 16, 0.92)' : 'rgba(255, 255, 255, 0.95)',
        border: active
          ? `2px solid ${COLORS.accentPink}`
          : isDark
          ? `1px solid ${COLORS.darkCardBorder}`
          : `1px solid ${COLORS.lightCardBorder}`,
        boxShadow: active
          ? `0 12px 30px ${COLORS.darkGlow}`
          : '0 8px 24px rgba(0, 0, 0, 0.28)',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: isDark ? COLORS.darkTextPrimary : COLORS.darkText,
      }}
    >
      <div
        style={{
          height: compact ? 90 : 120,
          background: talent.gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '10px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(4px)',
            color: '#FFF',
            fontSize: 10,
            padding: '3px 8px',
            borderRadius: 10,
            fontWeight: 700,
          }}
        >
          {talent.tag}
        </div>

        <div
          style={{
            width: compact ? 36 : 46,
            height: compact ? 36 : 46,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: `2px solid ${COLORS.accentPink}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: compact ? 14 : 18,
            color: COLORS.deepBurgundy,
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}
        >
          {talent.name.charAt(0)}
        </div>
      </div>

      <div style={{ padding: compact ? '10px' : '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: compact ? 13 : 15, display: 'flex', alignItems: 'center', gap: 4 }}>
              {talent.name}
              {talent.verified && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentPink} strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              )}
            </div>
            <div style={{ fontSize: compact ? 11 : 12, color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText, marginTop: 2 }}>
              {talent.role}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: compact ? 8 : 12,
            paddingTop: compact ? 6 : 8,
            borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: compact ? 11 : 12, color: '#FFB800', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 3 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            {talent.rating}
          </div>
          <div style={{ fontWeight: 800, fontSize: compact ? 12 : 13, color: COLORS.accentPink }}>
            {talent.price}
          </div>
        </div>
      </div>
    </div>
  );
};

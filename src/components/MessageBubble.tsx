import React from 'react';
import { COLORS } from '../constants/theme';

export interface MessageData {
  sender: string;
  avatarBg: string;
  role: string;
  text: string;
  time: string;
  tag?: string;
}

interface MessageBubbleProps {
  message: MessageData;
  mode?: 'light' | 'dark';
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, mode = 'light' }) => {
  const isDark = mode === 'dark';

  return (
    <div
      style={{
        width: 320,
        borderRadius: 16,
        backgroundColor: isDark ? 'rgba(20, 10, 14, 0.92)' : '#FFFFFF',
        border: isDark ? `1px solid ${COLORS.darkCardBorder}` : `1px solid ${COLORS.lightCardBorder}`,
        boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.6)' : '0 12px 35px rgba(100, 20, 30, 0.1)',
        padding: '14px 16px',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: isDark ? COLORS.darkTextPrimary : COLORS.darkText,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: message.avatarBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: 14,
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          }}
        >
          {message.sender.charAt(0)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, fontSize: 13 }}>{message.sender}</span>
            <span style={{ fontSize: 10, color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText }}>
              {message.time}
            </span>
          </div>
          <div style={{ fontSize: 11, color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText }}>
            {message.role}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 12, lineHeight: 1.4, opacity: 0.9 }}>
        {message.text}
      </div>

      {message.tag && (
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              backgroundColor: `${COLORS.accentPink}18`,
              color: COLORS.accentPink,
              padding: '2px 8px',
              borderRadius: 10,
              fontSize: 10,
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentPink} strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            {message.tag}
          </span>
        </div>
      )}
    </div>
  );
};

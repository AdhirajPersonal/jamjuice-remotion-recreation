import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  showTagline?: boolean;
  taglineText?: string;
  taglineOpacity?: number;
  opacity?: number;
  scale?: number;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  color = '#E85B67',
  showTagline = false,
  taglineText = "the world's first entertainment operating system built for hospitality pros",
  taglineOpacity = 1,
  opacity = 1,
  scale = 1,
}) => {
  const isLarge = size === 'large';
  const fontSize = isLarge ? 54 : size === 'medium' ? 38 : 24;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        transform: `scale(${scale})`,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          lineHeight: 0.88,
          fontWeight: 900,
          color,
          fontSize,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
        }}
      >
        <div>JAM</div>
        <div>JUICE</div>
      </div>

      {showTagline && (
        <span
          style={{
            marginTop: '20px',
            fontSize: isLarge ? 15 : 13,
            fontWeight: 500,
            color: '#242124',
            letterSpacing: '-0.01em',
            textAlign: 'center',
            opacity: taglineOpacity,
            maxWidth: '460px',
            lineHeight: 1.35,
          }}
        >
          {taglineText}
        </span>
      )}
    </div>
  );
};

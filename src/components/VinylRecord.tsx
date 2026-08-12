import React from 'react';

interface VinylRecordProps {
  size?: number;
  rotation?: number;
  labelColor?: string;
  style?: React.CSSProperties;
}

export const VinylRecord: React.FC<VinylRecordProps> = ({
  size = 140,
  rotation = 0,
  labelColor = '#E85B67',
  style = {},
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #222 0%, #111 60%, #050505 100%)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '12%',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '24%',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '36%',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      />

      <div
        style={{
          width: size * 0.35,
          height: size * 0.35,
          borderRadius: '50%',
          backgroundColor: labelColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          border: '2px solid rgba(255,255,255,0.4)',
        }}
      >
        <div
          style={{
            width: size * 0.08,
            height: size * 0.08,
            borderRadius: '50%',
            backgroundColor: '#050505',
          }}
        />
      </div>
    </div>
  );
};

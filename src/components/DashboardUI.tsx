import React from 'react';
import { COLORS } from '../constants/theme';

export interface PaymentRowData {
  id: string;
  artist: string;
  event: string;
  date: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Automated' | 'Paid';
}

interface DashboardUIProps {
  rows: PaymentRowData[];
  mode?: 'dark' | 'light';
  title?: string;
  activeRowIndex?: number;
}

export const DashboardUI: React.FC<DashboardUIProps> = ({
  rows,
  mode = 'dark',
  title = 'Automated Payouts & Booking Management',
  activeRowIndex = 0,
}) => {
  const isDark = mode === 'dark';

  return (
    <div
      style={{
        width: 580,
        borderRadius: 16,
        backgroundColor: isDark ? 'rgba(15, 8, 10, 0.92)' : 'rgba(255, 255, 255, 0.95)',
        border: isDark ? `1px solid ${COLORS.darkCardBorder}` : `1px solid ${COLORS.lightCardBorder}`,
        boxShadow: isDark ? '0 20px 50px rgba(0,0,0,0.7)' : '0 16px 40px rgba(100,20,30,0.1)',
        padding: '18px 22px',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: isDark ? COLORS.darkTextPrimary : COLORS.darkText,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>{title}</div>
          <div style={{ fontSize: 11, color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText, marginTop: 2 }}>
            Real-time status updates & instant settlement
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${COLORS.accentPink}22`,
            color: COLORS.accentPink,
            border: `1px solid ${COLORS.accentPink}44`,
            borderRadius: 20,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          ● Live Sync
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.5fr 1fr 1fr',
          padding: '8px 12px',
          fontSize: 11,
          fontWeight: 700,
          color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText,
          textTransform: 'uppercase',
          borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
          marginBottom: 8,
        }}
      >
        <div>Artist</div>
        <div>Event</div>
        <div>Date</div>
        <div>Amount</div>
        <div style={{ textAlign: 'right' }}>Status</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {rows.map((row, idx) => {
          const isActive = idx === activeRowIndex;
          const statusBg =
            row.status === 'Completed' || row.status === 'Paid'
              ? 'rgba(46, 204, 113, 0.15)'
              : row.status === 'Automated'
              ? `${COLORS.accentPink}22`
              : 'rgba(241, 196, 15, 0.15)';

          const statusColor =
            row.status === 'Completed' || row.status === 'Paid'
              ? '#2ECC71'
              : row.status === 'Automated'
              ? COLORS.accentPink
              : '#F1C40F';

          return (
            <div
              key={row.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 2fr 1.5fr 1fr 1fr',
                alignItems: 'center',
                padding: '10px 12px',
                borderRadius: 8,
                backgroundColor: isActive
                  ? isDark
                    ? 'rgba(232, 91, 103, 0.12)'
                    : 'rgba(232, 91, 103, 0.06)'
                  : 'transparent',
                border: isActive ? `1px solid ${COLORS.accentPink}44` : '1px solid transparent',
                fontSize: 12,
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ fontWeight: 600 }}>{row.artist}</div>
              <div style={{ color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText }}>{row.event}</div>
              <div style={{ color: isDark ? COLORS.darkTextSecondary : COLORS.mutedText }}>{row.date}</div>
              <div style={{ fontWeight: 700 }}>{row.amount}</div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    backgroundColor: statusBg,
                    color: statusColor,
                    padding: '3px 8px',
                    borderRadius: 12,
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {row.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { smoothEaseOut, smoothEaseInOut } from '../animations/helpers';

const BookingFormView: React.FC = () => {
  return (
    <div
      style={{
        width: 720,
        backgroundColor: '#161618',
        borderRadius: 16,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: 16,
        color: '#FFF',
      }}
    >
      <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
        <div
          style={{
            width: 100,
            height: 74,
            borderRadius: 8,
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 8 }}>
            <div>
              <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
                Genre <span style={{ color: '#FA5B78' }}>*</span>
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E22',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  fontSize: 10.5,
                  color: '#FFF',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>🎵 Blues, Brass, Jazz, Soul</span>
                <span style={{ fontSize: 9, opacity: 0.5 }}>˅</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
                Performance Type <span style={{ color: '#FA5B78' }}>*</span>
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E22',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  fontSize: 10.5,
                  color: '#FFF',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>★ Band</span>
                <span style={{ fontSize: 9, opacity: 0.5 }}>˅</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            <div>
              <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
                Job Site <span style={{ color: '#FA5B78' }}>*</span>
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E22',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  fontSize: 10,
                  color: '#FFF',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>📍 Hoppin Stage</span>
                <span style={{ fontSize: 9, opacity: 0.5 }}>˅</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
                Start Date <span style={{ color: '#FA5B78' }}>*</span>
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E22',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  fontSize: 9.5,
                  color: '#FFF',
                  fontWeight: 500,
                }}
              >
                📅 09/03/2025, 06:00 PM EDT
              </div>
            </div>

            <div>
              <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
                End Date <span style={{ color: '#FA5B78' }}>*</span>
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E22',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '6px 8px',
                  fontSize: 9.5,
                  color: '#FFF',
                  fontWeight: 500,
                }}
              >
                📅 09/03/2025, 11:00 PM EDT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: 12,
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        <div style={{ padding: '6px 20px', color: '#FFF', borderBottom: '2px solid #FA5B78' }}>
          Manage
        </div>
        <div style={{ padding: '6px 20px', color: '#888' }}>Talent</div>
        <div style={{ padding: '6px 20px', color: '#888' }}>Job Site</div>
        <div style={{ padding: '6px 20px', color: '#888' }}>Reviews</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
            Booking Title <span style={{ color: '#FA5B78' }}>*</span>
          </div>
          <div
            style={{
              backgroundColor: '#1E1E22',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6,
              padding: '8px 12px',
              fontSize: 11,
              color: '#FFF',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Band @ Really Cool Venue</span>
            <span style={{ fontSize: 10, color: '#888' }}>(A)</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 9.5, color: '#A0A0B0', marginBottom: 3 }}>
            Booking Details <span style={{ color: '#FA5B78' }}>*</span>
          </div>
          <div
            style={{
              backgroundColor: '#1E1E22',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6,
              padding: '10px 12px',
              fontSize: 10.5,
              color: '#D0D0DC',
              lineHeight: 1.5,
              minHeight: 70,
              fontFamily: 'monospace',
            }}
          >
            -Dress Professional<br />
            -Valet provided<br />
            -Meal Provided<span style={{ color: '#FA5B78' }}>|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarScheduleView: React.FC = () => {
  const calendarCells = [
    { day: 31, isPrev: true },
    { day: 1 },
    { day: 2, pills: [{ text: 'Solo @ Re 6:00 PM-10:00 PM', color: '#B81F3A' }] },
    { day: 3, pills: [{ text: 'Mr. Jam 5:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 4 },
    { day: 5, pills: [{ text: 'Mr. Jam 8:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 6, pills: [{ text: 'Mr. Jam 7:00 PM-10:00 PM', color: '#2ECC71' }, { text: 'Mr. Jam 10:00 PM-2:30 AM', color: '#2ECC71' }] },
    { day: 7, pills: [{ text: 'Mr. Jam 10:00 PM-2:30 AM', color: '#2ECC71' }] },
    { day: 8 },
    { day: 9, pills: [{ text: 'Solo @ Re 6:00 PM-10:00 PM', color: '#B81F3A' }] },
    { day: 10, pills: [{ text: 'Mr. Jam 5:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 11 },
    { day: 12, pills: [{ text: 'Mr. Jam 8:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 13, pills: [{ text: 'Trio @ Rec 7:00 PM-10:00 PM', color: '#B81F3A' }, { text: 'Mr. Jam 10:00 PM-2:30 AM', color: '#2ECC71' }] },
    { day: 14, pills: [{ text: 'Mr. Jam 10:00 PM-2:30 AM', color: '#2ECC71' }] },
    { day: 15 },
    { day: 16 },
    { day: 17, pills: [{ text: 'Mr. Jam 5:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 18 },
    { day: 19, pills: [{ text: 'Mr. Jam 8:00 PM-10:00 PM', color: '#2ECC71' }] },
    { day: 20, pills: [{ text: 'Mr. Jam 7:00 PM-10:00 PM', color: '#2ECC71' }, { text: 'Mr. Jam 10:00 PM-2:30 AM', color: '#2ECC71' }] },
  ];

  return (
    <div
      style={{
        width: 760,
        backgroundColor: '#12070C',
        borderRadius: 16,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 30px 90px rgba(0,0,0,0.85)',
        padding: 16,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#FFF',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 20, fontWeight: 300, color: '#FFF', letterSpacing: '-0.02em' }}>
          Really Cool Venue Bookings &amp; Offers
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}>
          <div style={{ display: 'flex', backgroundColor: '#1A1A1E', borderRadius: 6, padding: 2 }}>
            <span style={{ padding: '3px 8px', fontSize: 10, cursor: 'pointer' }}>≡</span>
            <span style={{ padding: '3px 8px', fontSize: 10, backgroundColor: '#333', borderRadius: 4, cursor: 'pointer' }}>📅</span>
          </div>
          <button style={{ backgroundColor: '#333', border: 'none', color: '#FFF', padding: '4px 10px', borderRadius: 6, fontSize: 10, fontWeight: 600 }}>All</button>
          <button style={{ backgroundColor: '#1A1A1E', border: 'none', color: '#AAA', padding: '4px 10px', borderRadius: 6, fontSize: 10 }}>Confirmed</button>
          <button style={{ backgroundColor: '#1A1A1E', border: 'none', color: '#AAA', padding: '4px 10px', borderRadius: 6, fontSize: 10 }}>Pending</button>
          <span style={{ fontSize: 10, color: '#AAA', backgroundColor: '#1A1A1E', padding: '4px 10px', borderRadius: 6 }}>Filter By Job Site... ˅</span>
        </div>

        <button
          style={{
            marginTop: 10,
            background: 'linear-gradient(135deg, #FA5B78 0%, #D84D69 100%)',
            border: 'none',
            color: '#FFF',
            fontSize: 10.5,
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: 20,
            boxShadow: '0 4px 16px rgba(250, 91, 120, 0.4)',
          }}
        >
          📄 Generate This Week's Flyer
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <button style={{ backgroundColor: '#1A1A1E', border: '1px solid #333', color: '#FFF', padding: '3px 8px', borderRadius: 4, fontSize: 10 }}>&lt;</button>
          <button style={{ backgroundColor: '#1A1A1E', border: '1px solid #333', color: '#FFF', padding: '3px 8px', borderRadius: 4, fontSize: 10 }}>&gt;</button>
          <button style={{ backgroundColor: '#1A1A1E', border: '1px solid #333', color: '#FFF', padding: '3px 10px', borderRadius: 4, fontSize: 10, fontWeight: 600 }}>Today</button>
        </div>

        <div style={{ fontSize: 18, fontWeight: 700, color: '#FFF' }}>
          September 2025
        </div>

        <div style={{ display: 'flex', border: '1px solid #333', borderRadius: 4, overflow: 'hidden', fontSize: 10 }}>
          <span style={{ padding: '3px 8px', backgroundColor: '#1A1A1E' }}>Day</span>
          <span style={{ padding: '3px 8px', backgroundColor: '#1A1A1E' }}>Week</span>
          <span style={{ padding: '3px 8px', backgroundColor: '#333', fontWeight: 700 }}>Month</span>
          <span style={{ padding: '3px 8px', backgroundColor: '#1A1A1E' }}>List</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, borderBottom: '1px solid #333', paddingBottom: 4, marginBottom: 4 }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} style={{ textAlign: 'center', fontSize: 9.5, fontWeight: 700, color: '#AAA' }}>
            {d}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
        {calendarCells.map((cell, idx) => (
          <div
            key={idx}
            style={{
              height: 48,
              backgroundColor: '#18181C',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 4,
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: 8.5, color: cell.isPrev ? '#555' : '#AAA', textAlign: 'right', fontWeight: 600 }}>
              {cell.day}
            </div>

            {cell.pills && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {cell.pills.map((pill, pi) => (
                  <div
                    key={pi}
                    style={{
                      backgroundColor: pill.color,
                      color: '#FFF',
                      fontSize: 6.5,
                      fontWeight: 700,
                      padding: '1px 3px',
                      borderRadius: 3,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    • {pill.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Scene09_PaymentManagement: React.FC = () => {
  const frame = useCurrentFrame();

  const slideInY = interpolate(frame, [0, 24], [800, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const dashboardOpacity = interpolate(frame, [30, 42], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const bookingFormOpacity = interpolate(frame, [36, 48], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const formExitOpacity = interpolate(frame, [68, 80], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  const calendarOpacity = interpolate(frame, [74, 86], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseInOut,
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        background: 'linear-gradient(135deg, #FFE0E6 0%, #FFC0CB 50%, #FFA4B8 100%)',
      }}
    >
      {frame < 44 && (
        <div
          style={{
            position: 'absolute',
            opacity: dashboardOpacity,
            transform: `translateY(${slideInY}px)`,
          }}
        >
          <div
            style={{
              width: 680,
              height: 480,
              backgroundColor: '#10050A',
              borderRadius: 20,
              border: '2px solid #FA5B78',
              boxShadow: '0 30px 90px rgba(0,0,0,0.45)',
              overflow: 'hidden',
              display: 'flex',
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
              <svg width="14" height="14" fill="none" stroke="#FA5B78" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/></svg>
              <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <svg width="14" height="14" fill="none" stroke="#FFF" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  height: 42,
                  backgroundColor: '#0D0408',
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

              <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div
                  style={{
                    backgroundColor: 'rgba(250, 91, 120, 0.12)',
                    border: '1px solid rgba(250, 91, 120, 0.25)',
                    borderRadius: 8,
                    padding: '8px 12px',
                    fontSize: 10,
                    color: '#FA5B78',
                    fontWeight: 500,
                  }}
                >
                  JamJuice is in open beta! Please let us know if you have any issues or suggestions, and thank you for your support!
                </div>

                <div style={{ fontSize: 22, fontWeight: 300, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  Hello, Andrew
                </div>

                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>
                    Your Upcoming Bookings
                  </div>
                  <div style={{ fontSize: 9.5, color: '#FA5B78', fontWeight: 600, marginTop: 2 }}>
                    16 bookings from Sep 05, 2025 to Oct 05, 2025
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFF' }} />
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#FFF' }}>
                      Saturday, September 6, 2025
                    </div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>1 Booking</div>
                  </div>

                  <div style={{ paddingLeft: 16 }}>
                    <div
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        borderRadius: 4,
                        padding: '2px 8px',
                        fontSize: 8.5,
                        color: 'rgba(255,255,255,0.6)',
                        marginBottom: 8,
                      }}
                    >
                      9:00 PM – 11:00 PM
                    </div>

                    <div
                      style={{
                        backgroundColor: '#180A12',
                        borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div
                          style={{
                            width: 70,
                            height: 48,
                            borderRadius: 8,
                            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#FFF' }}>
                            Solo @ Really Cool Venue
                          </div>
                          <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>
                            📅 Sep 6, 2025, 4:00 AM – 6:00 AM
                          </div>
                          <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>
                            📍 Really Cool Venue · Hoppin Stage
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div
                            style={{
                              width: 24,
                              height: 24,
                              borderRadius: 6,
                              backgroundColor: '#FA5B78',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 12,
                            }}
                          >
                            🧃
                          </div>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#FFF' }}>Mr. Jam</div>
                            <div style={{ fontSize: 8, color: '#FFB800' }}>★ 5.0 · 2 performances</div>
                          </div>
                        </div>

                        <div
                          style={{
                            backgroundColor: '#2ECC71',
                            color: '#FFF',
                            fontSize: 8.5,
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: 10,
                          }}
                        >
                          Booking Confirmed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {frame >= 32 && frame < 82 && (
        <div
          style={{
            position: 'absolute',
            opacity: bookingFormOpacity * formExitOpacity,
          }}
        >
          <BookingFormView />
        </div>
      )}

      {frame >= 70 && (
        <div
          style={{
            position: 'absolute',
            opacity: calendarOpacity,
          }}
        >
          <CalendarScheduleView />
        </div>
      )}
    </div>
  );
};

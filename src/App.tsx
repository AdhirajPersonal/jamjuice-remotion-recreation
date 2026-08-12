import React, { useRef, useState } from 'react';
import { Player, PlayerRef } from '@remotion/player';
import { MainTemplate } from './template';
import { VIDEO_CONFIG, COLORS } from './constants/theme';
import { SCENES } from './constants/timeline';

export const App: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [currentScene, setCurrentScene] = useState<string>('openingQuestion');

  const sceneList = [
    { id: 'openingQuestion', label: '01. Opening', frame: SCENES.openingQuestion.startFrame },
    { id: 'painPoints', label: '02. Pain Points', frame: SCENES.painPoints.startFrame },
    { id: 'brandReveal', label: '04. Brand Reveal', frame: SCENES.brandReveal.startFrame },
    { id: 'talentProfile', label: '06. Talent Profile', frame: SCENES.talentProfile.startFrame },
    { id: 'talentDiscovery', label: '07. Talent Grid', frame: SCENES.talentDiscovery.startFrame },
    { id: 'noInvoices', label: '08. No Invoices', frame: SCENES.noInvoices.startFrame },
    { id: 'paymentManagement', label: '09. Dashboard', frame: SCENES.paymentManagement.startFrame },
    { id: 'autoFlyers', label: '13. Auto Flyers', frame: SCENES.autoFlyers.startFrame },
    { id: 'orangeCTA', label: '15. Orange CTA', frame: SCENES.orangeCTA.startFrame },
  ];

  const handleSeekToScene = (id: string, frame: number) => {
    setCurrentScene(id);
    if (playerRef.current) {
      playerRef.current.seekTo(frame);
      playerRef.current.play();
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#050505',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 20px 60px 20px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >

      <header
        style={{
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '30px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${COLORS.accentPink} 0%, ${COLORS.deepBurgundy} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 15px ${COLORS.accentPinkGlow}`,
            }}
          >
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#FFF' }} />
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '0.04em', color: COLORS.accentPink }}>
              JAM JUICE
            </div>
            <div style={{ fontSize: '11px', color: COLORS.mutedText, marginTop: '2px' }}>
              Product Launch Presentation Showcase
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/out/video.mp4"
            download="jamjuice-product-launch.mp4"
            style={{
              backgroundColor: 'rgba(232, 91, 103, 0.15)',
              color: COLORS.accentPink,
              border: `1px solid ${COLORS.accentPink}44`,
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            ⬇ Download MP4 Video
          </a>
        </div>
      </header>


      <main
        style={{
          width: '100%',
          maxWidth: '920px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(232, 91, 103, 0.25)',
            border: '1px solid rgba(232, 91, 103, 0.3)',
            backgroundColor: '#000',
          }}
        >
          <Player
            ref={playerRef}
            component={MainTemplate}
            durationInFrames={VIDEO_CONFIG.durationInFrames}
            compositionWidth={VIDEO_CONFIG.width}
            compositionHeight={VIDEO_CONFIG.height}
            fps={VIDEO_CONFIG.fps}
            controls
            autoPlay
            loop
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>


        <div style={{ marginTop: '28px', width: '100%', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: COLORS.darkTextSecondary,
              marginBottom: '12px',
            }}
          >
            Jump To Scene
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {sceneList.map((sc) => {
              const isActive = currentScene === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSeekToScene(sc.id, sc.frame)}
                  style={{
                    backgroundColor: isActive ? COLORS.accentPink : 'rgba(255, 255, 255, 0.06)',
                    color: isActive ? '#FFFFFF' : COLORS.darkTextSecondary,
                    border: isActive ? `1px solid ${COLORS.accentPink}` : '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {sc.label}
                </button>
              );
            })}
          </div>
        </div>


        <div
          style={{
            marginTop: '40px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 800, color: COLORS.accentPink, marginBottom: '6px' }}>
              Clean Remotion Integration
            </div>
            <div style={{ fontSize: '12px', color: COLORS.darkTextSecondary, lineHeight: '1.5' }}>
              Built with modular React + TypeScript components. Rendered frame-by-frame with deterministic animations.
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 800, color: COLORS.pinkHighlight, marginBottom: '6px' }}>
              3D Perspective & Depth
            </div>
            <div style={{ fontSize: '12px', color: COLORS.darkTextSecondary, lineHeight: '1.5' }}>
              CSS 3D transforms (`rotateX`, `rotateY`, `translateZ`, `perspective`) creating camera depth across UI cards.
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#2ECC71', marginBottom: '6px' }}>
              16 Dynamic Scenes
            </div>
            <div style={{ fontSize: '12px', color: COLORS.darkTextSecondary, lineHeight: '1.5' }}>
              Alternating Light and Dark modes with kinetic typography, floating pain point pills, SaaS marketplace, auto-flyers, and retro vinyl CTA.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

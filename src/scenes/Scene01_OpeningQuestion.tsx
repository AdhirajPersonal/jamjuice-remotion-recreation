import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { Background } from '../components/Background';
import { smoothEaseOut } from '../animations/helpers';

export const Scene01_OpeningQuestion: React.FC = () => {
  const frame = useCurrentFrame();

  const line1Words = ['Ever', 'feel', 'like', 'booking', 'live', 'music'];
  const line2Part1Words = ['is', 'more', 'of', 'a', 'hassle'];
  const line2Part2Words = ['than', 'it', 'is', 'worth?'];

  const line1Y = interpolate(frame, [20, 26], [0, -35], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const line1Opacity = interpolate(frame, [21, 26], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const line2Shift = interpolate(frame, [34, 44], [42, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const part2SlideX = interpolate(frame, [34, 44], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const part2Opacity = interpolate(frame, [34, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const splitProgress = interpolate(frame, [46, 56], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const splitScale = interpolate(splitProgress, [0, 1], [1, 1.1]);
  const splitOpacity = interpolate(frame, [48, 56], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const part1SplitX = -splitProgress * 280;
  const part2SplitX = splitProgress * 280;

  const pillFlipProgress = interpolate(frame, [52, 62], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const pillRotateY = (1 - pillFlipProgress) * -180;
  const pillScale = interpolate(pillFlipProgress, [0, 1], [0.6, 1]);
  const pillOpacity = interpolate(frame, [52, 57], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const fullPillText = 'Most hospitality teams';
  const charCount = Math.floor(
    interpolate(frame, [54, 66], [0, fullPillText.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );
  const typedPillText = fullPillText.slice(0, charCount);

  const dashLen = interpolate(frame, [60, 72], [2, 65], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const travelDistance = Math.max(0, frame - 62) * 4.6;
  const initialOffset = 210 + travelDistance;

  const collapseProgress = interpolate(frame, [216, 234], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const buttonMorphProgress = interpolate(frame, [216, 248], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const buttonWidth = interpolate(buttonMorphProgress, [0, 1], [220, 140]);
  const text1Y = interpolate(buttonMorphProgress, [0, 1], [0, -32]);
  const text1Opacity = interpolate(buttonMorphProgress, [0, 0.7], [1, 0]);
  const text2Y = interpolate(buttonMorphProgress, [0, 1], [32, 0]);
  const text2Opacity = interpolate(buttonMorphProgress, [0.3, 1], [0, 1]);

  const zoomBlurProgress = interpolate(frame, [260, 280], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: smoothEaseOut,
  });

  const mainZoomScale = interpolate(zoomBlurProgress, [0, 1], [1, 0.35]);
  const mainBlur = interpolate(zoomBlurProgress, [0, 1], [0, 14]);
  const mainContainerOpacity = interpolate(zoomBlurProgress, [0.4, 1], [1, 0]);

  const floatingPills = [
    { text: 'juggle spreadsheets', targetLeft: 14, targetTop: 28, startFrame: 90 },
    { text: 'DMs', targetLeft: 70, targetTop: 78, startFrame: 132 },
    { text: 'late invoices', targetLeft: 72, targetTop: 20, startFrame: 168 },
    { text: 'wasting hours', targetLeft: 18, targetTop: 74, startFrame: 204 },
  ];

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
        backgroundColor: '#FFF9F8',
        perspective: 800,
        opacity: mainContainerOpacity,
        filter: `blur(${mainBlur}px)`,
      }}
    >
      <Background mode="light" />

      {frame < 28 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
          }}
        >
          {line1Words.map((word, i) => {
            const wordStart = i * 2.2;
            const wordOpacity = interpolate(frame, [wordStart, wordStart + 5], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const wordOffsetY = interpolate(frame, [wordStart, wordStart + 5], [6, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: smoothEaseOut,
            });

            const isPink = word === 'booking';

            return (
              <span
                key={i}
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                  color: isPink ? '#DF4B5A' : '#1A1819',
                  opacity: wordOpacity,
                  transform: `translateY(${wordOffsetY}px)`,
                  display: 'inline-block',
                  letterSpacing: '-0.01em',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}

      {frame >= 22 && frame < 58 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            opacity: splitOpacity,
            transform: `scale(${splitScale})`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transform: `translateX(${line2Shift + part1SplitX}px)`,
            }}
          >
            {line2Part1Words.map((word, i) => {
              const wordStart = 22 + i * 2.2;
              const wordOpacity = interpolate(frame, [wordStart, wordStart + 5], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const wordOffsetY = interpolate(frame, [wordStart, wordStart + 5], [6, 0], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: smoothEaseOut,
              });

              const isPink = word === 'hassle';

              return (
                <span
                  key={i}
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    color: isPink ? '#DF4B5A' : '#1A1819',
                    opacity: wordOpacity,
                    transform: `translateY(${wordOffsetY}px)`,
                    display: 'inline-block',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {frame >= 34 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: part2Opacity,
                transform: `translateX(${part2SlideX + part2SplitX}px)`,
              }}
            >
              {line2Part2Words.map((word, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    color: '#1A1819',
                    display: 'inline-block',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {floatingPills.map((fp, idx) => {
        if (frame < fp.startFrame) return null;
        const popProgress = interpolate(frame, [fp.startFrame, fp.startFrame + 14], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: smoothEaseOut,
        });

        const scale = interpolate(
          collapseProgress,
          [0, 1],
          [interpolate(popProgress, [0, 1], [0.3, 1]), 0]
        );
        const opacity = interpolate(
          collapseProgress,
          [0, 0.8],
          [interpolate(popProgress, [0, 0.4], [0, 1]), 0]
        );

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: `${fp.targetLeft}%`,
              top: `${fp.targetTop}%`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex: 15,
              padding: '7px 18px',
              borderRadius: 20,
              background: 'linear-gradient(135deg, #F87B7B 0%, #FA9E80 50%, #FBB885 100%)',
              color: '#FFFFFF',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(248, 123, 123, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
            }}
          >
            {fp.text}
          </div>
        );
      })}

      {frame >= 52 && (
        <div
          style={{
            position: 'absolute',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pillOpacity,
            transform: `scale(${pillScale * mainZoomScale}) rotateY(${pillRotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: buttonWidth,
              height: 48,
              borderRadius: 24,
              background: 'linear-gradient(180deg, #4F0A18 0%, #30040E 100%)',
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.35), 0 8px 24px rgba(60, 6, 18, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                transform: `translateY(${text1Y}px)`,
                opacity: text1Opacity,
                whiteSpace: 'nowrap',
              }}
            >
              {typedPillText}
            </span>

            <span
              style={{
                position: 'absolute',
                transform: `translateY(${text2Y}px)`,
                opacity: text2Opacity,
                whiteSpace: 'nowrap',
              }}
            >
              every week
            </span>

            {frame >= 60 && frame < 216 && (
              <svg
                width="236"
                height="64"
                viewBox="0 0 236 64"
                style={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  pointerEvents: 'none',
                  overflow: 'visible',
                }}
              >
                <rect
                  x="4"
                  y="4"
                  width="228"
                  height="56"
                  rx="28"
                  fill="none"
                  stroke="#1A1819"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={`${dashLen} ${260 - dashLen} ${dashLen} ${260 - dashLen}`}
                  strokeDashoffset={initialOffset}
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

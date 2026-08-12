import React from 'react';
import { interpolate } from 'remotion';
import { COLORS } from '../constants/theme';
import { smoothEaseOut } from '../animations/helpers';

interface AnimatedTextProps {
  text: string;
  frame: number;
  startFrame?: number;
  staggerFrames?: number;
  highlightWords?: string[];
  highlightColor?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
  textAlign?: 'center' | 'left' | 'right';
  lineHeight?: number;
  maxWidth?: number | string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  frame,
  startFrame = 0,
  staggerFrames = 2.5,
  highlightWords = [],
  highlightColor = COLORS.accentPink,
  textColor = COLORS.darkText,
  fontSize = 34,
  fontWeight = 800,
  textAlign = 'center',
  lineHeight = 1.25,
  maxWidth = 640,
}) => {
  const words = text.split(' ');

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
        alignItems: 'center',
        textAlign,
        maxWidth,
        lineHeight,
        margin: '0 auto',
      }}
    >
      {words.map((word, index) => {
        const wordStart = startFrame + index * staggerFrames;
        const progress = interpolate(frame, [wordStart, wordStart + 10], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: smoothEaseOut,
        });

        const opacity = progress;
        const translateY = (1 - progress) * 18;

        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '').toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord || word.toLowerCase().includes(hw.toLowerCase())
        );

        const currentWordColor = isHighlighted ? highlightColor : textColor;

        return (
          <span
            key={`${word}-${index}`}
            style={{
              display: 'inline-block',
              fontSize,
              fontWeight: isHighlighted ? 900 : fontWeight,
              color: currentWordColor,
              marginRight: `${fontSize * 0.26}px`,
              marginBottom: `${fontSize * 0.12}px`,
              opacity,
              transform: `translateY(${translateY}px)`,
              letterSpacing: '-0.02em',
              textShadow: isHighlighted ? `0 0 20px ${COLORS.accentPinkGlow}` : 'none',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

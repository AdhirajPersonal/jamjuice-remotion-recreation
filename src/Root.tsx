import React from 'react';
import { Composition } from 'remotion';
import { MainTemplate } from './template';
import { VIDEO_CONFIG } from './constants/theme';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainComposition"
        component={MainTemplate}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
        defaultProps={{}}
      />
    </>
  );
};

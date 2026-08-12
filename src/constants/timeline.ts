export interface SceneConfig {
  id: string;
  startFrame: number;
  endFrame: number;
  durationInFrames: number;
}

export const SCENES = {
  openingQuestion: { id: 'openingQuestion', startFrame: 0, endFrame: 300, durationInFrames: 300 },
  painPoints: { id: 'painPoints', startFrame: 300, endFrame: 434, durationInFrames: 134 },
  whatIf: { id: 'whatIf', startFrame: 300, endFrame: 434, durationInFrames: 134 },
  brandReveal: { id: 'brandReveal', startFrame: 434, endFrame: 554, durationInFrames: 120 },
  darkTransition: { id: 'darkTransition', startFrame: 554, endFrame: 659, durationInFrames: 105 },
  talentProfile: { id: 'talentProfile', startFrame: 659, endFrame: 759, durationInFrames: 100 },
  talentDiscovery: { id: 'talentDiscovery', startFrame: 759, endFrame: 894, durationInFrames: 135 },
  noInvoices: { id: 'noInvoices', startFrame: 894, endFrame: 986, durationInFrames: 92 },
  paymentManagement: { id: 'paymentManagement', startFrame: 986, endFrame: 1086, durationInFrames: 100 },
  promotions: { id: 'promotions', startFrame: 1086, endFrame: 1186, durationInFrames: 100 },
  pricing: { id: 'pricing', startFrame: 1186, endFrame: 1276, durationInFrames: 90 },
  faqInterface: { id: 'faqInterface', startFrame: 1276, endFrame: 1364, durationInFrames: 88 },
  autoFlyers: { id: 'autoFlyers', startFrame: 1364, endFrame: 1444, durationInFrames: 80 },
  messages: { id: 'messages', startFrame: 1444, endFrame: 1544, durationInFrames: 100 },
  orangeCTA: { id: 'orangeCTA', startFrame: 1544, endFrame: 1624, durationInFrames: 80 },
  outro: { id: 'outro', startFrame: 1624, endFrame: 1700, durationInFrames: 76 },
} as const;

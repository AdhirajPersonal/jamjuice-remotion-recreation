import React from 'react';
import { Sequence, Audio, staticFile } from 'remotion';
import { SCENES } from './constants/timeline';
import { Scene01_OpeningQuestion } from './scenes/Scene01_OpeningQuestion';
import { Scene03_WhatIf } from './scenes/Scene03_WhatIf';
import { Scene04_BrandReveal } from './scenes/Scene04_BrandReveal';
import { Scene05_DarkTransition } from './scenes/Scene05_DarkTransition';
import { Scene06_TalentProfile } from './scenes/Scene06_TalentProfile';
import { Scene07_TalentDiscovery } from './scenes/Scene07_TalentDiscovery';
import { Scene08_NoInvoices } from './scenes/Scene08_NoInvoices';
import { Scene09_PaymentManagement } from './scenes/Scene09_PaymentManagement';
import { Scene10_Promotions } from './scenes/Scene10_Promotions';
import { Scene11_Pricing } from './scenes/Scene11_Pricing';
import { Scene12_FAQInterface } from './scenes/Scene12_FAQInterface';
import { Scene13_AutoFlyers } from './scenes/Scene13_AutoFlyers';
import { Scene14_Messages } from './scenes/Scene14_Messages';
import { Scene15_OrangeCTA } from './scenes/Scene15_OrangeCTA';
import { Scene16_Outro } from './scenes/Scene16_Outro';

export const MainTemplate: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#FFF9F8',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <Audio src={staticFile('bg-music.mp3')} volume={1.0} loop />

      <Sequence
        from={SCENES.openingQuestion.startFrame}
        durationInFrames={SCENES.openingQuestion.durationInFrames}
        name="01-OpeningQuestion"
      >
        <Scene01_OpeningQuestion />
      </Sequence>

      <Sequence
        from={SCENES.whatIf.startFrame}
        durationInFrames={SCENES.whatIf.durationInFrames}
        name="03-WhatIf"
      >
        <Scene03_WhatIf />
      </Sequence>

      <Sequence
        from={SCENES.brandReveal.startFrame}
        durationInFrames={SCENES.brandReveal.durationInFrames}
        name="04-BrandReveal"
      >
        <Scene04_BrandReveal />
      </Sequence>

      <Sequence
        from={SCENES.darkTransition.startFrame}
        durationInFrames={SCENES.darkTransition.durationInFrames}
        name="05-DarkTransition"
      >
        <Scene05_DarkTransition />
      </Sequence>

      <Sequence
        from={SCENES.talentProfile.startFrame}
        durationInFrames={SCENES.talentProfile.durationInFrames}
        name="06-TalentProfile"
      >
        <Scene06_TalentProfile />
      </Sequence>

      <Sequence
        from={SCENES.talentDiscovery.startFrame}
        durationInFrames={SCENES.talentDiscovery.durationInFrames}
        name="07-TalentDiscovery"
      >
        <Scene07_TalentDiscovery />
      </Sequence>

      <Sequence
        from={SCENES.noInvoices.startFrame}
        durationInFrames={SCENES.noInvoices.durationInFrames}
        name="08-NoInvoices"
      >
        <Scene08_NoInvoices />
      </Sequence>

      <Sequence
        from={SCENES.paymentManagement.startFrame}
        durationInFrames={SCENES.paymentManagement.durationInFrames}
        name="09-PaymentManagement"
      >
        <Scene09_PaymentManagement />
      </Sequence>

      <Sequence
        from={SCENES.promotions.startFrame}
        durationInFrames={SCENES.promotions.durationInFrames}
        name="10-Promotions"
      >
        <Scene10_Promotions />
      </Sequence>

      <Sequence
        from={SCENES.pricing.startFrame}
        durationInFrames={SCENES.pricing.durationInFrames}
        name="11-Pricing"
      >
        <Scene11_Pricing />
      </Sequence>

      <Sequence
        from={SCENES.faqInterface.startFrame}
        durationInFrames={SCENES.faqInterface.durationInFrames}
        name="12-FAQInterface"
      >
        <Scene12_FAQInterface />
      </Sequence>

      <Sequence
        from={SCENES.autoFlyers.startFrame}
        durationInFrames={SCENES.autoFlyers.durationInFrames}
        name="13-AutoFlyers"
      >
        <Scene13_AutoFlyers />
      </Sequence>

      <Sequence
        from={SCENES.messages.startFrame}
        durationInFrames={SCENES.messages.durationInFrames}
        name="14-Messages"
      >
        <Scene14_Messages />
      </Sequence>

      <Sequence
        from={SCENES.orangeCTA.startFrame}
        durationInFrames={SCENES.orangeCTA.durationInFrames}
        name="15-OrangeCTA"
      >
        <Scene15_OrangeCTA />
      </Sequence>

      <Sequence
        from={SCENES.outro.startFrame}
        durationInFrames={SCENES.outro.durationInFrames}
        name="16-Outro"
      >
        <Scene16_Outro />
      </Sequence>
    </div>
  );
};

export default MainTemplate;

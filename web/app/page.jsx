import React from 'react';
import {
  MenuSection,
  AssortmentSection,
  AboutSection,
  AdvantagesSection,
  FeedbackSection,
  HandMadeSection,
} from './sections';

export default function Home() {
  return (
    <main>
      <MenuSection />
      <AssortmentSection />
      <AboutSection />
      <AdvantagesSection />
      <FeedbackSection />
      <HandMadeSection />
    </main>
  );
}

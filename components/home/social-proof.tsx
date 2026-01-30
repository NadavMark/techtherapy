import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { color } from 'framer-motion';

const partners = [
  { name: 'אקים ישראל', image: '/inst_logos/akim.png' },
  { name: 'עלה-מוריה', image: '/inst_logos/aleh-moria.png' },
  { name: 'manishma.app', image: '/inst_logos/manishma.png' },
  { name: 'מטב', image: '/inst_logos/matav.png' },
  { name: 'כלים שלובים', image: '/inst_logos/kelim-meshalvim.png' },
  { name: 'שירדיו', image: '/inst_logos/shiradio.png' },
  { name: 'יוניפר קייר', image: '/inst_logos/uniper Care.png' },
];

export function SocialProof() {
  return (
    <SectionWrapper>
      <AnimatedWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-teal md:text-4xl">
          שיתופי פעולה ופרוייקטים נוספים
        </h2>
      </AnimatedWrapper>

      <div className="overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <AnimatedWrapper key={partner.name} delay={index * 0.1} className="w-36 sm:w-48">
              <div className="flex h-32 flex-col items-center justify-center rounded-lg  p-4 transition-all hover:shadow-md">
                <div className="relative mb-1 h-20 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center text-sm font-semibold text-gray-600">
                  {partner.name}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>

      <AnimatedWrapper delay={0.6}>
        <p className="mt-12 text-center text-gray-600">
          עובדים בשיתוף פעולה עם ארגונים מובילים בתחום הנגישות והתעסוקה
        </p>
      </AnimatedWrapper>
    </SectionWrapper>
  );
}
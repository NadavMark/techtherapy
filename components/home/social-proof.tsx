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
  { name: 'יוניפר קייר', image: '/inst_logos/uniper_Care.png' },
  { name: 'משרד הביטחון', image: '/inst_logos/mis_def_families.webp', scaleClass: 'scale-125 md:scale-150' },
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <AnimatedWrapper key={partner.name} delay={index * 0.1} className="w-40 sm:w-48">
              <div className="group flex h-36 flex-col items-center justify-center rounded-lg p-4 transition-all hover:bg-gray-50 hover:shadow-md">
                <div className="relative mb-3 h-24 w-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className={`object-contain transition-transform duration-300 group-hover:scale-110 ${partner.scaleClass || ''}`}
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
          לאורך השנים עבדתי עם לקוחות, עמותות, וארגונים שוונים בתחום הנהנגשה הטכנולוגית, הדרכה וטיפול רגשי</p>
      </AnimatedWrapper>
    </SectionWrapper>
  );
}
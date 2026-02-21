import React from 'react';
import Link from 'next/link';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-dark-teal via-dark-teal to-pacific-blue px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedWrapper>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            גשר לעולם הדיגיטלי – מיומנויות טכנולוגיות בגישה טיפולית
          </h1>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <p className="mb-8 text-lg leading-relaxed md:text-xl lg:text-2xl text-white/90">
            שימוש בסמארטפון ומחשב וטיפול רגשי מקוון באמצעות כלים דיגיטליים
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.4}>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-magenta-bloom px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-magenta-bloom focus:ring-offset-2 focus:ring-offset-dark-teal"
          >
            לתיאום שיחת היכרות
          </Link>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.6}>
          <p className="mt-8 text-sm text-white/70">
            להתפתח וללמוד עם המחשב והסמרטפון
          </p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}

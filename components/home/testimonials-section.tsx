'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { image: '/testimonials/Knrt1.png', alt: 'המלצה 1' },
  { image: '/testimonials/Screenshot 2023-01-04 181527.png', alt: 'המלצה 2' },
  { image: '/testimonials/Uniper.jpeg', alt: 'המלצה 3' },
  { image: '/testimonials/gw_1.png', alt: 'המלצה 4' },
  { image: '/testimonials/personal_1.png', alt: 'המלצה 5' },
  { image: '/testimonials/whatsapp_2.JPG', alt: 'המלצה 6' },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: 'rtl',
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <SectionWrapper className="bg-gradient-to-br from-dark-teal via-dark-teal to-pacific-blue">
      <AnimatedWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          המלצות
        </h2>
      </AnimatedWrapper>

      <div className="relative mx-auto max-w-4xl">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] px-4 md:px-12 flex justify-center items-center py-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute start-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pacific-blue"
          aria-label="המלצה קודמת"
        >
          <ChevronRight className="h-6 w-6 text-dark-teal" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute end-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pacific-blue"
          aria-label="המלצה הבאה"
        >
          <ChevronLeft className="h-6 w-6 text-dark-teal" />
        </button>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-pacific-blue focus:outline-none focus:ring-2 focus:ring-pacific-blue"
              aria-label={`עבור להמלצה ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatedWrapper delay={0.4}>

      </AnimatedWrapper>
    </SectionWrapper>
  );
}

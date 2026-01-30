import React from 'react';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { Smartphone, Briefcase, Music, HeartHandshake } from 'lucide-react';

const courses = [
  {
    icon: Smartphone,
    title: 'עצמאות דיגיטלית',
    description: 'שימוש יומיומי בסמארטפון, אבטחת מידע אישי ופרטיות, יצירת קשר עם סביבה.',
    highlights: [
      'שימוש בסיסי ומתקדם בסמארטפון',
      'התמצאות ושימוש בתחבורה ציבורית',
      'בטיחות ופרטיות ברשת',
      'התנהגות מותאמת ברשתות חברתיות',
    ],
  },
  {
    icon: Briefcase,
    title: 'כישורי מחשב ותעסוקה',
    description: 'שימוש במחשב, Zoom, ומיומנויות תעסוקתיות.',
    highlights: [
      'שימוש בתוכנות Google, Office',
      'שיחות וידאו',
      'הכנה לעולם התעסוקה',
      'כתיבת קורות חיים ומכתבי מוטיבציה',
    ],
  },
  {
    icon: Music,
    title: 'חדשנות, מוזיקה ופנאי',
    description: 'יצירה באמצעות AI, עריכת מוזיקה, ופיתוח תחביבים דיגיטליים.',
    highlights: [
      'יצירת אמנות ב-AI',
      'עריכת מוזיקה ו-DJ',
      'כלי יצירה דיגיטליים',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'טיפול רגשי',
    description: 'תמיכה ועיבוד רגשיים באמצעות כלים טכנולוגיים, רכישת מיומנויות לצמיחה והתמודדות עם קשיים.',
    highlights: [
      'למידת כלים טכנולוגיים',
      'ויסות רגשי',
      'יצירה וביטוי עצמי',
      'פיתוח מיומנויות חברתיות',
    ],
    link: '/therapy',
  }
];

export function CoursesOverview() {
  return (
    <SectionWrapper className="bg-gradient-to-br from-dark-teal via-dark-teal to-pacific-blue">
      <AnimatedWrapper>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          מסלולי הלימוד
        </h2>
      </AnimatedWrapper>

      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <AnimatedWrapper key={course.title} delay={index * 0.15}>
              <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="inline-block rounded-full bg-pacific-blue/10 p-3">
                    <Icon className="h-8 w-8 text-pacific-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-teal">{course.title}</h3>
                </div>

                <p className="mb-6 leading-relaxed text-gray-600">{course.description}</p>

                <ul className="mb-6 flex-1 space-y-2">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 text-pacific-blue">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={course.link || '/courses'}
                  className="inline-block rounded-lg border-2 border-pacific-blue bg-white px-6 py-3 text-center font-semibold text-pacific-blue transition-colors hover:bg-pacific-blue hover:text-white focus:outline-none focus:ring-4 focus:ring-pacific-blue/50"
                >
                  למידע נוסף
                </Link>
              </div>
            </AnimatedWrapper>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

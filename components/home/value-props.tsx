import React from 'react';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { UserCheck, Cpu, Accessibility } from 'lucide-react';

const valueProps = [
  {
    icon: UserCheck,
    title: 'מטפל רגשי מוסמך (M.A.A.T)',
    description: 'מטפל רגשי מוסמך עם ניסיון של 20 שנה בעבודה עם אנשים עם צרכים מיוחדים בשלל מסגרות. מיישם גישה קשובה וסבלנית במטרה לעזור ללמשתתפים לצבור ביטחון וסקרנות.',
  },
  {
    icon: Cpu,
    title: 'טכנולוגיה מתקדמת',
    description: 'שימוש בטכנולוגיות חדישות כמו AI, כלי יצירה דיגיטליים ואפליקציות מתקדמות לפיתוח מיומנויות דיגיטליות.',
  },
  {
    icon: Accessibility,
    title: 'נגישות מלאה',
    description: 'כל המסלולים מותאמים באופן אישי למשתתפים ולצרכיהם. הלמידה נעשית בקצב אישי ותוך דגש על חוויית הצלחה, קשב והתאמת התכנים.',
  },
];

export function ValueProps() {
  return (
    <SectionWrapper>
      <div className="grid gap-8 md:grid-cols-3">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon;
          return (
            <AnimatedWrapper key={prop.title} delay={index * 0.15}>
              <div className="flex flex-col items-center rounded-lg bg-white p-8 shadow-lg text-center transition-shadow hover:shadow-xl">
                <div className="mb-4 rounded-full bg-pacific-blue/10 p-4">
                  <Icon className="h-8 w-8 text-pacific-blue" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark-teal">{prop.title}</h3>
                <p className="leading-relaxed text-gray-600">{prop.description}</p>
              </div>
            </AnimatedWrapper>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

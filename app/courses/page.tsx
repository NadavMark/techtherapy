'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { Icon as Iconify } from '@iconify/react';
import { Smartphone, Monitor, Briefcase, Sparkles, CheckCircle2, Clock } from 'lucide-react';

// --- Tool Configuration (From Toolbox Section) ---
// This map helps us render the specific logo for each subject
const toolMap: Record<string, { icon?: string; image?: string; color?: string }> = {
  // AI
  'Google Gemini': { icon: 'logos:google-gemini' },
  'ChatGPT': { icon: 'simple-icons:openai', color: '#10A37F' },
  'Claude': { icon: 'logos:claude-icon' },
  // Office Microsoft
  'Word': { icon: 'vscode-icons:file-type-word' },
  'PowerPoint': { icon: 'vscode-icons:file-type-powerpoint' },
  'Excel': { icon: 'vscode-icons:file-type-excel' },
  // Google Office
  'Google Docs': { icon: 'simple-icons:googledocs', color: '#4285F4' },
  'Google Sheets': { icon: 'simple-icons:googlesheets', color: '#34A853' },
  'Google Slides': { icon: 'simple-icons:googleslides', color: '#F4B400' }, // Added manually based on context
  'Google Drive': { icon: 'logos:google-drive' },
  'Gmail': { icon: 'logos:google-gmail' },
  'Google Calendar': { icon: 'logos:google-calendar' },
  'Google Keep': { icon: 'logos:google-keep' },
  // Creative
  'Spotify': { icon: 'logos:spotify-icon' },
  'YouTube': { icon: 'logos:youtube-icon' },
  'Canva': { icon: 'devicon:canva' },
  'Blender': { icon: 'logos:blender' },
  'Ableton Live': { image: '/live.png' },
  'Suno': { image: '/Suno_Logo_1.png' },
  'VLC': { image: '/vlc_icon.png' },
  // Communication
  'Zoom': { icon: 'logos:zoom-icon' },
  'WhatsApp': { icon: 'logos:whatsapp-icon' },
  'Facebook': { icon: 'logos:facebook' },
  'Instagram': { icon: 'logos:instagram-icon' },
  // Utils
  'Google Search': { icon: 'logos:google-icon' },
  'Chrome': { icon: 'logos:chrome' },
  'Wikipedia': { icon: 'flat-color-icons:wikipedia' },
  'File Explorer': { icon: 'flat-color-icons:folder' },
  'Google Lens': { icon: 'simple-icons:googlelens', color: '#4285F4' },
  'Google Maps': { icon: 'logos:google-maps' },
  'Android': { icon: 'logos:android-icon' },
  'Moovit': { icon: 'simple-icons:moovit', color: '#F04D30' }, // Added for context
  'Waze': { icon: 'logos:waze' }, // Added for context
  'LinkedIn': { icon: 'logos:linkedin-icon' }, // Added for context
  'camera': { icon: 'ic:outline-camera-alt' }, // Added for context
};

// --- Course Data ---
const coursesDetailed = [
  {
    icon: Smartphone,
    title: 'עצמאות דיגיטלית בסמארטפון',
    description: 'סדנא מעשית לשימוש חכם ויעיל במכשיר האישי בחיי היום-יום.',
    duration: 'סדנא יומית / 10 מפגשים',
    modules: [
      {
        subject: 'היכרות ותפעול שוטף (Android)',
        tools: ['Android', 'Google Keep',], 
        items: [
          'הגדרות מכשיר, נגישות ושימוש בסיסי במסך מגע',
          'ניהול אנשי קשר, יומן שיחות וסינון שיחות ספאם',
          'שימוש במצלמה, גלריה וגיבוי תמונות',
          'ניהול התראות וצלילים'
        ]
      },
      {
        subject: 'תקשורת ורשת',
        tools: ['WhatsApp', 'Chrome', 'Google Search'],
        items: [
          'WhatsApp - הודעות, שיחות וידאו, קבוצות וסטטוסים',
          'שימוש בטוח ברשת, זיהוי הונאות ופישינג',
          'גלישה בטוחה וחיפוש מידע בסיסי'
        ]
      },
      {
        subject: 'אפליקציות לחיים עצמאיים',
        tools: ['Google Maps', 'Moovit', 'Google Calendar'],
        items: [
          'ניווט ותחבורה ציבורית (Moovit, Google Maps)',
          'ניהול יומן ותזכורות',
          'שימוש באפליקציות שירות ושמירת מסמכים בנייד'
        ]
      }
    ]
  },
  {
    icon: Monitor,
    title: 'יסודות המחשב והאינטרנט',
    description: 'קורס כניסה לעולם המחשוב, הקניית הרגלי עבודה נכונים ובטיחות ברשת.',
    duration: '10 מפגשים',
    modules: [
      {
        subject: 'הכרת המחשב (סביבת Windows)',
        tools: ['File Explorer'], 
        items: [
          'הכרת המקלדת והעכבר, קיצורים שימושיים',
          'שולחן העבודה, ניהול קבצים ותיקיות',
          'סל המיחזור וחיפוש במחשב',
          'התאמת תצוגה ונגישות'
        ]
      },
      {
        subject: 'גלישה וחיפוש מידע',
        tools: ['Chrome', 'Google Search', 'Wikipedia', 'Google Lens'],
        items: [
          'שימוש בדפדפן Google Chrome',
          'חיפוש יעיל בגוגל (כולל חיפוש קולי ותמונות)',
          'שמירת סימניות וניהול היסטוריה',
          'בטיחות ברשת וגלישה אנונימית'
        ]
      },
      {
        subject: 'דואר אלקטרוני וארגון',
        tools: ['Gmail', 'Google Drive'],
        items: [
          'Gmail - שליחה, קבלה וניהול תיקיות',
          'צירוף קבצים וניהול אנשי קשר',
          'היכרות ראשונית עם Google Drive'
        ]
      }
    ]
  },
  {
    icon: Briefcase,
    title: 'כלים לתעסוקה וניהול משרד',
    description: 'הכשרה מקיפה לשימוש בכלי ענן ועבודה משרדית מודרנית.',
    duration: 'קורס שנתי משולב',
    modules: [
      {
        subject: 'חבילת Google Office Suite',
        tools: ['Google Docs', 'Google Sheets', 'Google Slides', 'Google Drive'],
        items: [
          'Google Docs - עריכת מסמכים, עיצוב ומכתבים',
          'Google Sheets - טבלאות וניהול נתונים בסיסי',
          'Google Slides - יצירת מצגות ועריכה ויזואלית',
          'Google Drive - ארגון, שיתוף קבצים ועבודה בענן'
        ]
      },
      {
        subject: 'מיומנויות לעולם העבודה',
        tools: ['Zoom', 'LinkedIn', 'Gmail'],
        items: [
          'Zoom - ניהול והשתתפות בפגישות מקוונות',
          'כתיבת קורות חיים דיגיטליים',
          'חיפוש עבודה באתרי דרושים ורשתות חברתיות',
          'התנהלות מקצועית במייל וניהול משימות'
        ]
      },
      {
        subject: 'ניהול זמן וארגון',
        tools: ['Google Calendar', 'Google Keep'],
        items: [
          'Google Calendar - ניהול יומן אישי ומקצועי',
          'קביעת פגישות ותזכורות',
          'סנכרון בין המחשב לנייד'
        ]
      }
    ]
  },
  {
    icon: Sparkles,
    title: 'חדשנות, AI ויצירה דיגיטלית',
    description: 'חיבור לטכנולוגיות החדשות ביותר, פיתוח יצירתיות ופנאי.',
    duration: '10 מפגשים / קורס שנתי משולב',
    modules: [
      {
        subject: 'בינה מלאכותית (AI)',
        tools: ['ChatGPT', 'Claude', 'Google Gemini'],
        items: [
          'היכרות עם כלי AI ליצירת טקסט ותוכן',
          'יצירת תמונות ואמנות באמצעות בינה מלאכותית',
          'שימוש בעזרים קוליים ושיפור תוצאות חיפוש'
        ]
      },
      {
        subject: 'יצירה ומדיה',
        tools: ['Canva', 'YouTube', 'Spotify', 'Suno'],
        items: [
          'Canva - עיצוב גרפי, כרטיסי ברכה ותכנים לרשת',
          'YouTube - יצירת פלייליסטים, העלאת תוכן וצריכה נבונה',
          'Spotify ומוזיקה - עריכה וניהול מוזיקה אישית'
        ]
      },
      {
        subject: 'רשתות חברתיות',
        tools: ['Facebook', 'Instagram'],
        items: [
          'Facebook - ניהול פרופיל, קבוצות ודפים',
          'כללי התנהגות ופרטיות ברשתות חברתיות',
          'יצירת תוכן ושיתוף בטוח'
        ]
      }
    ]
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-gray-50/50">
        <SectionWrapper>
          <AnimatedWrapper>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-dark-teal md:text-5xl">
                מסלולי הלימוד
              </h1>
              <p className="mb-16 text-xl text-gray-600 leading-relaxed">
                תכנית הלימודים משלבת הקניית מיומנויות טכנולוגיות חיוניות עם פיתוח אישי ויצירתיות.
                <br className="hidden md:block" />
                כל המסלולים מותאמים לקצב האישי של המשתתפים.
              </p>
            </div>
          </AnimatedWrapper>

          <div className="space-y-12">
            {coursesDetailed.map((course, index) => {
              const Icon = course.icon;
              return (
                <AnimatedWrapper key={course.title} delay={index * 0.1}>
                  {/* Course Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl md:p-10 border border-gray-100">
                    
                    {/* Header Section */}
                    <div className="mb-8 flex items-start gap-6">
                      
                      {/* Icon (Right in RTL) */}
                      <div className="shrink-0">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-pacific-blue/10 text-pacific-blue">
                          <Icon className="h-10 w-10" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title & Description (Middle) */}
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-dark-teal">
                          {course.title}
                        </h2>
                        <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      {/* Duration (Left in RTL) */}
                      <div className="shrink-0">
                        <div className="inline-flex items-center gap-2 rounded-full bg-pacific-blue/10 px-4 py-1.5 text-sm font-semibold text-pacific-blue">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                  

                    {/* Content Section: No boxes, just Headings and Lists */}
                    <div className="space-y-8 pr-2">
                      {course.modules.map((module, mIndex) => (
                        <div key={mIndex} className="relative">
                          
                          {/* Subject Header + Tools */}
                          <div className="flex flex-wrap items-center gap-3 mb-3 border-b border-gray-100 pb-2">
                            <h3 className="text-xl font-bold text-dark-teal">
                              {module.subject}
                            </h3>
                            
                            {/* Render Tool Icons for this Subject */}
                            {module.tools && module.tools.length > 0 && (
                                <div className="flex items-center gap-2 mr-2">
                                    <div className="h-4 w-[1px] bg-gray-300"></div> {/* Divider */}
                                    {module.tools.map((toolName) => {
                                        const toolConfig = toolMap[toolName];
                                        if (!toolConfig) return null;
                                        
                                        return (
                                            <div key={toolName} className="relative group/tooltip" title={toolName}>
                                                {toolConfig.image ? (
                                                    <Image 
                                                        src={toolConfig.image} 
                                                        alt={toolName} 
                                                        width={24} 
                                                        height={24} 
                                                        className="h-6 w-6 object-contain"
                                                    />
                                                ) : (
                                                    <Iconify 
                                                        icon={toolConfig.icon!} 
                                                        className="h-6 w-6" 
                                                        color={toolConfig.color}
                                                        style={!toolConfig.color ? { color: '#555' } : undefined} 
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                          </div>

                          {/* List Items */}
                          <ul className="space-y-2 mr-1">
                            {module.items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-3 text-base text-gray-700">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pacific-blue shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>

          <AnimatedWrapper delay={0.4}>
            <div className="mt-16 text-center">
              <div className="inline-block rounded-2xl bg-dark-teal px-8 py-6 text-white shadow-lg">
                <p className="text-lg font-medium">
                  הקורסים מתקיימים במתכונת קבוצתית או פרטנית, עם דגש על יחס אישי והתאמה לצרכים המיוחדים של כל לומד.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
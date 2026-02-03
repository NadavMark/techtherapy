import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Section 1 — אודות (plain, no box) */}
        <SectionWrapper className="min-h-fit py-8 md:py-12">          <AnimatedWrapper delay={0}>
            <h1 className="mb-8 text-4xl font-bold text-dark-teal md:text-5xl ">אודות Tech-Therapy</h1>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <AnimatedWrapper delay={0.15} className="order-first md:order-last flex justify-center">
              <div className="w-32 h-80 md:w-72 md:h-96 shrink-0">
                <Image
                  src="/portrait.jpeg"
                  alt="תמונה נדב מרק"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 224px, 256px"
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.3} className="order-last md:order-first space-y-4">
              <p className="text-xl leading-relaxed text-gray-700 text-justify">
                שמי נדב מרק, ואני מטפל מוסמך במוזיקה (M.A.A.T) עם התמחות בטיפול באמצעות אמנויות. אני בעל תואר שני בטיפול במוזיקה (בציוני הצטיינות) ותואר ראשון במדעי ההתנהגות, וחבר ביה&quot;ת (האגודה לטיפול באמצעות אמנויות בישראל).
              </p>

              <p className="leading-relaxed text-gray-700 text-justify">
                לאורך שנים של עבודה עם אנשים עם מוגבלויות, מטופלים על הרצף האוטיסטי, קשישים וניצולי שואה, פיתחתי גישה המשלבת את עולם הטיפול הרגשי עם הכלים הטכנולוגיים המתקדמים ביותר. ב-Tech-Therapy, הטכנולוגיה היא לא רק מטרה, אלא שפה – דרך חדשה לתקשר, ליצור ולהרגיש בעל ערך.
              </p>
            </AnimatedWrapper>
          </div>
        </SectionWrapper>


        {/* Section 4 — הגישה שלי (BOX B — dark background) */}
        <SectionWrapper className='py-12'>
          <AnimatedWrapper delay={0}>
            <div className="rounded-2xl bg-dark-teal p-6 md:p-10 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-white">הגישה שלי</h2>
              <p className="leading-relaxed text-white/90 text-justify">
                הדבר החשוב ביותר בלמידה ובטיפול הוא החוויה. כשאנו מרגישים אתגר המותאם לנו, עניין וחוויה חיובית – אנו נהנים, קשובים ופתוחים לצמוח. הגישה שלי מבוססת על התאמה אישית מוחלטת (&quot;Tailor Made&quot;) לכל אדם, לפי תחומי העניין והיכולות שלו, כדי להפוך את המחשב והסמארטפון למקור של הצלחה, סיפוק וחיבור לעולם.
              </p>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>

        {/* Section 2 — מה אני מציעת? (BOX A — light background) */}
        <SectionWrapper className='py-8'>
          <AnimatedWrapper delay={0}>
            <div className="rounded-2xl bg-pacific-blue/10 p-6 md:p-10 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-dark-teal">מה אני מציע?</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">1. למידה והנגשה טכנולוגית (קורסים וסדנאות)</h3>
                  <p className="leading-relaxed text-gray-700 text-justify">
                    אני מקיים שיעורים וקורסים הממוקדים ברכישת מיומנויות לשימוש במחשב ובסמארטפון. המטרה היא להפוך את המכשיר המורכב לכלי נגיש וידידותי בחיי היומיום. הלמידה שמה דגש על יישומים פרקטיים: תקשורת, ניידות, צריכת מידע ושילוב חברתי ותעסוקתי.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80 text-justify">
                    הפורמט: הקורסים והסדנאות מתקיימים באופן פרונטלי (במרכזים, מוסדות או בבית המטופל) וגם באופן מקוון, בהתאם לצורך.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">2. טיפול רגשי מקוון מבוסס טכנולוגיה</h3>
                  <p className="leading-relaxed text-gray-700 text-justify">
                    לצד הלמידה הפרקטית, אני מציע טיפול רגשי פרטני המתרחש במרחב הדיגיטלי. כאן, המחשב הוא לא רק אמצעי תקשורת אלא כלי עוצמתי ליצירה והבעה. באמצעות עבודה עם סאונד, מוזיקה, תוכנות גרפיקה, אנימציה, וכלי בינה מלאכותית (AI), אנו בונים עולמות שלמים ויצירות מורכבות. תהליך זה מאפשר להתמודד עם חסמים תקשורתיים ורגשיים ולמצוא דרכים מיטיבות להתמודדות עם קשיים וסבל בסביבה מוגנת ויצירתית.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80 text-justify">
                    הפורמט: הטיפול הרגשי מתבצע באופן מקוון (Online), מה שמאפשר נגישות מלאה ונוחות מרבית למטופל בסביבתו הטבעית.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>

        {/* Section 3 — למי זה מיועד? (plain, no box) */}
        <SectionWrapper className='py-8'>
          <AnimatedWrapper delay={0}>
            <h2 className="mb-4 text-2xl font-bold text-dark-teal">למי זה מיועד?</h2>
            <p className="leading-relaxed text-gray-700 text-justify">
              הפעילויות והטיפולים ב-Tech-Therapy מיועדים לאנשים עם צרכים מיוחדים, אנשים עם מוגבלויות פיזיות או קוגניטיביות, בני הגיל השלישי, וכל מי שחווה קושי להשתלב במרחב הדיגיטלי או מחפש ערוץ הבעה רגשי חדשני. אני עובד הן עם לקוחות פרטיים והן עם מוסדות, עמותות ומרכזים שיקומיים.
            </p>
          </AnimatedWrapper>
        </SectionWrapper>

      </main>
      <Footer />
    </>
  );
}

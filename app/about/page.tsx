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
        <SectionWrapper className="min-h-fit !py-4 md:!py-6">          <AnimatedWrapper delay={0}>
          <h1 className="mb-8 text-4xl font-bold text-dark-teal md:text-5xl ">אודות Tech-Therapy</h1>
        </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <AnimatedWrapper delay={0.15} className="order-first md:order-last flex justify-center">
              <div className="w-full max-w-sm md:max-w-none md:w-72 md:h-96 shrink-0">
                <Image
                  src="/portrait.jpeg"
                  alt="תמונה נדב מרק"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="h-auto w-full md:h-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.3} className="order-last md:order-first space-y-4">
              <p className="text-xl leading-relaxed text-gray-700 text-justify">
                שמי נדב מרק, אני מטפל מוסמך בעל תואר שני בטיפול במוזיקה (M.A.A.T) ותואר ראשון במדעי ההתנהגות (B.A), וחבר ביה&quot;ת (האגודה לטיפול באמצעות אמנויות בישראל).
              </p>

              <p className="leading-relaxed text-gray-700 text-justify">
                לאורך שנים של עבודה עם אנשים עם מוגבלויות, מטופלים על הרצף האוטיסטי, קשישים וניצולי שואה, ראיתי כיצד יישומים במחשב ובסמרטפון מהווים כלי להבעה רגשית, התמודדות ולמידה.
                באמצעות כלים אלו, אני מאפשר לתלמידים ולמטופלים יכולות חדשות, דרך חדשה לתקשר, ליצור ולהרגיש שייכות וערך.
              </p>
            </AnimatedWrapper>
          </div>
        </SectionWrapper>


        {/* Section 4 — הגישה שלי (BOX B — dark background) */}
        <SectionWrapper className='!py-4 md:!py-6'>
          <AnimatedWrapper delay={0}>
            <div className="rounded-2xl bg-dark-teal p-6 md:p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-white">הגישה שלי</h2>
              <p className="leading-relaxed text-white/90 text-justify">
                הדבר החשוב ביותר בלמידה ובטיפול הוא החוויה. כשאנו מרגישים אתגר המותאם לנו, עניין וחוויה חיובית – אנו נהנים, קשובים ופתוחים לצמוח. הגישה שלי שמה דגש על הקשבה והתאמה לכל אחד ואחת, לפי תחומי העניין והיכולות שלו, צעד אחת צעד, כדי להפוך את המחשב והסמארטפון לכלי המאפשר חקירה, משחק, חוויוה של הצלחה, סיפוק וחיבור לאחרים.
              </p>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>

        {/* Section 2 — מה אני מציע? (BOX A — light background) */}
        <SectionWrapper className='!py-4 md:!py-6'>
          <AnimatedWrapper delay={0}>
            <div className="rounded-2xl bg-pacific-blue/10 p-6 md:p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-dark-teal">מה אני מציע?</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">1. למידה והנגשה טכנולוגית (קורסים וסדנאות)</h3>
                  <p className="leading-relaxed text-gray-700 text-justify">
                    אני מלמד שיעורים וקורסים הממוקדים ברכישת מיומנויות לשימוש במחשב ובסמארטפון באופן יצירתי ומהנה. המטרה היא להפוך את המכשיר לכלי מוכר, מובן נגיש וידידותי בחיי היומיום. הלמידה שמה דגש על יישומים פרקטיים: תקשורת, ניידות, צריכת מידע ושילוב חברתי ותעסוקתי.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80 text-justify">
                    הקורסים והסדנאות מתקיימים באופן פרונטלי (במרכזים, מוסדות או בבית המטופל) וגם באופן מקוון, בהתאם לצורך.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">2. טיפול רגשי מקוון</h3>
                  <p className="leading-relaxed text-gray-700 text-justify">
                    אני מציע טיפול רגשי פרטני המתרחש במרחב הדיגיטלי וברשת. כאן, המחשב הופך לכלי ליצירה והבעה, ארגון וויסות. באמצעות עבודה עם תוכנות מגוונות משלל תחומים -  למטופלים ניתנת מרחב בטוח ליצור, לחוות ולהתבונן. תהליך זה מאפשר לחוות תהליך של למידה והתפתחות רגשית, לצד מיומנויות מעשיות ושימושיות בתחום המחשב והדיגיטל.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80 text-justify">
                    הטיפול הרגשי מתבצע באופן מקוון (בתוכנת ZOOM), ודורש מחשב/לפטופ ומצלמה. לטיפול באופן זה יש יתרונות שונים ודורשים מן המטופל סביבה נוחה ומותאמת לקיום המפגש הטיפולי.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>

        {/* Section 3 — למי זה מיועד? (plain, no box) */}
        <SectionWrapper className='!py-4 md:!py-6'>
          <AnimatedWrapper delay={0}>
            <h2 className="mb-4 text-2xl font-bold text-dark-teal">למי זה מיועד?</h2>
            <p className="leading-relaxed text-gray-700 text-justify">
              הטיפול והלמידה מיועדים לכל אדם, ובמיוחד לאנשים עם צרכים מיוחדים, אנשים בני הגיל השלישי, וכל מי שחווה קושי להשתלב במרחב הדיגיטלי או מחפש הזדמנות ללמידה לצד התפתחות והבעה רגשיים. אני עובד עם לקוחות פרטיים, מוסדות, עמותות וארגונים מגוונים.
            </p>
          </AnimatedWrapper>
        </SectionWrapper>

      </main>
      <Footer />
    </>
  );
}

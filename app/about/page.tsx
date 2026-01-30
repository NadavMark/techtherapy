import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SectionWrapper className="min-h-[60vh]">
          <AnimatedWrapper>
            <h1 className="mb-8 text-4xl font-bold text-dark-teal md:text-5xl">אודות Tech-Therapy</h1>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2}>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl leading-relaxed">
                שמי נדב מרק, ואני מטפל מוסמך במוזיקה (M.A.A.T) עם התמחות בטיפול באמצעות אמנויות. אני בעל תואר שני בטיפול במוזיקה (בציוני הצטיינות) ותואר ראשון במדעי ההתנהגות, וחבר ביה&quot;ת (האגודה לטיפול באמצעות אמנויות בישראל).
              </p>
              
              <p className="leading-relaxed">
                לאורך שנים של עבודה עם אנשים עם מוגבלויות, מטופלים על הרצף האוטיסטי, קשישים וניצולי שואה, פיתחתי גישה המשלבת את עולם הטיפול הרגשי עם הכלים הטכנולוגיים המתקדמים ביותר. ב-Tech-Therapy, הטכנולוגיה היא לא רק מטרה, אלא שפה – דרך חדשה לתקשר, ליצור ולהרגיש בעל ערך.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-dark-teal">מה אני מציע?</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">1. למידה והנגשה טכנולוגית (קורסים וסדנאות)</h3>
                  <p className="leading-relaxed">
                    אני מקיים שיעורים וקורסים הממוקדים ברכישת מיומנויות לשימוש במחשב ובסמארטפון. המטרה היא להפוך את המכשיר המורכב לכלי נגיש וידידותי בחיי היומיום. הלמידה שמה דגש על יישומים פרקטיים: תקשורת, ניידות, צריכת מידע ושילוב חברתי ותעסוקתי.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80">
                    הפורמט: הקורסים והסדנאות מתקיימים באופן פרונטלי (במרכזים, מוסדות או בבית המטופל) וגם באופן מקוון, בהתאם לצורך.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark-teal/90">2. טיפול רגשי מקוון מבוסס טכנולוגיה</h3>
                  <p className="leading-relaxed">
                    לצד הלמידה הפרקטית, אני מציע טיפול רגשי פרטני המתרחש במרחב הדיגיטלי. כאן, המחשב הוא לא רק אמצעי תקשורת אלא כלי עוצמתי ליצירה והבעה. באמצעות עבודה עם סאונד, מוזיקה, תוכנות גרפיקה, אנימציה, וכלי בינה מלאכותית (AI), אנו בונים עולמות שלמים ויצירות מורכבות. תהליך זה מאפשר להתמודד עם חסמים תקשורתיים ורגשיים ולמצוא דרכים מיטיבות להתמודדות עם קשיים וסבל בסביבה מוגנת ויצירתית.
                  </p>
                  <p className="mt-2 font-medium text-dark-teal/80">
                    הפורמט: הטיפול הרגשי מתבצע באופן מקוון (Online), מה שמאפשר נגישות מלאה ונוחות מרבית למטופל בסביבתו הטבעית.
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-bold text-dark-teal">למי זה מיועד?</h2>
              <p className="leading-relaxed">
                הפעילויות והטיפולים ב-Tech-Therapy מיועדים לאנשים עם צרכים מיוחדים, אנשים עם מוגבלויות פיזיות או קוגניטיביות, בני הגיל השלישי, וכל מי שחווה קושי להשתלב במרחב הדיגיטלי או מחפש ערוץ הבעה רגשי חדשני. אני עובד הן עם לקוחות פרטיים והן עם מוסדות, עמותות ומרכזים שיקומיים.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-dark-teal">הגישה שלי</h2>
              <p className="leading-relaxed">
                הדבר החשוב ביותר בלמידה ובטיפול הוא החוויה. כשאנו מרגישים אתגר המותאם לנו, עניין וחוויה חיובית – אנו נהנים, קשובים ופתוחים לצמוח. הגישה שלי מבוססת על התאמה אישית מוחלטת (&quot;Tailor Made&quot;) לכל אדם, לפי תחומי העניין והיכולות שלו, כדי להפוך את המחשב והסמארטפון למקור של הצלחה, סיפוק וחיבור לעולם.
              </p>
            </div>
          </AnimatedWrapper>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

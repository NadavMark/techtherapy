import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import Link from 'next/link';

export default function TherapyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SectionWrapper className="min-h-[60vh] py-12">
          
          {/* Header Section */}
          <AnimatedWrapper>
            <h1 className="mb-6 text-center text-4xl font-bold text-dark-teal md:text-5xl">
              טיפול רגשי מקוון
            </h1>
            <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600">
              מרחב בטוח ליצירה, הבעה וצמיחה אישית – מהמחשב האישי שלך.
              <br />
              שילוב בין עיבוד רגשי, להתפתחות ושימוש במחשב ובאינטרנט.
            </p>
          </AnimatedWrapper>

          {/* Intro Section - Why Tech Therapy */}
          <AnimatedWrapper delay={0.1}>
            <div className="mx-auto mb-12 max-w-4xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">למה טיפול דרך המחשב?</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                בעולם הטיפול המסורתי, המילים הן הכלי העיקרי. בגישת Tech-Therapy, המחשב הוא  <strong>הקליניקה עצמה</strong>. 
                זהו מרחב שבו אפשר לברוא עולמות, להתבונן בקשיים, לארגן ולשנות. למצוא ערוצי תקשורת ודרכי ביטוי חדשות כשמילים אינן מספיקות.
              </p>
            </div>
          </AnimatedWrapper>

          {/* NEW SECTION: Regulation & Processing Mechanisms */}
          <AnimatedWrapper delay={0.15}>
            <div className="mx-auto mb-16 max-w-4xl border-r-4 border-dark-teal bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-bold text-dark-teal">מנגנוני ויסות ועיבוד: כתיבה, קוד ויצירה</h3>
              <p className="mb-4 text-lg text-gray-700">
                מעבר ליצירה האומנותית הגדולה, אנו משתמשים בכלים בסיסיים ונגישים כמו <strong>כתיבה, יצירת רשימות, צביעה וכתיבת קוד</strong> כדי לבנות יציבות.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="ml-3 mt-1 text-teal-600">✓</span>
                  <span>
                    <strong>התארגנות וויסות:</strong> הלוגיקה של הקוד והסדר שברשימות עוזרים לארגן מחשבות כאוטיות ומייצרים עוגן של יציבות ושליטה.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-3 mt-1 text-teal-600">✓</span>
                  <span>
                    <strong>מרחב בטוח ומוגן:</strong> המסך והכלים הטכניים משמשים כחוצץ המאפשר לגעת בתכנים רגישים ללא הצפה רגשית (מרחק בטוח).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="ml-3 mt-1 text-teal-600">✓</span>
                  <span>
                    <strong>השלכה ופורקן:</strong> צביעה דיגיטלית וכתיבה חופשית מאפשרות להשליך את העולם הפנימי החוצה, לפרוק מתחים ולעבד רגשות מורכבים בתוך תבנית מכילה.
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedWrapper>

          {/* Methods Grid */}
          <AnimatedWrapper delay={0.2}>
            <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                <div className="mb-4 text-4xl">🎵</div>
                <h3 className="mb-3 text-xl font-bold text-dark-teal">מוזיקה וסאונד</h3>
                <p className="text-gray-600">
                  שימוש בתוכנות הפקה (DAW) ליצירת מוזיקה מקורית, הקלטה ועיבוד סאונד. המוזיקה מאפשרת לנו להביע רגשות מורכבים ולעבד חוויות ללא צורך במילים.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                <div className="mb-4 text-4xl">🎨</div>
                <h3 className="mb-3 text-xl font-bold text-dark-teal">גרפיקה ו-AI</h3>
                <p className="text-gray-600">
                  שימוש בכלי בינה מלאכותית ותוכנות גרפיות כדי ליצור דימויים ויזואליים של העולם הפנימי. הפיכת תחושה מופשטת לתמונה שאפשר להתבונן בה.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                <div className="mb-4 text-4xl">🎬</div>
                <h3 className="mb-3 text-xl font-bold text-dark-teal">למידה ומשחק</h3>
                <p className="text-gray-600">
                  יצירת סרטונים קצרים ואנימציות המאפשרים לספר סיפור, להמחיז קונפליקטים ולתרגל פתרונות שונים למצבים חברתיים ורגשיים.
                </p>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Target Audience & CTA */}
          <AnimatedWrapper delay={0.3}>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-dark-teal/5 p-10 text-center">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">למי הטיפול מתאים?</h2>
              <p className="mb-8 max-w-3xl text-lg text-gray-700">
                הטיפול מיועד לכל מי שרוצה להתפתח בסביבת המחשב, בכל גיל - ילדים, מתבגרים ומבוגרים החווים קשיים רגשיים, חברתיים או תקשורתיים.
                לאנשים על הרצף האוטיסטי (ASD), אנשים המתמודדים עם חרדה חברתית, מוגבלויות פיזיות, 
                ולכל מי שמרגיש בנוח יותר בסביבה הביתית מאשר בקליניקה הפרונטלית.
              </p>
              
              <Link 
                href="/contact" 
                className="rounded-full bg-dark-teal px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-700"
              >
                לבדיקת התאמה ושיחת היכרות
              </Link>
            </div>
          </AnimatedWrapper>

        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
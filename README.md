# Tech-Therapy - אתר שיווקי

אתר שיווקי בעברית RTL למסלולי טכנולוגיה ו-AI לאנשים עם צרכים מיוחדים.

## 🚀 התחלה מהירה

```bash
# התקנת תלויות
npm install

# הרצת שרת פיתוח
npm run dev

# בניית הפרויקט לייצור
npm build

# הרצת שרת ייצור
npm start
```

האתר יהיה זמין בכתובת: http://localhost:3000

## 📋 מבנה הפרויקט

```
techtherapy/
├── app/                    # Next.js App Router
│   ├── about/             # עמוד אודות
│   ├── therapy/              # עמוד טיפול רגשי
│   ├── contact/           # עמוד יצירת קשר
│   ├── courses/           # עמוד מסלולי לימוד
│   ├── layout.tsx         # Layout ראשי (RTL + Heebo)
│   ├── page.tsx           # עמוד הבית
│   └── globals.css        # סגנונות גלובליים + נגישות
├── components/
│   ├── accessibility/     # מערכת נגישות
│   │   ├── accessibility-provider.tsx
│   │   └── accessibility-widget.tsx
│   ├── contact/          # טופס יצירת קשר
│   ├── home/             # רכיבי עמוד הבית
│   ├── layout/           # Header + Footer
│   └── shared/           # רכיבים משותפים
├── lib/                  # פונקציות עזר
└── public/              # קבצים סטטיים

```

## ✨ תכונות עיקריות

### נגישות מלאה (WCAG 2.1 AA)
- **ווידג'ט נגישות** - כפתור צף עם אפשרויות:
  - שינוי גודל טקסט (רגיל / גדול / גדול מאוד)
  - ניגודיות גבוהה (7:1)
  - השבתת אנימציות
  - שמירת העדפות ב-localStorage

### תמיכה מלאה ב-RTL
- `dir="rtl"` על אלמנט `<html>`
- כל הטקסטים בעברית
- שימוש ב-logical properties (`ms-`, `me-`, `ps-`, `pe-`)
- פונט Heebo מ-Google Fonts

### עיצוב מקצועי
- פלטת צבעים:
  - `#084C61` - Dark Teal (כותרות, hero)
  - `#489FB5` - Pacific Blue (פעולות משניות, אייקונים)
  - `#E34A6F` - Magenta Bloom (כפתורי CTA)
  - `#FFFEFF` - White Base (רקע, טקסט)

### רכיבים
- Hero Section - קריאה לפעולה ראשית
- Toolbox Section - כלים וטכנולוגיות
- Value Propositions - 3 ערכים מרכזיים
- Courses Overview - תצוגת מסלולי הלימוד
- Social Proof - לוגואים של שותפים
- Contact Form - טופס יצירת קשר עם ולידציה

## 🧪 בדיקות

### ✅ Verification Checklist

#### Foundation
- [x] האתר נטען ב-http://localhost:3000
- [x] אלמנט `<html>` מכיל `dir="rtl"` ו-`lang="he"`
- [x] פונט Heebo נטען בהצלחה
- [x] טקסט מיושר מימין לשמאל

#### Accessibility Widget
- [ ] כפתור הנגישות מופיע בפינה השמאלית התחתונה
- [ ] לחיצה על הכפתור פותחת את הפאנל
- [ ] שינוי גודל טקסט עובד (3 רמות)
- [ ] ניגודיות גבוהה משנה צבעים
- [ ] השבתת אנימציות עוצרת תנועה
- [ ] הגדרות נשמרות אחרי רענון דף

#### Homepage Sections
- [ ] Hero Section מציג כותרת בעברית וכפתור CTA מגנטה
- [ ] Toolbox Section מציג 6 לוגואים (אפור → צבע ב-hover)
- [ ] Value Props מציג 3 כרטיסיות עם אייקונים
- [ ] Courses מציג 3 מסלולי לימוד
- [ ] Social Proof מציג לוגואים של שותפים
- [ ] Contact Form מציג טופס עם שדות בעברית

#### RTL Behavior
- [ ] Navigation links זורמים מימין לשמאל
- [ ] לוגו ממוקם בצד ימין
- [ ] שדות טופס מיישרים טקסט לימין
- [ ] Margins ו-paddings במראה (לא הפוכים)
- [ ] תפריט מובייל נפתח מצד ימין

#### Cross-Browser Testing
- [ ] Chrome - עובד תקין
- [ ] Firefox - עובד תקין
- [ ] Safari - עובד תקין
- [ ] Edge - עובד תקין
- [ ] Mobile Safari (iOS) - עובד תקין
- [ ] Chrome Android - עובד תקין

## 🎨 עיצוב וסגנון

### Typography
- כל הטקסטים בעברית
- פונט Heebo בכל המשקלים
- גדלים:
  - H1: 4xl-6xl
  - H2: 3xl-4xl
  - H3: 2xl
  - Body: base-xl

### Spacing
- Mobile-first approach
- Responsive padding: `px-6 py-16 md:px-12 md:py-24 lg:px-24`
- Max-width container: `max-w-7xl`
- Generous whitespace

### Animations
- Framer Motion fade-in on scroll
- `viewport={{ once: true }}`
- נכבדות אוטומטית במצב no-animations
- Delay staggering לאפקט cascade

## 📱 Responsive Breakpoints

- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

## 🔒 Accessibility Features

- Semantic HTML (`<nav>`, `<main>`, `<section>`)
- ARIA labels בעברית
- Focus indicators (3px outline)
- Keyboard navigation מלא
- Skip to content link
- Alt text לכל התמונות
- Color contrast: 4.5:1 (7:1 במצב high contrast)
- Large click targets (44x44px minimum)

## 🚀 Production Deployment

```bash
# בניית הפרויקט
npm build

# הרצה
npm start
```

### Vercel Deployment
```bash
vercel
```

## 📝 הערות פיתוח

- כל הרכיבים ב-TypeScript מחמיר
- שימוש ב-'use client' רק כשצריך (state, events)
- Tailwind CSS עם logical properties ל-RTL
- No emojis (אלא אם המשתמש ביקש במפורש)
- Professional tone - לא ילדותי

## 🔧 Customization

### שינוי צבעים
ערוך את `tailwind.config.ts`:

```typescript
colors: {
  'dark-teal': '#084C61',
  'pacific-blue': '#489FB5',
  'magenta-bloom': '#E34A6F',
  'white-base': '#FFFEFF',
}
```

### שינוי פונט
ערוך את `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

## 📄 License

Private project for Tech-Therapy.

---

**Contact:** info@aitherapy.co.il
**Website:** aitherapy.co.il




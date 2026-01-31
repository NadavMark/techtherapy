import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-teal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-24 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">אודות Tech-Therapy</h3>
            <p className="text-sm leading-relaxed text-white/90">
              מסלולי טכנולוגיה ו-AI מותאמים אישית לאנשים עם צרכים מיוחדים.
              מטפל רגשי מוסמך עם ניסיון בהדרכה, הוראה והנגשת טכנולוגיות.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">קישורים מהירים</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                אודות
              </Link>
              <Link
                href="/courses"
                className="text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                מסלולי לימוד
              </Link>
              <Link
                href="/therapy"
                className="text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                טיפול רגשי
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                צור קשר
              </Link>
            </nav>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">יצירת קשר</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:nadavmark@gmail.com"
                className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                <Mail className="h-4 w-4" />
                <span>nadavmark@gmail.com</span>
              </a>
              <a
                href="tel:+972545800899"
                className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-white rounded px-1 py-0.5"
              >
                <Phone className="h-4 w-4" />
                <span>054-580-0899</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="h-4 w-4" />
                <span>ישראל</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Tech-Therapy. כל הזכויות שמורות.
          </p>
          <p className="mt-2 text-sm text-white/80">
            אתר זה עומד בתקן הנגישות הישראלי AA
          </p>
        </div>
      </div>
    </footer>
  );
}

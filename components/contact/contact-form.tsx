'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { Send, MessageCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  role: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    role: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          role: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const whatsappNumber = '972545800899';
  const whatsappMessage = encodeURIComponent('Tech-Therapy שלום, אני מעוניין/ת לקבל מידע נוסף על הפעילויות שלכם! אשמח לשוחח ');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <SectionWrapper className="bg-gray-50" id="contact">
      <div className="mx-auto max-w-2xl">
        <AnimatedWrapper>
          <h2 className="mb-4 text-center text-3xl font-bold text-dark-teal md:text-4xl">
            צור קשר
          </h2>
          <p className="mb-12 text-center text-gray-600">
            ניתן ליצור קשר למידע נוסף בנוגע לטיפול, קורסים או סדנאות
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mb-4 text-6xl">✓</div>
                <h3 className="mb-2 text-2xl font-bold text-green-600">תודה על פנייתך!</h3>
                <p className="text-gray-600">ניצור איתך קשר בהקדם</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700">
                    שם מלא <span className="text-magenta-bloom">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-end transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue ${errors.fullName ? 'border-magenta-bloom' : 'border-gray-300'
                      }`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-sm text-magenta-bloom">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    טלפון <span className="text-magenta-bloom">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-end transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue ${errors.phone ? 'border-magenta-bloom' : 'border-gray-300'
                      }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-magenta-bloom">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    אימייל (אופציונלי)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-end transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue ${errors.email ? 'border-magenta-bloom' : 'border-gray-300'
                      }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-magenta-bloom">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Role/Organization */}
                <div>
                  <label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-700">
                    תפקיד/ארגון (אופציונלי)
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-end transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    הודעה (אופציונלי)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-end transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-magenta-bloom px-6 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-magenta-bloom/50"
                >
                  <Send className="h-5 w-5" />
                  שלח פרטים
                </button>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-500 bg-white px-6 py-4 text-lg font-semibold text-green-600 transition-colors hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-500/50"
                >
                  <MessageCircle className="h-5 w-5" />
                  שלח הודעה ב-WhatsApp
                </a>
              </form>
            )}
          </div>
        </AnimatedWrapper>
      </div>
    </SectionWrapper>
  );
}

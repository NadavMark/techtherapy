'use client';

import React, { useState } from 'react';
import { useAccessibility } from './accessibility-provider';
import { Accessibility, X, Type, Contrast, Sparkles } from 'lucide-react';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, setFontSize, highContrast, setHighContrast, animationsEnabled, setAnimationsEnabled } = useAccessibility();

  const toggleWidget = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleWidget}
        className="fixed bottom-6 start-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pacific-blue text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-3 focus:ring-pacific-blue focus:ring-offset-2"
        aria-label="פתח תפריט נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleWidget}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed bottom-24 start-6 z-50 w-80 max-w-[calc(100vw-3rem)] rounded-lg bg-white shadow-2xl border-2 border-pacific-blue">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-dark-teal px-4 py-3">
              <h2 className="text-lg font-semibold text-white">נגישות</h2>
              <button
                onClick={toggleWidget}
                className="rounded-full p-1 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="סגור תפריט נגישות"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-4">
              {/* Font Size Control */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Type className="h-4 w-4" />
                  גודל טקסט
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors ${
                      fontSize === 'normal'
                        ? 'border-pacific-blue bg-pacific-blue text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-pacific-blue'
                    }`}
                    aria-pressed={fontSize === 'normal'}
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors ${
                      fontSize === 'large'
                        ? 'border-pacific-blue bg-pacific-blue text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-pacific-blue'
                    }`}
                    aria-pressed={fontSize === 'large'}
                  >
                    גדול
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`flex-1 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors ${
                      fontSize === 'xlarge'
                        ? 'border-pacific-blue bg-pacific-blue text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-pacific-blue'
                    }`}
                    aria-pressed={fontSize === 'xlarge'}
                  >
                    גדול מאוד
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Contrast className="h-4 w-4" />
                  ניגודיות גבוהה
                </label>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue focus:ring-offset-2 ${
                    highContrast ? 'bg-pacific-blue' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={highContrast}
                  aria-label="החלף ניגודיות גבוהה"
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-[-1.5rem]' : 'translate-x-[-0.25rem]'
                    }`}
                  />
                </button>
              </div>

              {/* Animations Toggle */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Sparkles className="h-4 w-4" />
                  אנימציות
                </label>
                <button
                  onClick={() => setAnimationsEnabled(!animationsEnabled)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pacific-blue focus:ring-offset-2 ${
                    animationsEnabled ? 'bg-pacific-blue' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={animationsEnabled}
                  aria-label="החלף אנימציות"
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-colors ${
                      animationsEnabled ? 'translate-x-[-1.5rem]' : 'translate-x-[-0.25rem]'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

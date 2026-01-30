'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');
  const [highContrast, setHighContrastState] = useState(false);
  const [animationsEnabled, setAnimationsEnabledState] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedFontSize = localStorage.getItem('accessibility-fontSize') as FontSize;
    const savedHighContrast = localStorage.getItem('accessibility-highContrast') === 'true';
    const savedAnimations = localStorage.getItem('accessibility-animations') !== 'false';

    if (savedFontSize) setFontSizeState(savedFontSize);
    setHighContrastState(savedHighContrast);
    setAnimationsEnabledState(savedAnimations);
  }, []);

  // Apply CSS classes to body when settings change
  useEffect(() => {
    if (!mounted) return;

    // Font size classes
    document.body.classList.remove('large-text', 'xlarge-text');
    if (fontSize === 'large') {
      document.body.classList.add('large-text');
    } else if (fontSize === 'xlarge') {
      document.body.classList.add('xlarge-text');
    }

    // High contrast class
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // No animations class
    if (!animationsEnabled) {
      document.body.classList.add('no-animations');
    } else {
      document.body.classList.remove('no-animations');
    }
  }, [fontSize, highContrast, animationsEnabled, mounted]);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('accessibility-fontSize', size);
  };

  const setHighContrast = (enabled: boolean) => {
    setHighContrastState(enabled);
    localStorage.setItem('accessibility-highContrast', String(enabled));
  };

  const setAnimationsEnabled = (enabled: boolean) => {
    setAnimationsEnabledState(enabled);
    localStorage.setItem('accessibility-animations', String(enabled));
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        animationsEnabled,
        setAnimationsEnabled,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

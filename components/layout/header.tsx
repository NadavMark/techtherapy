'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Info, BookOpen, Heart, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/about', label: 'אודות', icon: Info },
  { href: '/courses', label: 'מסלולי לימוד', icon: BookOpen },
  { href: '/therapy', label: 'טיפול רגשי', icon: Heart },
  { href: '/contact', label: 'צור קשר', icon: MessageCircle },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-24" aria-label="ניווט ראשי">
        {/* Desktop Logo - Right Side (RTL) */}
        <Link href="/" className="hidden md:flex items-center gap-2 text-xl font-bold text-dark-teal">
          <span>Tech-Therapy</span>
        </Link>

        {/* Mobile - Menu Button and Title on Right */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleMobileMenu}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pacific-blue"
            aria-label="פתח תפריט ניווט"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link href="/" className="text-xl font-bold text-dark-teal">
            Tech-Therapy
          </Link>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-700 transition-colors hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-pacific-blue focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Spacer for desktop to keep logo right-aligned */}
        <div className="hidden md:block w-24" />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel - Slides from right (physical right), auto-width */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] bg-white shadow-xl md:hidden border-l border-gray-200"
            >
              <nav className="flex flex-col p-2 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pacific-blue/10 hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-pacific-blue whitespace-nowrap"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

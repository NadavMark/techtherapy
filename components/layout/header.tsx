'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'אודות' },
  { href: '/courses', label: 'מסלולי לימוד' },
  { href: '/therapy', label: 'טיפול רגשי' },
  { href: '/contact', label: 'צור קשר' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-24" aria-label="ניווט ראשי">
        {/* Logo - Right Side (RTL) */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-dark-teal">
          <span>Tech-Therapy</span>
        </Link>

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

        {/* Mobile Menu Button - Left Side (RTL) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pacific-blue"
          aria-label="פתח תפריט ניווט"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Spacer for desktop to keep logo right-aligned */}
        <div className="hidden md:block w-24" />
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />

          {/* Menu Panel - Slides from right (RTL) */}
          <div className="fixed top-16 end-0 z-40 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl md:hidden border-s border-gray-200">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pacific-blue/10 hover:text-pacific-blue focus:outline-none focus:ring-2 focus:ring-pacific-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

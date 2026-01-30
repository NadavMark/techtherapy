import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:px-12 md:py-24 lg:px-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}

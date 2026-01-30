'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/components/accessibility/accessibility-provider';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function AnimatedWrapper({ children, className = '', delay = 0 }: AnimatedWrapperProps) {
  const { animationsEnabled } = useAccessibility();

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

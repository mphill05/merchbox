'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: JSX.Element | React.ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
}

export const Reveal = ({
  children,
  className,
  width = 'fit-content',
}: Props) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  return (
    <div ref={inViewRef} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, scale: 0.8, y: 30 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

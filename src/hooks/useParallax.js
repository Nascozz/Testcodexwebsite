import { useEffect, useMemo, useState } from 'react';
import { useMotionValue, useScroll, useTransform } from 'framer-motion';

export default function useParallax(ref, offset = 60) {
  const [enabled, setEnabled] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 768 : false));

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const onResize = () => {
      setEnabled(window.innerWidth > 768);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const disabled = useMotionValue(0);

  useEffect(() => {
    if (!enabled) {
      disabled.set(0);
    }
  }, [enabled, disabled]);

  return useMemo(() => (enabled ? y : disabled), [enabled, y, disabled]);
}

'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TrustStatProps {
  value: string;
  label: string;
  icon: string;
  delay?: number;
}

export function TrustStat({ value, label, icon, delay = 0 }: TrustStatProps) {
  const Icon = (Icons as any)[icon] || Icons.Award;
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      delay: delay,
    });

    return animation.stop;
  }, [numericValue, delay, count]);

  return (
    <div className="text-center">
      <div className="flex justify-center mb-3">
        <div className="bg-brand-purple/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-brand-purple" />
        </div>
      </div>
      <motion.p className="font-poppins font-bold text-4xl mb-1 text-gray-900">
        {numericValue && <motion.span>{rounded}</motion.span>}
        {suffix}
      </motion.p>
      <p className="text-gray-600 font-medium text-sm">{label}</p>
    </div>
  );
}

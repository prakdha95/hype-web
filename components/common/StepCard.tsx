'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function StepCard({ step, title, description, icon, delay = 0 }: StepCardProps) {
  const Icon = (Icons as any)[icon] || Icons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 shadow-lg">
          {step}
        </div>
        {step < 6 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-brand-blue to-brand-orange/30" />
        )}
      </div>

      <div className="pb-8 flex-1">
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-brand-orange/10 p-3 rounded-lg flex-shrink-0">
              <Icon className="h-6 w-6 text-brand-orange" />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

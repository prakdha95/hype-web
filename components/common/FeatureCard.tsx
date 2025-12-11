'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  const Icon = (Icons as any)[icon] || Icons.CheckCircle;

  return (
    <div>
      <Card className="h-full border border-gray-200 hover:border-brand-purple hover:shadow-lg transition-all duration-300 bg-white">
        <CardContent className="p-6">
          <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-brand-purple" />
          </div>
          <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

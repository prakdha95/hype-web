'use client';

import { motion } from 'framer-motion';
import { Quote, Building2, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/mock-data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg">
        <CardContent className="p-6">
          <Quote className="h-10 w-10 text-brand-orange mb-4 opacity-50" />
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 bg-brand-blue">
              <AvatarFallback className="bg-brand-blue text-white font-semibold">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-poppins font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              {testimonial.type === 'candidate' ? (
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <User className="h-3 w-3 mr-1" />
                  {testimonial.country}
                </div>
              ) : (
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Building2 className="h-3 w-3 mr-1" />
                  {testimonial.country}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Target, Heart, Shield, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustStat } from '@/components/common/TrustStat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { trustStats } from '@/lib/mock-data';

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We believe in honest communication and transparent processes throughout your journey.',
  },
  {
    icon: Heart,
    title: 'Candidate-Centric',
    description: 'Your success is our success. We prioritize your needs and career aspirations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in recruitment and relocation services.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our track record speaks for itself with thousands of successful placements.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
                Established in 2006
              </span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About Hype Wave HR
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for career opportunities in Europe
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mt-4">
              Connecting talented professionals from UAE and South Asia with exciting opportunities in Bulgaria and Serbia for over 18 years
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, index) => (
              <TrustStat key={stat.id} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 2006, Hype Wave HR Consultancy has been at the forefront of international recruitment, specializing in connecting talented professionals from the Middle East and South Asia with exciting career opportunities in Europe.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 18 years of experience, we have successfully helped thousands of candidates transition to rewarding careers in Bulgaria and Serbia. Our deep understanding of both the source and destination markets allows us to provide unparalleled service and support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We work exclusively with verified employers who meet our strict vetting criteria, ensuring that every opportunity we present is legitimate and aligned with international labor standards. Our comprehensive services cover everything from initial eligibility assessment to post-arrival support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At Hype Wave HR, we're not just filling positions – we're building bridges between cultures, facilitating dreams, and creating pathways to success for professionals seeking to advance their careers in Europe.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-purple text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Join Thousands of Successful Candidates
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you take the next step in your career journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/eligibility">
                <Button
                  size="lg"
                  className="bg-white text-brand-purple hover:bg-gray-100"
                >
                  Check Your Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

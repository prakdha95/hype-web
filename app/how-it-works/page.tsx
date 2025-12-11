'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Users, FileCheck, Headphones, Plane } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepCard } from '@/components/common/StepCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { processSteps } from '@/lib/mock-data';

export default function HowItWorksPage() {
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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              How It Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your complete journey from application to arrival, simplified into 6 clear steps
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step.id}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              What We Provide Throughout Your Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support and services to ensure your successful relocation to Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  Document Verification
                </h3>
                <p className="text-gray-600 text-sm">
                  We verify and prepare all necessary documents including passport, education certificates, work experience letters, and police clearance certificates.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  Work Permit Processing
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete handling of work permit applications with regular status updates. We ensure all legal requirements are met for Bulgaria and Serbia.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  Travel Arrangements
                </h3>
                <p className="text-gray-600 text-sm">
                  Assistance with flight booking, travel insurance, and pre-departure briefings to prepare you for your journey and arrival.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  Accommodation Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Help finding suitable accommodation near your workplace, including temporary housing options for your initial days in Europe.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock assistance via phone, email, and WhatsApp. Our team is always available to address your concerns and queries.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-gray-900">
                  Post-Arrival Assistance
                </h3>
                <p className="text-gray-600 text-sm">
                  Continued support after arrival including bank account setup, local registration, cultural orientation, and workplace integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what you can expect in terms of processing time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-t-4 border-brand-purple">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">1-2 Days</div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-sm text-gray-600">
                  Application review and eligibility confirmation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-t-4 border-brand-purple">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">2-4 Weeks</div>
                <h3 className="font-semibold text-gray-900 mb-2">Job Matching</h3>
                <p className="text-sm text-gray-600">
                  Finding the perfect role and employer interview
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-t-4 border-brand-purple">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">6-8 Weeks</div>
                <h3 className="font-semibold text-gray-900 mb-2">Work Permit</h3>
                <p className="text-sm text-gray-600">
                  Processing and approval of work authorization
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-t-4 border-brand-purple">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">1-2 Weeks</div>
                <h3 className="font-semibold text-gray-900 mb-2">Final Preparations</h3>
                <p className="text-sm text-gray-600">
                  Travel booking and pre-departure arrangements
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-center text-gray-700">
              <strong>Total estimated time:</strong> 10-15 weeks from application to arrival.
              Processing times may vary based on individual circumstances and government processing speeds.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-purple text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start with a quick eligibility check or browse available positions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/eligibility">
                <Button
                  size="lg"
                  className="bg-white text-brand-purple hover:bg-gray-100"
                >
                  Check Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Browse Jobs
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeatureCard } from '@/components/common/FeatureCard';
import { JobCard } from '@/components/common/JobCard';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { TrustStat } from '@/components/common/TrustStat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';
import { trustStats, features, processSteps, jobs, testimonials } from '@/lib/mock-data';
import * as Icons from 'lucide-react';

export default function Home() {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    desiredJob: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Application Received!',
      description: 'Thank you for your interest. Our team will contact you soon.',
    });
    setFormData({ name: '', email: '', phone: '', desiredJob: '', country: '' });
    setDialogOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-gray-900">
                Work and Live in <span className="text-brand-purple">Europe</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted partner for relocating to Bulgaria and Serbia. We handle everything from job placement to visa processing, making your European dream a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/jobs">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark text-white text-lg px-8">
                      Browse Jobs
                      <Briefcase className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/eligibility">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8"
                    >
                      Check Eligibility
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team working in modern European office"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => (
              <TrustStat key={stat.id} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Why Choose Hype Wave HR?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support throughout your relocation journey, making your transition smooth and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your journey to Europe in 6 simple steps
            </p>
          </div>

          <div className="space-y-0">
            {processSteps.map((step) => {
              const Icon = (Icons as any)[step.icon] || Icons.CheckCircle;
              return (
                <div key={step.id} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-brand-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 shadow-lg">
                      {step.id}
                    </div>
                    {step.id < 6 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-brand-purple to-brand-lavender" />
                    )}
                  </div>

                  <div className="pb-8 flex-1">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-purple/10 p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-brand-purple" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-900">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                Learn More About the Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Latest Job Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities with verified employers across Bulgaria and Serbia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 3).map((job, index) => (
              <JobCard key={job.id} job={job} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/jobs">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8">
                View All Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from candidates who successfully relocated to Europe
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.filter(t => t.type === 'candidate').map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fill out the form and our team will get in touch with you
            </p>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark text-white px-12">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-poppins text-2xl">Start Your Journey</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and our team will get in touch with you
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="desiredJob">Desired Job Field *</Label>
                      <Input
                        id="desiredJob"
                        required
                        value={formData.desiredJob}
                        onChange={(e) => setFormData({ ...formData, desiredJob: e.target.value })}
                        placeholder="Software Engineering"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Current Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white text-lg"
                  >
                    Submit Application
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

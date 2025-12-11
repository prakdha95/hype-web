'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Calendar,
  ArrowLeft,
  FileText,
  CheckCircle,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { Job } from '@/lib/mock-data';

interface JobDetailClientProps {
  job: Job;
}

export function JobDetailClient({ job }: JobDetailClientProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    coverLetter: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Application Submitted!',
      description: `Your application for ${job.title} has been received. We'll be in touch soon.`,
    });
    setDialogOpen(false);
    setFormData({ name: '', email: '', phone: '', skills: '', coverLetter: '' });
  };

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/jobs">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
          </Link>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-brand-purple/10 p-3 rounded-lg">
                      <Building2 className="h-8 w-8 text-brand-purple" />
                    </div>
                    <div>
                      <h1 className="font-poppins font-bold text-3xl text-gray-900">
                        {job.title}
                      </h1>
                      <p className="text-lg text-gray-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple">
                    {job.companyType}
                  </Badge>
                </div>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-brand-purple hover:bg-brand-purple-dark text-white"
                    >
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-poppins text-2xl">
                        Apply for {job.title}
                      </DialogTitle>
                      <DialogDescription>
                        Fill out the form below to submit your application
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="apply-name">Full Name *</Label>
                        <Input
                          id="apply-name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-email">Email Address *</Label>
                        <Input
                          id="apply-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-phone">Phone Number *</Label>
                        <Input
                          id="apply-phone"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+971 50 123 4567"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-skills">
                          Relevant Skills (comma separated) *
                        </Label>
                        <Input
                          id="apply-skills"
                          required
                          value={formData.skills}
                          onChange={(e) =>
                            setFormData({ ...formData, skills: e.target.value })
                          }
                          placeholder="JavaScript, React, Node.js"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="apply-cover">Cover Letter</Label>
                        <Textarea
                          id="apply-cover"
                          value={formData.coverLetter}
                          onChange={(e) =>
                            setFormData({ ...formData, coverLetter: e.target.value })
                          }
                          placeholder="Tell us why you're a great fit..."
                          rows={4}
                          className="mt-2"
                        />
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                          <strong>Note:</strong> CV upload functionality will be available in
                          production. For now, we'll collect your information and contact
                          you for the CV.
                        </p>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white"
                      >
                        Submit Application
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-brand-purple" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium">{job.location}, {job.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="h-5 w-5 text-brand-purple" />
                  <div>
                    <p className="text-xs text-gray-500">Salary</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Briefcase className="h-5 w-5 text-brand-purple" />
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-medium">{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-brand-purple" />
                  <div>
                    <p className="text-xs text-gray-500">Contract</p>
                    <p className="font-medium">{job.contractDuration}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Responsibilities
                </h3>
                <ul className="space-y-2 mb-6">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2 mb-6">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Benefits
                </h3>
                <ul className="space-y-2 mb-6">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-6 pt-6 border-t">
                  <Calendar className="h-4 w-4" />
                  Posted on {new Date(job.postedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-brand-purple hover:bg-brand-purple-dark text-white px-12"
                >
                  Apply for this Position
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

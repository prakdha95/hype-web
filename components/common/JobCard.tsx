'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ApplicationForm } from '@/components/common/ApplicationForm';
import type { Job } from '@/lib/mock-data';

interface JobCardProps {
  job: Job;
  delay?: number;
}

export function JobCard({ job, delay = 0 }: JobCardProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div>
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-gray-600 font-medium">{job.company}</p>
            </div>
            <Badge variant="secondary" className="bg-brand-purple/10 text-brand-purple">
              {job.companyType}
            </Badge>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-2 text-brand-purple" />
              {job.location}, {job.country}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-brand-purple" />
              {job.salary}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Briefcase className="h-4 w-4 mr-2 text-brand-purple" />
              {job.experience}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-2 text-brand-purple" />
              {job.contractDuration}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex gap-3">
            <Link href={`/jobs/${job.id}`} className="flex-1">
              <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                View
              </Button>
            </Link>
            <Button
              onClick={() => setShowApplicationForm(true)}
              className="flex-1 bg-brand-purple hover:bg-brand-purple-dark text-white"
            >
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>

      <ApplicationForm
        open={showApplicationForm}
        onOpenChange={setShowApplicationForm}
        jobTitle={job.title}
      />
    </div>
  );
}

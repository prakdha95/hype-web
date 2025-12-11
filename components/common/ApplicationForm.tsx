'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle?: string;
}

export function ApplicationForm({ open, onOpenChange, jobTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    countryCode: '+971',
  });

  const [files, setFiles] = useState<{
    photo: File | null;
    cv: File | null;
    applicationLetter: File | null;
  }>({
    photo: null,
    cv: null,
    applicationLetter: null,
  });

  const handleFileChange = (type: 'photo' | 'cv' | 'applicationLetter', file: File | null) => {
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', { formData, files, jobTitle });
    onOpenChange(false);
    setFormData({ name: '', email: '', mobile: '', countryCode: '+971' });
    setFiles({ photo: null, cv: null, applicationLetter: null });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins font-bold">
            {jobTitle ? `Apply for ${jobTitle}` : 'Submit Your Application'}
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your application. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="mobile" className="text-base">
                Mobile Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2 mt-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                  required
                >
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+92">🇵🇰 +92</option>
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+977">🇳🇵 +977</option>
                  <option value="+63">🇵🇭 +63</option>
                  <option value="+94">🇱🇰 +94</option>
                </select>
                <Input
                  id="mobile"
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="123456789"
                  className="flex-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="photo" className="text-base">
                Your Photo <span className="text-red-500">*</span>
              </Label>
              <div className="mt-2">
                {files.photo ? (
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md">
                    <img
                      src={URL.createObjectURL(files.photo)}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="flex-1 text-sm text-gray-700">{files.photo.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFileChange('photo', null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-md hover:border-brand-purple cursor-pointer transition-colors">
                    <Upload className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Click to upload photo</span>
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      required
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange('photo', file);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="cv" className="text-base">
                CV/Resume <span className="text-red-500">*</span>
              </Label>
              <div className="mt-2">
                {files.cv ? (
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md">
                    <div className="bg-brand-purple/10 p-2 rounded">
                      <Upload className="h-5 w-5 text-brand-purple" />
                    </div>
                    <span className="flex-1 text-sm text-gray-700">{files.cv.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFileChange('cv', null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-md hover:border-brand-purple cursor-pointer transition-colors">
                    <Upload className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Click to upload CV (PDF, DOC, DOCX)</span>
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange('cv', file);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="applicationLetter" className="text-base">
                Application Letter <span className="text-gray-500">(Optional)</span>
              </Label>
              <div className="mt-2">
                {files.applicationLetter ? (
                  <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-md">
                    <div className="bg-brand-purple/10 p-2 rounded">
                      <Upload className="h-5 w-5 text-brand-purple" />
                    </div>
                    <span className="flex-1 text-sm text-gray-700">{files.applicationLetter.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFileChange('applicationLetter', null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-md hover:border-brand-purple cursor-pointer transition-colors">
                    <Upload className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Click to upload application letter (PDF, DOC, DOCX)</span>
                    <input
                      id="applicationLetter"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange('applicationLetter', file);
                      }}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-brand-purple hover:bg-brand-purple-dark text-white"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

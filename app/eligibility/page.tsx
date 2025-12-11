'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FormData {
  uaeResident: string;
  passportValidity: string;
  criminalRecord: string;
  workExperience: string;
}

export default function EligibilityPage() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<'eligible' | 'not-eligible' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    uaeResident: '',
    passportValidity: '',
    criminalRecord: '',
    workExperience: '',
  });

  const questions = [
    {
      id: 'uaeResident',
      question: 'Are you a resident of United Arab Emirates?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'passportValidity',
      question: 'Is your passport valid for at least 12 months?',
      options: [
        { value: 'yes', label: 'Yes, valid for 12+ months' },
        { value: 'no', label: 'No, expires in less than 12 months' },
      ],
    },
    {
      id: 'criminalRecord',
      question: 'Do you have any history or ongoing criminal case in UAE or any other countries?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'workExperience',
      question: 'Do you have at least 2 years of work experience?',
      options: [
        { value: 'yes', label: 'Yes, 2+ years' },
        { value: 'no', label: 'No, less than 2 years' },
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step];
    const updatedFormData = { ...formData, [currentQuestion.id]: value };
    setFormData(updatedFormData);

    if (currentQuestion.id === 'uaeResident' && value === 'no') {
      setTimeout(() => setResult('not-eligible'), 300);
      return;
    }

    if (currentQuestion.id === 'passportValidity' && value === 'no') {
      setTimeout(() => setResult('not-eligible'), 300);
      return;
    }

    if (currentQuestion.id === 'criminalRecord' && value === 'yes') {
      setTimeout(() => setResult('not-eligible'), 300);
      return;
    }

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => checkEligibility(updatedFormData), 300);
    }
  };

  const checkEligibility = (data: FormData) => {
    const isEligible =
      data.uaeResident === 'yes' &&
      data.passportValidity === 'yes' &&
      data.criminalRecord === 'no' &&
      data.workExperience === 'yes';

    setResult(isEligible ? 'eligible' : 'not-eligible');
  };

  const resetForm = () => {
    setStep(0);
    setResult(null);
    setFormData({
      uaeResident: '',
      passportValidity: '',
      criminalRecord: '',
      workExperience: '',
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Check Your Eligibility
            </h1>
            <p className="text-xl text-white/90">
              Answer a few quick questions to see if you qualify for opportunities in Europe
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {result === null ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-600">
                        Question {step + 1} of {questions.length}
                      </span>
                      <span className="text-sm font-medium text-brand-blue">
                        {Math.round(((step + 1) / questions.length) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-brand-blue h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((step + 1) / questions.length) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                        {questions[step].question}
                      </h2>

                      <RadioGroup
                        value={formData[questions[step].id as keyof FormData]}
                        onValueChange={handleAnswer}
                      >
                        <div className="space-y-3">
                          {questions[step].options.map((option) => (
                            <motion.div
                              key={option.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Label
                                htmlFor={option.value}
                                className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-brand-blue hover:bg-brand-blue/5 cursor-pointer transition-all"
                              >
                                <RadioGroupItem value={option.value} id={option.value} />
                                <span className="text-lg">{option.label}</span>
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </RadioGroup>
                    </motion.div>
                  </AnimatePresence>

                  {step > 0 && (
                    <Button
                      variant="ghost"
                      onClick={() => setStep(step - 1)}
                      className="mt-6"
                    >
                      Previous Question
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 text-center">
                  {result === 'eligible' ? (
                    <>
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                      <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                        Congratulations! You're Eligible
                      </h2>
                      <p className="text-lg text-gray-600 mb-8">
                        Based on your responses, you meet the basic requirements for work opportunities in Bulgaria and Serbia. Let's move forward with your application!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/jobs">
                          <Button
                            size="lg"
                            className="bg-brand-purple hover:bg-brand-purple-dark text-white"
                          >
                            Apply Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link href="/jobs">
                          <Button
                            size="lg"
                            variant="outline"
                          >
                            Browse Jobs
                          </Button>
                        </Link>
                        <Button
                          size="lg"
                          variant="ghost"
                          onClick={resetForm}
                        >
                          Check Again
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="h-12 w-12 text-red-600" />
                      </div>
                      <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                        Currently Not Eligible
                      </h2>
                      <p className="text-lg text-gray-600 mb-8">
                        Based on your responses, you don't meet all the basic requirements at this time. However, you can contact us to discuss your specific situation and explore alternative options.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-brand-purple hover:bg-brand-purple-dark text-white"
                          onClick={resetForm}
                        >
                          Take Again
                        </Button>
                        <Link href="/contact">
                          <Button
                            size="lg"
                            variant="outline"
                          >
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

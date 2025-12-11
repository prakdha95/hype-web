'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, FileText, Edit, Trash2, Download, Eye } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { jobs } from '@/lib/mock-data';

const stats = [
  { title: 'Total Jobs', value: '127', icon: Briefcase, color: 'bg-brand-blue' },
  { title: 'Applications', value: '1,543', icon: FileText, color: 'bg-brand-orange' },
  { title: 'Active Users', value: '892', icon: Users, color: 'bg-green-500' },
];

const mockApplications = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    job: 'Software Engineer',
    date: '2024-12-08',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    job: 'Marketing Specialist',
    date: '2024-12-07',
    status: 'reviewed',
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    email: 'muhammad@example.com',
    job: 'Project Manager',
    date: '2024-12-06',
    status: 'approved',
  },
  {
    id: 4,
    name: 'Fatima Khan',
    email: 'fatima@example.com',
    job: 'Financial Analyst',
    date: '2024-12-05',
    status: 'pending',
  },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-poppins font-bold text-4xl mb-2">Admin Dashboard</h1>
            <p className="text-gray-300">Manage jobs, applications, and eligibility criteria</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Card className="border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-poppins text-2xl">Job Listings</CardTitle>
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  Add New Job
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.slice(0, 5).map((job) => (
                        <TableRow key={job.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{job.title}</TableCell>
                          <TableCell>{job.company}</TableCell>
                          <TableCell>
                            {job.location}, {job.country}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              Active
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-blue-50 hover:text-brand-blue"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-orange-50 hover:text-brand-orange"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-red-50 hover:text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Applied For</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockApplications.map((application) => (
                        <TableRow key={application.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            {application.name}
                          </TableCell>
                          <TableCell>{application.email}</TableCell>
                          <TableCell>{application.job}</TableCell>
                          <TableCell>
                            {new Date(application.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                application.status === 'approved'
                                  ? 'bg-green-50 text-green-700'
                                  : application.status === 'reviewed'
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'bg-yellow-50 text-yellow-700'
                              }
                            >
                              {application.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-blue-50 hover:text-brand-blue"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-green-50 hover:text-green-600"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

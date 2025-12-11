import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { jobs } from '@/lib/mock-data';
import { JobDetailClient } from './JobDetailClient';

export function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <Link href="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <JobDetailClient job={job} />
      <Footer />
    </main>
  );
}

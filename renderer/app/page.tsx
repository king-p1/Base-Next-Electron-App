'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      Home
      <Button onClick={() => router.push('/dashboard')}>Go to dashboard</Button>
    </div>
  );
} 
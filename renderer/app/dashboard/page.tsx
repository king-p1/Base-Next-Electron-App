'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Dashboard() {
  const router = useRouter();
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      Dashboard
      <Button onClick={() => router.push('/')}>Go to home</Button>
    </div>
  );
} 
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const Home = () => {
  const router = useRouter()
  return (
    <div 
      className='flex flex-col items-center justify-center h-screen'
    >Home

      <Button onClick={() => router.push('/dashboard')}>Go to dashboard</Button>
    </div>
  )
}

export default Home

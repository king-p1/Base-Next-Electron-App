import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
const Dashboard = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center h-screen'>Dashboard

        <Button onClick={() => router.push('/home')}>Go to home</Button>
    </div>
  )
}

export default Dashboard
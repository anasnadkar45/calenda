import { Card } from '@/app/components/global/Card'
import { Button } from '@/components/ui/button'
import { CalendarCheck2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <Card>
            <div>
                <h1 className="text-xl font-bold">You are almost Done!</h1>
                <p className='text-slate-400'>We need to now connect your calender to your account.</p>
            </div>
            <Button asChild>
                <Link href='/'>
                    <CalendarCheck2 className='size-5 mr-2'/>
                    Connect Calendar to your Account
                </Link>
            </Button>
        </Card>
    )
}

export default page
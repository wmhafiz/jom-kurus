'use client'

import Link from 'next/link'
import { Plus, PlusSquare } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function NewNav() {
    const { data: session, status } = useSession()

    if (status === 'unauthenticated') return null

    return (
        <Link href={'/new'}>
            <div className="fixed z-90 bottom-10 right-8 bg-blue-600 w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
                <Plus />
            </div>
        </Link>
    )
}

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/fidelite')
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    window.addEventListener('touchstart', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <Image
        src="/logo.png" // Mets ton logo ici (place-le dans public/logo.png)
        alt="Logo Playciel"
        width={200}
        height={200}
        className="animate-pulse"
        priority
      />
    </main>
  )
}

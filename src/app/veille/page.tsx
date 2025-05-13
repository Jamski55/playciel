'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function VeillePage() {
  const router = useRouter()

  useEffect(() => {
    const handleInteraction = () => {
      router.push('/fidelite')
    }

    window.addEventListener('click', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)

    return () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }
  }, [router])

  return (
    <main className="h-screen flex items-center justify-center bg-white">
      <img
        src="/logo.png"
        alt="Logo"
        width={300}
        height={300}
        className="animate-flip-bounce"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: string
  y: string
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  // Safely seeds particles post-mount to eliminate Next.js SSR hydration mismatches
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: 7 + Math.random() * 5,
      delay: i * 0.15,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none w-full h-full">
      {/* Responsive Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-40" />

      {/* Top Left Animated Orb */}
      <motion.div
        className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Right Animated Orb */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tl from-teal-500/15 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* True Center Breathing Ambient Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 0.85, 1],
          opacity: [0.2, 0.35, 0.15, 0.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating ambient particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-25"
          style={{ top: particle.y, left: particle.x }}
          animate={{
            y: ['0px', '-120px', '-240px'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Scaling Diagonal Accent Vector Line */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bg-vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 0 L 100 100"
          stroke="url(#bg-vector-grad)"
          strokeWidth="0.5"
          fill="none"
          animate={{
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}

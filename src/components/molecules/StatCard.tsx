import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../atoms'

type StatCardProps = {
  label: string
  value?: string
  valueNumber?: number
  prefix?: string
  suffix?: string
  icon?: 'star' | 'chart' | 'sparkles'
  accent?: 'from-fuchsia-500 to-pink-500' | 'from-cyan-500 to-blue-500' | 'from-amber-500 to-orange-500'
  animate?: boolean
}

export function StatCard({ label, value, valueNumber, prefix = '', suffix = '', icon = 'chart', accent = 'from-cyan-500 to-blue-500', animate = false }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState<string>(value ?? '')
  const hasAnimatedRef = useRef(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!animate || typeof valueNumber !== 'number') {
      if (value !== undefined) setDisplayValue(value)
      return
    }

    const element = containerRef.current
    if (!element) return

    const startAnimation = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true
      const durationMs = 1200
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(1, elapsed / durationMs)
        const current = Math.floor(valueNumber * progress)
        setDisplayValue(`${prefix}${current.toLocaleString()}${suffix}`)
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation()
        }
      })
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [animate, valueNumber, prefix, suffix, value])

  return (
    <div ref={containerRef} className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/10 via-white/40 to-white/10 shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
      <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-2xl`} />
      <div className="relative rounded-2xl border bg-white/80 backdrop-blur-sm p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm ring-1 ring-black/5">
            <Icon name={icon} />
          </div>
          <div>
            <div className="text-xs text-gray-500">{label}</div>
            <div className="text-xl font-bold tracking-tight">{displayValue}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatCard



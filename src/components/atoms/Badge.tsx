import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  color?: 'pink' | 'cyan' | 'amber' | 'violet' | 'emerald' | 'slate'
}

const colorToClasses: Record<NonNullable<BadgeProps['color']>, string> = {
  pink: 'bg-pink-100 text-pink-700 ring-pink-200',
  cyan: 'bg-cyan-100 text-cyan-700 ring-cyan-200',
  amber: 'bg-amber-100 text-amber-800 ring-amber-200',
  violet: 'bg-violet-100 text-violet-700 ring-violet-200',
  emerald: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200'
}

export function Badge({ children, color = 'violet' }: BadgeProps) {
  return (
    <span className={['inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset', colorToClasses[color]].join(' ')}>
      {children}
    </span>
  )
}

export default Badge



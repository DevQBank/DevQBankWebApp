import React from 'react'
import { Icon } from '../atoms'

type StatCardProps = {
  label: string
  value: string
  icon?: 'star' | 'chart' | 'sparkles'
  accent?: 'from-fuchsia-500 to-pink-500' | 'from-cyan-500 to-blue-500' | 'from-amber-500 to-orange-500'
}

export function StatCard({ label, value, icon = 'chart', accent = 'from-cyan-500 to-blue-500' }: StatCardProps) {
  return (
    <div className="relative rounded-2xl border bg-white/80 p-5 shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
      <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
          <Icon name={icon} />
        </div>
        <div>
          <div className="text-xs text-gray-500">{label}</div>
          <div className="text-xl font-bold tracking-tight">{value}</div>
        </div>
      </div>
    </div>
  )
}

export default StatCard



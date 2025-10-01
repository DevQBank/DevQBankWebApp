import React from 'react'
import { Badge, Icon } from '../atoms'

type FeatureCardProps = {
  title: string
  description: string
  icon?: 'filter' | 'bookmark' | 'sparkles' | 'star' | 'coffee'
  tags?: { label: string; color?: 'pink' | 'cyan' | 'amber' | 'violet' | 'emerald' | 'slate' }[]
}

export function FeatureCard({ title, description, icon = 'sparkles', tags = [] }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-amber-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-base font-bold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <Badge key={i} color={t.color}>{t.label}</Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export default FeatureCard



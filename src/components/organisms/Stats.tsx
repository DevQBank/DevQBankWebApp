import React from 'react'
import { StatCard } from '../molecules'

export function Stats() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Top Sorular" value="#1,250" icon="star" accent="from-amber-500 to-orange-500" />
        <StatCard label="Yeni Onaylanan" value="142" icon="sparkles" accent="from-fuchsia-500 to-pink-500" />
        <StatCard label="Toplam Etiket" value="320+" icon="chart" accent="from-cyan-500 to-blue-500" />
        <StatCard label="Katkıda Bulunan" value="85" icon="star" accent="from-fuchsia-500 to-pink-500" />
      </div>
    </section>
  )
}

export default Stats



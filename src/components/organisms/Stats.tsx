import { StatCard } from '../molecules'
import { useTranslation } from 'react-i18next'

export function Stats() {
  const { t } = useTranslation()
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-none rounded-3xl border bg-gradient-to-br from-white/80 to-white/60 p-6 md:p-8">
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">{t('stats.title')}</h3>
          <p className="mt-1 text-sm md:text-base text-gray-600">{t('stats.subtitle')}</p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label={t('stats.top')} valueNumber={1250} prefix="#" animate icon="star" accent="from-amber-500 to-orange-500" />
          <StatCard label={t('stats.approved')} valueNumber={142} animate icon="sparkles" accent="from-fuchsia-500 to-pink-500" />
          <StatCard label={t('stats.tags')} valueNumber={320} suffix="+" animate icon="chart" accent="from-cyan-500 to-blue-500" />
          <StatCard label={t('stats.contributors')} valueNumber={85} animate icon="star" accent="from-fuchsia-500 to-pink-500" />
        </div>
      </div>
    </section>
  )
}

export default Stats



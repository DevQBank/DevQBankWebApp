import { FeatureCard } from '../molecules'
import { useTranslation } from 'react-i18next'

export function FeaturesGrid() {
  const { t } = useTranslation()
  const searchTags = t('features.items.search.tags', { returnObjects: true }) as string[]
  const flowTags = t('features.items.flow.tags', { returnObjects: true }) as string[]
  const oauthTags = t('features.items.oauth.tags', { returnObjects: true }) as string[]
  const bookmarkTags = t('features.items.bookmark.tags', { returnObjects: true }) as string[]
  const sponsorTags = t('features.items.sponsor.tags', { returnObjects: true }) as string[]
  const i18nTags = t('features.items.i18n.tags', { returnObjects: true }) as string[]

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="w-full px-4 sm:px-6 lg:px-10 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="w-full">
        <div className="text-left">
          <p className="text-sm font-semibold tracking-wide text-gray-500">{t('features.eyebrow')}</p>
          <h2 id="features-heading" className="mt-1 text-3xl md:text-4xl font-black tracking-tight">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-none">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <FeatureCard
            title={t('features.items.search.title')}
          description={t('features.items.search.desc')}
          icon="filter"
            tags={searchTags.map((l) => ({ label: l, color: 'cyan' as const }))}
        />
        <FeatureCard
            title={t('features.items.flow.title')}
          description={t('features.items.flow.desc')}
          icon="sparkles"
            tags={flowTags.map((l) => ({ label: l, color: 'amber' as const }))}
        />
        <FeatureCard
            title={t('features.items.oauth.title')}
          description={t('features.items.oauth.desc')}
          icon="star"
            tags={oauthTags.map((l) => ({ label: l, color: 'pink' as const }))}
        />
        <FeatureCard
            title={t('features.items.bookmark.title')}
          description={t('features.items.bookmark.desc')}
          icon="bookmark"
            tags={bookmarkTags.map((l) => ({ label: l, color: 'violet' as const }))}
        />
        <FeatureCard
            title={t('features.items.sponsor.title')}
          description={t('features.items.sponsor.desc')}
          icon="coffee"
            tags={sponsorTags.map((l) => ({ label: l, color: 'emerald' as const }))}
        />
        <FeatureCard
            title={t('features.items.i18n.title')}
          description={t('features.items.i18n.desc')}
          icon="sparkles"
            tags={i18nTags.map((l) => ({ label: l, color: 'cyan' as const }))}
        />
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid



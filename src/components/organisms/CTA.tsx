import React from 'react'
import { Button } from '../atoms'
import { useTranslation } from 'react-i18next'

export function CTA() {
  const { t } = useTranslation()
  return (
    <section className="px-6 md:px-10 py-12 md:py-16">
      <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-amber-400 p-[2px]">
        <div className="rounded-2xl bg-white/90 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">{t('cta.title')}</h3>
          <p className="mt-2 text-base text-gray-600">{t('cta.description')}</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button>{t('cta.primary')}</Button>
            <Button variant="secondary">{t('cta.github')}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA



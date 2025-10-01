import React from 'react'
import { FeatureCard } from '../molecules'

export function FeaturesGrid() {
  return (
    <section id="features" className="px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-3xl text-left">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Özellikler</h2>
        <p className="mt-2 text-gray-600">MVP ile gelen temel yetenekler.</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Arama & Filtreleme"
          description="Alan, teknoloji, deneyim, konu ve zorluk etiketleri ile güçlü filtreler."
          icon="filter"
          tags={[{ label: 'Full-text', color: 'cyan' }, { label: 'Multi-filter', color: 'violet' }]}
        />
        <FeatureCard
          title="Soru & Cevap Akışı"
          description="Taslak → inceleme → onay/red süreçleri ile kaliteli içerik."
          icon="sparkles"
          tags={[{ label: 'Moderasyon', color: 'amber' }, { label: 'Kalite', color: 'emerald' }]}
        />
        <FeatureCard
          title="OAuth & Roller"
          description="Email/şifre + Google/GitHub ve Guest/User/Moderator/Admin rolleri."
          icon="star"
          tags={[{ label: 'OAuth', color: 'pink' }, { label: 'RBAC', color: 'slate' }]}
        />
        <FeatureCard
          title="Bookmark & Koleksiyon"
          description="Beğendiğin soruları kaydet, koleksiyon oluştur."
          icon="bookmark"
          tags={[{ label: 'Koleksiyon', color: 'violet' }, { label: 'Favori', color: 'amber' }]}
        />
        <FeatureCard
          title="Sponsor Desteği"
          description="BuyMeACoffee ile destekle, sponsor bandında yer al."
          icon="coffee"
          tags={[{ label: 'OSS', color: 'emerald' }, { label: 'Destek', color: 'pink' }]}
        />
        <FeatureCard
          title="Çok Dilli İçerik"
          description="TR/EN içerikler ve çeviri workflow'u."
          icon="sparkles"
          tags={[{ label: 'i18n', color: 'cyan' }]}
        />
      </div>
    </section>
  )
}

export default FeaturesGrid



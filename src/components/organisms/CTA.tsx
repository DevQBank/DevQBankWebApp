import React from 'react'
import { Button } from '../atoms'

export function CTA() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16">
      <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-amber-400 p-[2px]">
        <div className="rounded-2xl bg-white/90 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">Topluluğa Katıl</h3>
          <p className="mt-2 text-base text-gray-600">Soru/cevap ekle, oyla, düzenle. Birlikte en temiz soru bankasını oluşturalım.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button>Hemen Başla</Button>
            <Button variant="secondary">GitHub</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA



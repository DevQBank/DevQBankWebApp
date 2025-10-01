import React from 'react'
import { Button } from '../atoms'
import { SearchBar } from '../molecules'

export function Hero() {
  return (
    <section className="relative overflow-hidden radial-grid">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
      </div>
      <div className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs ring-1 ring-gray-200">
              <span className="font-semibold text-gray-700">Vizyon</span>
              <span className="text-gray-500">Türkiye'nin moderasyonlu, topluluk destekli soru bankası</span>
            </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
            En temiz ve güçlü filtrelemeye sahip mülakat soru bankası
          </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">
              Topluluk destekli bir platform: Alan, teknoloji, deneyim ve konu etiketlerine göre kategorize; moderasyonlu ve şeffaf.
            </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <SearchBar />
            <Button className="w-full sm:w-auto">Soruları Keşfet</Button>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            TR/EN içerik, OAuth (Google/GitHub), moderasyon akışı, SEO dostu slug'lar.
          </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl" />
            <div className="absolute bottom-0 -left-6 h-24 w-24 rounded-full bg-fuchsia-400/30 blur-2xl" />

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-white/60 bg-white/90 shadow-xl ring-1 ring-gray-200 backdrop-blur">
                <div className="flex items-center gap-2 border-b px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-2 h-6 flex-1 rounded-md bg-gray-100" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="h-10 rounded-xl border bg-white shadow-sm flex items-center px-3 text-sm text-gray-500">
                    Backend, Mid, .NET
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-fuchsia-50 to-white p-3 text-xs text-gray-600">
                      OOP, Async, HTTP
                    </div>
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-3 text-xs text-gray-600">
                      SQL, EF Core
                    </div>
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-amber-50 to-white p-3 text-xs text-gray-600">
                      Design Patterns
                    </div>
                  </div>
                  <div className="h-28 rounded-2xl border bg-white p-3 shadow-sm">
                    <div className="h-3 w-40 rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-64 rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-52 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-56 w-56 rounded-3xl bg-gradient-to-br from-fuchsia-400/20 via-cyan-400/20 to-amber-300/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



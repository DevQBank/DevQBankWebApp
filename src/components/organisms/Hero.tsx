import { Button } from '../atoms'
import { SearchBar } from '../molecules'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden radial-grid">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
      </div>
      <div className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="max-w-3xl md:col-span-6 lg:col-span-7 text-center md:text-left">
            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-fuchsia-600 via-amber-500 to-cyan-600 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-600">
              {t('hero.description')}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <SearchBar />
              <div className="flex gap-2 justify-center sm:justify-start">
                <Button className="w-full sm:w-auto">{t('hero.discover')}</Button>
                
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500">
              <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">{t('hero.badges.b1')}</span>
              <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">{t('hero.badges.b2')}</span>
              <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">{t('hero.badges.b3')}</span>
            </div>
            </div>

          <div className="relative md:col-span-6 lg:col-span-5 w-full md:mt-0">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl" />
            <div className="absolute bottom-0 -left-6 h-24 w-24 rounded-full bg-fuchsia-400/30 blur-2xl" />

            <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
              <div className="rounded-3xl border border-white/60 bg-white/80 shadow-2xl ring-1 ring-gray-200 backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-2 h-6 flex-1 rounded-md bg-gray-100" />
                </div>
                <div className="space-y-3 p-4">
                  <div className="h-10 rounded-xl border bg-white/90 shadow-sm flex items-center px-3 text-sm text-gray-600">
                    {t('hero.mock.header')}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-fuchsia-50 to-white p-3 text-xs text-gray-600">
                      {t('hero.mock.c1')}
                    </div>
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-3 text-xs text-gray-600">
                      {t('hero.mock.c2')}
                    </div>
                    <div className="h-24 rounded-2xl border bg-gradient-to-br from-amber-50 to-white p-3 text-xs text-gray-600">
                      {t('hero.mock.c3')}
                    </div>
                  </div>
                  <div className="h-28 rounded-2xl border bg-white/90 p-3 shadow-sm">
                    <div className="h-3 w-40 rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-64 rounded bg-gray-100" />
                    <div className="mt-2 h-3 w-52 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-56 w-56 rounded-3xl bg-gradient-to-br from-fuchsia-400/30 via-amber-300/30 to-cyan-400/30 blur-2xl" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



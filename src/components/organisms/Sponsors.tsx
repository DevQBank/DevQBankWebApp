import { Button, Icon } from '../atoms'
import { useTranslation } from 'react-i18next'

export function Sponsors() {
  const { t } = useTranslation()
  return (
    <section id="community" className="px-6 md:px-10 py-14 md:py-20">
      <div className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-amber-400/20">
        <div className="relative rounded-3xl border bg-white/80 backdrop-blur-md p-6 md:p-8 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-300/30 via-amber-300/30 to-cyan-300/30 blur-3xl" />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-fuchsia-600 via-amber-500 to-cyan-600 bg-clip-text text-transparent">
                  {t('sponsors.title')}
                </span>
              </h3>
              <p className="mt-1 text-sm md:text-base text-gray-600">{t('sponsors.description')}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">OSS</span>
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">BuyMeACoffee</span>
                <span className="rounded-full bg-white/70 px-2.5 py-1 ring-1 ring-gray-200">Support</span>
              </div>
            </div>
            <Button as-child={undefined} onClick={() => window.open('https://www.buymeacoffee.com/', '_blank')} className="shadow-sm hover:shadow transition">
              <span className="inline-flex items-center gap-2">
                <Icon name="coffee" /> {t('sponsors.cta')}
              </span>
            </Button>
          </div>
          {/* Placeholder sponsor row */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="h-10 rounded-xl bg-gray-100" />
            <div className="h-10 rounded-xl bg-gray-100" />
            <div className="h-10 rounded-xl bg-gray-100" />
            <div className="h-10 rounded-xl bg-gray-100" />
            <div className="h-10 rounded-xl bg-gray-100 hidden md:block" />
            <div className="h-10 rounded-xl bg-gray-100 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors



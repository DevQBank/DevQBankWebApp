import { Navbar, Footer } from '../organisms'
import { Button } from '../atoms'
import { useTranslation } from 'react-i18next'

export function LoginPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: Auth Card */}
          <div className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/20 to-amber-400/20">
            <div className="relative rounded-3xl border bg-white/80 backdrop-blur-md p-6 sm:p-8">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                {t('auth.signInTitle')}
              </h1>
              <p className="mt-1 text-sm md:text-base text-gray-600">
                {t('auth.signInSubtitle')}
              </p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t('auth.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    {t('auth.password')}
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                    {t('auth.remember')}
                  </label>
                  <a href="#" className="text-cyan-700 hover:underline">
                    {t('auth.forgot')}
                  </a>
                </div>
                <Button className="w-full shadow-sm hover:shadow transition">{t('auth.signIn')}</Button>
                <div className="text-center text-sm text-gray-600">
                  {t('auth.noAccount')}{' '}
                  <a href="#" className="text-cyan-700 font-medium hover:underline">
                    {t('auth.signUp')}
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Platform Info */}
          <div className="rounded-3xl border bg-white/70 p-6 sm:p-8">
            <h2 className="text-xl md:text-2xl font-black tracking-tight">
              {t('auth.aboutTitle')}
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {t('auth.aboutDesc')}
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-gray-700">
              <li className="rounded-xl border bg-gradient-to-br from-fuchsia-50 to-white p-3">
                {t('auth.aboutBullets.search')}
              </li>
              <li className="rounded-xl border bg-gradient-to-br from-cyan-50 to-white p-3">
                {t('auth.aboutBullets.flow')}
              </li>
              <li className="rounded-xl border bg-gradient-to-br from-amber-50 to-white p-3">
                {t('auth.aboutBullets.oauth')}
              </li>
              <li className="rounded-xl border bg-gradient-to-br from-emerald-50 to-white p-3">
                {t('auth.aboutBullets.bookmark')}
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LoginPage



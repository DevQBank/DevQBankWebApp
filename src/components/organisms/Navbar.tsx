import { Button, Logo } from '../atoms'
import { NavLink } from '../molecules'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const setLang = (lng: 'tr' | 'en') => {
    void i18n.changeLanguage(lng)
  }
  const isTR = (i18n.language || '').toLowerCase().startsWith('tr')
  const [menuOpen, setMenuOpen] = useState(false)

  const FlagTR = (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#E30A17" rx="2" />
      <circle cx="8" cy="7" r="3.5" fill="#fff" />
      <circle cx="9" cy="7" r="3.5" fill="#E30A17" />
      <path d="M11.8 7l1.9.6-1.2 1.6.1-2.0-1.9-.6h2.0L13.7 4l.1 2-.1 0z" fill="#fff" />
    </svg>
  )

  const FlagGB = (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <rect width="20" height="14" fill="#012169" rx="2" />
      <path d="M0 0h20v14H0z" fill="none" />
      <path d="M0 0l20 14M20 0L0 14" stroke="#fff" strokeWidth="2.2" />
      <path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M10 0v14M0 7h20" stroke="#fff" strokeWidth="3.2" />
      <path d="M10 0v14M0 7h20" stroke="#C8102E" strokeWidth="1.8" />
    </svg>
  )
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Logo size="md" />
          <span className="sr-only">DevQBank</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <NavLink href="#features">{t('navbar.links.features')}</NavLink>
          <NavLink href="#categories">{t('navbar.links.categories')}</NavLink>
          <NavLink href="#community">{t('navbar.links.community')}</NavLink>
          <NavLink href="#faq">{t('navbar.links.faq')}</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
          <div className="hidden md:inline-flex mr-1 items-center overflow-hidden rounded-full border border-gray-200 bg-white/80 shadow-sm">
            {isTR ? (
              <button
                aria-label="English"
                title="Switch to English"
                className="px-2.5 py-1.5 transition hover:bg-gray-50"
                onClick={() => setLang('en')}
              >
                {FlagGB}
              </button>
            ) : (
              <button
                aria-label="Türkçe"
                title="Türkçe'ye geç"
                className="px-2.5 py-1.5 transition hover:bg-gray-50"
                onClick={() => setLang('tr')}
              >
                {FlagTR}
              </button>
            )}
          </div>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex hover:bg-gray-100">{t('navbar.actions.signIn')}</Button>
          <Button size="sm" className="hidden md:inline-flex shadow-sm hover:shadow transition">{t('navbar.actions.signUp')}</Button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="px-4 py-3 grid gap-2">
            <a href="#features" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>{t('navbar.links.features')}</a>
            <a href="#categories" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>{t('navbar.links.categories')}</a>
            <a href="#community" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>{t('navbar.links.community')}</a>
            <a href="#faq" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>{t('navbar.links.faq')}</a>
            <div className="mt-2 flex items-center gap-2">
              {isTR ? (
                <button aria-label="English" className="px-2.5 py-1.5 rounded-md border hover:bg-gray-50" onClick={() => { setLang('en'); setMenuOpen(false) }}>{FlagGB}</button>
              ) : (
                <button aria-label="Türkçe" className="px-2.5 py-1.5 rounded-md border hover:bg-gray-50" onClick={() => { setLang('tr'); setMenuOpen(false) }}>{FlagTR}</button>
              )}
              <Button variant="ghost" size="sm" className="flex-1 justify-center hover:bg-gray-100" onClick={() => setMenuOpen(false)}>{t('navbar.actions.signIn')}</Button>
              <Button size="sm" className="flex-1 justify-center shadow-sm hover:shadow transition" onClick={() => setMenuOpen(false)}>{t('navbar.actions.signUp')}</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar



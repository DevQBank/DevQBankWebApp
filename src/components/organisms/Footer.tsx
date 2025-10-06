import React from 'react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t bg-white/60">
      <div className="px-6 md:px-10 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {t('footer.copy')}</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">{t('footer.rules')}</a>
          <a href="#" className="hover:text-gray-900">{t('footer.style')}</a>
          <a href="#" className="hover:text-gray-900">{t('footer.faq')}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer



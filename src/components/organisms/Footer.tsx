import React from 'react'

export function Footer() {
  return (
    <footer className="border-t bg-white/60">
      <div className="px-6 md:px-10 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} DevQBank</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Topluluk Kuralları</a>
          <a href="#" className="hover:text-gray-900">Stil Rehberi</a>
          <a href="#" className="hover:text-gray-900">SSS</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer



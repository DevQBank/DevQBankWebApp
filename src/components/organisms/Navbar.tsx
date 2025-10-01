import React from 'react'
import { Button, Logo } from '../atoms'
import { NavLink } from '../molecules'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo size="md" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#features">Özellikler</NavLink>
          <NavLink href="#categories">Kategoriler</NavLink>
          <NavLink href="#community">Topluluk</NavLink>
          <NavLink href="#faq">SSS</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">Giriş</Button>
          <Button size="sm">Kayıt Ol</Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar



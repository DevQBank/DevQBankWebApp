import React from 'react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
  active?: boolean
}

export function NavLink({ href, children, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center gap-1 text-sm font-medium transition-colors',
        active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
      ].join(' ')}
    >
      {children}
    </a>
  )
}

export default NavLink



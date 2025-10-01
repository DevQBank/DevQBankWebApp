import React from 'react'

type IconProps = {
  name: 'search' | 'star' | 'github' | 'google' | 'coffee' | 'bookmark' | 'filter' | 'sparkles' | 'chart' | 'check'
  className?: string
}

const paths: Record<IconProps['name'], React.ReactNode> = {
  search: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z" />
  ),
  star: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.562.562 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.6a.562.562 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.981 20.537a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.6a.562.562 0 01.321-.988l5.518-.442a.562.562 0 00.475-.345L11.48 3.5z" />
  ),
  github: (
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.424 2.865 8.172 6.839 9.495.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.951 0-1.094.39-1.989 1.029-2.689-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.689 0 3.849-2.338 4.695-4.566 4.943.36.31.68.92.68 1.856 0 1.338-.012 2.418-.012 2.748 0 .268.18.58.688.481A10.015 10.015 0 0022 12.021C22 6.486 17.523 2 12 2z" />
  ),
  google: (
    <path d="M21.35 11.1H12v2.9h5.35c-.25 1.35-1.5 3.95-5.35 3.95-3.25 0-5.9-2.7-5.9-6.05s2.65-6.05 5.9-6.05c1.85 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.2 14.7 2.2 12 2.2 6.9 2.2 2.75 6.35 2.75 11.4S6.9 20.6 12 20.6c6.1 0 8.1-4.25 8.1-6.25 0-.7-.1-1.15-.2-1.45z" />
  ),
  coffee: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75h7.5a5.25 5.25 0 005.25-5.25V9.75H3v3.75a5.25 5.25 0 005.25 5.25zM3 9.75V6.75h15a3 3 0 110 6H3z" />
  ),
  bookmark: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75A2.25 2.25 0 019 1.5h6a2.25 2.25 0 012.25 2.25v17.25L12 16.5l-5.25 4.5V3.75z" />
  ),
  filter: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12M10 18h4" />
  ),
  sparkles: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 3.188l.887 2.374a3 3 0 001.738 1.738l2.374.887-2.374.887a3 3 0 00-1.738 1.738l-.887 2.374-.887-2.374a3 3 0 00-1.738-1.738L4.813 8.187l2.375-.887a3 3 0 001.738-1.738l.887-2.374zM17.25 12.75l.592 1.583a2 2 0 001.185 1.185l1.583.592-1.583.592a2 2 0 00-1.185 1.185l-.592 1.583-.592-1.583a2 2 0 00-1.185-1.185l-1.583-.592 1.583-.592a2 2 0 001.185-1.185l.592-1.583z" />
  ),
  chart: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16V8M12 16V4M17 16v-6" />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  )
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <svg
      className={["h-5 w-5", className].join(' ')}
      viewBox="0 0 24 24"
      fill={name === 'github' || name === 'google' ? 'currentColor' : 'none'}
      stroke="currentColor"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export default Icon



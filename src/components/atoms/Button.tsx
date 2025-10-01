import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const base = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-700 hover:shadow-cyan-500/30 active:translate-y-[1px] focus-visible:ring-cyan-400',
  secondary:
    'bg-white/80 text-gray-900 border border-gray-200 hover:bg-white shadow-sm focus-visible:ring-cyan-400',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-amber-400'
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base'
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button className={[base, variants[variant], sizes[size], className].join(' ')} {...props} />
  )
}

export default Button



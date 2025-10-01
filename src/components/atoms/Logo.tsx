import React from 'react'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg'
  withText?: boolean
}

const sizeToClass: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10'
}

export function Logo({ size = 'md', withText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2 select-none">
      <div
        className={[
          'rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-amber-400',
          'p-[2px] shadow-md shadow-fuchsia-500/20',
          sizeToClass[size]
        ].join(' ')}
      >
        <div className="h-full w-full rounded-[10px] bg-white/90 backdrop-blur flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600 via-cyan-600 to-amber-600 text-xs font-extrabold">
            Q
          </span>
        </div>
      </div>
      {withText && (
        <span className="font-extrabold tracking-tight text-gray-900">
          Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-amber-600">Q</span>Bank
        </span>
      )}
    </div>
  )
}

export default Logo



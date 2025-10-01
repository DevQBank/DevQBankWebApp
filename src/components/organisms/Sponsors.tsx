import React from 'react'
import { Button, Icon } from '../atoms'

export function Sponsors() {
  return (
    <section id="community" className="px-6 md:px-10 py-12 md:py-16">
      <div className="rounded-2xl border bg-white/70 p-6 md:p-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-black tracking-tight">Projeyi destekle</h3>
            <p className="mt-1 text-sm text-gray-600">Gelişime katkı sağla, sponsor bandında yer al. Teşekkürler!</p>
          </div>
          <Button as-child={undefined} onClick={() => window.open('https://www.buymeacoffee.com/', '_blank')}>
            <span className="inline-flex items-center gap-2">
              <Icon name="coffee" /> Buy Me A Coffee
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Sponsors



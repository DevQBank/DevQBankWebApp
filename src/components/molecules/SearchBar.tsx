import { Icon } from '../atoms'
import { useTranslation } from 'react-i18next'

type SearchBarProps = {
  placeholder?: string
}

export function SearchBar({ placeholder }: SearchBarProps) {
  const { t } = useTranslation()
  const ph = placeholder ?? t('search.placeholder')
  return (
    <div className="relative">
      <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={ph}
        className="w-full rounded-2xl border border-gray-200 bg-white/80 pl-10 pr-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 text-[10px] text-gray-500">
        <span className="rounded bg-gray-100 px-1.5 py-0.5">⌘</span>
        <span className="rounded bg-gray-100 px-1.5 py-0.5">K</span>
      </div>
    </div>
  )
}

export default SearchBar



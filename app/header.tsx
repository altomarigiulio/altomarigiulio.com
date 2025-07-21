'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
  {/* wrapper flex per logo + testi */}
  <div className="flex items-center space-x-4">
    <a href="/">
      <div
        className="
          flex
          h-16 w-16
          items-center justify-center
          rounded-full
          border border-dashed border-primary-light-6
          bg-primary-light-3
          p-2
          dark:border-primary-dark-6 dark:bg-primary-dark-3
        "
      >
        <img
          src="me.jpg"
          alt="Me"
          className="h-full w-full object-contain rounded-full"
        />
      </div>
    </a>

    {/* qui il blocco con nome + descrizione */}
    <div>
      <Link
        href="/"
        className="block font-medium text-black dark:text-white"
      >
        Altomari Giulio Giovanni
      </Link>
      <TextEffect
        as="p"
        preset="fade"
        per="char"
        className="text-zinc-600 dark:text-zinc-500"
        delay={0.5}
      >
        Computer Science Engineer
      </TextEffect>
    </div>
  </div>
</header>
  )
}

'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="/">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
            <img
              src="/me.jpg"
              alt="Me"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
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

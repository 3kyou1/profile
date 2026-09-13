'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          苏杭
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          LLM 算法工程师 · 博士研究生
        </TextEffect>
      </div>
      <Image src="/profile.jpg" alt="苏杭头像" width={72} height={96} priority className="h-24 w-[72px] rounded-xl object-cover ring-1 ring-zinc-200 dark:ring-zinc-800" />
    </header>
  )
}

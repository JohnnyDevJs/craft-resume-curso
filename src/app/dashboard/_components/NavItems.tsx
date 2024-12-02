'use client'

import { LucideIcon, Newspaper, SquareUser } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavItemProps = {
  label: string
  icon: LucideIcon
  path: string
}

export function NavItems() {
  const pathname = usePathname()

  const navItems: NavItemProps[] = [
    {
      label: 'Currículos',
      icon: Newspaper,
      path: '/dashboard/resumes',
    },
    {
      label: 'Configurações da Conta',
      icon: SquareUser,
      path: '/dashboard/account',
    },
  ]

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path)

        return (
          <Link key={item.path} passHref href={item.path}>
            <Button
              variant="ghost"
              className={cn('w-full justify-start gap-2', {
                'bg-accent': isActive,
              })}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}

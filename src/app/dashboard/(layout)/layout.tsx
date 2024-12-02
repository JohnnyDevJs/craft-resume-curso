import { NavItems } from '@/app/dashboard/_components/NavItems'
import { UserDropdown } from '@/app/dashboard/_components/UserDropdown'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid h-screen w-full grid-cols-[18.75rem,1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-r border-muted">
        <div className="w-full border-b border-muted p-6">
          <Logo className="mx-auto w-full max-w-[4.2rem]" />
        </div>
        <NavItems />
        <div className="mt-auto flex w-full items-center justify-between gap-2 border-t border-muted px-3 py-4">
          <UserDropdown />
          <ThemeToggle />
        </div>
      </aside>
      <main className="flex h-full w-full flex-col overflow-auto p-6">
        {children}
      </main>
    </div>
  )
}

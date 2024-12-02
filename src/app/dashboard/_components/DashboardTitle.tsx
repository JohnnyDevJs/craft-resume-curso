import { ReactNode } from 'react'

type DashboardTitleProps = {
  title: ReactNode
}

export function DashboardTitle({ title }: DashboardTitleProps) {
  return <h1 className="mb-6 font-title text-4xl font-bold">{title}</h1>
}

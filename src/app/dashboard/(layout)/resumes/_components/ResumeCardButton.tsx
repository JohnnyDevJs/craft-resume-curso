import { ReactNode } from 'react'

type ResumeCardButtonProps = {
  title: string
  description: string
  icon?: ReactNode
}

export function ResumeCardButton({
  title,
  description,
  icon,
}: ResumeCardButtonProps) {
  return (
    <button className="relative flex h-0 w-full items-center justify-center overflow-hidden rounded border border-muted-foreground/20 bg-muted/50 pb-[100%] outline-none transition-all hover:brightness-105 dark:hover:brightness-125">
      {icon}

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background/80 p-3 text-left">
        <p className="font-title text-sm font-semibold">{title}</p>
        <p className="block text-xs text-muted-foreground">{description}</p>
      </div>
    </button>
  )
}

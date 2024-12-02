import { ReactNode } from 'react'

import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip/primitive'

type TooltipProps = {
  children: ReactNode
  content: string | number | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipRoot>
        <TooltipTrigger asChild {...props}>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}

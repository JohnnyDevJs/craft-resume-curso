import { Bot } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function AIGenerationDropdown() {
  return (
    <Button className="h-9 gap-2 px-2.5 py-1 text-xs">
      <Bot size={20} />
      Inteligência Artificial
    </Button>
  )
}

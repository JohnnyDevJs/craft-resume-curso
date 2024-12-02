import { Plus } from 'lucide-react'

import { ResumeCardButton } from './ResumeCardButton'

export function AddResumeButton() {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} className="absolute inset-0 m-auto" />}
    />
  )
}

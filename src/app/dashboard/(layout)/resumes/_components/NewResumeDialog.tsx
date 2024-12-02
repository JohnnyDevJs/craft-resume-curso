import { BaseDialogProps, Dialog } from '@/components/ui/dialog'

import { NewResumeForm } from './NewResumeForm'

export function NewResumeDialog(props: BaseDialogProps) {
  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={<NewResumeForm />}
    />
  )
}

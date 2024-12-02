import Link from 'next/link'

import { ResumeCardButton } from './ResumeCardButton'

export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton
        title="Meu currículo"
        description="Última atualização há 22 minutos"
      />
    </Link>
  )
}

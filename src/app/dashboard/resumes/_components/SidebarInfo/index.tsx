import Link from 'next/link'
import { Control } from 'react-hook-form'

import Logo from '@/assets/logo.svg'
import { Separator } from '@/components/ui/separator'
import { ResumeSchema } from '@/schemas/resumeSchemas'

import { AIGenerationDropdown } from './AIGenerationDropdown'
import { BasicInfo } from './Sections/BasicInfo'
import { Multiples } from './Sections/Multiples'
import { Summary } from './Sections/Summary'

type SidebarInfoProps = {
  control: Control<ResumeSchema>
}

export function SidebarInfo({ control }: SidebarInfoProps) {
  return (
    <aside className="h-full w-full overflow-y-auto p-6">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="mx-auto w-full max-w-[4.2rem]" />
        </Link>
        <AIGenerationDropdown />
      </div>
      <Separator className="my-5" />
      <BasicInfo control={control} />
      <Separator className="my-5" />
      <Summary control={control} />
      <Multiples />
    </aside>
  )
}

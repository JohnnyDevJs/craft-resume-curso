import { ScrollText } from 'lucide-react'
import { Control } from 'react-hook-form'

import { SectionTitle } from '@/app/dashboard/resumes/_components/SidebarInfo/SectionTitle'
import { Editor } from '@/components/Editor'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { ResumeSchema } from '@/schemas/resumeSchemas'

type SummaryProps = {
  control: Control<ResumeSchema>
}

export function Summary({ control }: SummaryProps) {
  return (
    <div>
      <SectionTitle icon={ScrollText} title="Sobre você" />

      <FormField
        control={control}
        name="content.summary"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Editor
                className="mt-4 h-[12.5rem] max-h-[18.75rem]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ResumeSchema, resumeSchema } from '@/schemas/resumeSchemas'

import { ResumeContent } from './ResumeContent'
import { SidebarInfo } from './SidebarInfo'
import { StructureSidebar } from './StructureSidebar'

export function ResumePage() {
  const formResume = useForm<ResumeSchema>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      content: {
        summary: '<p></p>',
        image: { url: '', visible: true },
        infos: {
          fullName: '',
          headline: '',
          email: '',
          website: '',
          phone: '',
          location: '',
        },
        certifications: [],
        educations: [],
        experiences: [],
        languages: [],
        projects: [],
        skills: [],
        socialMedias: [],
      },
    },
  })

  const { control } = formResume

  return (
    <Form {...formResume}>
      <main className="h-screen w-full overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <SidebarInfo control={control} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </Form>
  )
}

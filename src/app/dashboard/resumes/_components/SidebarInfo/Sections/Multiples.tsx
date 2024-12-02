'use client'

import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  Share2,
} from 'lucide-react'
import { Fragment, useState } from 'react'

import { ManageMultipleItemDialog } from '@/app/dashboard/resumes/_components/SidebarInfo/ManageMultipleItemDialog'
import {
  MultipleDragItemProps,
  MultipleDragList,
} from '@/app/dashboard/resumes/_components/SidebarInfo/MultipleDragList'
import { Separator } from '@/components/ui/separator'

export function Multiples() {
  const [sectionToAdd, setSectionToAdd] =
    useState<MultipleDragItemProps | null>(null)

  const sectionsKeys: MultipleDragItemProps[] = [
    {
      formKey: 'socialMedias',
      title: 'Redes Sociais',
      icon: Share2,
      titleKey: 'name',
      descriptionKey: 'username',
    },
    {
      formKey: 'experiences',
      title: 'Experiências',
      icon: BriefcaseBusiness,
      titleKey: 'company',
      descriptionKey: 'position',
    },
    {
      formKey: 'educations',
      title: 'Educação',
      icon: GraduationCap,
      titleKey: 'institution',
      descriptionKey: 'degree',
    },
    {
      formKey: 'skills',
      title: 'Habilidades',
      icon: BicepsFlexed,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'languages',
      title: 'Idiomas',
      icon: Languages,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'certifications',
      title: 'Certificações',
      icon: FileBadge2,
      titleKey: 'name',
      descriptionKey: 'institution',
    },
    {
      formKey: 'projects',
      title: 'Projetos',
      icon: Globe,
      titleKey: 'name',
      descriptionKey: 'description',
    },
  ]

  return (
    <div>
      {sectionsKeys.map((section) => (
        <Fragment key={`multiple-section-${section.formKey}`}>
          <Separator className="my-5" />
          <MultipleDragList
            data={section}
            onAdd={() => {
              setSectionToAdd(section)
            }}
            onEdit={() => {}}
          />
        </Fragment>
      ))}

      {sectionToAdd && (
        <ManageMultipleItemDialog
          data={sectionToAdd}
          open={!!sectionToAdd}
          setOpen={(value) => {
            if (!value) setSectionToAdd(null)
          }}
        />
      )}
    </div>
  )
}

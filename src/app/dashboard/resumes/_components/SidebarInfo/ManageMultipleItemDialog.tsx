import { BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { ResumeSchema } from '@/schemas/resumeSchemas'

import { ManageMultipleItemForm } from './ManageMultipleItemForm'
import { MultipleDragItemProps, ResumeArrayKeys } from './MultipleDragList'

export type ManageMultipleItemDialogProps = BaseDialogProps & {
  data: MultipleDragItemProps
}

type FormConfig<T> = {
  label: string
  key: keyof T
  fieldType?: 'text' | 'editor' | 'icon' | 'slider' | 'keywords'
  type?: string
  placeholder?: string
  fullWidth?: boolean
  className?: string
}

export type FormConfigObject = {
  [K in ResumeArrayKeys]: FormConfig<ResumeSchema['content'][K]>[]
}

const formConfig: FormConfigObject = {
  socialMedias: [
    {
      label: 'Rede',
      key: 'name',
      placeholder: 'LinkedIn',
    },
    {
      label: 'Usuário',
      key: 'username',
      placeholder: 'seu-usuario',
    },
    {
      label: 'Site',
      key: 'url',
      placeholder: 'https://linkedin.com/in/seu-usuario',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Ícone',
      key: 'icon',
      placeholder: 'linkedIn',
      fieldType: 'icon',
      fullWidth: true,
    },
  ],
  experiences: [
    {
      label: 'Empresa',
      key: 'company',
    },
    {
      label: 'Posição',
      key: 'position',
    },
    {
      label: 'Data ou intervalo de datas',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Localização',
      key: 'location',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      fullWidth: true,
      className: 'min-h-[200px]',
    },
  ],
  educations: [
    {
      label: 'Instituição',
      key: 'institution',
    },
    {
      label: 'Curso',
      key: 'degree',
    },
    {
      label: 'Data ou intervalo de datas',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Localização',
      key: 'location',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      fullWidth: true,
      className: 'min-h-[200px]',
    },
  ],
  skills: [
    {
      label: 'Nome',
      key: 'name',
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Nível',
      key: 'level',
      fieldType: 'slider',
      fullWidth: true,
    },
    {
      label: 'Palavras-chave',
      key: 'keywords',
      placeholder: 'Adicione palavras-chave separadas por vírgula',
      fieldType: 'keywords',
      fullWidth: true,
    },
  ],
  languages: [
    {
      label: 'Nome',
      key: 'name',
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Nível',
      key: 'level',
      fieldType: 'slider',
      fullWidth: true,
    },
  ],
  certifications: [
    {
      label: 'Nome',
      key: 'name',
    },
    {
      label: 'Instituição',
      key: 'institution',
    },
    {
      label: 'Data',
      key: 'date',
      placeholder: 'Janeiro de 2024',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      className: 'min-h-[200px]',
      fullWidth: true,
    },
  ],
  projects: [
    {
      label: 'Nome',
      key: 'name',
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Data ou intervalo de datas',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
    },
    {
      label: 'Resumo',
      key: 'summary',
      fieldType: 'editor',
      className: 'min-h-[200px]',
      fullWidth: true,
    },
    {
      label: 'Palavras-chave',
      key: 'keywords',
      placeholder: 'Adicione palavras-chave separadas por vírgula',
      fieldType: 'keywords',
      fullWidth: true,
    },
  ],
}

export function ManageMultipleItemDialog({
  data,
  open,
  setOpen,
}: ManageMultipleItemDialogProps) {
  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={
        <ManageMultipleItemForm
          setOpen={setOpen}
          formConfig={formConfig[data.formKey]}
          data={data}
        />
      }
    />
  )
}

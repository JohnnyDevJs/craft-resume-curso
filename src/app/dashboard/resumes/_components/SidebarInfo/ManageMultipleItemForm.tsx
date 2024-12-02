import { zodResolver } from '@hookform/resolvers/zod'
import { Fragment, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

import { EditorField } from '@/components/Editor/field'
import { IconField } from '@/components/IconInput/Field'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SliderField } from '@/components/ui/slider/field'
import { cn } from '@/lib/utils'
import { ResumeSchema, resumeSchema } from '@/schemas/resumeSchemas'

import { FormConfigObject } from './ManageMultipleItemDialog'
import { MultipleDragItemProps } from './MultipleDragList'

type ManageMultipleItemFormProps = {
  formConfig: FormConfigObject[keyof FormConfigObject]
  data: MultipleDragItemProps
  setOpen: (open: boolean) => void
}

export function ManageMultipleItemForm({
  formConfig,
  data,
  setOpen,
}: ManageMultipleItemFormProps) {
  const manageMultipleItemForm = useForm<ResumeSchema>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      content: {
        image: {
          url: '',
          visible: true,
        },
        infos: {
          fullName: '',
          headline: '',
          email: '',
          website: '',
          phone: '',
          location: '',
        },
        socialMedias: {
          name: '',
          username: '',
        },
        experiences: {
          company: '',
        },
        educations: {
          institution: '',
        },
        skills: {
          name: '',
        },
        languages: {
          name: '',
        },
        certifications: {
          name: '',
        },
        projects: {
          name: '',
        },
      },
    },
  })

  const { handleSubmit, control, getValues, setValue } = manageMultipleItemForm

  const onSubmit = (formData: ResumeSchema) => {
    const currentFieldValue = getValues(
      `content.${data.formKey}`,
    ) as ResumeSchema['content'][typeof data.formKey]

    const newItem = {
      ...formData.content[data.formKey],
      id: uuid(),
    }

    setValue(`content.${data.formKey}`, [
      ...(Array.isArray(currentFieldValue) ? currentFieldValue : []),
      newItem,
    ] as ResumeSchema['content'][typeof data.formKey])

    setOpen(false)
  }

  const formContent = useMemo(() => {
    return formConfig.map((field, index) => {
      const fieldType = field?.fieldType ?? 'text'
      const isFullWidth = !!field?.fullWidth
      const inputProps = {
        name: field.key,
        label: field.label,
        containerClassName: cn(isFullWidth && 'col-span-full'),
        placeholder: field.placeholder || '',
        type: field.type || 'text',
        className: field.className || '',
      }
      return (
        <Fragment key={index}>
          {fieldType === 'text' && (
            <FormField
              control={control}
              name={`content.${data.formKey}.${inputProps.name}`}
              render={({ field }) => (
                <FormItem className={inputProps.containerClassName}>
                  <FormLabel>{inputProps.label}</FormLabel>
                  <FormControl>
                    <Input {...inputProps} {...field} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {fieldType === 'editor' && <EditorField {...inputProps} />}
          {fieldType === 'icon' && <IconField {...inputProps} />}
          {fieldType === 'slider' && <SliderField {...inputProps} />}
          {fieldType === 'keywords' && (
            <FormField
              control={control}
              name={
                (`content.${data.formKey}.${inputProps.name}` as string) || ''
              }
              render={({ field }) => (
                <FormItem className={inputProps.containerClassName}>
                  <FormLabel>{inputProps.label}</FormLabel>
                  <FormControl>
                    <Input {...inputProps} {...field} value={field.value} />
                  </FormControl>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {field.value &&
                      field.value
                        .split(',')
                        .map(
                          (keyword, idx) =>
                            keyword.trim() && (
                              <Badge key={idx}>{keyword}</Badge>
                            ),
                        )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </Fragment>
      )
    })
  }, [formConfig, control, data.formKey])

  return (
    <Form {...manageMultipleItemForm}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-2 flex flex-col"
        noValidate
      >
        <div className="mb-4 grid grid-cols-2 gap-4">{formContent}</div>
        <div className="ml-auto flex gap-3">
          <Button type="submit" className="w-max">
            Adicionar
          </Button>
        </div>
      </form>
    </Form>
  )
}

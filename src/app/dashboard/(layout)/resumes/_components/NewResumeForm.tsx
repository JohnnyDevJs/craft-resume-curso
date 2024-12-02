'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
import { NewResumeSchema, newResumeSchema } from '@/schemas/resumeSchemas'

export function NewResumeForm() {
  const newResumeForm = useForm<NewResumeSchema>({
    resolver: zodResolver(newResumeSchema),
  })

  const { control, handleSubmit } = newResumeForm

  async function onSubmit(data: NewResumeSchema) {
    console.log(data)
  }

  return (
    <Form {...newResumeForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-auto mt-6 w-max">
          Criar
        </Button>
      </form>
    </Form>
  )
}

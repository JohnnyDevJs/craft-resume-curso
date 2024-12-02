import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Editor } from '.'

type EditorFieldProps = {
  label: string
  name: string
  containerClassName?: string
  required?: boolean
}

export function EditorField({
  name,
  label,
  containerClassName,
  ...props
}: EditorFieldProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={containerClassName}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Editor {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

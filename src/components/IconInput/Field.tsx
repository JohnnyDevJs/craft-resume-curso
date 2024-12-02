import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { IconInput } from '.'

type IconFieldProps = {
  label: string
  name: string
  containerClassName?: string
  required?: boolean
}

export function IconField({
  name,
  label,
  containerClassName,
  ...props
}: IconFieldProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={`content.socialMedias.${name}`}
      render={({ field }) => (
        <FormItem className={containerClassName}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <IconInput type="text" {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

'use client'

import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Slider } from '.'

type SliderFieldProps = {
  label: string
  name: string
  containerClassName?: string
}
export function SliderField({
  name,
  label,
  containerClassName,
}: SliderFieldProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={1}
      render={({ field }) => (
        <FormItem className={containerClassName}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center gap-4">
              <Slider
                step={1}
                defaultValue={[1]}
                min={0}
                max={5}
                value={[field.value]}
                onValueChange={(value) => field.onChange(value[0])}
              />
              <p className="font-bold">
                {field.value === 0 ? 'Oculto' : field.value}
              </p>
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

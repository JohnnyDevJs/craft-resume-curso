import { UserRound } from 'lucide-react'
import { Control } from 'react-hook-form'

import { SectionTitle } from '@/app/dashboard/resumes/_components/SidebarInfo/SectionTitle'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { ResumeSchema } from '@/schemas/resumeSchemas'

type BasicInfoSectionProps = {
  control: Control<ResumeSchema>
}

export function BasicInfo({ control }: BasicInfoSectionProps) {
  return (
    <div>
      <SectionTitle icon={UserRound} title="Informações Básicas" />

      <div className="mt-4 grid w-full grid-cols-2 gap-4">
        <div className="col-span-full flex w-full items-end gap-3">
          <FormField
            control={control}
            name="content.image.url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Foto</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="content.image.visible"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-2">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="content.infos.fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="content.infos.headline"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cabeçalho</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="content.infos.email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="content.infos.website"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Site</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="content.infos.phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="content.infos.location"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Localização</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

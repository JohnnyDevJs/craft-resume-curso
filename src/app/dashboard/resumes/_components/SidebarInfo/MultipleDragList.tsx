import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from '@hello-pangea/dnd'
import { GripVertical, LucideIcon, Plus } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ResumeContentSchema, ResumeSchema } from '@/schemas/resumeSchemas'

import { SectionTitle } from './SectionTitle'

export type ResumeArrayKeys = Exclude<
  keyof ResumeContentSchema,
  'image' | 'infos' | 'summary'
>

export type MultipleDragItemProps = {
  formKey: ResumeArrayKeys
  title: string
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
}

type MultipleDragListProps = {
  data: MultipleDragItemProps
  onAdd: () => void
  onEdit: (index: number) => void
}

export function MultipleDragList({
  data,
  onAdd,
  // onEdit,
}: MultipleDragListProps) {
  const { control } = useFormContext<ResumeSchema>()

  const { fields, move } = useFieldArray({
    control,
    name: `content.${data.formKey}`,
  })

  function handleDragEnd({ source, destination }: DropResult) {
    if (!destination) return

    move(source.index, destination.index)
  }

  const isEmpty = fields.length === 0

  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />

      <div className="mt-4 flex flex-col">
        {isEmpty && (
          <Button variant="outline" className="w-full gap-2" onClick={onAdd}>
            <Plus size={26} />
            Adicionar item
          </Button>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={`droppable-${data.formKey}`}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="bg-red-500"
              >
                {fields.map((field, index) => {
                  // const titleKey = data.titleKey as keyof typeof field
                  // const descriptionKey =
                  //   data.descriptionKey as keyof typeof field

                  const isLastItem = index === fields.length - 1

                  return (
                    <Draggable
                      key={`draggable-item-${data.formKey}-${index}`}
                      draggableId={`draggable-item-${data.formKey}-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          key={field.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={cn('flex h-16 w-full bg-muted/50', {
                            'border-b border-muted': !isLastItem,
                          })}
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="flex h-full w-6 items-center justify-center bg-muted/50 transition-all hover:brightness-125"
                          >
                            <GripVertical size={14} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  )
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

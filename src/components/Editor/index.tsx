import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { MenuBar } from './MenuBar'

type EditorProps = HTMLAttributes<HTMLDivElement> & {
  value: string
  onChange?: (value: string) => void
}
export function Editor({ value, onChange, ...props }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4',
      },
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML())
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML())
    },
    autofocus: false,
  })

  return (
    <div
      className={cn(
        props.className,
        'flex w-full flex-col rounded-md border border-muted bg-background',
      )}
    >
      <MenuBar editor={editor} />
      <div className="flex h-full flex-col overflow-y-auto [&>div]:h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

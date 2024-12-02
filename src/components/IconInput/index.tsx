import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/useDebounce'

type IconInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'url'
}
export function IconInput({
  value,
  onChange,
  placeholder,
  type,
}: IconInputProps) {
  const debouncedValue = useDebounce(value)
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 min-w-8 rounded-full bg-foreground p-1.5">
        {!!debouncedValue && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${debouncedValue}`}
            className="h-full w-full object-contain"
            alt={`Ícone ${value}`}
          />
        )}
      </div>
      <div className="w-full">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}

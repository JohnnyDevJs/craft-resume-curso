import { ComponentProps, ReactNode } from "react";
import { Input } from ".";
import { FieldWrapper } from "../field-wrapper";
import { Control, Controller, useFormContext } from "react-hook-form";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
  extraContent?: (value: string) => ReactNode;
  control?: Control<any, any>;
};

export const InputField = ({
  label,
  name,
  required,
  containerClassName,
  extraContent,
  control: customControl,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={customControl ?? control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Input {...props} {...field} />
          {extraContent && extraContent(field.value)}
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};

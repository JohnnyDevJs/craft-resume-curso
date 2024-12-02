import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useMemo } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { EditorField } from "@/components/Editor/field";
import { IconField } from "@/components/IconInput/Field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SliderField } from "@/components/ui/slider/field";
import { cn } from "@/lib/utils";
import { resumeContentSchema, ResumeSchema } from "@/schemas/resumeSchemas";

import { FormConfigObject } from "./ManageMultipleItemDialog";
import { MultipleDragItemProps } from "./MultipleDragList";
import { InputField } from "@/components/ui/input/field";
import { z } from "zod";

type ManageMultipleItemFormProps = {
  formConfig: FormConfigObject[keyof FormConfigObject];
  data: MultipleDragItemProps;
  setOpen: (open: boolean) => void;
};

const multipleItemFormSchema = z.object({
  content: resumeContentSchema.omit({ infos: true, image: true }),
});

type MultipleItemFormSchema = z.infer<typeof multipleItemFormSchema>;

export function ManageMultipleItemForm({
  formConfig,
  data,
  setOpen,
}: ManageMultipleItemFormProps) {
  const manageMultipleItemForm = useForm<MultipleItemFormSchema>({
    resolver: zodResolver(multipleItemFormSchema),
    defaultValues: {
      content: {
        socialMedias: [],
        experiences: [],
        educations: [],
        skills: [],
        languages: [],
        certifications: [],
        projects: [],
      },
    },
  });

  const { getValues, setValue } = useFormContext<ResumeSchema>();

  const { handleSubmit, control } = manageMultipleItemForm;

  const onSubmit = (formData: MultipleItemFormSchema) => {
    const currentValue = getValues();

    const formKey = data.formKey;
    const currentFieldValue = currentValue.content[formKey] ?? [];

    const newItem = {
      ...formData.content[data.formKey],
      id: uuid(),
    };

    setValue(`content.${data.formKey}`, [
      ...(Array.isArray(currentFieldValue) ? currentFieldValue : []),
      newItem,
    ] as ResumeSchema["content"][typeof data.formKey]);

    setOpen(false);
  };

  const formContent = useMemo(() => {
    return formConfig.map((field, index) => {
      const fieldType = field?.fieldType ?? "text";
      const isFullWidth = !!field?.fullWidth;

      const inputProps = {
        name: field.key,
        label: field.label,
        containerClassName: cn(isFullWidth && "col-span-full"),
        placeholder: field.placeholder || "",
        type: field.type || "text",
        className: field.className || "",
      };

      return (
        <Fragment key={index}>
          {fieldType === "text" && <InputField {...inputProps} />}
          {fieldType === "editor" && <EditorField {...inputProps} />}
          {fieldType === "icon" && <IconField {...inputProps} />}
          {fieldType === "slider" && <SliderField {...inputProps} />}
          {fieldType === "keywords" && (
            <InputField
              {...inputProps}
              extraContent={(value) => (
                <div className="mt-1 flex flex-wrap gap-2">
                  {(value as string)?.split(",").map((keyword, index) => {
                    if (!keyword.trim()) return null;

                    return <Badge key={`keyword-${index}`}>{keyword}</Badge>;
                  })}
                </div>
              )}
            />
          )}
        </Fragment>
      );
    });
  }, [formConfig, control, data.formKey]);

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
  );
}

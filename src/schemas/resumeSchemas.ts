import { z } from 'zod'

export const newResumeSchema = z.object({
  title: z.string().min(1, { message: 'O título é obrigatório' }),
})

export const resumeImageSchema = z.object({
  url: z.string().refine(
    (value) => {
      if (value && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
        return false
      }
      return true
    },
    { message: 'A URL deve ser válida' },
  ),
  visible: z.boolean(),
})

export const resumeInfosSchema = z.object({
  fullName: z.string(),
  headline: z.string(),
  email: z.string().email({
    message: 'O email é inválido',
  }),
  website: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
          return false
        }
        return true
      },
      { message: 'A URL deve ser válida' },
    ),
  phone: z.string(),
  location: z.string(),
})

const ResumeSocialMediaPartialSchema = z.object({
  name: z.string(),
  username: z.string(),
  url: z.string().refine(
    (value) => {
      if (value && !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
        return false
      }
      return true
    },
    { message: 'A URL deve ser válida' },
  ),
  icon: z.string(),
})

const ResumeSocialMediaSchema = ResumeSocialMediaPartialSchema.extend({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  username: z.string().min(1, { message: 'O usuário é obrigatório' }),
})

const ResumeExperiencePartialSchema = z.object({
  company: z.string().min(1, { message: 'A empresa é obrigatória' }),
  position: z.string(),
  date: z.string(),
  location: z.string(),
  website: z.string().url(),
  summary: z.string(),
})

const ResumeExperienceSchema = ResumeExperiencePartialSchema.extend({
  company: z.string().min(1, { message: 'A empresa é obrigatório' }),
})

const ResumeEducationPartialSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  location: z.string(),
  date: z.string(),
  website: z.string().url(),
  summary: z.string(),
})

const ResumeEducationSchema = ResumeEducationPartialSchema.extend({
  institution: z.string().min(1, { message: 'A instituição é obrigatória' }),
})

const ResumeSkillPartialSchema = z.object({
  name: z.string(),
  description: z.string().min(1, { message: 'A descrição é obrigatória' }),
  level: z.number().min(0).max(10),
  keywords: z
    .string()
    .min(1, { message: 'As palavras-chave são obrigatórias' }),
})

const ResumeSkillSchema = ResumeSkillPartialSchema.extend({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
})

const ResumeLanguagePartialSchema = z.object({
  name: z.string(),
  description: z.string(),
  level: z.number().min(0).max(10),
})

const ResumeLanguageSchema = ResumeLanguagePartialSchema.extend({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
})

const ResumeCertificationPartialSchema = z.object({
  name: z.string(),
  institution: z.string(),
  date: z.string(),
  website: z.string().url(),
  summary: z.string(),
})

const ResumeCertificationSchema = ResumeCertificationPartialSchema.extend({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
})

const ResumeProjectPartialSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  website: z.string().url(),
  summary: z.string(),
  keywords: z.array(z.string()),
})

const ResumeProjectSchema = ResumeProjectPartialSchema.extend({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
})

export const resumeContentSchema = z.object({
  image: resumeImageSchema.partial(),
  infos: resumeInfosSchema.partial(),
  summary: z.string().optional(),
  socialMedias: z.array(ResumeSocialMediaSchema.partial()),
  experiences: z.array(ResumeExperienceSchema.partial()),
  educations: z.array(ResumeEducationSchema.partial()),
  skills: z.array(ResumeSkillSchema.partial()),
  languages: z.array(ResumeLanguageSchema.partial()),
  certifications: z.array(ResumeCertificationSchema.partial()),
  projects: z.array(ResumeProjectSchema.partial()),
})

export const resumeSchema = z.object({
  content: resumeContentSchema,
})

export type NewResumeSchema = z.infer<typeof newResumeSchema>
export type ResumeInfoSchema = z.infer<typeof resumeInfosSchema>
export type ResumeContentSchema = z.infer<typeof resumeContentSchema>
export type ResumeSchema = z.infer<typeof resumeSchema>

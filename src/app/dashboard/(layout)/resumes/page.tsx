import { DashboardTitle } from '@/app/dashboard/_components/DashboardTitle'
import { ResumesList } from '@/app/dashboard/(layout)/resumes/_components/ResumesList'

export default function DashboardResumesPage() {
  return (
    <>
      <DashboardTitle title="Currículos" />
      <ResumesList />
    </>
  )
}

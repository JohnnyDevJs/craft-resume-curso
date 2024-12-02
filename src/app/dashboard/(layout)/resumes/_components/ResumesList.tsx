import { AddResumeButton } from './AddResumeButton'
import { NewResumeDialog } from './NewResumeDialog'
import { ResumeCard } from './ResumeCard'

export function ResumesList() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  )
}

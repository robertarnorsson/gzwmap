import TaskInfoPage from "@/components/pages/task-info-page";
import { Tasks } from "@/lib/data/tasks";
import { toSlug } from "@/lib/utils";

export default function Page({ params }: { params: { slug: string } }) {
  const task = Tasks.filter((task) => toSlug(task.name) == params.slug).at(0);
  if (task) {
    return ( <TaskInfoPage task={task} /> );
  } else {
    return (
      <div>
        No results
      </div>
    );
  }
}
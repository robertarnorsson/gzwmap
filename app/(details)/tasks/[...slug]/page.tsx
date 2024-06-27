import ObjectiveInfoPage from "@/components/pages/objective-info-page";
import TaskInfoPage from "@/components/pages/task-info-page";
import { Tasks } from "@/lib/data/tasks";

export default function Page({ params }: { params: { slug: string[] } }) {
  const task = Tasks.filter((task) => task.name.toLocaleLowerCase().replaceAll(" ", "-") == params.slug.at(0)).at(0);
  const objective = task?.objectives.filter((objective) => objective.name.toLocaleLowerCase().replaceAll(" ", "-") == params.slug.at(1)).at(0);
  if (params.slug.length == 1 && task) {
    return ( <TaskInfoPage task={task} /> );
  } else if (params.slug.length == 2 && objective) {
    return ( <ObjectiveInfoPage objective={objective} /> );
  } else {
    return (
      <div>
        No results
      </div>
    );
  }
}
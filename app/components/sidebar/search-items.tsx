import { faction, key, lz, objective, task } from "~/lib/types";

export const SingleObjectiveTask = ({
  task,
  objective,
  onClick,
}: {
  task: task;
  objective: objective;
  onClick: () => void;
}) => (
  <li
    className="px-2 py-1 text-sm hover:bg-primary/10 cursor-pointer"
    onClick={onClick}
  >
    {task.name} - {objective.name}
  </li>
);


export const MultipleObjectiveTask = ({
  task,
  objectives,
  expandedTask,
  onExpand,
  onClick,
}: {
  task: task;
  objectives: objective[];
  expandedTask: task | null;
  onExpand: () => void;
  onClick: (objective: objective) => void;
}) => (
  <li className="px-2 py-1 text-sm hover:bg-primary/10 cursor-pointer">
    <div onClick={onExpand} className="flex justify-between items-center">
      {task.name}
      <span>{expandedTask?.name === task.name ? "-" : "+"}</span>
    </div>
    {expandedTask?.name === task.name && (
      <ul className="mt-2 pl-4 space-y-1">
        {objectives.map((objective, idx) => (
          <li
            key={idx}
            className="px-2 py-1 text-xs hover:bg-primary/10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onClick(objective);
            }}
          >
            {objective.name}
          </li>
        ))}
      </ul>
    )}
  </li>
);


export const KeyItem = ({
  keyItem,
  faction,
  onClick,
}: {
  keyItem: key,
  faction: string;
  onClick: () => void;
}) => {
  if (keyItem.faction && keyItem.faction.id !== faction) return null;

  return (
    <li
      className="px-2 py-1 text-sm hover:bg-primary/10 cursor-pointer"
      onClick={onClick}
    >
      {keyItem.name}
    </li>
  );
};


export const LZItem = ({ lz, faction, onClick }: { lz: lz, faction: string; onClick: () => void }) => {
  if (lz.faction && lz.faction.id !== faction) return null;

  return (
    <li
      className="px-2 py-1 text-sm hover:bg-primary/10 cursor-pointer"
      onClick={onClick}
    >
      {lz.name}
    </li>
  );
};

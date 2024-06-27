import { objective } from "@/lib/types";

export default function ObjectiveInfoPage({ objective }: {objective: objective}) {
  return (
    <div>
      {objective.name}
    </div>
  );
};
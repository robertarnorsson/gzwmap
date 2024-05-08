import { Rubik } from "next/font/google";
import { task, objective } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export default function TaskMarker({ map, task, objective }: { map: Map, task: task, objective: objective}) {
  return (
    <MapMarker
      map={map}
      iconSize={[30, 30]}
      position={objective.position}
    >
      <div className='task-marker-pin'>
        <Image className='task-marker-icon' src='/task.png' width={14} height={14} alt={objective.name}></Image>
        <span className={cn(
          rubik.className,
          'task-marker-text'
        )}>{objective.name}</span>
      </div>
    </MapMarker>
  )
}
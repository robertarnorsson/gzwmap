import { key } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const keyMarker = (key: key) => (
  <div className={cn(rubik.className, "task-marker-pin flex flex-row")}>
    <Image
      className="task-marker-image shadow-2xl m-2 cursor-pointer"
      src='/locked-door.svg'
      width={15}
      height={15}
      draggable={false}
      alt={key.name}
    />
    <p className="task-marker-text">
      {key.name}
    </p>
  </div>
);

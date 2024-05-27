import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { ReactNode } from "react";


export default function ImageShowcase({ url, trigger }: { url: string, trigger: ReactNode }) {
  return (
    <div className="z-50">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            {trigger}
          </div>
        </DialogTrigger>
        <DialogContent>
          <Image className='mt-4' quality={100} draggable={false} src={url} width={1280} height={720} alt=""></Image>
        </DialogContent>
      </Dialog>
    </div>
  )
}
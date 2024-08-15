import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Loader2, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export default function ImageShowcase({
  url,
  alt
}: Readonly<{
  url: string;
  alt: string;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-full aspect-video relative z-50">
          <Image src={url} alt={alt} sizes="50vw" quality={50} loading="eager" fill className="object-cover outline outline-1 outline-muted-foreground"></Image>
        </div>
      </DialogTrigger>
      <DialogContent className="outline-none ring-transparent w-full max-w-md sm:max-w-lg md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl p-0 mx-auto">
        <VisuallyHidden.Root>
          <DialogHeader>
            {alt}
          </DialogHeader>
        </VisuallyHidden.Root>
        <div className="aspect-video p-4 relative">
          <div className="absolute top-2 right-2 z-50">
            <DialogClose asChild>
              <Button variant='outline' size='icon' className="h-8 w-8 bg-black/50 hover:bg-black/70 focus-visible:ring-0">
                <X className="w-4 h-4" />
              </Button>
            </DialogClose>
          </div>
          <div
            style={{ opacity: loading ? "100" : "0" }}
            className="w-full h-full flex justify-center items-center transition-opacity duration-200"
          >
            <div className="animate-spin">
              <Loader2 />
            </div>
          </div>
          <Image
            src={url}
            alt={alt}
            quality={100}
            loading="eager"
            onLoad={() => setLoading(false)}
            fill
            style={{ opacity: loading ? "0" : "100" }}
            className="object-cover rounded-lg transition-opacity duration-200"
          ></Image>
        </div>
      </DialogContent>
    </Dialog>
  )
}

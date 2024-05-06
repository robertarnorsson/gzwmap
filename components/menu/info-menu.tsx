import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function InfoMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className="rounded-full p-4">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
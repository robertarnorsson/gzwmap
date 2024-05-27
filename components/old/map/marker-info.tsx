import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface MarkerInfoProps {
  open: boolean
  headerImage?: string
  header: string
  description: string
}

export default function MarkerInfo({ open, header, headerImage, description }: MarkerInfoProps) {
  return (
    <Sheet open={open}>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>{header}</SheetTitle>
        </SheetHeader>
        <SheetDescription>{description}</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
import { ChevronRight } from "lucide-react"
import { useSidebar } from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"

export function AppSidebarTrigger() {
  const { toggleSidebar, open, openMobile } = useSidebar()

  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 z-20"
      onClick={toggleSidebar}
    >
      <div className="flex h-12 justify-center items-center bg-sidebar rounded-tr-xl rounded-br-xl">
        <div className={cn(
          open || openMobile && "rotate-180 duration-500 ease-in-out",
        )}>
          <ChevronRight />
        </div>
      </div>
    </button>
  )
}

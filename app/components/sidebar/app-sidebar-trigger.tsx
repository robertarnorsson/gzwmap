import { useSidebar } from "~/components/ui/sidebar"
import { Button } from "~/components/ui/button"
import clsx from "clsx"

export function AppSidebarTrigger() {
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <Button
      className={clsx(
        "group/trigger absolute top-4 left-4 z-20 backdrop-blur-md bg-background/20 aspect-square",
        isMobile ? ' hover:bg-background/20' : 'hover:bg-background/50'
      )}
      variant='ghost'
      size='icon'
      onClick={toggleSidebar}
    >
      <div className="relative w-full h-full cursor-pointer group">
        <div className="absolute inset-0 flex flex-col items-start justify-center space-y-1 px-2">
          <span className="block w-5 h-0.5 bg-primary rounded-sm transition-all duration-200 group-hover:w-4"></span>
          <span className="block w-4 h-0.5 bg-primary rounded-sm transition-all duration-200 group-hover:w-5"></span>
        </div>
      </div>
    </Button>
  )
}

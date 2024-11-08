import { useSidebar } from "~/components/ui/sidebar"
import { Button } from "~/components/ui/button"
import { Menu } from 'lucide-react';
import clsx from "clsx"

export function AppSidebarTrigger() {
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <Button
      className={clsx(
        "group/trigger absolute top-4 left-4 z-20 grid-bg border border-border rounded-none aspect-square",
        !isMobile && 'hover:bg-secondary'
      )}
      variant='ghost'
      size='icon'
      onClick={toggleSidebar}
    >
      <div className="flex justify-center items-center">
        <Menu />
      </div>
    </Button>
  )
}

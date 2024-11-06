import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "~/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-transparent">
      <SidebarHeader className="bg-transparent" />
      <SidebarContent className="bg-transparent">
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

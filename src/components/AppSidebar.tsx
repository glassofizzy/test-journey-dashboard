import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { PersonasSection } from "./sidebar/PersonasSection"
import { TestFlowsSection } from "./sidebar/TestFlowsSection"
import { FooterNav } from "./sidebar/FooterNav"
import { LayoutDashboard, PiSquare } from "lucide-react"
import { SiteSelector } from "./sidebar/SiteSelector"

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-black">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SiteSelector />
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  <PiSquare className="h-4 w-4" />
                  <span>Integrations (coming soon)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <PersonasSection />
        <TestFlowsSection />
      </SidebarContent>
      <FooterNav />
    </Sidebar>
  )
}
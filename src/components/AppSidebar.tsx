import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { SiteSelector } from "./sidebar/SiteSelector"
import { PersonasSection } from "./sidebar/PersonasSection"
import { TestFlowsSection } from "./sidebar/TestFlowsSection"
import { FooterNav } from "./sidebar/FooterNav"
import { LayoutDashboard, PiSquare } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="border-none">
      <SidebarContent className="font-sans">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SiteSelector />

              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <PersonasSection />
              <TestFlowsSection />

              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  <PiSquare className="h-4 w-4" />
                  <span>Integrations (coming soon)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="flex-1" />

        <SidebarFooter className="pb-4">
          <FooterNav />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
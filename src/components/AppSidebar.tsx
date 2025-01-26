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
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              <PersonasSection />
              <TestFlowsSection />

              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  Integrations (coming soon)
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
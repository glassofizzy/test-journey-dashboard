import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { SiteSelector } from "./sidebar/SiteSelector"
import { PersonasSection } from "./sidebar/PersonasSection"
import { FooterNav } from "./sidebar/FooterNav"
import { LayoutDashboard, GitBranch, PiSquare } from "lucide-react"
import { Link } from "react-router-dom"

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="border-r border-black">
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

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
                >
                  <Link to="/">
                    <div className="flex items-center">
                      <GitBranch className="mr-2 h-4 w-4" />
                      <span>Test Flows</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {[
                    "Login, Add to Cart",
                    "Change Profile",
                    "Request for Refund",
                    "Leave Customer Review",
                    "Purchase with stolen card"
                  ].map((flow) => (
                    <SidebarMenuSubItem key={flow}>
                      <SidebarMenuSubButton 
                        asChild
                        className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
                      >
                        <Link to="/journey/1">
                          {flow}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>

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
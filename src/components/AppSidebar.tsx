import { useState } from "react"
import { ChevronDown, GitBranch, HelpCircle, LogOut, MessageSquareMore, Settings, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const [selectedSite, setSelectedSite] = useState("Opensea.com")
  const [expandedPersonas, setExpandedPersonas] = useState(true)
  const [expandedFlows, setExpandedFlows] = useState(true)

  return (
    <Sidebar variant="floating" className="border-none">
      <SidebarContent className="font-sans">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  <span>{selectedSite}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
                  onClick={() => setExpandedPersonas(!expandedPersonas)}
                >
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>CarbonCopies Personas</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedPersonas ? 'rotate-180' : ''}`} />
                </SidebarMenuButton>
                {expandedPersonas && (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                        Macy
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                        Alex
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
                  onClick={() => setExpandedFlows(!expandedFlows)}
                >
                  <div className="flex items-center">
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span>Test Flows</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedFlows ? 'rotate-180' : ''}`} />
                </SidebarMenuButton>
                {expandedFlows && (
                  <SidebarMenuSub>
                    {[
                      "Login, Add to Cart",
                      "Change Profile",
                      "Request for Refund",
                      "Leave Customer Review",
                      "Purchase with stolen card"
                    ].map((flow) => (
                      <SidebarMenuSubItem key={flow}>
                        <SidebarMenuSubButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                          {flow}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

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
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                <MessageSquareMore className="mr-2 h-4 w-4" />
                <span>Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
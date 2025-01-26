import { useState } from "react";
import {
  Globe,
  LayoutDashboard,
  Users,
  GitBranch,
  Plug2,
  MessageSquareMore,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
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
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const [selectedSite, setSelectedSite] = useState("Opensea.com");
  const [testFlowsExpanded, setTestFlowsExpanded] = useState(false);

  const sites = ["Opensea.com", "Sephora.com", "Opensea.com (stg)"];
  const testFlows = [
    "Login, Add to Cart",
    "Change Profile",
    "Request for Refund",
    "Leave Customer Review",
    "Purchase with stolen card"
  ];

  return (
    <Sidebar variant="floating" className="mt-16 border-r border-black/10">
      <SidebarContent className="h-[90vh] flex flex-col justify-between font-['Valera_Round']">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Site Selector */}
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{selectedSite}</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {sites.map((site) => (
                    <SidebarMenuSubItem key={site}>
                      <SidebarMenuSubButton 
                        onClick={() => setSelectedSite(site)}
                        className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]"
                      >
                        {site}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>

              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* CarbonCopies */}
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                  <Users className="h-4 w-4" />
                  <span>CarbonCopies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Test Flows */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]"
                  onClick={() => setTestFlowsExpanded(!testFlowsExpanded)}
                >
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-2" />
                    <span>Test Flows</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${testFlowsExpanded ? 'rotate-180' : ''}`} />
                </SidebarMenuButton>
                {testFlowsExpanded && (
                  <SidebarMenuSub>
                    {testFlows.map((flow) => (
                      <SidebarMenuSubItem key={flow}>
                        <SidebarMenuSubButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                          {flow}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

              {/* Integrations */}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                  <Plug2 className="h-4 w-4" />
                  <span>Integrations (coming soon)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer Navigation */}
        <SidebarFooter className="pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                <MessageSquareMore className="h-4 w-4" />
                <span>Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                <HelpCircle className="h-4 w-4" />
                <span>Help</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
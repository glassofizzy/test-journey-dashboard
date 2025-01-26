import { useState } from "react"
import {
  ChevronDown,
  Globe,
  LayoutDashboard,
  Copy,
  GitBranch,
  Plug,
  MessageSquareMore,
  HelpCircle,
  Settings,
  LogOut
} from "lucide-react"
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

export function AppSidebar() {
  const [selectedSite, setSelectedSite] = useState("Opensea.com")
  const [expandedSections, setExpandedSections] = useState({
    testFlows: true
  })

  const sites = ["Opensea.com", "Sephora.com", "Opensea.com (stg)"]
  const testFlows = [
    "Login, Add to Cart",
    "Change Profile",
    "Request for Refund",
    "Leave Customer Review",
    "Purchase with stolen card"
  ]

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const commonButtonClasses = "hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"

  return (
    <Sidebar variant="floating" className="border-none">
      <SidebarContent className="font-sans">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Site Selector */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`justify-between ${commonButtonClasses}`}>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{selectedSite}</span>
                  </div>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </SidebarMenuButton>
                <SidebarMenuSub>
                  {sites.map((site) => (
                    <SidebarMenuSubItem key={site}>
                      <SidebarMenuSubButton 
                        onClick={() => setSelectedSite(site)}
                        className={commonButtonClasses}
                      >
                        {site}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>

              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton className={commonButtonClasses}>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* CarbonCopies */}
              <SidebarMenuItem>
                <SidebarMenuButton className={commonButtonClasses}>
                  <Copy className="h-4 w-4" />
                  <span>CarbonCopies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Test Flows */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  className={`justify-between ${commonButtonClasses}`}
                  onClick={() => toggleSection('testFlows')}
                >
                  <div className="flex items-center">
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span>Test Flows</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.testFlows ? 'rotate-180' : ''}`} />
                </SidebarMenuButton>
                {expandedSections.testFlows && (
                  <SidebarMenuSub>
                    {testFlows.map((flow) => (
                      <SidebarMenuSubItem key={flow}>
                        <SidebarMenuSubButton className={commonButtonClasses}>
                          {flow}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>

              {/* Integrations */}
              <SidebarMenuItem>
                <SidebarMenuButton className={`text-muted-foreground ${commonButtonClasses}`}>
                  <Plug className="h-4 w-4" />
                  <span>Integrations (coming soon)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="flex-1" />

        {/* Bottom aligned items */}
        <SidebarFooter className="pb-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className={commonButtonClasses}>
                <MessageSquareMore className="mr-2 h-4 w-4" />
                <span>Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={commonButtonClasses}>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={commonButtonClasses}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className={commonButtonClasses}>
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
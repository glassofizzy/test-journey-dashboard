import { useState } from "react"
import { ChevronDown, GitBranch } from "lucide-react"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function TestFlowsSection() {
  const [expanded, setExpanded] = useState(true)

  const flows = [
    "Login, Add to Cart",
    "Change Profile",
    "Request for Refund",
    "Leave Customer Review",
    "Purchase (Fraud)"
  ]

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <GitBranch className="mr-2 h-4 w-4" />
          <span>Test Flows</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </SidebarMenuButton>
      {expanded && (
        <SidebarMenuSub>
          {flows.map((flow) => (
            <SidebarMenuSubItem key={flow}>
              <SidebarMenuSubButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
                {flow}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  )
}
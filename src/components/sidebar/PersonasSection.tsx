import { useState } from "react"
import { ChevronDown, Users } from "lucide-react"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function PersonasSection() {
  const [expanded, setExpanded] = useState(true)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          <span>CarbonCopies Personas</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </SidebarMenuButton>
      {expanded && (
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
  )
}
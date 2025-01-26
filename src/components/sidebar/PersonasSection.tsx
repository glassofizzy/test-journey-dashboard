import { Users } from "lucide-react"
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function PersonasSection() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
      >
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          <span>CarbonCopies</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
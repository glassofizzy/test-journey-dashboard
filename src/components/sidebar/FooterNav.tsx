import { MessageSquareMore, HelpCircle, Settings, LogOut } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function FooterNav() {
  return (
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
  )
}
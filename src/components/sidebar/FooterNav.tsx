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
          <span>Feedback</span>
          <MessageSquareMore className="ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
          <span>Help</span>
          <HelpCircle className="ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
          <span>Settings</span>
          <Settings className="ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
          <span>Logout</span>
          <LogOut className="ml-auto h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
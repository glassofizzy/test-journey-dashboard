import { LayoutDashboard } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function DashboardButton() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
        <span>Dashboard</span>
        <LayoutDashboard className="h-4 w-4 ml-auto" />
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
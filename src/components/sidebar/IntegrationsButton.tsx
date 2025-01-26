import { Plug2 } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function IntegrationsButton() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="text-muted-foreground hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]">
        <Plug2 className="h-4 w-4" />
        <span>Integrations (coming soon)</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
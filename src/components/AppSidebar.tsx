import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { NavSection } from "./sidebar/NavSection";
import { mainNavItems, footerNavItems } from "@/config/navigation";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="border-r border-black mt-16">
      <SidebarContent className="min-h-[calc(100vh-4rem)] flex flex-col gap-8 overflow-hidden font-['Valera_Round']">
        <SidebarGroup>
          <SidebarGroupContent>
            <NavSection section={mainNavItems} />
          </SidebarGroupContent>
        </SidebarGroup>
        <NavSection 
          section={footerNavItems} 
          variant="footer"
          className="mt-auto"
        />
      </SidebarContent>
    </Sidebar>
  );
}
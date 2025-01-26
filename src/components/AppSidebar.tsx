import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SiteSelector } from "./sidebar/SiteSelector";
import { DashboardButton } from "./sidebar/DashboardButton";
import { PersonasSection } from "./sidebar/PersonasSection";
import { TestFlowsSection } from "./sidebar/TestFlowsSection";
import { IntegrationsButton } from "./sidebar/IntegrationsButton";
import { FooterNav } from "./sidebar/FooterNav";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="border-r border-black mt-16">
      <SidebarContent className="h-[90vh] flex flex-col justify-between font-['Valera_Round']">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SiteSelector />
              <DashboardButton />
              <PersonasSection />
              <TestFlowsSection />
              <IntegrationsButton />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <FooterNav />
      </SidebarContent>
    </Sidebar>
  );
}
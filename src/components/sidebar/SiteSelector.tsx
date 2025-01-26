import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function SiteSelector() {
  const [selectedSite, setSelectedSite] = useState("Opensea.com")

  return (
    <SidebarMenuItem>
      <SidebarMenuButton className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full">
        <span>{selectedSite}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </SidebarMenuButton>
      <SidebarMenuSub>
        {["Opensea.com", "Sephora.com", "Pi.ai"].map((site) => (
          <SidebarMenuSubItem key={site}>
            <SidebarMenuSubButton 
              onClick={() => setSelectedSite(site)}
              className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
            >
              {site}
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        ))}
      </SidebarMenuSub>
    </SidebarMenuItem>
  )
}
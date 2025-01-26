import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function SiteSelector() {
  const [selectedSite, setSelectedSite] = useState("Opensea.com")
  const [expanded, setExpanded] = useState(false)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className="justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <span>Site: {selectedSite}</span>
          <Globe className="h-4 w-4 ml-auto" />
        </div>
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </SidebarMenuButton>
      {expanded && (
        <SidebarMenuSub>
          {["Opensea.com", "Sephora.com", "Pi.ai"].map((site) => (
            <SidebarMenuSubItem key={site}>
              <SidebarMenuSubButton 
                onClick={() => {
                  setSelectedSite(site);
                  setExpanded(false);
                }}
                className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full"
              >
                {site}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  )
}
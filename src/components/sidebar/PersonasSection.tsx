import { Users } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function PersonasSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSelected = location.pathname.startsWith("/persona");

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={`justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full ${
          isSelected ? 'text-accent font-bold' : ''
        }`}
        onClick={() => navigate("/persona/macy")}
        data-active={isSelected}
      >
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          <span>CarbonCopies</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
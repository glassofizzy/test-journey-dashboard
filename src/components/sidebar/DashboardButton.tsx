import { LayoutDashboard } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function DashboardButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSelected = location.pathname === "/";

  const handleClick = () => {
    if (!isSelected) {
      navigate("/");
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={`hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px] ${
          isSelected ? 'text-accent font-bold' : ''
        }`}
        data-active={isSelected}
        onClick={handleClick}
      >
        <LayoutDashboard className="h-4 w-4" />
        <span>Dashboard</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
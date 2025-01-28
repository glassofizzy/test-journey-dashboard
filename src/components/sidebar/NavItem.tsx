import { NavItem as NavItemType } from "@/types/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface NavItemProps {
  item: NavItemType;
  variant?: "default" | "footer";
}

export function NavItem({ item, variant = "default" }: NavItemProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isSelected = item.path ? location.pathname === item.path : false;

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path && !isSelected) {
      navigate(item.path);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={`hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px] ${
          isSelected ? 'text-accent font-bold' : ''
        } ${variant === "footer" ? "text-muted-foreground" : ""}`}
        data-active={isSelected}
        onClick={handleClick}
      >
        <item.icon className="h-4 w-4" />
        <span>{item.label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
import { useState } from "react";
import { NavItem as NavItemType } from "@/types/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

interface NavItemProps {
  item: NavItemType;
  variant?: "default" | "footer";
}

export function NavItem({ item, variant = "default" }: NavItemProps) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isSelected = item.path ? location.pathname === item.path : false;

  const handleClick = () => {
    if (item.expandable) {
      setExpanded(!expanded);
    } else if (item.onClick) {
      item.onClick();
    } else if (item.path && !isSelected) {
      navigate(item.path);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={`justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px] ${
          isSelected ? 'text-accent font-bold' : ''
        } ${variant === "footer" ? "text-muted-foreground" : ""}`}
        data-active={isSelected}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <item.icon className="h-4 w-4" />
          <span>{item.label}</span>
        </div>
        {item.expandable && (
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        )}
      </SidebarMenuButton>
      {item.expandable && expanded && item.subItems && (
        <SidebarMenuSub>
          {item.subItems.map((subItem) => (
            <SidebarMenuSubItem key={subItem.label}>
              <SidebarMenuSubButton 
                className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-[40px]"
                onClick={() => subItem.path && navigate(subItem.path)}
              >
                {subItem.label}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}
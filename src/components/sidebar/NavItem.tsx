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
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const handleClick = () => {
    if (hasSubItems) {
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
        className={`justify-between hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full ${
          isSelected ? 'text-accent font-bold' : ''
        } ${variant === "footer" ? "text-muted-foreground" : ""}`}
        data-active={isSelected}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <item.icon className="h-4 w-4 mr-2" />
          <span>{item.label}</span>
        </div>
        {hasSubItems && (
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        )}
      </SidebarMenuButton>
      {hasSubItems && expanded && (
        <SidebarMenuSub>
          <div className="relative pl-[22px]">
            <div className="absolute left-[10px] top-0 bottom-0 w-[1px] bg-black"></div>
            <div className="space-y-1">
              {item.subItems?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton 
                    className="hover:bg-white hover:border-black hover:border-[1.5px] hover:text-accent rounded-full pl-4"
                    onClick={() => subItem.onClick?.()}
                  >
                    {subItem.label}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </div>
          </div>
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}
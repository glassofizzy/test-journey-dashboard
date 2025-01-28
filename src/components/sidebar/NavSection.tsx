import { NavSection as NavSectionType } from "@/types/navigation";
import { NavItem } from "./NavItem";
import { SidebarMenu } from "@/components/ui/sidebar";

interface NavSectionProps {
  section: NavSectionType;
  variant?: "default" | "footer";
  className?: string;
}

export function NavSection({ section, variant = "default", className = "" }: NavSectionProps) {
  return (
    <SidebarMenu className={className}>
      {section.items.map((item) => (
        <NavItem key={item.label} item={item} variant={variant} />
      ))}
    </SidebarMenu>
  );
}
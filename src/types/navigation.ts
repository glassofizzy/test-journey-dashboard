import { LucideIcon } from "lucide-react";

export interface SubNavItem {
  label: string;
  path?: string;
}

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path?: string;
  onClick?: () => void;
  expandable?: boolean;
  subItems?: SubNavItem[];
}

export interface NavSection {
  items: NavItem[];
}
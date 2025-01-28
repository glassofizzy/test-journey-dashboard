import { LucideIcon } from "lucide-react";

export interface SubNavItem {
  label: string;
  path?: string;
  onClick?: () => void;
}

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path?: string;
  onClick?: () => void;
  subItems?: SubNavItem[];
}

export interface NavSection {
  items: NavItem[];
  title?: string;
}
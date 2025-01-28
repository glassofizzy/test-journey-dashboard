import { LucideIcon } from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  path?: string;
  onClick?: () => void;
}

export interface NavSection {
  items: NavItem[];
  title?: string;
}
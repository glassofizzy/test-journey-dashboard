import { CreditCard, Settings, MessageSquare, Users, LayoutDashboard, Users as UsersIcon, GitBranch, Globe, Plug2 } from "lucide-react";
import { NavSection } from "@/types/navigation";

export const mainNavItems: NavSection = {
  items: [
    {
      icon: Globe,
      label: "Site: Opensea.com",
    },
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: UsersIcon,
      label: "CarbonCopies",
      path: "/persona/macy",
    },
    {
      icon: GitBranch,
      label: "Test Flows",
    },
    {
      icon: Plug2,
      label: "Integrations (coming soon)",
    },
  ],
};

export const footerNavItems: NavSection = {
  items: [
    {
      icon: CreditCard,
      label: "Billing",
    },
    {
      icon: Settings,
      label: "Settings",
    },
    {
      icon: MessageSquare,
      label: "Feedback & Earn",
    },
    {
      icon: Users,
      label: "Refer & Earn",
    },
  ],
};
import { CreditCard, Settings, MessageSquare, Users, LayoutDashboard, Users as UsersIcon, GitBranch, Globe, Plug2, ChevronDown } from "lucide-react";
import { NavSection } from "@/types/navigation";

export const mainNavItems: NavSection = {
  items: [
    {
      icon: Globe,
      label: "Site: Opensea.com",
      expandable: true,
      subItems: [
        { label: "Production", path: "#" },
        { label: "Staging", path: "#" },
        { label: "Development", path: "#" }
      ]
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
      expandable: true,
      subItems: [
        { label: "Login, Add to Cart", path: "#" },
        { label: "Change Profile", path: "#" },
        { label: "Request for Refund", path: "#" },
        { label: "Leave Customer Review", path: "#" },
        { label: "Purchase (Fraud)", path: "#" }
      ]
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
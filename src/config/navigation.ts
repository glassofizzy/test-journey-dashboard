import { CreditCard, Settings, MessageSquare, Users, LayoutDashboard, Users as UsersIcon, GitBranch, Globe, Plug2 } from "lucide-react";
import { NavSection } from "@/types/navigation";

export const mainNavItems: NavSection = {
  items: [
    {
      icon: Globe,
      label: "Site: Robinhood.com",
      subItems: [
        { label: "Robinhood.com" },
        { label: "Pi.ai" }
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
      subItems: [
        { 
          label: "Login, Add to Cart",
          path: "/test-flows/login-cart"
        },
        { 
          label: "Change Profile",
          path: "/test-flows/change-profile"
        },
        { 
          label: "Request for Refund",
          path: "/test-flows/refund"
        },
        { 
          label: "Leave Customer Review",
          path: "/test-flows/review"
        },
        { 
          label: "Purchase (Fraud)",
          path: "/test-flows/fraud"
        }
      ]
    },
    {
      icon: Plug2,
      label: "Integrations (beta)",
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
      path: "/settings",
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
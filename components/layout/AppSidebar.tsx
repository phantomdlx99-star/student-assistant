"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  ClipboardList,
  FileText,
  Gauge,
  Settings,
  Timer,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: Gauge },
  { label: "My Plan", href: "/my-plan", icon: ClipboardList },
  { label: "Revision Sessions", href: "/revision-sessions", icon: Timer },
  { label: "Calendar", href: "/calendar", icon: Calendar },
  { label: "Progress", href: "/progress", icon: Gauge },
  { label: "Subjects", href: "/subjects", icon: BookOpen },
  { label: "Tasks", href: "/tasks", icon: CheckCircle },
  { label: "Notes", href: "/notes", icon: FileText },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" variant="floating">
      <SidebarHeader className="text-start text-2xl font-bold mx-2">
        Student
        <span className="text-[#4F46AB]">Assistant</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-3">
          <SidebarMenu className="gap-5">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton
                    className={clsx(
                      "h-11 rounded-lg px-4 text-base",
                      isActive
                        ? "text-[#4F46AB] bg-sidebar-accent hover:bg-sidebar-accent"
                        : "",
                    )}
                    render={<Link href={item.href} />}
                  >
                    <item.icon className="size-6!" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

"use client"

import * as React from "react"
import {
  
  BarChart3Icon,

  DatabaseIcon,

  HomeIcon,
  
  PieChart,
  ScanFaceIcon,
  Settings2,
  
  StoreIcon,
  TargetIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Himmad",
    email: "Fixoria Sales CEO",
    avatar: "/images/images (1).jpeg",
  },
  
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: HomeIcon,
      isActive: false,
      
    },
    {
      title: "My Store",
      url: "#",
      icon: StoreIcon,

    },
    {
      title: "Finance",
      url: "#",
      icon: DatabaseIcon,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: ScanFaceIcon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics Report",
      url: "#",
      icon: BarChart3Icon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      icon: TargetIcon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Online Store",
      url: "#",
      icon: StoreIcon,
    },
    {
      name: "Point of Sales",
      url: "#",
      icon: PieChart,
    },
  
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <aside className="sidebar">
    <h1 className="text-xl font-bold p-4">Fixoria Sales</h1> 
   
</aside>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

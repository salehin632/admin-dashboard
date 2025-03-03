
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Upload, Download, Plus,
  Mail,
} from "lucide-react";



import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import Orders from "@/components/features/orders";
import { Input } from "@/components/ui/input";

export default function Page() {


  return (
    
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
       
      <header className="flex justify-between items-center p-4 ">
    
   
</header>
        <div className="w-full flex-1">
          {/* <AdminSearch /> */}
        </div>
        {/* <ModeToggle /> */}
        <div>
          
        </div>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
      </header>
      <div className="mt-4 mx-6">
      <Orders />
      </div>
        
      </SidebarInset>
    </SidebarProvider>
  )
}

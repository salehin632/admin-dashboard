
import {
  Bell,
 
  Mail,
} from "lucide-react";



import { AppSidebar } from "@/components/app-sidebar"


import {
  SidebarInset,
  SidebarProvider,
  
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button";


import Orders from "@/components/features/orders";


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

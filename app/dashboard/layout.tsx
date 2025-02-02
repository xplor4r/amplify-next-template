
import DashboardLayout from '@/components/layout'
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';

import Sidebar from '@/components/sidebar';

export default async function Layout({ children}: any) {
    // get supbase user

    return (
        <SidebarProvider>
          
            <DashboardLayout>
             
                <Sidebar />
             
                <div className="h-full w-full sm:ml-[64px]">
                    <div className='flex h-full w-full flex-col max-sm:ml-0'> 
                          {children}
                    </div>    
                </div>

            </DashboardLayout>
    
        </SidebarProvider>
           
    )
}


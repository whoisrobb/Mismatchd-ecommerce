import SidebarNav from "@/components/layouts/sidebar-nav";
import { sidebarConfig } from "@/lib/nav-config";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
}


const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex py-4 w-full gap-2 min-h-[calc(100vh-3rem)]">
      <div className="hidden lg:block md:block w-[30%] h-full">
        <SidebarNav items={sidebarConfig} />
      </div>
      <div className="px-12 w-full">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;
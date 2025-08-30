import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { childProps } from "@/types";
import React from "react";
import AppSidebar from "./_components/app-sidebar";

const Layout = ({ children }: childProps) => {
  return (
    <div>
      {" "}
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;

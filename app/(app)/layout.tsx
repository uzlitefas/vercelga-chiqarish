import { SidebarProvider } from "@/components/ui/sidebar";
import { childProps } from "@/types";
import React from "react";
import AppSidebar from "./_components/app-sidebar";
import AppNavbar from "./_components/navbar/app-navbar";

const Layout = ({ children }: childProps) => {
  return (
    <div>
      {" "}
      <SidebarProvider>
        <AppSidebar />
        <main>
          <AppNavbar/>
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;

import { SidebarProvider } from "@/components/ui/sidebar";
import { childProps } from "@/types";
import React from "react";
import AppSidebar from "./_components/app-sidebar";
import AppNavbar from "./_components/navbar/app-navbar";

const Layout = ({ children }: childProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;

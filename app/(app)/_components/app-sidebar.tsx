import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Navigation from "./navigation";
import Following from "./following";
import Recomended from "./recomended";

const AppSidebar = () => {
  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarContent className="overflow-clip">
          <Navigation />
          <SidebarSeparator />
          <Following />
          <SidebarSeparator />
          <Recomended />
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;

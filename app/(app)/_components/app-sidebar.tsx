import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Navigation from "./navigation";
import Following from "./following";
import Recomended from "./recomended";
import { DropdownMenu,  DropdownMenuContent,  DropdownMenuItem,  DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronUp, User, User2 } from "lucide-react";
import Link from "next/link";

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
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="flex justify-center">
                    <User2/> Username
                    <ChevronUp/>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top"
                className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <Link href={"/as"}>
                    <span>Account</span>
                    </Link>
                  </DropdownMenuItem>
                   <DropdownMenuItem>
                    <Link href={"/dashboard"}>
                    <span>DashBoard</span>
                    </Link>
                  </DropdownMenuItem>
                   <DropdownMenuItem>
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;

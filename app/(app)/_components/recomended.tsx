import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { users } from "@/constants";
import Image from "next/image";
import React from "react";

const Recomended = () => {
  return <SidebarGroup>
        <SidebarGroupLabel>Recomended</SidebarGroupLabel>
        <SidebarContent>
          <SidebarMenu className="space-y-2">
            {users.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton>
                  <Image
                    width={32}
                    height={32}
                    className="rounded-full"
                    src={item.avatar}
                    alt={item.username}
                  />
                  <div className="flex flex-col">
                    <p className="font-Montserrat font-[600]">
                      @{item.username}
                    </p>
                    <span>
                      {item.follow} follow{item.follow >= 2 && "s"}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </SidebarGroup>
};

export default Recomended;

import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Action = () => {
  return (
    <div className="flex items-center justify-end gap-x-3">
      <ModeToggle />
      <SidebarTrigger />
      <SignedOut>
        <SignInButton>
          <Button className="rounded-full font-medium text-sm sm:text-base cursor-pointer">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button className="bg-[#6c47ff] rounded-full font-medium text-sm sm:text-base cursor-pointer">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Action;

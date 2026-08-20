import React from "react";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Bell, Search } from "lucide-react";
import IconBadge from "./IconBadge";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { SidebarTrigger } from "../ui/sidebar";

const Header = async () => {
  const user = await currentUser();
  const firstname = user?.firstName;
  return (
    <header className="flex w-full h-auto pr-4 pl-1 py-4 items-center justify-between">
      <div className="flex justify-center gap-5 items-center">
        <SidebarTrigger />
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Good Morning, <br className="lg:hidden" /> {firstname} 👋
          </h1>
          <h3 className="text-sm text-gray-400 hidden lg:block">
            Stay focused and keep going. You've got this!
          </h3>
        </div>
      </div>
      <div className="items-center justify-center gap-5 flex">
        <div className="hidden sm:block">
          <InputGroup className="w-68 rounded-sm h-10 ">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon align={"inline-start"}>
              <Search className="h-4 w-4 text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="sm:hidden block">
          <Button variant={"outline"} size={"icon"}>
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        {/* Icon badge */}
        <IconBadge icon={Bell} count={4} />
        <Show when="signed-in">
          <UserButton />
        </Show>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default">Sign Up</Button>
          </SignUpButton>
        </Show>
      </div>
    </header>
  );
};

export default Header;

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

const Header = async () => {
  const user = await currentUser();
  const firstname = user?.firstName;
  return (
    <header className="flex w-full h-auto px-8 py-4 items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Good Morning, {firstname} 👋
        </h1>
        <h3 className="text-sm text-gray-400">
          Stay focused and keep going. You've got this!
        </h3>
      </div>
      <div className="flex items-center justify-center gap-5">
        <InputGroup className="w-68 rounded-sm h-10">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align={"inline-start"}>
            <Search className="h-4 w-4 text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        {/* Icon badge */}
        <IconBadge icon={Bell} count={8} />
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

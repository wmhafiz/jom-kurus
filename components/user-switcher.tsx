"use client";

import React, { useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";
import { useSelectedUser } from "@/lib/store";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface UserSwitcherProps extends PopoverTriggerProps {
  users: User[];
}

export default function UserSwitcher({ className, users }: UserSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = useSelectedUser();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (selectedUser) return;

    if (status === "authenticated" && session && session.user) {
      const foundUsers = users.filter(
        (user) => user.email === session?.user.email
      );
      setSelectedUser(foundUsers[0]);
    } else {
      setSelectedUser(users[0])
    }
  }, [selectedUser, session, setSelectedUser, status, users]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a user"
          className={cn("w-[200px] justify-between", className)}
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage src={selectedUser?.image} alt={selectedUser?.name} />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          {selectedUser?.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search user..." />
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup heading={"Friends"}>
              {users.map((user) => (
                <CommandItem
                  key={user.id}
                  onSelect={() => {
                    setSelectedUser(user);
                    setOpen(false);
                  }}
                  className="text-sm"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  {user.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedUser?.id === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

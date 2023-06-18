"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.endsWith("/") ? "" : "text-muted-foreground"
        )}
      >
        Home
      </Link>
      <Link
        href="/leaderboards"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/leaderboards") ? "" : "text-muted-foreground"
        )}
      >
        Leaderboards
      </Link>
      <Link
        href="/users"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/users") ? "" : "text-muted-foreground"
        )}
      >
        Users
      </Link>
      <Link
        href="/settings"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/settings") ? "" : "text-muted-foreground"
        )}
      >
        Settings
      </Link>
    </nav>
  );
}

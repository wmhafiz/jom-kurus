import { Search } from "lucide-react";
import "../globals.css";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata = {
  title: "JomKur.us",
  description: "Lets loose weight!",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}

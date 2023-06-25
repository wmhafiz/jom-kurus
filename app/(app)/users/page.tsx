import { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import UserSwitcher from "@/components/user-switcher";
import OverviewTab from "./overview";
import IntakeTab from "./intake";
import BurntTab from "./burnt";
import { getAllUsers } from "@/data/users";

export const metadata: Metadata = {
  title: "JomKur.us: User",
  description: "Lets loose weight together!",
};

export default async function UsersPage() {
  const users = await getAllUsers();
  console.log({ users });
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">User Detail</h2>
        <div className="flex items-center space-x-2">
          <UserSwitcher />
          <CalendarDateRangePicker />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="intake">Intake</TabsTrigger>
          <TabsTrigger value="burnt">Burnt</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="intake" className="space-y-4">
          <IntakeTab />
        </TabsContent>
        <TabsContent value="burnt" className="space-y-4">
          <BurntTab />
        </TabsContent>
      </Tabs>
    </>
  );
}

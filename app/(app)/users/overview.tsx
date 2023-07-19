import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Sword, DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { WeeklyActivity } from "@/components/weekly-activity";
import { RecentWorkout } from "./recent-workout";
import { RecentDiet } from "./recent-diet";
import { db } from "@/lib/db";
import { TotalIntake } from "@/components/cards/user/total-intake";
import { AvgIntake } from "@/components/cards/user/average-intake";
import { TotalBurnt } from "@/components/cards/user/total-burnt";
import { AvgBurnt } from "@/components/cards/user/average-burnt";

async function getWorkouts() {
  return db.workoutLog.findMany({
    include: {
      user: true,
    },
  });
}

export default async function OverviewTab() {
  const workouts = await getWorkouts();
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Intake</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <TotalIntake />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Intake
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <AvgIntake />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Burnt</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <TotalBurnt />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Burnt</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <AvgBurnt />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>This Week</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <WeeklyActivity workouts={workouts} />
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Intake</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <RecentDiet />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Workout</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentWorkout />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

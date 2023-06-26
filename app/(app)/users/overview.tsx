import { Overview } from "@/components/overview";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Sword, DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { WeeklyActivity } from "@/components/weekly-activity";
import { activities } from "@/lib/activity";
import { RecentWorkout } from "./recent-workout";
import TargetDiet from "./target-diet";
import { RecentDiet } from "./recent-diet";
import { db } from "@/lib/db";
import { TotalIntake } from "./total-intake";
import { getRecentWorkouts } from "@/data/workouts";

async function getWorkouts() {
  // const res = await fetch("http://localhost:3000/api/workouts");

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
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
           < TotalIntake />
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
            <div className="text-2xl font-bold">1,400 kcal per day</div>
            <p className="text-xs text-muted-foreground">
              +2% more than average user
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Burnt</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Burnt</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
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

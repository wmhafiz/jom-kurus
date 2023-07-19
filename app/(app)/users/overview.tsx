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
import UserOverviewStats from "@/components/cards/user-overview-stats";

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
        <UserOverviewStats />
      </div >
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

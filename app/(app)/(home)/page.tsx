import { Metadata } from "next";
import { Cookie, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MonthlyActivity } from "@/components/monthly-activity";
import { activities } from "@/lib/activity";
import {
  getMonthlyWorkoutStats,
  getWeeklyWorkoutStats,
} from "@/data/workout-stats";
import {
  getMonthlyIntakeStats,
  getWeeklyIntakeStats,
} from "@/data/intake-stats";

export const metadata: Metadata = {
  title: "JomKur.us - Home",
  description: "Lets loose weight together!",
};

export default async function HomePage() {
  const monthlyWorkoutStats = await getMonthlyWorkoutStats();
  const weeklyWorkoutStatus = await getWeeklyWorkoutStats();
  const monthlyIntake = await getMonthlyIntakeStats();
  const weeklyIntake = await getWeeklyIntakeStats();

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Burnt</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {monthlyWorkoutStats.burnt} kcal
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Workout
            </CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {monthlyWorkoutStats.minutes} minutes
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Intake
            </CardTitle>
            <Cookie className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{monthlyIntake} kcal</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Burnt</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {weeklyWorkoutStatus.burnt} kcal
            </div>
            <p className="text-xs text-muted-foreground">+19% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Workout
            </CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {weeklyWorkoutStatus.minutes} minutes
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Intake</CardTitle>
            <Cookie className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weeklyIntake} kcal</div>
            <p className="text-xs text-muted-foreground">+201 from last week</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Activites</CardTitle>
        </CardHeader>
        <CardContent>
          <MonthlyActivity activities={activities} />
        </CardContent>
      </Card>
    </>
  );
}

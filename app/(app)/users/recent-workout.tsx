import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRecentWorkouts } from "@/data/workouts";
import { randomInt } from "crypto";

export async function RecentWorkout() {
  const recentWorkouts = await getRecentWorkouts();
  console.log("recentWorkouts", JSON.stringify(recentWorkouts, null, 2));
  return (
    <div className="space-y-8">
      {recentWorkouts.map((workout, idx) => (
        <>
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {workout.category}
              </p>
              <p className="text-sm text-muted-foreground">
                {workout.user.email}
              </p>
            </div>
            <div className="ml-auto font-medium">{workout.minutes} min</div>
          </div>
        </>
      ))}
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRecentWorkouts } from "@/data/workouts";

export async function RecentWorkout() {
  const recentWorkouts = await getRecentWorkouts();
  return (
    <div className="space-y-8 ml-4">
      {recentWorkouts.map((workout, idx) => (
        <div key={idx} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={workout.user.image || "/avatars/01.png"}
              alt="Avatar"
            />
            <AvatarFallback>{workout.user.name}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {workout.category}
            </p>
            <p className="text-sm text-muted-foreground">
              {workout.user.email}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {workout.calorieBurnt} cal / {workout.minutes} min
          </div>
        </div>
      ))}
    </div>
  );
}

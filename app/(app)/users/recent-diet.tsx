import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRecentIntake } from "@/data/intakes";

export async function RecentDiet() {
  const recentIntakes = await getRecentIntake();
  return (
    <div className="space-y-8">
      {recentIntakes.map((diet, idx) => (
        <div key={idx} className="flex items-center ml-4">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={diet.user.image || "/avatars/01.png"}
              alt="Avatar"
            />
            <AvatarFallback>{diet.user.name}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {diet.description} ({diet.category})
            </p>
            <p className="text-sm text-muted-foreground">{diet.user.email}</p>
          </div>
          <div className="ml-auto font-medium">
            {diet.calorieIntake} calories
          </div>
        </div>
      ))}
    </div>
  );
}

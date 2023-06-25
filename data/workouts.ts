import { db } from "@/lib/db";

export async function getRecentWorkouts() {
  return db.workoutLog.findMany({
    take: 10,
    orderBy: {
      date: "desc",
    },
    include: {
      user: true,
    },
  });
}

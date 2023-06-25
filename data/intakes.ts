import { db } from "@/lib/db";

export async function getRecentIntake() {
  return db.dietLog.findMany({
    take: 10,
    orderBy: {
      date: "desc",
    },
    include: {
      user: true,
    },
  });
}

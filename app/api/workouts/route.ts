import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const workouts = await db.workoutLog.findMany({
    include: {
      user: true,
    },
  });
  return NextResponse.json(workouts);
}

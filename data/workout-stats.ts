import {
  startOfToday,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
} from "date-fns";
import "server-only";
import { db } from "@/lib/db";

const today = startOfToday();

const getWorkoutStats = async (startDate: Date, endDate: Date) => {
  const aggregateResult = await db.workoutLog.aggregate({
    _sum: {
      calorieBurnt: true,
      minutes: true,
    },
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
  return {
    burnt: aggregateResult._sum.calorieBurnt || 0,
    minutes: aggregateResult._sum.minutes || 0,
  };
};

export const getMonthlyWorkoutStats = async () => {
  return getWorkoutStats(startOfMonth(today), endOfMonth(today));
};

export const getWeeklyWorkoutStats = async () => {
  return getWorkoutStats(startOfWeek(today), endOfWeek(today));
};

export const getWorkoutStatsForUser = async (
  startDate: Date,
  endDate: Date,
  userId: string
) => {
  const aggregateResult = await db.workoutLog.aggregate({
    _sum: {
      calorieBurnt: true,
      minutes: true,
    },
    where: {
      AND: [
        {
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
        {
          userId,
        },
      ],
    },
  });
  return {
    burnt: aggregateResult._sum.calorieBurnt || 0,
    minutes: aggregateResult._sum.minutes || 0,
  };
};

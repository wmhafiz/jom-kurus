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

const getIntakeStats = async (startDate: Date, endDate: Date) => {
  const aggregateResult = await db.dietLog.aggregate({
    _sum: {
      calorieIntake: true,
    },
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
  return aggregateResult._sum.calorieIntake || 0;
};

export const getMonthlyIntakeStats = async () => {
  return getIntakeStats(startOfMonth(today), endOfMonth(today));
};

export const getWeeklyIntakeStats = async () => {
  return getIntakeStats(startOfWeek(today), endOfWeek(today));
};

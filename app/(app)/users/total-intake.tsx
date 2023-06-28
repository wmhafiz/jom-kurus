import { getRecentIntake } from '@/data/intakes';
import { db } from '@/lib/db';
import {
    startOfToday,
    startOfWeek,
    startOfMonth,
    endOfWeek,
    endOfMonth,
  } from "date-fns";

  const today = startOfToday();

  const calculation = async (startDate: Date, endDate: Date) => {
    const TotalCalories = await db.dietLog.aggregate({
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
    return TotalCalories;
  };
  
 export async function TotalIntake() {
    const value = await calculation(startOfMonth(today), endOfMonth(today));
    return (
      <>
        <div className="text-2xl font-bold">
          {value._sum.calorieIntake} kcal
        </div>
        <p className="text-xs text-muted-foreground"> 
          calories left 
        </p>
      </>
    );
  }
  
  export async function RemainingCalories() {
    const recentIntakes = await getRecentIntake();
    
}
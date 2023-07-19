import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const url = new URL(request.url)
    const dateFrom = new Date(url.searchParams.get('dateFrom')!)
    const dateTo = new Date(url.searchParams.get('dateTo')!)

    if (!params?.id || !dateFrom || !dateTo) return new Response('Invalid query', { status: 400 })

    const where = {
        date: {
            gte: dateFrom.toISOString(),
            lte: dateTo.toISOString(),
        },
        userId: params.id
    }

    // intake stats
    const intakeResult = await db.dietLog.aggregate({
        _sum: { calorieIntake: true, },
        _avg: { calorieIntake: true, },
        where,
    });
    const totalIntake = intakeResult._sum.calorieIntake ?? 0
    const avgIntake = intakeResult._avg.calorieIntake ?? 0

    // burnt stats
    const burntResult = await db.workoutLog.aggregate({
        _sum: { calorieBurnt: true, },
        _avg: { calorieBurnt: true, },
        where
    })
    const totalBurnt = burntResult._sum.calorieBurnt ?? 0
    const avgBurnt = burntResult._avg.calorieBurnt ?? 0

    // console.log('result', JSON.stringify({
    //     userId: params.id,
    //     gte: dateFrom.toISOString(),
    //     lte: dateTo.toISOString(),
    //     intakeResult,
    //     burntResult
    // }, null, 2))
    return NextResponse.json({ totalIntake, avgIntake, totalBurnt, avgBurnt })
}

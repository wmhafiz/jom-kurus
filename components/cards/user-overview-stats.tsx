"use client"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { useDateRange, useSelectedUser } from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
import { formatNumber } from "@/lib/formatter";
import { Skeleton } from "@/components/ui/skeleton"

interface UserOverview {
    totalIntake: number;
    avgIntake: number;
    totalBurnt: number;
    avgBurnt: number;
}

async function getUserOverview(userId?: string, dateFrom?: Date, dateTo?: Date,) {
    return (await fetch(`/api/user/${userId ?? "clj1lnw610000vhnx7ow3f9y6"}/overview?dateFrom=${dateFrom ?? '2023-01-19'}&dateTo=${dateTo ?? '2023-08-20'}`).then(
        (res) => res.json()
    )) as UserOverview
}

const CardLoading = () => (
    <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
)

export default function UserOverviewStats() {
    const [user] = useSelectedUser()
    const [dateRange] = useDateRange()
    const { data, isLoading, isFetching, error } = useQuery<UserOverview>({
        queryKey: ["users", "overview", user?.id, dateRange?.from, dateRange?.to],
        queryFn: () => getUserOverview(user?.id, dateRange?.from, dateRange?.to),
        staleTime: 5 * 1000,
    });

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Intake</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {isLoading ? <CardLoading /> :
                        <>
                            <div className="text-2xl font-bold">
                                {formatNumber(data?.totalIntake ?? 0)} kcal
                            </div>
                            <p className="text-xs text-muted-foreground">
                                calories left
                            </p>
                        </>
                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Average Intake
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {isLoading ? <CardLoading /> :
                        <>
                            <div className="text-2xl font-bold">{formatNumber(data?.avgIntake ?? 0)} kcal per day</div>
                            <p className="text-xs text-muted-foreground">
                                +2% more than average user
                            </p>
                        </>
                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Burnt</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {isLoading ? <CardLoading /> :
                        <>
                            <div className="text-2xl font-bold">
                                {formatNumber(data?.totalBurnt ?? 0)} kcal
                            </div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </>
                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Burnt</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    {isLoading ? <CardLoading /> :
                        <>
                            <div className="text-2xl font-bold">
                                {formatNumber(data?.avgBurnt ?? 0)} kcal
                            </div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </>
                    }
                </CardContent>
            </Card>
        </>
    )
}
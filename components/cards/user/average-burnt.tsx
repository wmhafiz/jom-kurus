'use client'
import { formatNumber } from '@/lib/formatter';
import { useAvgBurnt } from '@/lib/store';

export function AvgBurnt() {
    const avgBurnt = useAvgBurnt()
    return (
        <>
            <div className="text-2xl font-bold">
                {formatNumber(avgBurnt)} kcal
            </div>
            <p className="text-xs text-muted-foreground">
                +201 since last hour
            </p>
        </>
    );
}
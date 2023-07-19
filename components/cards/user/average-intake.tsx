'use client'
import { formatNumber } from '@/lib/formatter';
import { useAvgIntake } from '@/lib/store';

export function AvgIntake() {
  const avgIntake = useAvgIntake()
  return (
    <>
      <div className="text-2xl font-bold">{formatNumber(avgIntake)} kcal per day</div>
      <p className="text-xs text-muted-foreground">
        +2% more than average user
      </p>
    </>
  );
}
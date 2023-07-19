'use client'
import { formatNumber } from '@/lib/formatter';
import { useTotalIntake } from '@/lib/store';

export function TotalIntake() {
  const totalIntake = useTotalIntake()
  return (
    <>
      <div className="text-2xl font-bold">
        {formatNumber(totalIntake)} kcal
      </div>
      <p className="text-xs text-muted-foreground">
        calories left
      </p>
    </>
  );
}
'use client'
import { formatNumber } from '@/lib/formatter';
import { useTotalBurnt } from '@/lib/store';

export function TotalBurnt() {
  const totalBurnt = useTotalBurnt()
  return (
    <>
      <div className="text-2xl font-bold">
        {formatNumber(totalBurnt)} kcal
      </div>
      <p className="text-xs text-muted-foreground">
        +19% from last month
      </p>
    </>
  );
}
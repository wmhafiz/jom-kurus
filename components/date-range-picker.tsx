"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRangePicker, DateRangePickerItem, DateRangePickerValue } from "@tremor/react";
import { cn } from "@/lib/utils"
import { useDateRange } from "@/lib/store"

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {

  const [value, setValue] = useDateRange()

  return (
    <div className={cn("grid gap-2", className)}>
      <DateRangePicker
        className="max-w-md mx-auto"
        value={value}
        onValueChange={setValue}
        color="rose"
      />
    </div>
  )
}
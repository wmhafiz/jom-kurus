import { atom, useAtom, useAtomValue } from "jotai";
import { DateRange } from "react-day-picker"
import {
    startOfToday,
    startOfMonth,
    endOfMonth,
} from "date-fns";
import { User } from "@prisma/client";

const today = startOfToday()
const dateRangeAtom = atom<DateRange | undefined>({
    from: startOfMonth(today),
    to: endOfMonth(today),
})
export const useDateRange = () => useAtom(dateRangeAtom)

const selectedUserAtom = atom<User | undefined>(undefined)
export const useSelectedUser = () => useAtom(selectedUserAtom)
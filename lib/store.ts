import { atom, useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
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

const selectedUserAtom = atomWithStorage<User | undefined>('selected-user', undefined)
export const useSelectedUser = () => useAtom(selectedUserAtom)
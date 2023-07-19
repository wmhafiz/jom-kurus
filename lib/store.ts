import { atom, useAtom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import {
    startOfToday,
    startOfMonth,
    endOfMonth,
} from "date-fns";
import { User } from "@prisma/client";
import { DateRangePickerValue } from "@tremor/react";

const today = startOfToday()
const dateRangeAtom = atom<DateRangePickerValue>({
    from: startOfMonth(today),
    to: endOfMonth(today),
})
export const useDateRange = () => useAtom(dateRangeAtom)

const selectedUserAtom = atomWithStorage<User | undefined>('selected-user', undefined)
export const useSelectedUser = () => useAtom(selectedUserAtom)
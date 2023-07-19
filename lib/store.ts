import { atom, useAtom, useAtomValue } from "jotai";
import { DateRange } from "react-day-picker"
import {
    startOfToday,
    startOfMonth,
    endOfMonth,
} from "date-fns";
import { User } from "@prisma/client";

const today = new Date()
const dateRangeAtom = atom<DateRange | undefined>({
    from: startOfMonth(today),
    to: endOfMonth(today),
})

const selectedUserAtom = atom<User | undefined>(undefined)

const userOverviewAtom = atom<
    Promise<
        {
            totalIntake: number;
            avgIntake: number;
            totalBurnt: number;
            avgBurnt: number;
        }
    >
>(async (get) => {
    const selectedUser = get(selectedUserAtom)
    const userId = selectedUser ? selectedUser?.id : "clj325z330000vhy9lefrrzf1"
    const dateRange = get(dateRangeAtom);
    const today = startOfToday();
    const dateFrom = dateRange?.from || startOfMonth(today)
    const dateTo = dateRange?.to || endOfMonth(today)
    const url = `/api/user/${userId}/overview?dateFrom=${dateFrom.toISOString().slice(0, 10)}&dateTo=${dateTo.toISOString().slice(0, 10)}`
    const req = await fetch(url);
    return req.json();
});

const totalIntakeAtom = atom<Promise<number>>(async (get) => {
    const userDetail = await get(userOverviewAtom);
    return userDetail?.totalIntake ?? 0
});
const avgIntakeAtom = atom<Promise<number>>(async (get) => {
    const userDetail = await get(userOverviewAtom);
    return userDetail?.avgIntake ?? 0
});
const totalBurntAtom = atom<Promise<number>>(async (get) => {
    const userDetail = await get(userOverviewAtom);
    return userDetail?.totalBurnt ?? 0
});
const avgBurntAtom = atom<Promise<number>>(async (get) => {
    const userDetail = await get(userOverviewAtom);
    return userDetail?.avgBurnt ?? 0
});

export const useDateRange = () => useAtom(dateRangeAtom)
export const useSelectedUser = () => useAtom(selectedUserAtom)
export const useTotalIntake = () => useAtomValue(totalIntakeAtom)
export const useAvgIntake = () => useAtomValue(avgIntakeAtom)
export const useTotalBurnt = () => useAtomValue(totalBurntAtom)
export const useAvgBurnt = () => useAtomValue(avgBurntAtom)
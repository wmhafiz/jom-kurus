"use client";

import { Fragment, useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  format,
  isEqual,
  isSameDay,
  isToday,
  parse,
  parseISO,
  startOfToday,
  isWeekend,
  getWeek,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Dot,
  Dumbbell,
  Cookie,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Activity, ActivityType } from "@/lib/activity";
import { Button } from "./ui/button";
import { Menu, Transition } from "@headlessui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function WeeklyActivity({ activities }: { activities: Activity[] }) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let firstDayCurrentWeek = startOfWeek(today);
  let days = eachDayOfInterval({
    start: firstDayCurrentWeek,
    end: endOfWeek(firstDayCurrentWeek),
  });

  function getVariant(day: Date) {
    if (isEqual(day, selectedDay)) {
      return "default";
    }

    // if (isWeekend(day)) {
    //   return "secondary";
    // }

    return "ghost";
  }

  let selectedDayActivities = activities.filter((activitiy) =>
    isSameDay(parseISO(activitiy.startDatetime), selectedDay)
  );

  return (
    <>
      <div className="mx-12 grid gap-4 grid-cols-7">
        {days.map((day) => (
          <>
            <Button
              key={format(day, "yyyy-MM-dd")}
              className={cn(
                "rounded-full w-12 h-12 flex flex-col",
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                !isEqual(day, selectedDay) && !isToday(day) && "text-gray-900",
                !isEqual(day, selectedDay) && !isToday(day) && "text-gray-400",
                isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                !isEqual(day, selectedDay) && "hover:bg-gray-200",
                (isEqual(day, selectedDay) || isToday(day)) && "font-semibold"
              )}
              variant={getVariant(day)}
              onClick={() => setSelectedDay(day)}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
              <div className="w-1 h-1 mx-auto mt-1">
                {activities.some((activity) =>
                  isSameDay(parseISO(activity.startDatetime), day)
                ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
              </div>
            </Button>
          </>
        ))}
      </div>
      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Activities for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayActivities.length > 0 ? (
                selectedDayActivities.map((activity) => (
                  <Activity activity={activity} key={activity.id} />
                ))
              ) : (
                <p className="px-4 py-2">No activity for today.</p>
              )}
            </ol>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function Activity({ activity }: { activity: Activity }) {
  let startDateTime = parseISO(activity.startDatetime);
  let endDateTime = parseISO(activity.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={activity.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{activity.name}</p>
        <p className="mt-0.5">
          <time dateTime={activity.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={activity.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      {activity.activityType === ActivityType.WORKOUT ? (
        <Dumbbell />
      ) : (
        <Cookie />
      )}

      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <MoreVertical className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

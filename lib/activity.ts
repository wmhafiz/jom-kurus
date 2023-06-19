export enum ActivityType {
  WORKOUT,
  DIET,
}

export interface Activity {
  id: number;
  activityType: ActivityType;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    activityType: ActivityType.DIET,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-11T13:00",
    endDatetime: "2023-06-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    activityType: ActivityType.WORKOUT,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-20T09:00",
    endDatetime: "2023-06-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    activityType: ActivityType.DIET,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-20T17:00",
    endDatetime: "2023-06-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    activityType: ActivityType.WORKOUT,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-22T13:00",
    endDatetime: "2023-06-22T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    activityType: ActivityType.DIET,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-13T14:00",
    endDatetime: "2023-06-13T14:30",
  },
];

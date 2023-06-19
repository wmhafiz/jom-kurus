"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Hafiz",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Shasha",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nadhirah",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Irfan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Samsu",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Faaris",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function CaloriesByUsers() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

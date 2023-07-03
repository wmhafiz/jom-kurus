import { Card, Title, Tracker, Flex, Text, Color } from '@tremor/react'

interface Tracker {
    color: Color
    tooltip: string
}

function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

const dailyTarget = 1800
const calories = Array.from({ length: 30 }, () => getRandomNumber(1200, 3000))

const data: Tracker[] = calories.map((intake) => {
    const deficit = intake - dailyTarget

    if (deficit < 0) {
        return {
            color: 'emerald',
            tooltip: `${intake.toLocaleString()} cal`,
        } as Tracker
    }

    if (deficit <= 300) {
        return {
            color: 'yellow',
            tooltip: `${intake.toLocaleString()} cal`,
        } as Tracker
    }

    return {
        color: 'rose',
        tooltip: `${intake.toLocaleString()} cal`,
    } as Tracker
})

export const DietTracker = () => (
    <div>
        <Title>Diet Tracker</Title>
        <Text>Hafiz &bull; May 2023</Text>
        <Flex justifyContent="end" className="mt-4">
            <Text>Daily Target of {dailyTarget.toLocaleString()} cal</Text>
        </Flex>
        <Tracker data={data} className="mt-2" />
    </div>
)

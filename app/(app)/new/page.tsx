'use client'

import {
    Grid,
    Col,
    Card,
    Text,
    Metric,
    Bold,
    Divider,
    Flex,
    Icon,
    LineChart,
    Title,
} from '@tremor/react'
import { DietTracker } from '@/components/user/diet-tracker'
import { Activity } from 'lucide-react'

export interface Latency {
    Date: string
    'Calories Burnt': number
}

const latency: Latency[] = [
    {
        Date: '01.01.2022',
        'Calories Burnt': 800,
    },
    {
        Date: '02.01.2022',
        'Calories Burnt': 550,
    },
    {
        Date: '07.09.2022',
        'Calories Burnt': 600,
    },
]

const InfoPanel = () => (
    <Card>
        <div className="text-center">
            <Icon icon={Activity} size="xl" color="emerald" />
            <Title className="mt-2">Your recent activities</Title>
            <Text className="text-center">As of September 7th, 1:46 PM</Text>
        </div>

        <Divider />

        <DietTracker />

        <Title className="mt-6">Workout Tracker</Title>
        <LineChart
            className="mt-4 h-80"
            data={latency}
            index="Date"
            categories={['Calories Burnt']}
            colors={['gray']}
            valueFormatter={(number: number) =>
                `${Intl.NumberFormat('us').format(number).toString()}s`
            }
            showLegend={false}
            yAxisWidth={48}
        />
    </Card>
)

const FormPanel = () => {
    return <Card>Add new workout</Card>
}

export default function AdikPage() {
    return (
        <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-2">
            <Col>
                <InfoPanel />
            </Col>
            <Col>
                <FormPanel />
            </Col>
        </Grid>
    )
}

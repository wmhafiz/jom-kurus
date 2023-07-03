import { Card, Metric, Text, CategoryBar, Legend, Color } from '@tremor/react'

const colors: Color[] = ['emerald', 'yellow', 'orange', 'rose']

export function WeightLossTarget() {
    return (
        <Card>
            <Text>Burnt Weekly Target</Text>
            <Metric>10,483 / 20,000 calorie</Metric>
            <CategoryBar
                values={[25, 25, 25, 25]}
                colors={colors}
                markerValue={62}
                className="mt-3"
            />
            <Legend
                className="mt-3"
                categories={[
                    'Getting started',
                    'You can do it',
                    'Almost there',
                    'Goal met!',
                ]}
                colors={colors}
            />
        </Card>
    )
}

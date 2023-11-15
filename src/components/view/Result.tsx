import {Card, DonutChart, Title} from "@tremor/react";

const cities = [
    {
        name: "New York",
        sales: 9800,
    },
    {
        name: "Zurich",
        sales: 1398,
    },
];
export default function Result() {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <div className={"flex flex-row"}>
            {numbers.map((i) => (
                <Card className={"max-w-md"} key={i}>
                    <Title>Sales</Title>
                    <DonutChart
                        data={cities}
                        category="sales"
                        index="name"
                        showAnimation={true}
                        colors={["rose", "yellow", "orange"]}
                    />
                </Card>
            ))}
        </div>
    )
}
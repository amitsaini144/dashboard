import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GraphCardProps {
    title: string;
    number: number;
    men: number;
    women: number;
    percentage: number;
}

export default function GraphCard({ title, number, men, women, percentage }: GraphCardProps) {
    return (
        <Card className="flex w-full justify-between">
            <div>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 pt-4">
                    <CardTitle className="text-lg font-medium">{title}</CardTitle>
                </CardHeader>
                <CardContent >
                    <div className="text-4xl font-medium">{number}</div>
                    <div className="flex flex-col text-xs text-gray-500 mb-1 mt-3">
                        <span>{men} Men</span>
                        <span>{women} Women</span>
                    </div>
                </CardContent>
            </div>

            <div className="flex flex-col items-center justify-center gap-12 pr-6 pt-6 pb-4">
                <svg className="w-24 h-12" viewBox="0 0 100 50">
                    <path d="M0 50 C20 40, 40 10, 60 30 S80 50, 100 20" fill="none" stroke="#ff5151" strokeWidth="2" />
                </svg>
                <p className="text-xs bg-rose-50 p-1 rounded">+{percentage}% Past month</p>
            </div>
        </Card>
    )
}
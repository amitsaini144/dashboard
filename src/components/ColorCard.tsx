import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ColorCardProps {
    title: string;
    bgColor: string;
    number: number;
    description: string;
    textColor: string;
}

export default function ColorCard({ title, bgColor, number, description, textColor }: ColorCardProps) {
    return (
        <Card className={`${bgColor} h-full border-none w-full`}>
            <CardHeader className="flex flex-row items-center justify-between ;
            p-2 pl-3 pb-2 space-y-0">
                <CardTitle className="text-lg font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2 pl-3">
                <div className="text-4xl font-medium">{number}</div>
                <p className={`${textColor} text-sm`}>{description}</p>
            </CardContent>
        </Card>
    )
}
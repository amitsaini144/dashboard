import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ellipsis } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { prioritySchedules, otherSchedules } from "@/store/data"

export default function ScheduleCard() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })

    return (
        <Card className="w-full bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between py-0 pt-4 px-3">
                <CardTitle className="text-lg font-semibold text-gray-800">Upcoming Schedule</CardTitle>
                <Select>
                    <SelectTrigger className="w-fit text-xs text-gray-500 h-6 px-1">
                        <SelectValue placeholder={currentDate} />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value={currentDate}>{currentDate}</SelectItem>
                    </SelectContent>
                </Select>

            </CardHeader>
            <CardContent className="pt-4 px-3 pb-2">
                <ScrollArea className="h-72 md:h-48 lg:h-72 overflow-y-auto">
                    <div className="space-y-4">
                        <ul className="space-y-2">
                            <p className="text-xs font-medium text-gray-500">Priority</p>
                            {prioritySchedules.map((schedule) => (
                                <li key={schedule.id} className="flex items-center justify-between space-x-3 border rounded-lg p-3 bg-gray-50">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{schedule.title}</p>
                                        <p className="text-xs text-gray-500">{schedule.time}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <Button variant="ghost" className="p-0 hover:bg-gray-50">
                                            <Ellipsis className="w-5 h-5 text-gray-400" />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-2">
                            <p className="text-xs font-medium text-gray-500">Others</p>
                            {otherSchedules.map((schedule) => (
                                <li key={schedule.id} className="flex items-center justify-between space-x-3 border rounded-lg p-3 bg-gray-50">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{schedule.title}</p>
                                        <p className="text-xs text-gray-500">{schedule.time}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <Button variant="ghost" className="p-0 hover:bg-gray-50">
                                            <Ellipsis className="w-5 h-5 text-gray-400" />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </ScrollArea>

            </CardContent>
            <CardFooter className="p-0 border-t">
                <Button variant="link" className="text-red-500 hover:text-red-600 p-0 mx-auto">
                    Create a New Schedule
                </Button>
            </CardFooter>
        </Card>
    )
}
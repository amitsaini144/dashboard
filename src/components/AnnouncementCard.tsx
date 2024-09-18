import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ellipsis, Pin } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { announcements } from "@/store/data"

export default function AnnouncementCard() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })

    return (
        <Card className="w-full bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between py-0 pt-2 px-3">
                <CardTitle className="text-lg font-semibold text-gray-800">Announcement</CardTitle>
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
                <ScrollArea className="h-52 overflow-y-auto">
                    <ul className="space-y-2">
                        {announcements.map((announcement) => (
                            <li key={announcement.id} className="flex items-center justify-between space-x-3 border rounded-lg p-3 bg-gray-50">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{announcement.title}</p>
                                    <p className="text-xs text-gray-500">{announcement.time}</p>
                                </div>
                                <div className="flex gap-5">
                                    <Button variant="ghost" className="p-0 hover:bg-gray-50">
                                        <Pin className="w-5 h-5 text-gray-400" />
                                    </Button>
                                    <Button variant="ghost" className="p-0 hover:bg-gray-50">
                                        <Ellipsis className="w-5 h-5 text-gray-400" />
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>

            </CardContent>
            <CardFooter className="p-0 border-t">
                <Button variant="link" className="text-red-500 hover:text-red-600 p-0 mx-auto">
                    See All Announcement
                </Button>
            </CardFooter>
        </Card>
    )
}
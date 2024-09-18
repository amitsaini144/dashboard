"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ActivityCard() {
    const [timestamp, setTimestamp] = useState('');

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        setTimestamp(formattedDate);
    }, []);
    return (
        <Card className="bg-[#1C2A53] text-white h-fit">
            <CardHeader className="pb-1 mb-4 pt-3 bg-[#142147] rounded-t-xl">
                <CardTitle className="text-base font-semibold">Recently Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-[10px] text-gray-400">{timestamp}</p>
                <p className="text-sm font-medium">You Posted a New Job</p>
                <p className="text-[11px] text-gray-300">
                    Kindly check the requirements and terms of work and make sure everything is right.
                </p>
                <div className="flex flex-col gap-y-4 items-start lg:flex-row lg:items-center lg:justify-between text-xs pt-3">
                    <span className="text-gray-300">Today you makes 12 Activity</span>
                    <Button size="sm" className="bg-[#ff5151] text-white rounded px-4 py-1 text-xs font-medium">
                        See All Activity
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
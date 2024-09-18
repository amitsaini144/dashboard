import { Calendar, Grid, HelpCircle, Settings, User, Users } from "lucide-react";

export const colorCardData = [
    { id: 1, title: "Available Position", bgColor: "bg-rose-50", number: 24, description: "4 Urgently needed", textColor: "text-rose-500" },
    { id: 2, title: "Job Open", bgColor: "bg-blue-50", number: 10, description: "4 Active hiring", textColor: "text-blue-500" },
    { id: 3, title: "New Employees", bgColor: "bg-pink-50", number: 24, description: "4 Department", textColor: "text-pink-500" },
]

export const graphCardData = [
    { id: 1, title: "Total Employees", number: 216, men: 120, women: 96, percentage: 2 },
    { id: 2, title: "Talent Request", number: 16, men: 6, women: 10, percentage: 5 },
]

export const announcements = [
    { id: 1, title: "Outing schedule for every department", time: "3 Minutes ago" },
    { id: 2, title: "Meeting HR Department", time: "Yesterday, 12:30 AM" },
    {
        id: 3, title: "IT Department need two more talents for UX/UI Designer position",
        time: "Tuesday, 09:15 AM",
    },
]

export const prioritySchedules = [
    { id: 1, title: "Review candidate applications", time: "Today, 11:30 AM" }
]

export const otherSchedules = [
    { id: 1, title: "Interview with candidates", time: "Today, 13:00 PM" },
    { id: 2, title: "Short meeting with product designer from IT Department", time: "Today, 16:15 AM" }
]

export const menuItems = [
    { id: 1, icon: Grid, label: "Dashboard", active: true },
    { id: 2, icon: Users, label: "Recruitment", active: false },
    { id: 3, icon: Calendar, label: "Schedule", active: false },
    { id: 4, icon: User, label: "Employee", active: false },
    { id: 5, icon: Users, label: "Department", active: false },
]
export const otherMenuItems = [
    { id: 1, icon: HelpCircle, label: "Support", active: false },
    { id: 2, icon: Settings, label: "Settings", active: false }
]
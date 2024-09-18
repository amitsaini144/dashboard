"use client";

import { Bell, ChevronDown, Search, MessageSquareMore, Menu } from "lucide-react"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useSetRecoilState } from 'recoil';
import { sidebarVisibilityState } from '@/store/atoms'
// import avatarPhoto from "@/assets/images/avatar.jpg"

export default function Header() {
    const setSidebarVisible = useSetRecoilState(sidebarVisibilityState);

    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <header className="bg-white border-b border-gray-200 py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="flex w-64">
                    <div className="relative w-64 hidden md:block">
                        <Input type="text" placeholder="Search" className="pl-4 bg-gray-100 rounded hidden md:block" />
                        <Search className=" text-gray-400 w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 hidden md:block" />

                    </div>

                    <button onClick={toggleSidebar} className="md:hidden">
                        <Menu className="text-gray-400 w-6 h-6 block" />
                    </button>
                    <Search className=" text-gray-400 w-6 h-5 ml-6 block md:hidden" />
                </div>
                <div className="flex items-center space-x-4">
                    <Bell className="text-gray-600 w-5 h-5 cursor-pointer" />
                    <MessageSquareMore className="text-gray-600 w-5 h-5 cursor-pointer" />
                    <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="/avatar.jpg" alt="Avatar" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium hidden lg:block">Admira John</span>
                        <ChevronDown className="text-gray-600 w-4 h-4 cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    )
}
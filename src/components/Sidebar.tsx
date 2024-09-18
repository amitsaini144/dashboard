"use client";
import Image from "next/image";
import SidebarLink from "./SidebarLink"
import { menuItems, otherMenuItems } from "@/store/data"
import { useRecoilValue } from 'recoil';
import { sidebarVisibilityState } from '@/store/atoms';

export default function Sidebar() {
    const isSidebarVisible = useRecoilValue(sidebarVisibilityState);
    return (
        <aside className={`${isSidebarVisible ? 'block' : 'hidden'} md:block md:w-24 xl:w-60 p-6 px-5`}>
            <div className="flex items-center mb-8 gap-3 justify-center">
                <div>
                    <Image src="/vasitum.png" alt="vartium" width={35} height={35} className="pr-1 mr-1" />
                </div>
                <span className="text-xl text-blue-800 font-semibold hidden xl:inline">Vasitum</span>
            </div>
            <nav className="flex flex-col gap-10">
                <ul className="space-y-3">
                    <p className="text-[9px] font-medium text-slate-400 hidden md:block">MAIN MENU</p>
                    {menuItems.map((item) => (
                        <SidebarLink item={item} key={item.id} />
                    ))}
                </ul>
                <ul className="space-y-3">
                    <p className="text-[9px] font-medium text-slate-400 hidden md:block pl-1">OTHER</p>
                    {otherMenuItems.map((item) => (
                        <SidebarLink item={item} key={item.id} />
                    ))}
                </ul>
            </nav>
        </aside>
    )

}
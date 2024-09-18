import Image from "next/image";
import vartiumImage from "@/assets/images/vasitum.png"
import SidebarLink from "./SidebarLink"
import { menuItems, otherMenuItems } from "@/store/data"

export default function Sidebar() {
    return (
        <aside className="md:w-24 xl:w-60 p-6 px-5 hidden md:block">
            <div className="flex items-center mb-8 gap-3 justify-center">
                <div>
                    <Image src={vartiumImage} alt="vartium" width={35} height={35} className="hidden md:block pr-1 mr-1" />
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

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SidebarLinkProps {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    label: string;
    active: boolean;
}

export default function SidebarLink({ item }: { item: SidebarLinkProps }) {

    return (
        <li>
            <a
                href="/"
                className={`flex items-center p-2 rounded-lg ${item.active ? "text-[#ff5151]" : "text-gray-600 hover:bg-gray-100"
                    }`
                }
            >
                <item.icon className={`w-5 h-5 ${item.active ? "text-[#ff5151]" : "text-gray-400"
                    } ${!item.active && "group-hover:text-gray-600"}`} />
                <span className="ml-3 hidden xl:inline">{item.label}</span>
            </a>
        </li >
    )
}
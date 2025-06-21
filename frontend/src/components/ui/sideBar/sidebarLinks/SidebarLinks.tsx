import SidebarLinkIcon from "@/components/icons/SidebarLinkIcon";
import Icon from "@/components/icons/SidebarLinkIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    content: "Platform Launch",
    path: "/platform-launch",
  },
  {
    content: "Marketing Plan",
    path: "/marketing-plan",
  },
  {
    content: "Roadmap",
    path: "/roadmap",
  },
  {
    content: "+ Create New Board",
    path: "/create-new-board",
  },
];

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div>
      <h2 className="ps-8 text-xs text-gray-300 font-bold leading-[15px] mb-[19px] tracking-[2.4px]">
        ALL BOARDS (3)
      </h2>
      <ul className="text-gray-300">
        {links.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.content}
              className={clsx(
                "group ps-8 py-[14px] rounded-tr-full rounded-br-full hover:bg-[#EFEFF9] dark:hover:bg-white",
                "transition-all duration-300 ease-in-out",
                isActive ? " bg-primary" : "bg-transparent"
              )}
            >
              <Link
                href={item.path}
                className={clsx(
                  "h-[19px] flex items-center gap-[16px] text-sm font-bold tracking-normal leading-none",
                  index > 2 ? "text-primary" : "text-gray-300",
                  "group-hover:text-primary",
                  isActive && "text-white"
                )}
              >
                <SidebarLinkIcon
                  className={clsx(
                    "text-gray-300 group-hover:text-primary",

                    isActive && "text-white"
                  )}
                />
                {item.content}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarLinks;

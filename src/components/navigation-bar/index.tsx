"use client";

import cn from "@/lib/tailwind-cn";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import NavigationTab from "./navigation-tab";

import AccountDefault from "@/assets/svgr-icons/AccountDefault";
import AccountGradationIcon from "@/assets/svgr-icons/AccountGradation";
import FeedDefault from "@/assets/svgr-icons/FeedDefault";
import FeedGradationIcon from "@/assets/svgr-icons/FeedGradation";
import HeartDefault from "@/assets/svgr-icons/HeartDefault";
import HeartGradationIcon from "@/assets/svgr-icons/HeartGradation";
import HomeDefault from "@/assets/svgr-icons/HomeDefault";
import HomeGradationIcon from "@/assets/svgr-icons/HomeGradation";

const NAVIGATION_TABS = [
  {
    name: "홈",
    path: "/",
    defaultIcon: <HomeDefault className="stroke-gray-400" />,
    pressedIcon: <HomeGradationIcon />,
  },
  {
    name: "피드",
    path: "/feed",
    defaultIcon: <FeedDefault className="fill-gray-400" />,
    pressedIcon: <FeedGradationIcon />,
  },
  {
    name: "위시리스트",
    path: "/wishlist",
    defaultIcon: <HeartDefault className="fill-gray-400" />,
    pressedIcon: <HeartGradationIcon />,
  },
  {
    name: "마이페이지",
    path: "/my",
    defaultIcon: <AccountDefault className="fill-gray-400" />,
    pressedIcon: <AccountGradationIcon />,
  },
];

export default function NavigationBar({ className }: { className?: string }) {
  const pathname = usePathname();

  const activeTab = useMemo(() => {
    // feed 이하 경로도 feed로 간주
    if (pathname.startsWith("/feed")) {
      return "피드";
    }
    // my 이하 경로도 my로 간주
    if (pathname.startsWith("/my")) {
      return "마이페이지";
    }
    return NAVIGATION_TABS.find((tab) => tab.path === pathname)?.name || "홈";
  }, [pathname]);

  return (
    <section
      className={cn(
        "flex justify-evenly items-center w-full h-20 gap-[10px] bg-white border border-transparent border-t-gray-400",
        className,
      )}
    >
      {NAVIGATION_TABS.map((tab) => (
        <NavigationTab
          key={tab.name}
          name={tab.name}
          href={tab.path}
          defaultIcon={tab.defaultIcon}
          pressedIcon={tab.pressedIcon}
          isActive={activeTab === tab.name}
        />
      ))}
    </section>
  );
}

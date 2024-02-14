"use client";

import { SidebarNavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const SidebarNav = ({ items }: { items: SidebarNavItem[] }) => {
    const selected = useSelectedLayoutSegment();
    console.log(selected);

  return (
    <div className="flex flex-col gap-2">
        {items.map((item) => (
            <Link href={`${item.href}`} className="">
                <span
                className={cn(
                    "flex px-4 py-2 capitalize w-full items-center rounded-md border border-transparent text-lg hover:bg-muted hover:text-foreground",
                    item.href.includes(String(selected))
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
                >
                  {item.title}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default SidebarNav;
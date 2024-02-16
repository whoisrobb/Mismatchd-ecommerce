import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SiteShellProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    children: ReactNode
}

const SiteShell = ({
    title,
    children,
    className
}: SiteShellProps) => {
  return (
    <section className={cn("", className)}>
        <div className="">
            <p className="text-lg font-bold">{title}</p>
        </div>
        {children}
    </section>
  )
}

export default SiteShell;
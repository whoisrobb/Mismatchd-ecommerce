import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle: string;
    children: ReactNode
}

const DashboardShell = ({
    title,
    subtitle,
    children,
    className
}: DashboardShellProps) => {
  return (
    <section className={cn("space-y-8", className)}>
        <div className="border-b">
            <p className="text-4xl font-bold">{title}</p>
            <p className="mb-2 text-muted-foreground">{subtitle}</p>
        </div>
        {children}
    </section>
  )
}

export default DashboardShell;
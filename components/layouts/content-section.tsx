import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface ContentSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    href: string;
    linkText: string;
    children: ReactNode;
};

const ContentSection = ({
    title,
    description,
    href,
    linkText,
    className,
    children
}: ContentSectionProps) => {
  return (
    <section className={cn('space-y-6', className)}>
        <div className="flex items-center justify-between">
            <div className="">
                <p className="text-4xl font-bold">{title}</p>
                <p className="text-lg text-muted-foreground">{description}</p>
            </div>
            <Button variant={'link'} className="space-x-2 text-secondary-foreground">
                <Link href={href}>
                    {linkText}
                </Link>
                <ArrowRightIcon />
            </Button>
        </div>
        <div className="">
            {children}
        </div>
    </section>
  )
}

export default ContentSection;
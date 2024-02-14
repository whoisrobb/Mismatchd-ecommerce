export type SidebarNavItem = {
    title: string,
    href: string
}

export type SiteNav = {
    title: string;
    items: {
        title: string;
        href: string;
        description: string;
        items: never[];
    }[];
};

export type AppNav = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    siteNav: SiteNav;
    // mainNav: {
    //     title: string;
    //     items: {
    //         ...;
    //     }[];
    // }[];
}
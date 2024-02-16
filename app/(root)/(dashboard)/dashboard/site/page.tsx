import CreateCategory from "@/app/(root)/_components/create-category";
import DashboardShell from "@/components/layouts/dashboard-shell";
import SiteShell from "@/components/layouts/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { productCategories } from "@/lib/data-temp";

const Site = () => {
  return (
    <DashboardShell
      title="Site"
      subtitle="Configure your site and settings."
      className=""
    >
        <SiteShell
            title="Categories"
            className=""
        >
            <div className="mx-8 space-y-4">
                <Accordion type="multiple" className="w-full">
                    {productCategories.map((cat, index) => (
                    <AccordionItem value={`item-${index+1}`} key={index}>
                        <AccordionTrigger className="capitalize text-secondary-foreground">{cat.title}</AccordionTrigger>
                        {cat.subcategories.map((sub, index) => (
                        <div className="" key={index}>
                            <AccordionContent>
                                <div className="focus:text-secondary-foreground">{sub.title}</div>
                                <div className="text-muted-foreground focus:text-secondary-foreground">{sub.description}</div>
                            </AccordionContent>
                        </div>))}
                    </AccordionItem>))}
                </Accordion>

                <CreateCategory />
            </div>
        </SiteShell>
    
      {/* create categories and set banners for each */}

        <SiteShell
            title="Featured stores"
        >
            placeholder
        </SiteShell>
      {/* call stores and set featured using radios */}
    </DashboardShell>
  )
}

export default Site;
import ContentSection from "@/components/layouts/content-section";

export default async function Home() {
  
  return (
    <div className="">
      <ContentSection
        title="Featured products"
        description="Explore products from around the world"
        href="/products"
        linkText="View all products"
      >
        <p>wsgood</p>
      </ContentSection>

      <ContentSection
        title="Featured stores"
        description="Explore stores from around the world"
        href="/stores"
        linkText="View all stores"
      >
        <p>wsgood</p>
      </ContentSection>
    </div>
  );
}

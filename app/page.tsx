import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Pain } from "@/components/pain";
import { Workflow } from "@/components/workflow";
import { UseCases } from "@/components/use-cases";
import { ProductPreview } from "@/components/product-preview";
import { Packages } from "@/components/packages";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Pain />
        <Workflow />
        <UseCases />
        <ProductPreview />
        <Packages />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </>
  );
}

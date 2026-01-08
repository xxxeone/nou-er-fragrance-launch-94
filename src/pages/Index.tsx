import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import WhySection from "@/components/WhySection";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import PosterGallery from "@/components/PosterGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import IngredientsSection from "@/components/IngredientsSection";
import CertificationSection from "@/components/CertificationSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NOU'ER | 提升你每天的潜能</title>
        <meta
          name="description"
          content="NOU'ER是专注于表现与价值的现代香氛品牌。高品质配方，持久留香，为追求品质与自信的你而生。"
        />
        <meta
          name="keywords"
          content="香水,香氛,NOU'ER,诺尔香,高端香水,持久香水,男士香水,女士香水"
        />
        <link rel="canonical" href="https://nouer.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <IngredientsSection />
          <ProductSection />
          <WhySection />
          <BrandPhilosophy />
          <PosterGallery />
          <TestimonialsSection />
          <CertificationSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

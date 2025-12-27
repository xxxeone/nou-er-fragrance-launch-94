import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import whiteBottle1 from "@/assets/white-bottle-1.png";
import blackBottle1 from "@/assets/black-bottle-1.png";
import whiteBottle2 from "@/assets/white-bottle-2.png";
import blackBottle2 from "@/assets/black-bottle-2.png";
import solaceDetailImg from "@/assets/solace-detail-new.png";
import charmedDetailImg from "@/assets/charmed-detail.png";
import logoWhite from "@/assets/logo-white.png";
import discoverySetImg from "@/assets/discovery-set.png";
import diffuser1 from "@/assets/diffuser-1.png";
import diffuser2 from "@/assets/diffuser-2.png";
import diffuser3 from "@/assets/diffuser-3.png";

const products = [
  {
    id: "white-series",
    image: whiteBottle2,
    detailImage: solaceDetailImg,
    name: "Solace",
    title: "清雅之境",
    subtitle: "White Series · Solace · 15ml",
    description: "优雅清新，从容自若。专为日常穿戴而生。",
    tagline: "优雅清新 · 特香持久 · 守护磁场",
    essence: "清新木质调性，温暖而持久。适合日常穿戴，让你在繁忙的一天中保持优雅自信。",
    notes: {
      formula: "沉香分子 × 岩兰草 × 檀香 × 乳香",
      top: "沉香分子",
      heart: "岩兰草、檀香",
      base: "乳香"
    },
    price: "RM 89",
    variant: "white" as const,
  },
  {
    id: "black-series",
    image: blackBottle1,
    detailImage: charmedDetailImg,
    name: "Charmed",
    title: "魅力之境",
    subtitle: "Black Series · Charmed · 15ml",
    description: "奢华深沉，内敛自信。为重要时刻而生。",
    tagline: "奢华深沉 · 特香持久 · 磁场强大",
    essence: "深邃木质调性，温暖而优雅。适合重要场合和夜晚时刻，展现内在的自信与魅力。",
    notes: {
      formula: "沉香分子 × 檀香 × 广藿香 × 乳香",
      top: "沉香分子",
      heart: "檀香、广藿香",
      base: "乳香"
    },
    price: "RM 89",
    variant: "black" as const,
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="products" ref={ref as React.RefObject<HTMLElement>} className={`py-24 lg:py-32 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Our Collection
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light">
              探索系列
            </h2>
          </div>

          {/* Main Products Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto mb-24">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {/* Product Detail Modal */}
          <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
              {selectedProduct && (
                <>
                  {/* Hero Image with Overlay */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={selectedProduct.detailImage}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover object-[center_25%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />

                    {/* Logo in top-left */}
                    <div className="absolute top-6 left-6 z-10">
                      <img
                        src={logoWhite}
                        alt="NOU'ER"
                        className="h-6 opacity-90"
                      />
                    </div>

                    {/* Tagline Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <DialogTitle className="font-display text-4xl font-light text-white mb-2">
                        {selectedProduct.name}
                      </DialogTitle>
                      <p className="text-2xl text-white/90 font-light tracking-wide">
                        {selectedProduct.title}
                      </p>
                      <p className="text-sm text-white/70 tracking-[0.2em] uppercase mt-3">
                        {selectedProduct.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-8">
                    {/* Essence */}
                    <DialogDescription className="text-lg leading-relaxed text-center text-muted-foreground">
                      {selectedProduct.essence}
                    </DialogDescription>

                    {/* Fragrance Formula - Minimal Design */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">香调配方</h4>
                        <p className="text-xl font-light tracking-wider text-charcoal">
                          {selectedProduct.notes.formula}
                        </p>
                      </div>

                      {/* Note Breakdown */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-charcoal/10">
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">前调</p>
                          <p className="text-sm text-charcoal font-light">{selectedProduct.notes.top}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">中调</p>
                          <p className="text-sm text-charcoal font-light">{selectedProduct.notes.heart}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">基调</p>
                          <p className="text-sm text-charcoal font-light">{selectedProduct.notes.base}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t">
                      <div>
                        <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">价格</p>
                        <p className="font-display text-3xl text-charcoal">{selectedProduct.price}</p>
                      </div>
                      <Button variant="product" size="xl">
                        立即购买
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Discovery Set - Design-Forward Layout (per user reference) */}
          <div className="relative bg-white py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
              {/* Minimal Header */}
              <div className="mb-12">
                <p className="text-[10px] tracking-[0.5em] uppercase text-gold/60 font-light">
                  Discovery Set
                </p>
              </div>

              {/* Main Content - Asymmetric Layout */}
              <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-16 items-center max-w-7xl">
                {/* Left: Large Image with Badge */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={discoverySetImg}
                      alt="NOU'ER Discovery Set"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Floating Badge - New/Limited */}
                  <div className="absolute top-6 left-6 backdrop-blur-md bg-white/90 px-6 py-3 rounded-full shadow-lg">
                    <p className="text-xs tracking-[0.3em] uppercase font-semibold text-gold">
                      限量体验装
                    </p>
                  </div>
                </div>

                {/* Right: Info Card */}
                <div className="space-y-10 lg:pt-4">
                  {/* Large Title */}
                  <div>
                    <h3 className="font-display text-5xl lg:text-6xl font-light text-charcoal mb-1 leading-[1.1] tracking-tight">
                      体验
                    </h3>
                    <h3 className="font-display text-5xl lg:text-6xl font-light text-gold leading-[1.1] tracking-tight italic">
                      礼盒
                    </h3>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="text-sm text-charcoal/80">
                        3ml 白色系 · 清雅之境 Solace
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="text-sm text-charcoal/80">
                        3ml 黑色系 · 魅力之境 Charmed
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="text-sm text-charcoal/80">
                        在承诺之前,先找到属于你的独特香气
                      </p>
                    </div>
                  </div>

                  {/* Decorative Price Card with Discount Badge */}
                  <div className="relative inline-block mt-8">
                    {/* Price Card */}
                    <div className="bg-cream/40 border border-cream-dark/20 rounded-xl px-8 py-6 pr-20">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/50 mb-2">
                        体验优惠价格
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl text-charcoal font-light">RM</span>
                        <span className="font-display text-5xl text-gold font-medium">50</span>
                      </div>
                      <p className="text-xs text-charcoal/40 mt-1 line-through">
                        原价 RM 80
                      </p>
                    </div>
                    {/* Circular Discount Badge */}
                    <div className="absolute -top-2 -right-2 bg-gold rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                      <div className="text-center text-white">
                        <p className="text-[10px] font-medium leading-tight">省</p>
                        <p className="text-base font-semibold leading-tight">38%</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Button variant="product" size="lg" className="px-12">
                      立即体验 →
                    </Button>
                    <p className="text-xs text-charcoal/50 mt-3">
                      库存充足,即刻发货
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Diffuser - Full-Width Hero Split-Screen (Outside Container) */}
      <section className="relative h-[700px] lg:h-[800px] overflow-hidden w-full">
        {/* Split-Screen Grid - Full Width, No Gap */}
        <div className="grid lg:grid-cols-2 h-full w-full gap-0">

          {/* Left: Car Use */}
          <div className="relative h-full overflow-hidden">
            <img
              src={diffuser1}
              alt="车载使用"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-charcoal/40" />
            {/* Label */}
            <div className="absolute top-10 left-10">
              <p className="text-base tracking-[0.3em] uppercase text-white/80 font-light">
                车载使用
              </p>
            </div>
          </div>

          {/* Right: Indoor Use */}
          <div className="relative h-full overflow-hidden">
            <img
              src={diffuser2}
              alt="室内使用"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-charcoal/40" />
            {/* Label */}
            <div className="absolute top-10 left-10">
              <p className="text-base tracking-[0.3em] uppercase text-white/80 font-light">
                室内使用
              </p>
            </div>
          </div>
        </div>

        {/* Centered Content Overlay - White Text Only */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center pointer-events-auto max-w-2xl">

            {/* Title - White Only */}
            <h2 className="font-display text-6xl lg:text-8xl font-light text-white mb-3 tracking-tight leading-[1.1]">
              护香精油
            </h2>

            {/* Subtitle - Refined with separator */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <p className="text-sm lg:text-base text-white/70 font-light tracking-wide">
                5ML
              </p>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <p className="text-sm lg:text-base text-white/70 font-light tracking-wide">
                车载/室内两用
              </p>
            </div>

            {/* Price - White Only */}
            <p className="font-display text-6xl lg:text-7xl text-white font-light mb-10 tracking-tight">
              RM 69
            </p>

            {/* CTA */}
            <Button variant="heroFilled" size="xl" className="px-16">
              立即购买
            </Button>

          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSection;

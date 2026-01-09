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
import whiteBottleNew from "@/assets/white-bottle-new.jpeg";
import blackBottleNew from "@/assets/black-bottle-new.jpeg";
import solaceDetailImg from "@/assets/solace-detail-updated.jpeg";
import charmedDetailImg from "@/assets/charmed-detail-updated.jpeg";
import logoWhite from "@/assets/logo-white.png";
import discoverySetImg from "@/assets/discovery-set.png";
import diffuser1 from "@/assets/diffuser-car-new.png";
import diffuser2 from "@/assets/diffuser-indoor-new.png";
import diffuser3 from "@/assets/diffuser-3.png";

const products = [
  {
    id: "white-series",
    image: whiteBottleNew,
    detailImage: solaceDetailImg,
    name: "Solace",
    title: "清雅之境",
    subtitle: "White Series · Solace · 20ml",
    description: "优雅清新 · 守护磁场",
    tagline: "优雅清新 · 守护磁场",
    essence: "唤醒精神、提升专注度，是一款可随时补充的日常能量香氛。",
    notes: {
      formula: "沉香分子 × 岩兰草 × 檀香 × 乳香",
      top: "沉香分子",
      heart: "岩兰草、檀香",
      base: "乳香"
    },
    price: "RM 129",
    variant: "white" as const,
  },
  {
    id: "black-series",
    image: blackBottleNew,
    detailImage: charmedDetailImg,
    name: "Charmed",
    title: "魅力之境",
    subtitle: "Black Series · Charmed · 20ml",
    description: "奢华深沉 · 磁场强大",
    tagline: "奢华深沉 · 磁场强大",
    essence: "更强烈的提神与能量感知，适合会议、谈判与高强度输出时刻。",
    notes: {
      formula: "沉香分子 × 檀香 × 广藿香 × 乳香",
      top: "沉香分子",
      heart: "檀香、广藿香",
      base: "乳香"
    },
    price: "RM 129",
    variant: "black" as const,
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section id="products" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 scroll-hidden overflow-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/collection-bg.jpeg"
            alt="Collection Background"
            className="w-full h-full object-cover"
          />
          {/* Strong fade at top and bottom for smooth transitions */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/50" />
        </div>

        {/* Top gradient transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-4">
              Our Collection
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white">
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
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={selectedProduct.detailImage}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Minimal gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

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

                  {/* Content Section - Glass morphism effect */}
                  <div className="p-8 space-y-8 bg-white/10 backdrop-blur-2xl border-t border-white/10">
                    {/* Essence */}
                    <DialogDescription className="text-lg leading-relaxed text-center text-white/90">
                      {selectedProduct.essence}
                    </DialogDescription>

                    {/* Fragrance Formula - Minimal Design */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <h4 className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4">香调配方</h4>
                        <p className="text-xl font-light tracking-wider text-white">
                          {selectedProduct.notes.formula}
                        </p>
                      </div>

                      {/* Note Breakdown */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-white/70 mb-2">前调</p>
                          <p className="text-sm text-white font-light">{selectedProduct.notes.top}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-white/70 mb-2">中调</p>
                          <p className="text-sm text-white font-light">{selectedProduct.notes.heart}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs tracking-wider uppercase text-white/70 mb-2">基调</p>
                          <p className="text-sm text-white font-light">{selectedProduct.notes.base}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div>
                        <p className="text-xs tracking-wider uppercase text-white/70 mb-1">价格</p>
                        <p className="font-display text-3xl text-white">{selectedProduct.price}</p>
                      </div>
                      <Button variant="ghost" size="xl" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                        立即购买
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Discovery Set - Refined Layout */}
          <div className="relative py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              {/* Main Content - Balanced Layout */}
              <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
                {/* Left: Large Image with Badge and Header */}
                <div className="relative group space-y-6">
                  {/* Discovery Set Header */}
                  <div>
                    <p className="text-sm tracking-[0.5em] uppercase text-white/60 font-light">
                      Discovery Set
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={discoverySetImg}
                      alt="NOU'ER Discovery Set"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-20 left-4 backdrop-blur-lg bg-white/15 px-4 py-2 rounded-full border border-white/20">
                    <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-white">
                      限量体验装
                    </p>
                  </div>
                </div>

                {/* Right: Info Card */}
                <div className="space-y-8">
                  {/* Large Title - Inline */}
                  <div>
                    <h3 className="font-display text-6xl lg:text-7xl font-light text-white leading-[1] tracking-tight inline">
                      小样
                    </h3>
                    <h3 className="font-display text-6xl lg:text-7xl font-light text-gold leading-[1] tracking-tight inline ml-3">
                      精品
                    </h3>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <p className="text-base text-white/90 leading-relaxed">
                        3ml 白色系 · 清雅之境 Solace
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <p className="text-base text-white/90 leading-relaxed">
                        3ml 黑色系 · 魅力之境 Charmed
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <p className="text-base text-white/90 leading-relaxed">
                        在承诺之前,先找到属于你的独特香气
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button variant="ghost" size="lg" className="px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                      立即体验 →
                    </Button>
                    <p className="text-xs text-white/40 mt-4 tracking-wide">
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

        {/* Middle Layer: Background Image Overlay (between photos and text) */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/diffuser-overlay-bg.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-45"
          />
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
                10ml
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

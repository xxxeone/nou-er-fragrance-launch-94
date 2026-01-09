import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    title: "COA 认证原料，有依据的表现",
    description:
      "我们坚持使用具备 COA 验证的原材料，让提神与能量感不靠想象，而是来自可追溯的配方标准。你用到的，是能被证明的安心与表现。",
  },
  {
    title: "表现配得上价格",
    description:
      "NOU'ER 不追求高溢价的包装或品牌光环，而是把成本用在能量表现本身。你支付的每一分，都是为实际感受到的状态与提神效果。",
  },
  {
    title: "随身携带，随时补能",
    description:
      "小巧设计，轻松放入口袋或包中，让能量与气场的调整不受时间与场合限制。需要的时候，随手一喷即可进入状态。",
  },
];

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/why-section-bg.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for better text readability and smooth transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40" />
      </div>

      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-4">
            The NOU'ER Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white">
            为何选择 NOU'ER
          </h2>
        </div>

        {/* Reasons with Glassmorphism */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center lg:text-left hover:bg-white/10 transition-all duration-300"
            >
              <span className="inline-block text-xs tracking-[0.3em] text-gold mb-4">
                0{index + 1}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-light mb-4 text-white">
                {reason.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

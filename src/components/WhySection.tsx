import nouerBg from "@/assets/nouer-bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    title: "你能感受到的能量",
    description:
      "这里的能量不是玄的，而是：自信,稳定,自然吸引力。",
  },
  {
    title: "表现配得上价格",
    description:
      "市面上的香水,要么价格虚高,要么留香太短。我们相信,真正的价值来自表现,而非包装或品牌溢价。",
  },
  {
    title: "香气之外，是你的气场表现",
    description:
      "Nou'er 的香氛设计通过层次与留香结构，帮助你在重要时刻保持清醒、自信与稳定。",
  },
];

const WhySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why" ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={nouerBg}
          alt="Background"
          className="w-full h-full object-cover object-[center_60%]"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

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

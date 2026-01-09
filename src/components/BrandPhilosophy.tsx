import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BrandPhilosophy = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-screen flex items-center overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            {/* Breathing Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/brand-philosophy-new-bg.jpeg"
                    alt="Brand Philosophy Background"
                    className="w-full h-full object-cover animate-breathe"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
            </div>

            {/* Top gradient transition */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

            {/* Bottom gradient transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex items-center justify-center min-h-[80vh]">
                    {/* Text Content */}
                    <div className="text-center max-w-4xl">
                        <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-16">
                            NOU'ER 品牌理念
                        </p>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.2] text-white">
                            <span className="block text-white/80 mb-2" style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>一款以 COA 认证原料打造的</span>
                            <span className="block text-white/80 mb-4" style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>随身能量香氛</span>
                            <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90">为你每天的精神状态而设</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;

import brandPhilosophyBg from "@/assets/brand-philosophy-bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BrandPhilosophy = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-screen flex items-center overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            {/* Breathing Background Image */}
            <div className="absolute inset-0">
                <img
                    src={brandPhilosophyBg}
                    alt="Brand Philosophy Background"
                    className="w-full h-full object-cover animate-breathe"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex items-center justify-center min-h-[80vh]">
                    {/* Text Content */}
                    <div className="text-center max-w-4xl">
                        <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-8">
                            NOU'ER 品牌理念
                        </p>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.2] text-white">
                            高端香氛性能与能量表现，
                            <br />
                            <span className="text-white/90">为你而设</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;

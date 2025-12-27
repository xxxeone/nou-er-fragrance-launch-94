import { Button } from "@/components/ui/button";
import nouerLogo from "@/assets/nouer-logo.png";
import ctaBackground from "@/assets/cta-background.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`relative min-h-[70vh] flex items-center overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            {/* Breathing Background Image */}
            <div className="absolute inset-0">
                <img
                    src={ctaBackground}
                    alt="NOU'ER CTA Background"
                    className="w-full h-full object-cover animate-breathe scale-110"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex items-center justify-center min-h-[60vh]">
                    {/* Content */}
                    <div className="text-center max-w-3xl">
                        {/* Logo */}
                        <div className="mb-12 flex justify-center">
                            <img
                                src={nouerLogo}
                                alt="NOU'ER"
                                className="h-16 lg:h-20 w-auto brightness-0 invert opacity-90"
                            />
                        </div>

                        {/* Tagline */}
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-[1.3]">
                            开启你的香氛之旅
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
                            体验专为你而设的高端香氛性能
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <Button variant="heroFilled" size="xl">
                                立即选购
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Breathing Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="NOU'ER Premium Background"
          className="w-full h-full object-cover animate-breathe"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center justify-center lg:justify-start min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-white/80 mb-6 animate-fade-in">
              Elevate Your Everyday Potential
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-6 animate-fade-in-delay-1 text-white">
              提升你
              <br />
              <span className="text-white/90">每天的潜能</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-delay-2">
              专为持久清新而生，专为陪伴你而来。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button variant="heroFilled" size="xl">
                选购 15ml
              </Button>
              <Button variant="hero" size="xl">
                体验礼盒
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

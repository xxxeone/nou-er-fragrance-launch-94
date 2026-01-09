import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Breathing Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpeg"
          alt="NOU'ER Premium Background"
          className="w-full h-full object-cover animate-breathe"
        />
        {/* Overlay gradient - Strong fade at bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center justify-center lg:justify-start min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-white/80 mb-6 animate-fade-in">
              Protect Your Energy Field
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-6 animate-fade-in-delay-1 text-white">
              守护
              <br />
              <span className="text-white/90">你的能量磁场</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-in-delay-2">
              以 COA 认证原料打造的随身能量香氛
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button variant="heroFilled" size="xl">
                选购 20ml
              </Button>
              <Button variant="hero" size="xl">
                小样精品
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

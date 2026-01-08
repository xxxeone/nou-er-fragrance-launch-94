import certificationImg from "@/assets/certification.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CertificationSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className={`py-20 lg:py-32 bg-background scroll-hidden ${isVisible ? "scroll-visible" : ""
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        {/* Left: Text Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light mb-8">
                                安全认证
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                每一款 NOU'ER 香氛，皆通过正规安全检测与认证，
                                确保符合国际安全标准。我们坚持透明化的配方标注，
                                让您在享受气场提升的同时，也拥有最安心的使用体验。
                            </p>
                        </div>

                        {/* Right: Certification Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <img
                                    src={certificationImg}
                                    alt="安全认证"
                                    className="w-full max-w-2xl h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationSection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
    {
        name: "Jonathan Lim",
        location: "Kuala Lumpur",
        rating: 5,
        review: "我每天开会前都会喷一喷,整个人精神很多。之前一直昏昏沉沉的,现在可以focus做工。这个不是香水那么简单,是真的可以帮到我stay alert。同事都问我最近是不是换了什么supplement,哈哈其实是这个啦。",
    },
    {
        name: "Marcus Tan",
        location: "Penang",
        rating: 5,
        review: "Black Series那瓶我用来谈生意的时候喷。Wah真的不同,整个energy level up了。客户meeting的时候也比较有信心,讲话也比较有力。这个真的work,不是心理作用那种。",
    },
    {
        name: "Wei Kit",
        location: "Selangor",
        rating: 5,
        review: "放在bag里面随时可以补,超方便的。有时候下午三四点会累,我就去toilet喷一下,马上refresh。Size刚刚好,不会占位置。现在车里、office、bag都各放一瓶,随时需要随时用。",
    },
    {
        name: "Bryan Wong",
        location: "Johor Bahru",
        rating: 5,
        review: "这个价钱买到这种quality,真的值得。比起那些几百块的大牌,这个performance一样好,但是price合理很多。而且是真的有effect的,不是那种只有香味没有用的香水。钱花得很value。",
    },
    {
        name: "Aaron Ng",
        location: "Subang Jaya",
        rating: 5,
        review: "用了White Series一个星期,发现做工真的比较专注。尤其是下午那种sleepy feeling减少了很多。以前要靠coffee,现在喷这个就够了。能量真的有提升到,不是心理作用。",
    },
    {
        name: "Ivan Chong",
        location: "Petaling Jaya",
        rating: 5,
        review: "RM129买到这么effective的东西,我觉得很okay。之前买过更贵的,但是没有这个那么直接感觉到effect。朋友介绍的时候还半信半疑,用了之后真的convinced了。Performance配得上价格,不是那种虚有其表的product。",
    },
];

const TestimonialsSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`relative py-24 lg:py-32 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/gallery-bg.jpeg"
                    alt="Testimonials Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better content visibility */}
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
                        Customer Reviews
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white">
                        我们的客户真实好评
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 fill-gold"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                "{testimonial.review}"
                            </p>

                            {/* Customer Info */}
                            <div className="border-t border-white/20 pt-4">
                                <p className="font-medium text-sm text-white">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-white/70 mt-1">
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

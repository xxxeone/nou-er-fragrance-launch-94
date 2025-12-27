import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
    {
        name: "Jonathan Lee",
        location: "Kuala Lumpur",
        rating: 5,
        review: "用了两个礼拜,真的不错。之前买过很多牌子的香水都是喷了几个小时就没味道,这个可以撑到晚上。同事还问我用什么香水,说很好闻。价钱也合理,会回购。",
    },
    {
        name: "Ivan Tan",
        location: "Penang",
        rating: 5,
        review: "Black Series那瓶我很喜欢。出去见客户之前喷一喷,整个人感觉很有confidence。留香时间真的long,不需要一直补喷。推荐给朋友他们也说好。",
    },
    {
        name: "Marcus Wong",
        location: "Johor Bahru",
        rating: 5,
        review: "朋友介绍的,本来没抱太大期望。收到货试了下,wah真的surprised。味道不会太浓,但是够持久。现在车里和office都放一瓶。",
    },
    {
        name: "Wei Jie",
        location: "Selangor",
        rating: 5,
        review: "体验礼盒很值得买!可以试两个味道,我比较喜欢White Series,清新又不会太甜。女朋友说闻起来很舒服,我就immediately买了15ml的。",
    },
    {
        name: "Bryan Lim",
        location: "Petaling Jaya",
        rating: 5,
        review: "这个香水performance真的okay。早上喷,到下班都还有味道。而且不会像有些香水那样headache,很natural的感觉。价钱比起那些大牌子便宜很多,quality也不输。",
    },
    {
        name: "Aaron Ng",
        location: "Subang Jaya",
        rating: 5,
        review: "买了Black Series送给自己的生日礼物。包装很premium,味道也很mature,适合上班用。同事都说闻起来很professional,我很satisfied。",
    },
];

const TestimonialsSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`py-24 lg:py-32 bg-cream/30 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                        Customer Reviews
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light">
                        我们的客户真实好评
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
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
                            <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                                "{testimonial.review}"
                            </p>

                            {/* Customer Info */}
                            <div className="border-t border-border/30 pt-4">
                                <p className="font-medium text-sm text-foreground">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
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

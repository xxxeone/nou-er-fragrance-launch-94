import poster1 from "@/assets/posters/1.png";
import poster2 from "@/assets/posters/2.png";
import poster3 from "@/assets/posters/3.png";
import poster4 from "@/assets/posters/4.png";
import poster5 from "@/assets/posters/5.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posters = [poster1, poster2, poster3, poster4, poster5];

const PosterGallery = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 bg-background overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <div className="mb-12 text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
                    Gallery
                </p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Scrolling Track */}
                <div className="flex gap-8 animate-scroll-slow">
                    {/* First Set */}
                    {posters.map((poster, index) => (
                        <div
                            key={`poster-1-${index}`}
                            className="flex-shrink-0 w-[300px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={poster}
                                alt={`NOU'ER Poster ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {posters.map((poster, index) => (
                        <div
                            key={`poster-2-${index}`}
                            className="flex-shrink-0 w-[300px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={poster}
                                alt={`NOU'ER Poster ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PosterGallery;

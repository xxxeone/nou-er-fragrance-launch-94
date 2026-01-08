import { useEffect, useRef, useState } from "react";
import { Maximize } from "lucide-react";

const IngredientsSection = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const videos = [
        {
            id: "white-series",
            title: "White Series",
            subtitle: "清雅之境",
            description: "优雅清新 · 特香持久 · 守护磁场",
            src: "/videos/white-series-ingredients.mp4",
            theme: "white",
        },
        {
            id: "black-series",
            title: "Black Series",
            subtitle: "魅力之境",
            description: "奢华深沉 · 特香持久 · 磁场强大",
            src: "/videos/black-series-ingredients.mp4",
            theme: "black",
        },
    ];

    const handleVideoClick = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        if (activeVideo === index) {
            // Pause if already playing
            video.pause();
            setActiveVideo(null);
        } else {
            // Pause all other videos
            videoRefs.current.forEach((v, i) => {
                if (v && i !== index) {
                    v.pause();
                    v.currentTime = 0;
                }
            });
            // Play the clicked video
            video.play();
            setActiveVideo(index);
        }
    };

    const handleFullscreen = (index: number, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering video play/pause
        const container = containerRefs.current[index];
        const video = videoRefs.current[index];

        if (!container || !video) return;

        if (!document.fullscreenElement) {
            container.requestFullscreen().then(() => {
                // Auto-play when entering fullscreen
                video.play();
                setActiveVideo(index);
            }).catch((err) => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    useEffect(() => {
        // Handle video ended event
        videoRefs.current.forEach((video, index) => {
            if (video) {
                const handleEnded = () => {
                    setActiveVideo(null);
                };
                video.addEventListener("ended", handleEnded);
                return () => video.removeEventListener("ended", handleEnded);
            }
        });
    }, []);


    return (
        <section className="relative py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Side - Section Header */}
                    <div className="lg:w-2/5 space-y-6">
                        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
                            我们的配方
                            <span className="block text-3xl lg:text-4xl font-light text-muted-foreground mt-3">
                                Ingredients
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            精选高品质原料，打造从容自信的气场体验
                        </p>
                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground">
                                点击视频查看详细配方展示
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Video Reels Grid */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-6">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                ref={(el) => (containerRefs.current[index] = el)}
                                className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
                                onClick={() => handleVideoClick(index)}
                            >
                                {/* Video */}
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loop
                                    playsInline
                                    preload="metadata"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    您的浏览器不支持视频播放。
                                </video>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                {/* Fullscreen Button */}
                                <button
                                    onClick={(e) => handleFullscreen(index, e)}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                    aria-label="全屏播放"
                                >
                                    <Maximize className="w-5 h-5 text-white" />
                                </button>

                                {/* Play/Pause Indicator */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${activeVideo === index ? "opacity-0" : "opacity-100"
                                        }`}
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-10 h-10 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="fullscreen-hide absolute bottom-0 left-0 right-0 p-6 text-white space-y-1 pointer-events-none">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className={`h-1 w-12 ${video.theme === "white" ? "bg-white" : "bg-zinc-800"
                                                }`}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold">{video.title}</h3>
                                    <p className="text-lg font-light opacity-90">{video.subtitle}</p>
                                    <p className="text-xs opacity-75">{video.description}</p>
                                </div>

                                {/* Subtle Border Glow */}
                                <div
                                    className={`absolute inset-0 rounded-3xl border-2 transition-opacity duration-300 pointer-events-none ${video.theme === "white"
                                        ? "border-white/30"
                                        : "border-zinc-800/30"
                                        } ${activeVideo === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IngredientsSection;

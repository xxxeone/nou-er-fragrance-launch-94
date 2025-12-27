import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  benefits?: string[];
  price?: string;
  variant?: "white" | "black";
  onViewDetails?: () => void;
}

const ProductCard = ({
  image,
  title,
  subtitle,
  description,
  benefits,
  price,
  variant = "white",
  onViewDetails,
}: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Image Container - Now Clickable */}
      <div
        className={`relative aspect-[3/4] mb-6 overflow-hidden cursor-pointer ${variant === "black" ? "bg-charcoal/5" : "bg-cream"
          }`}
        onClick={onViewDetails}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]" />

        {/* Click to View Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[800ms]">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full transform group-hover:scale-100 scale-90 transition-transform duration-[800ms]">
            <p className="text-sm font-medium tracking-wide">查看详情</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            {subtitle}
          </p>
          <h3 className="font-display text-2xl lg:text-3xl font-light">{title}</h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {price && (
          <p className="font-display text-xl tracking-wide pt-2">{price}</p>
        )}

        {/* Only Buy Button Now */}
        <div className="pt-4">
          <Button variant="product" size="lg" className="w-full">
            立即购买
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

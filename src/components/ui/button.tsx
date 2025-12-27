import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-lg",
        destructive: "bg-destructive/20 backdrop-blur-md border border-destructive/30 text-destructive hover:bg-destructive/30 shadow-lg",
        outline: "border border-white/30 backdrop-blur-md bg-white/10 text-white hover:bg-white/20 shadow-lg",
        secondary: "bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/25 shadow-lg",
        ghost: "hover:bg-white/10 backdrop-blur-sm text-white",
        link: "text-white underline-offset-4 hover:underline",
        // Premium variants for NOU'ER with glassmorphism
        hero: "border border-white/40 backdrop-blur-md bg-white/10 text-white hover:bg-white/25 tracking-widest uppercase text-xs font-normal shadow-lg",
        heroFilled: "backdrop-blur-md bg-white/90 border border-white text-charcoal hover:bg-white tracking-widest uppercase text-xs font-normal shadow-xl",
        product: "border-flow-effect backdrop-blur-md bg-white/85 border border-white/60 text-charcoal hover:bg-white tracking-wider uppercase text-xs font-normal shadow-md hover:shadow-lg transition-all duration-500",
        productOutline: "border border-charcoal/30 backdrop-blur-md bg-transparent text-charcoal hover:border-charcoal/50 hover:bg-charcoal/5 tracking-wider uppercase text-xs font-normal shadow-md",
        minimal: "text-white hover:text-white/70 tracking-wider uppercase text-xs font-normal underline underline-offset-4 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        xl: "h-14 px-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

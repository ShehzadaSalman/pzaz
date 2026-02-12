import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "gradient-cta-bg text-primary-foreground shadow-md hover:shadow-lg font-lato font-black text-xl leading-[25px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand-purple bg-transparent text-transparent bg-clip-text bg-[linear-gradient(270deg,_#4827AF_5.47%,_#B491E4_102.96%)] hover:bg-brand-purple hover:bg-none hover:text-white hover:bg-clip-border hover:[-webkit-text-fill-color:#fff] backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-hero-bg text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-100",
        glass: "glass text-foreground hover:bg-background/90",
        glow: "gradient-hero-bg text-primary-foreground glow hover:shadow-xl",
        "product-card": "border border-[#5C28A3] bg-transparent font-lato font-black text-[16px] tracking-[0.05em] rounded-[10px] text-[#4827AF] hover:bg-[#5C28A3] hover:text-white",
        "product-card-gradient": "gradient-cta-bg text-white font-lato font-black text-[16px] tracking-[0.05em] rounded-[10px] border-0",
        "thin-cta": "bg-[#4D029B] border border-[#5C28A3] text-white font-lato font-black text-[16px] tracking-[0.05em] rounded-[10px] hover:bg-[#5C28A3] hover:shadow-lg",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-base",
        lg: "h-12 rounded-xl px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
        "product-card": "h-[57px] px-10 py-4 w-full",
        "thin-cta": "h-[33px] px-10 py-4",
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
  prefixIcon?: React.ReactNode;
  postfixIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, prefixIcon, postfixIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const content = (
      <>
        {prefixIcon ? <span className="inline-flex shrink-0">{prefixIcon}</span> : null}
        {children}
        {postfixIcon ? <span className="inline-flex shrink-0">{postfixIcon}</span> : null}
      </>
    );
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {asChild ? children : content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

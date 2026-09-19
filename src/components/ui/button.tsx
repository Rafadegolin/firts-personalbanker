import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-sm text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-all duration-500 ease-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500 hover:[&_svg]:translate-x-1",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        gold: "bg-gold-metal text-navy-950 shadow-[0_18px_40px_-18px_rgba(212,176,106,0.7)] hover:bg-[position:100%_50%] hover:shadow-[0_22px_48px_-16px_rgba(212,176,106,0.85)]",
        "outline-gold":
          "border border-gold/55 text-foreground hover:border-gold hover:bg-gold/10",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "px-0 text-gold underline-offset-8 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9",
        icon: "size-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

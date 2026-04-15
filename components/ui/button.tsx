import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#0F172A] text-white hover:bg-[#1E293B] active:scale-[0.98]":
              variant === "default",
            "bg-transparent text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F1F5F9]":
              variant === "secondary",
            "bg-transparent hover:bg-[#F1F5F9]": variant === "ghost",
          },
          {
            "h-11 px-6 text-sm rounded-lg": size === "default",
            "h-9 px-4 text-sm rounded-md": size === "sm",
            "h-12 px-8 text-base rounded-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

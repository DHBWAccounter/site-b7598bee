import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-all duration-200",
          "hover:border-[#CBD5E1]",
          "focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

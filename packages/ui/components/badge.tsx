import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-12 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary-4 text-primary-11 hover:bg-primary-5",
        secondary:
          "border-transparent bg-secondary-4 text-secondary-11 hover:bg-secondary-5",
        danger:
          "border-transparent bg-danger-4 text-danger-11 hover:bg-danger-5",
        outline: "border-neutral-6 text-neutral-11",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

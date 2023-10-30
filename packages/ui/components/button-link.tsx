import type { ComponentPropsWithoutRef } from "react";
import * as React from "react";
import NextLink from "next/link";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import { buttonVariants } from "./button";

export function ButtonLink({
  className,
  children,
  size,
  variant,
  ...props
}: ComponentPropsWithoutRef<"a"> & { href: string } & VariantProps<
    typeof buttonVariants
  >) {
  return (
    <NextLink
      {...props}
      className={cn(buttonVariants({ className, size, variant }))}
    >
      {children}
    </NextLink>
  );
}

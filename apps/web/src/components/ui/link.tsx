import type { ComponentPropsWithoutRef } from "react";
import NextLink from "next/link";

import { cn } from "@/lib/utils";

export function Link({
  children,
  className,
  href,
  ...props
}: ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <NextLink
      href={href}
      className={cn("font-medium text-secondary-11", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}

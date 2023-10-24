import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}

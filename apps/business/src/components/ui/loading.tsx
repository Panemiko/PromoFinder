import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function Loading({ className }: { className?: string }) {
  return <LoaderIcon className={cn("animate-spin", className)} />;
}

import * as React from "react";
import { Loader2Icon } from "lucide-react";

import { cn } from "../lib/utils";

export function Loading({ className }: { className?: string }) {
  return <Loader2Icon className={cn("animate-spin", className)} />;
}

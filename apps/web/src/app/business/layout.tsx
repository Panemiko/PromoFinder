import type { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";

import { BrandLogo } from "@/components/brand/logo";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="border-b border-b-neutral-6 py-5">
        <MaxWidthWrapper className="flex justify-between">
          <BrandLogo className="max-w-[180px]" />
          <UserButton />
        </MaxWidthWrapper>
      </header>
      <div>{children}</div>
    </div>
  );
}

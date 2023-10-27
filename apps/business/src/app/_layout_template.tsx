import type { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";

import { BrandLogo } from "@/components/brand/logo";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function LayoutTemplate({
  storeName,
  children,
}: {
  storeName?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <header className="py-5">
        <MaxWidthWrapper className="flex justify-between">
          <div className="flex items-center gap-6">
            <BrandLogo className="w-[180px]" />
            {storeName && (
              <>
                <span className="text-2xl font-light text-neutral-6">/</span>
                <span className="truncate text-neutral-11">{storeName}</span>
              </>
            )}
          </div>
          <UserButton />
        </MaxWidthWrapper>
      </header>
      <div>{children}</div>
    </div>
  );
}

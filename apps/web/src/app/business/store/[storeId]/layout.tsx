import type { ReactNode } from "react";
import NextLink from "next/link";
import {
  HomeIcon,
  MegaphoneIcon,
  PercentIcon,
  SettingsIcon,
} from "lucide-react";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { LayoutTemplate } from "../../_layout_template";

export default function Layout({ children }: { children: ReactNode }) {
  // Update based on the shop id
  const storeName = "Nome da loja 1";

  return (
    <LayoutTemplate storeName={storeName}>
      <MaxWidthWrapper className="flex py-14">
        <aside>
          <ul className="flex h-[calc(100vh-200px)] flex-col justify-between gap-1">
            <div>
              <li>
                <NextLink
                  className="flex w-44 items-center gap-2 rounded-sm px-5 py-2 text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 active:bg-neutral-5"
                  href="/business/store/1"
                >
                  <HomeIcon className="h-4 w-4" />
                  Início
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="flex w-44 items-center gap-2 rounded-sm px-5 py-2 text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 active:bg-neutral-5"
                  href="/business/store/1/promotions"
                >
                  <PercentIcon className="h-4 w-4" />
                  Promoções
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="flex w-44 items-center gap-2 rounded-sm px-5 py-2 text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 active:bg-neutral-5"
                  href="/business/store/1/ads"
                >
                  <MegaphoneIcon className="h-4 w-4" />
                  Anúncios
                </NextLink>
              </li>
            </div>
            <div>
              <li>
                <NextLink
                  className="flex w-44 items-center rounded-sm px-5 py-2 pl-11 text-primary-11 transition-colors hover:bg-primary-4 hover:text-primary-12 active:bg-primary-5"
                  href="/business/store/1/settings"
                >
                  Seu plano
                </NextLink>
              </li>
              <li>
                <NextLink
                  className="flex w-44 items-center gap-2 rounded-sm px-5 py-2 text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 active:bg-neutral-5"
                  href="/business/store/1/settings"
                >
                  <SettingsIcon className="h-4 w-4" />
                  Configurações
                </NextLink>
              </li>
            </div>
          </ul>
        </aside>
        <div className="w-full">{children}</div>
      </MaxWidthWrapper>
    </LayoutTemplate>
  );
}

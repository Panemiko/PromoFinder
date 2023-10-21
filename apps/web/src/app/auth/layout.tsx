import type { ReactNode } from "react";

import { BrandLogo } from "@/components/brand/logo";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Link } from "@/components/ui/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex min-h-screen items-center justify-center gap-12">
      <div className="w-full">
        <Link href="/">Voltar ao início</Link>
        <BrandLogo className="mb-6 max-w-sm" />
        <p className="max-w-xl text-neutral-11">
          Dentro do site só é possível entrar em contas de estabelecimento, se
          quiser encontrar promoções{" "}
          <Link href="#">entre com o aplicativo</Link>.
        </p>
      </div>
      <div>{children}</div>
    </MaxWidthWrapper>
  );
}

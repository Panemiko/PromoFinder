import type { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { CreateStoreForm } from "./form";

export const metadata: Metadata = {
  title: "Criar loja",
};

export default function Page() {
  return (
    <MaxWidthWrapper className="flex items-center justify-center">
      <div className="w-2/5 space-y-10 py-10">
        <div>
          <h1 className="text-2xl font-medium text-neutral-12">Criar loja</h1>
        </div>
        <CreateStoreForm />
      </div>
    </MaxWidthWrapper>
  );
}

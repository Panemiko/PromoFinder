import type { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const store = {
  name: "Nome da loja 1",
};

export const metadata: Metadata = {
  title: store.name,
};

export default function Page() {
  return <MaxWidthWrapper>s</MaxWidthWrapper>;
}

import type { ReactNode } from "react";

import { LayoutTemplate } from "../../_layout_template";

export default function Layout({ children }: { children: ReactNode }) {
  // Update based on the shop id
  const storeName = "Nome da loja 1";

  return <LayoutTemplate storeName={storeName}>{children}</LayoutTemplate>;
}

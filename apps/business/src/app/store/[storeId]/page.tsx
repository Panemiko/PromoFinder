import type { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const store = {
  name: "Nome da loja 1",
};

export const metadata: Metadata = {
  title: store.name,
};

export default function Page() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl text-neutral-12">
          Bem vindo, <span className="font-semibold">Luiz</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <Card className="">
          <CardHeader>
            <CardTitle>Promoções ativas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-neutral-12">209</span>
            <span className="text-xs text-neutral-11">
              +2.9% em relação ao último mês
            </span>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Anúncios ativos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-neutral-12">92</span>
            <span className="text-xs text-neutral-11">
              +9% em relação ao último mês
            </span>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Anúncios programados</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-neutral-12">50</span>
            <span className="text-xs text-neutral-11">
              +2.9% em relação ao último mês
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import NextLink from "next/link";
import { PlusIcon } from "lucide-react";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serverApi } from "@/lib/server";

export default async function Page() {
  const userStores = await serverApi.store.byCurrentUser.query();

  return (
    <MaxWidthWrapper className="py-20">
      <div className="mb-10 flex justify-between">
        <h1 className="text-2xl font-medium text-neutral-12">Suas lojas</h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-5">
          {userStores ? (
            userStores.map((store) => (
              <li key={store.id}>
                <NextLink href={`/business/store/${store.id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{store.name}</CardTitle>
                      <CardDescription>
                        10 promoções ativas - 2 anúncios
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Badge variant="outline">FREE</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </NextLink>
              </li>
            ))
          ) : (
            <span className="col-span-3 text-center text-neutral-11">
              Nenhuma loja encontrada
            </span>
          )}
        </ul>
      </div>
    </MaxWidthWrapper>
  );
}

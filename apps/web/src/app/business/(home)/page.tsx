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

export default function Page() {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="mb-10 flex justify-between">
        <h1 className="text-2xl font-medium text-neutral-12">Suas lojas</h1>
        <ButtonLink href="/business/store/create">
          <PlusIcon /> ADICIONAR LOJA
        </ButtonLink>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-5">
          <li>
            <NextLink href="/store/iddaloja">
              <Card>
                <CardHeader>
                  <CardTitle>Nome da loja 1</CardTitle>
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
          <li>
            <NextLink href="/store/iddaloja">
              <Card>
                <CardHeader>
                  <CardTitle>Nome da loja 2</CardTitle>
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
          <li>
            <NextLink href="/store/iddaloja">
              <Card>
                <CardHeader>
                  <CardTitle>Nome da loja 3</CardTitle>
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
        </ul>
      </div>
    </MaxWidthWrapper>
  );
}

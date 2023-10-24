import { Link } from "@/components/ui/link";
import type { Product } from "./columns";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata = {
  title: "Promoções",
};

const data = [
  {
    id: "1",
    name: "Product 1",
    status: "active",
    eanCode: "123456789",
    price: "19.99",
    promotionPrice: "15.99",
    dateStart: new Date("2023-01-01"),
    dateEnd: new Date("2023-12-31"),
  },
  {
    id: "2",
    name: "Product 2",
    status: "evaluating",
    eanCode: "987654321",
    price: "29.99",
    promotionPrice: "24.99",
    dateStart: new Date("2023-02-01"),
    dateEnd: new Date("2023-11-30"),
  },
  {
    id: "3",
    name: "Product 3",
    status: "programmed",
    eanCode: "555555555",
    price: "39.99",
    promotionPrice: "34.99",
    dateStart: new Date("2023-03-01"),
    dateEnd: new Date("2023-10-31"),
  },
  {
    id: "4",
    name: "Product 4",
    status: "active",
    eanCode: "444444444",
    price: "49.99",
    promotionPrice: "44.99",
    dateStart: new Date("2023-04-01"),
    dateEnd: new Date("2023-09-30"),
  },
  {
    id: "5",
    name: "Product 5",
    status: "evaluating",
    eanCode: "888888888",
    price: "59.99",
    promotionPrice: "54.99",
    dateStart: new Date("2023-05-01"),
    dateEnd: new Date("2023-08-31"),
  },
  {
    id: "6",
    name: "Product 6",
    status: "programmed",
    eanCode: "666666666",
    price: "69.99",
    promotionPrice: "64.99",
    dateStart: new Date("2023-06-01"),
    dateEnd: new Date("2023-07-31"),
  },
  {
    id: "7",
    name: "Product 7",
    status: "active",
    eanCode: "777777777",
    price: "79.99",
    promotionPrice: "74.99",
    dateStart: new Date("2023-07-01"),
    dateEnd: new Date("2023-06-30"),
  },
] as Product[];

export default function Page() {
  return (
    <div>
      <div className="mb-10 space-y-6">
        <h1 className="text-2xl text-neutral-12">Promoções</h1>
        <p className="max-w-prose text-neutral-11">
          As promoções não são mostradas diretamente na página inicial do
          usuário, mas sim na tela própria da loja. Caso queira que apareça,{" "}
          <Link href="/business/store/1/ads">faça um anúncio</Link>.
        </p>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

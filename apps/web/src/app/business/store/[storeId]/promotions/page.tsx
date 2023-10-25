import { Link } from "@/components/ui/link";
import type { Product } from "./columns";

export const metadata = {
  title: "Promoções",
};

function parseDate(date: Date) {
  return `${date.getDate().toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
  })}/${(date.getMonth() + 1).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
  })}/${date.getFullYear()}`;
}

const products = [
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
    name: "Product 4 com muito texto mesmo parece até que são duas linhas de texto",
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

      <ul className="grid max-w-5xl grid-cols-2 gap-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-between gap-2 rounded-md px-5 py-4 transition-colors hover:cursor-pointer hover:bg-neutral-3 active:bg-neutral-4"
          >
            <div className="flex h-full flex-col justify-between gap-3">
              {/* <Image
                alt={`Ilustração do produto ${product.name}`}
                width={400}
                height={400}
                className="aspect-square w-20 rounded-sm"
                src="/placeholder.png"
              /> */}
              <div className="space-y-1">
                <span className="line-clamp-2 w-3/5">{product.name}</span>
                <div className="space-x-1">
                  <span className="text-xl font-medium text-neutral-12">
                    R${product.promotionPrice}
                  </span>
                  <span className="text-sm text-neutral-11 line-through">
                    R${product.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1 text-neutral-11">
                <span className="text-xs">{parseDate(product.dateStart)}</span>
                <span className="text-xs">{parseDate(product.dateEnd)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

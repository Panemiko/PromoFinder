"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Product {
  id: string;
  name: string;
  status: "active" | "evaluating" | "programmed";
  eanCode: string;
  price: string;
  promotionPrice: string;
  dateStart: Date;
  dateEnd: Date;
}

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar linha"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell({ row }) {
      const value = row.getValue("status");

      if (value === "active") {
        return "Ativo";
      }

      if (value === "evaluating") {
        return "Avaliando";
      }

      if (value === "programmed") {
        return "Programado";
      }
    },
  },
  {
    accessorKey: "eanCode",
    header: "Código EAN",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell({ row }) {
      const value: string = row.getValue("promotionPrice");
      return `R$${value}`;
    },
  },
  {
    accessorKey: "promotionPrice",
    header: "Preço promocional",
    cell({ row }) {
      const value: string = row.getValue("promotionPrice");
      return `R$${value}`;
    },
  },
  {
    accessorKey: "dateStart",
    header: "Início",
    cell({ row }) {
      const value: Date = row.getValue("dateStart");
      return `${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`;
    },
  },
  {
    accessorKey: "dateEnd",
    header: "Fim",
    cell({ row }) {
      const value: Date = row.getValue("dateEnd");
      return `${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`;
    },
  },
];

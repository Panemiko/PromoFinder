"use client";

import type { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface User {
  id: string;
  name: string;
  role: "master" | "admin" | "member";
  email: string;
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "role",
    header: "Cargo",
    cell({ row }) {
      const value = row.getValue("role");

      if (value === "master") {
        return "Dono";
      }

      if (value === "admin") {
        return "Administrador";
      }

      if (value === "member") {
        return "Membro";
      }
    },
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
];

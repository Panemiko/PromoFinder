import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import type { User } from "./columns";
import { columns } from "./columns";
import { UsersTable } from "./data-table";
import { StoreSettingsForm } from "./form";
import { AddUserForm } from "./users-form";

const store = {
  name: "Nome da loja",
  avatarId: "aaaa",
};

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    role: "master",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Alice Smith",
    role: "admin",
    email: "alice.smith@example.com",
  },
  {
    id: "3",
    name: "Bob Johnson",
    role: "member",
    email: "bob.johnson@example.com",
  },
  {
    id: "4",
    name: "Eve Wilson",
    role: "admin",
    email: "eve.wilson@example.com",
  },
  {
    id: "5",
    name: "Michael Brown",
    role: "member",
    email: "michael.brown@example.com",
  },
  {
    id: "6",
    name: "Olivia Davis",
    role: "master",
    email: "olivia.davis@example.com",
  },
];

console.log(users);

export const metadata: Metadata = {
  title: "Configurações",
};

export default function Page() {
  return (
    <div className="space-y-20">
      <div className="space-y-10">
        <h1 className="text-2xl text-neutral-12">Configurações da loja</h1>
        <p className="max-w-prose text-neutral-11"></p>
      </div>
      <div>
        <h2 className="mb-6 text-xl text-neutral-12">Visualização</h2>
        <StoreSettingsForm store={store} />
      </div>
      <div>
        <h2 className="mb-6 text-xl text-neutral-12">Plano</h2>
        <div className="border- flex max-w-xl items-center justify-between rounded-lg border-secondary-6 bg-secondary-5 px-10 py-3 text-secondary-11">
          <div>
            <span>
              Atualmente o seu plano é:{" "}
              <span className="font-semibold">Grátis</span>
            </span>
          </div>
          <div>
            <ButtonLink size="sm" href="/pricing" variant="secondary">
              Ver planos
            </ButtonLink>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-xl text-neutral-12">Membros</h2>
        <div className="max-w-3xl rounded-t-lg pb-4">
          <AddUserForm />
        </div>
        <UsersTable columns={columns} data={users} />
      </div>
    </div>
  );
}

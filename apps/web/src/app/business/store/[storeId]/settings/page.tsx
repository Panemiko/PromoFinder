import { StoreSettingsForm } from "./form";

const store = {
  name: "Nome da loja",
  avatarId: "aaaa",
};

export default function Page() {
  return (
    <div>
      <div className="mb-10 space-y-6">
        <h1 className="text-2xl text-neutral-12">Configurações da loja</h1>
        <p className="max-w-prose text-neutral-11"></p>
      </div>
      <StoreSettingsForm store={store} />
    </div>
  );
}

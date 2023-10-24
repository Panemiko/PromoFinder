"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { storeNameSchema } from "@promofinder/validation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/components/ui/uploadthing";

const formSchema = z.object({
  name: storeNameSchema,
});

export function StoreSettingsForm({ store }: { store: { name: string } }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: store.name,
    },
  });

  return (
    <Form {...form}>
      <form className="max-w-xl space-y-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormDescription>
                O nome da loja será visível para todos os usuários e membros.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Avatar</FormLabel>
          <div className="flex items-end gap-4">
            <Image
              className="aspect-square w-14 rounded-lg"
              alt="Avatar da loja"
              src="/placeholder.png"
              width={400}
              height={400}
            />
            <Image
              className="aspect-square w-24 rounded-lg"
              alt="Avatar da loja"
              src="/placeholder.png"
              width={400}
              height={400}
            />
            <Image
              className="aspect-square w-36 rounded-lg"
              alt="Avatar da loja"
              src="/placeholder.png"
              width={400}
              height={400}
            />
          </div>
          <UploadDropzone endpoint="storeAvatar" />
          <FormDescription>
            O avatar será a &quot;foto de perfil&quot; da loja. Um imagem
            quadrada melhorará a visualização.
          </FormDescription>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Banner</FormLabel>
          <div className="flex items-end gap-4">
            <Image
              className="aspect-[21/9] w-64 rounded-lg"
              alt="Banner da loja"
              src="/placeholder.png"
              width={400}
              height={400}
            />
          </div>
          <UploadDropzone endpoint="storeAvatar" />
          <FormDescription>
            O banner será exibido para os usuários no topo da tela da página da
            loja.
          </FormDescription>
          <FormMessage />
        </FormItem>
        <Button disabled={!form.formState.isValid} type="submit">
          ATUALIZAR
        </Button>
      </form>
    </Form>
  );
}

"use client";

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

export function CreateStoreForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-10">
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
          <UploadDropzone endpoint="storeAvatar" />
          <FormDescription>
            O avatar será a &quot;foto de perfil&quot; da loja. Um imagem
            quadrada melhorará a visualização.
          </FormDescription>
          <FormMessage />
        </FormItem>
        <div className="flex justify-end">
          <Button disabled={!form.formState.isValid} type="submit">
            CRIAR
          </Button>
        </div>
      </form>
    </Form>
  );
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@promofinder/ui";

const formSchema = z.object({
  email: z.string().email(),
});

export function EmailSubscriber() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function subscribe(data: z.infer<typeof formSchema>) {
    setLoading(true);

    const res = await fetch("/api/email-subscription", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200 || res.status === 409) {
      setMessage(
        "Tudo certo! Você será notificado quando tivermos alguma novidade.",
      );

      form.reset();
    }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(subscribe)}
        className="flex items-center justify-between gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div>
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[450px]"
                    placeholder="Seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />

        <Button
          isLoading={loading}
          disabled={!form.formState.isValid}
          type="submit"
        >
          ADICIONAR
        </Button>
      </form>

      <span className="mt-10 font-medium text-success-11">{message}</span>
    </Form>
  );
}

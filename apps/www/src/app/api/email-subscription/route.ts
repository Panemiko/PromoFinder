import { randomUUID } from "crypto";
import { z } from "zod";

import { db } from "@promofinder/db";
import { emailSubscriptions } from "@promofinder/db/schema/email-subscription";

export async function POST(req: Request) {
  const body = (await req.json()) as { email: string };

  try {
    const email = await z.string().email().parseAsync(body.email);

    const registeredEmail = await db.query.emailSubscriptions.findFirst({
      where: (emailSubscriptions, { eq }) =>
        eq(emailSubscriptions.email, email),
    });

    if (registeredEmail) {
      return new Response(undefined, { status: 409 });
    }

    await db.insert(emailSubscriptions).values({
      id: randomUUID(),
      email,
    });

    console.log("New Subscription");

    return new Response(undefined, { status: 200 });
  } catch {
    return new Response(undefined, { status: 400 });
  }
}

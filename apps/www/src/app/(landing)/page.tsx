import NextLink from "next/link";
import { MailIcon } from "lucide-react";

import {
  BrandIcon,
  BrandLogo,
  ButtonLink,
  InstagramIcon,
  WhatsappIcon,
} from "@promofinder/ui";

import { BackgroundBlur } from "@/components/background-blur";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { site } from "@/config/site";

export default function Page() {
  return (
    <div>
      <BackgroundBlur />

      <header>
        <MaxWidthWrapper className="flex justify-between py-6">
          <div className="flex items-center gap-2">
            <BrandIcon className="h-8 w-8" />
            <BrandLogo className="w-48" />
          </div>
          <div className="flex gap-10">
            <ul className="flex items-center gap-8">
              <li>
                <NextLink
                  href="#hero"
                  className="text-neutral-11 transition-colors hover:text-neutral-12"
                >
                  Início
                </NextLink>
              </li>
            </ul>
            <div
              aria-hidden="true"
              className="my-2 w-px border-r-[1px] border-neutral-6"
            ></div>
            <div className="space-x-6">
              <ButtonLink
                size="icon"
                variant="ghost"
                target="_blank"
                href={site.instagramLink}
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </ButtonLink>
              <ButtonLink
                size="icon"
                variant="ghost"
                target="_blank"
                href={site.whatsappLink}
                aria-label="Whatsapp"
              >
                <WhatsappIcon className="h-6 w-6" />
              </ButtonLink>
              <ButtonLink
                size="icon"
                variant="ghost"
                target="_blank"
                href={`mailto:${site.contactEmail}`}
                aria-label="E-mail"
              >
                <MailIcon className="h-6 w-6" />
              </ButtonLink>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      <section id="hero">
        <MaxWidthWrapper className="py-24">
          <div>
            <span className="mb-3 block w-fit rounded-2xl border border-secondary-6 bg-secondary-3 px-2 py-1 text-sm font-medium text-secondary-11 shadow-2xl shadow-secondary-6">
              Em desenvolvimento 🛠
            </span>
            <h1 className="mb-14 max-w-3xl text-6xl font-bold text-neutral-12 drop-shadow-2xl">
              Promoções locais{" "}
              <span className="bg-gradient-to-r from-primary-9 to-primary-11 bg-clip-text text-white-1">
                eficazes
              </span>{" "}
              para suas vendas
            </h1>
            <p className="max-w-prose text-lg text-neutral-11">
              Chegou a hora de impulsionar seus negócios. No PromoFinder, você
              pode destacar suas promoções de forma eficaz e atingir um público
              local interessado por ofertas.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="about">
        <MaxWidthWrapper>A</MaxWidthWrapper>
      </section>
      {/*
            - hero
            - about
            - how it works
            - why is it important
            - the solution for the customer
            - the current state
            - the team
            */}
    </div>
  );
}

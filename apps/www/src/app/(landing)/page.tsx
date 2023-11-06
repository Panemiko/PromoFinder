import NextLink from "next/link";
import { ChevronsDownIcon, HexagonIcon, MailIcon } from "lucide-react";

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
import { EmailSubscriber } from "./email-subscriber";

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
        <MaxWidthWrapper className="pt-24">
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

      <MaxWidthWrapper className="flex flex-col items-center justify-center py-48 opacity-50">
        <hr className="w-full border border-secondary-6" />
        <ChevronsDownIcon className="-m-5 h-10 w-10 border-2 border-secondary-6 bg-neutral-2 text-secondary-6" />
      </MaxWidthWrapper>

      <section id="problem">
        <MaxWidthWrapper className="flex items-center gap-24 pb-24">
          <div className="space-y-10">
            <h2 className="sticky block text-3xl font-semibold text-neutral-12">
              O Dilema nas Promoções Locais
            </h2>
            <p className="max-w-prose text-lg text-neutral-11">
              As promoções das lojas frequentemente enfrentam um dilema
              complexo. Muitos negócios locais usam métodos como flyers,
              anúncios em jornais ou rádio, que são caros, pouco escaláveis e
              raramente alcançam os consumidores certos. O resultado?{" "}
              <strong className="font-medium underline">
                Despesas excessivas e retornos limitados
              </strong>
              .
            </p>
            <p className="max-w-prose text-lg text-neutral-11">
              No entanto, há uma solução. O PromoFinder está aqui para superar
              esse desafio, conectando de maneira eficaz as promoções das lojas
              com os clientes que{" "}
              <strong className="font-medium underline">
                realmente as procuram
              </strong>
              , tornando o marketing local mais rentável e eficiente.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="validation">
        <MaxWidthWrapper className="flex flex-col items-center gap-24 pb-24">
          <div className="w-full space-y-10"></div>
          <div className="grid grid-cols-3 gap-10">
            <div className="w-full rounded-lg border-2 border-secondary-6 px-5 py-3">
              a
            </div>
            <div className="w-full rounded-lg border-2 border-secondary-6 px-5 py-3">
              a
            </div>
            <div className="w-full rounded-lg border-2 border-secondary-6 px-5 py-3">
              a
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <section id="solution">
        <MaxWidthWrapper className="pb-24">
          <h2 className="text-center text-5xl font-bold text-neutral-12">
            A Solução
          </h2>
          <p className="max-w-prose text-lg text-neutral-11">
            As promoções das lojas frequentemente enfrentam um dilema complexo.
            Muitos negócios locais usam métodos como flyers, anúncios em jornais
            ou rádio, que são caros, pouco escaláveis e raramente alcançam os
            consumidores certos. O resultado?{" "}
            <strong className="font-medium underline">
              Despesas excessivas e retornos limitados
            </strong>
            .
          </p>
          <p className="max-w-prose text-lg text-neutral-11">
            No entanto, há uma solução. O PromoFinder está aqui para superar
            esse desafio, conectando eficazmente as promoções das lojas com os
            clientes que{" "}
            <strong className="font-medium underline">
              realmente as procuram
            </strong>
            , tornando o marketing local mais rentável e eficiente.
          </p>
        </MaxWidthWrapper>
      </section> */}

      <section id="cta">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center rounded-lg border-4 border-dotted border-primary-6 bg-primary-9/5 py-12 shadow-2xl shadow-primary-3">
            <h2 className="text-center text-3xl font-semibold text-primary-12">
              Tem interesse?
            </h2>
            <p className="mb-10 max-w-prose text-center text-lg text-primary-11">
              Adicione seu e-mail para avisarmos quando o aplicativo estiver
              disponível.
            </p>
            <EmailSubscriber />
          </div>
        </MaxWidthWrapper>
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

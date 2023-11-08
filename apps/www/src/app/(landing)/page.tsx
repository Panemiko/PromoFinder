import Image from "next/image";
import NextLink from "next/link";
import { ChevronsDownIcon, MailIcon } from "lucide-react";

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
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("./background.svg")' }}
    >
      <BackgroundBlur />

      <header className="mb-24">
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
              <li>
                <NextLink
                  href="#solution"
                  className="text-neutral-11 transition-colors hover:text-neutral-12"
                >
                  Solução
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="#business"
                  className="text-neutral-11 transition-colors hover:text-neutral-12"
                >
                  Business
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="#app"
                  className="text-neutral-11 transition-colors hover:text-neutral-12"
                >
                  Aplicativo
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

      <section id="hero" className="mb-36">
        <MaxWidthWrapper>
          <div>
            <span className="mb-3 block w-fit rounded-2xl border border-secondary-6 bg-secondary-3 px-2 py-1 text-sm font-medium text-secondary-11 shadow-2xl shadow-secondary-6">
              Em desenvolvimento 🛠
            </span>
            <h1 className="mb-14 max-w-4xl text-7xl font-bold text-neutral-12 drop-shadow-2xl">
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

      <MaxWidthWrapper className="mb-40 flex flex-col items-center justify-center opacity-50">
        <hr className="w-full border border-secondary-6" />
        <ChevronsDownIcon className="-m-5 h-10 w-10 border-2 border-secondary-6 bg-neutral-2 text-secondary-6" />
      </MaxWidthWrapper>

      <section id="solution" className="mb-60">
        <MaxWidthWrapper className="flex items-center justify-between gap-24">
          <div className="space-y-4">
            <div className="flex w-[500px] items-center justify-center gap-10 rounded-md border-2 border-primary-6 bg-primary-5 py-10 shadow-2xl shadow-primary-6/50">
              <span className="text-5xl font-black text-primary-11 drop-shadow-2xl">
                67%
              </span>
              <span className="text-3xl font-medium text-primary-11">
                Procuram promoções
              </span>
            </div>

            <div className="flex w-[250px] items-center justify-center gap-4 rounded-md border-2 border-secondary-6 bg-secondary-5 py-4 shadow-2xl shadow-secondary-6">
              <span className="text-2xl font-black text-secondary-11">17%</span>
              <span className="font-medium text-secondary-11">
                Têm uma ferramenta
              </span>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="sticky block text-4xl font-bold text-neutral-12 drop-shadow-2xl">
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

      <section id="business" className="mb-36 overflow-hidden py-20">
        <MaxWidthWrapper className="">
          <div className="flex items-center justify-between">
            <div className="pt-28">
              <h3 className="mb-14 bg-gradient-to-r from-secondary-12 to-black-12 bg-clip-text text-8xl font-bold text-white-1 drop-shadow-2xl">
                <span>PromoFinder</span> Business
              </h3>
              <p className="mb-6 max-w-prose text-lg text-neutral-11">
                Para solucionar esses problemas nós introduzimos o PromoFinder
                Business: Uma plataforma que permite que as lojas publiquem
                promoções a preços acessíveis diretamente para um público
                regional.
              </p>
              <p className="max-w-prose text-lg text-neutral-11">
                Com anúncios abaixo do mercado, facilidade de uso e alcance
                direcionado, o PromoFinder Business não apenas economiza
                recursos, mas também{" "}
                <strong className="font-medium underline">
                  expande a base de clientes
                </strong>
                , ajudando sua empresa a prosperar de maneira inteligente e
                eficaz.
              </p>
            </div>
            <Image
              className="relative -right-40 max-w-2xl rounded-lg border border-secondary-6 shadow-2xl shadow-secondary-6"
              alt="tela de criação de produtos do promofinder business"
              src="/business-preview.png"
              width={1440}
              height={1024}
            />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <section id="app" className="mb-48 overflow-hidden py-20">
        <MaxWidthWrapper className="">
          <h2 className="mb-10 text-center text-3xl font-medium text-neutral-12">
            Nossa Solução
          </h2>
          <div className="flex flex-row-reverse items-center justify-between">
            <h3 className="mb-10 text-6xl font-bold text-primary-12 drop-shadow-2xl">
              Aplicativo <br /> móvel
            </h3>
            <div>
              <p className="max-w-prose text-lg text-neutral-11">
                Já para os clientes PromoFinder é a solução idea os que desejam
                economizar tempo e dinheiro. Com nosso aplicativo, eles podem
                encontrar facilmente ofertas próximas, eliminando a necessidade
                de múltiplos aplicativos e pesquisas em redes sociais. Além
                disso, oferecemos promoções exclusivas, proporcionando
                benefícios especiais aos nossos usuários. Com o PromoFinder, a
                economia e a comodidade se tornam simples e acessíveis.
              </p>
            </div>

            <Image
              className="relative -right-40 max-w-2xl rounded-lg border border-primary-6 shadow-2xl shadow-primary-6"
              alt="tela de criação de produtos do promofinder business"
              src="/business-preview.png"
              width={1440}
              height={1024}
            />
          </div>
        </MaxWidthWrapper>
      </section> */}

      <section id="cta">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center rounded-lg">
            <h2 className="mb-4 text-center text-5xl font-medium text-primary-12">
              Tem interesse?
            </h2>
            <p className="mb-4 max-w-prose text-center text-lg text-primary-11">
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
      <footer className="mt-40 flex items-center justify-center py-12">
        <span className="text-neutral-11">PromoFinder &copy; 2023</span>
      </footer>
    </div>
  );
}

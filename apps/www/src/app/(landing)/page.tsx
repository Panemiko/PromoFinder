import Image from "next/image";
import { ChevronsDownIcon } from "lucide-react";

import { BackgroundBlur } from "@/components/background-blur";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Header } from "@/components/ui/header";
import { EmailSubscriber } from "./email-subscriber";

export default function Page() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("./background.svg")' }}
    >
      <BackgroundBlur />
      <Header />

      <section id="hero" className="mb-36">
        <MaxWidthWrapper>
          <div>
            <span className="mb-3 block w-fit rounded-2xl border border-secondary-6 bg-secondary-3 px-2 py-1 text-sm font-medium text-secondary-11 shadow-2xl shadow-secondary-6">
              Em desenvolvimento 🛠
            </span>
            <h1 className="mb-14 max-w-4xl text-5xl font-bold text-neutral-12 drop-shadow-2xl md:text-7xl">
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

      <MaxWidthWrapper className="mb-32 flex flex-col items-center justify-center opacity-50 md:mb-40">
        <hr className="w-full border border-secondary-6" />
        <ChevronsDownIcon className="-m-5 h-10 w-10 border-2 border-secondary-6 bg-neutral-2 text-secondary-6" />
      </MaxWidthWrapper>

      <section id="solution" className="mb-60">
        <MaxWidthWrapper className="flex flex-col-reverse items-center justify-between gap-24 md:flex-row">
          <div className="w-full space-y-4 md:w-[550px]">
            <div className="flex w-full items-center justify-start rounded-lg bg-neutral-9/10">
              <div className="flex w-5/6 items-center gap-6 rounded-md border-2 border-primary-6 bg-primary-5/50 py-10 shadow-2xl shadow-primary-6/50 md:gap-6">
                <span className="ml-3 text-5xl font-black text-primary-11 md:text-6xl">
                  67%
                </span>
                <span className="text-3xl font-medium text-primary-11 md:text-3xl">
                  Procuram promoções
                </span>
              </div>
            </div>

            <div className="flex w-full items-center justify-between rounded-lg bg-neutral-9/10">
              <div className="flex items-center gap-4 rounded-md border-2 border-secondary-6 bg-secondary-5/50 py-4 shadow-2xl shadow-secondary-6 md:w-6/12">
                <span className="ml-3 text-2xl font-black text-secondary-11 md:text-3xl">
                  17%
                </span>
                <span className="text-xl font-medium text-secondary-11">
                  Têm uma ferramenta
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="flex max-w-prose flex-col text-3xl font-bold text-neutral-11 drop-shadow-2xl">
              O Dilema das
              <span className="text-6xl text-neutral-12">Promoções Locais</span>
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
          <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <div className="pt-28">
              <h2 className="mb-14 bg-gradient-to-r from-secondary-12 to-black-12 bg-clip-text text-6xl font-bold text-white-1 drop-shadow-2xl md:text-8xl">
                PromoFinder Business
              </h2>
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
              className="-right-40 rounded-lg border border-secondary-6 shadow-2xl shadow-secondary-6 md:relative md:max-w-2xl"
              alt="tela de criação de produtos do promofinder business"
              src="/business-preview.png"
              width={1440}
              height={1024}
            />
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="app" className="mb-48 overflow-hidden py-20">
        <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-32">
          <Image
            alt="protótipo do aplicativo"
            width={360}
            height={754}
            className="w-[calc(100vw-125px)] rotate-6 rounded-lg border-2 border-primary-6 shadow-2xl shadow-primary-6/50 md:max-h-[500px] md:w-fit"
            src="/app-preview.png"
          />
          <div className="mt-20 max-w-xl">
            <h2 className="mb-10 text-6xl font-bold text-primary-12 drop-shadow-2xl md:text-8xl">
              PromoFinder App
            </h2>
            <p className="mb-6 text-lg text-neutral-11">
              Já para os clientes PromoFinder é a solução ideal para os que
              desejam economizar tempo e dinheiro. Com nosso aplicativo, eles
              podem encontrar facilmente ofertas próximas, eliminando a
              necessidade de múltiplos aplicativos e pesquisas em redes sociais.
            </p>
            <p className="text-lg text-neutral-11">
              Além disso, oferecemos promoções exclusivas, proporcionando
              benefícios especiais aos nossos usuários. Com o PromoFinder, a
              economia e a comodidade se tornam simples e acessíveis.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="cta">
        <MaxWidthWrapper className="flex flex-col items-center justify-center">
          <div className="rounded-lg border border-primary-6 bg-primary-1 py-12 md:px-20">
            <h2 className="mb-4 text-center text-3xl font-medium text-primary-12">
              Interesse em saber mais?
            </h2>
            <p className="mb-4 max-w-prose text-center text-lg text-primary-11">
              Adicione seu e-mail para avisarmos quando tivermos alguma
              novidade!
            </p>
            <EmailSubscriber />
          </div>
        </MaxWidthWrapper>
      </section>

      <footer className="mt-40 flex items-center justify-center py-12">
        <span className="text-neutral-11">PromoFinder &copy; 2023</span>
      </footer>
    </div>
  );
}

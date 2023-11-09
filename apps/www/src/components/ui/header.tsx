"use client";

import { useState } from "react";
import NextLink from "next/link";
import { MailIcon, MenuIcon } from "lucide-react";

import {
  BrandIcon,
  BrandLogo,
  Button,
  ButtonLink,
  InstagramIcon,
  WhatsappIcon,
} from "@promofinder/ui";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "../max-width-wrapper";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleMenuToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <header className="mb-24">
      <MaxWidthWrapper className="flex flex-col justify-between py-6 md:flex-row md:gap-10">
        <div className="mb-6 flex items-center justify-between md:mb-0">
          <div className="flex items-center gap-2">
            <BrandIcon className="h-8 w-8" />
            <BrandLogo className="w-48" />
          </div>
          <div className="flex items-center md:hidden">
            <Button
              aria-label="expandir menu"
              onClick={handleMenuToggle}
              variant="outline"
              size="icon"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "bg-neutral-3 md:flex md:w-fit md:flex-row md:items-center md:gap-6 md:bg-white-1",
            mobileOpen ? "flex w-full flex-col" : "hidden",
          )}
        >
          <ul className="mb-3 md:mb-0 md:flex md:flex-row md:items-center md:gap-8">
            <li>
              <NextLink
                href="#hero"
                className="block bg-neutral-3 py-2 text-center text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 md:inline md:bg-white-1 md:py-0 md:text-left md:hover:bg-white-1"
              >
                Início
              </NextLink>
            </li>
            <li>
              <NextLink
                href="#solution"
                className="block bg-neutral-3 py-2 text-center text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 md:inline md:bg-white-1 md:py-0 md:text-left md:hover:bg-white-1"
              >
                Solução
              </NextLink>
            </li>
            <li>
              <NextLink
                href="#business"
                className="md:inlinet block bg-neutral-3 py-2 text-center text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 md:bg-white-1 md:py-0 md:text-left md:hover:bg-white-1"
              >
                Business
              </NextLink>
            </li>
            <li>
              <NextLink
                href="#app"
                className="md:inlinet block bg-neutral-3 py-2 text-center text-neutral-11 transition-colors hover:bg-neutral-4 hover:text-neutral-12 md:bg-white-1 md:py-0 md:text-left md:hover:bg-white-1"
              >
                Aplicativo
              </NextLink>
            </li>
          </ul>
          <div
            aria-hidden="true"
            className="my-0 mb-3 h-px w-full border-b-[1px] border-neutral-6 md:my-2 md:mb-0 md:block md:h-full md:w-px md:border-b-0 md:border-r-[1px]"
          ></div>
          <div className="flex items-center justify-center space-x-6 md:block md:bg-none">
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
  );
}

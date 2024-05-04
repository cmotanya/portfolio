import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React, { ReactNode } from "react";
import Link from "next/link";

export const runtime = "edge";

function FooterIcon({
  icon,
  tooltipText,
}: {
  icon: ReactNode;
  tooltipText: string;
}) {
  return (
    <Link
      href={"#"}
      target="_blank"
      className="group relative transform p-3 text-slate-400 before:absolute before:inset-0 before:left-1/2 before:top-1/2 before:-z-30 before:size-9 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-12 before:rounded-md  before:transition-all before:hover:rotate-0 before:hover:scale-105"
    >
      {icon}
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 transform overflow-hidden whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 group-hover:delay-200">
        {tooltipText}
      </span>
    </Link>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${montserrat.className} absolute bottom-0 flex w-full flex-col gap-1 bg-slate-800/30 py-1 md:flex-row`}
    >
      <div className="relative mx-auto flex flex-wrap gap-2 md:justify-normal">
        <FooterIcon
          icon={<IconBrandFacebook color="#1877F2" />}
          tooltipText="Facebook"
        />
        <FooterIcon
          icon={<IconBrandTwitter color="#1da1f2" />}
          tooltipText="Twitter"
        />
        <FooterIcon
          icon={<IconBrandWhatsapp color="#2fb344" />}
          tooltipText="Whatsapp"
        />
        <FooterIcon
          icon={<IconBrandGithub color="#000" />}
          tooltipText="Github"
        />
      </div>
      <div className="mx-auto flex flex-col justify-center text-balance text-center text-sm">
        <p className="font-semibold uppercase leading-normal text-slate-500">
          &copy; {currentYear} designed and developed with ❤️ by{" "}
          <Link
            href={"#about"}
            className="inline-block underline underline-offset-1 hover:cursor-pointer hover:text-slate-400 hover:no-underline"
          >
            Cornelius Motanya.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

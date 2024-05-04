"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "./utils/cn";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { nav_items } from "./lib/global_links";

export default function Navigation() {
  const [isActive, setIsActive] = useState(nav_items[0].name);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const prevScroll = useRef(0);

  /* Function that activates navigation link items. */
  const handleClick = (link: string) => {
    setIsActive(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked.
  };

  useEffect(() => {
    const currentHeader = headerRef.current as HTMLElement | null;

    const handleScroll = () => {
      if (currentHeader) {
        const currentScroll = window.scrollY;
        const isScrollingDown = currentScroll > prevScroll.current;

        if (isScrollingDown) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }

        prevScroll.current = currentScroll;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isMenuOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="relative top-0 z-30 w-full">
      <div
        className={cn(
          "absolute flex w-full items-center justify-between bg-gray-800 p-3 text-neutral-200 transition-transform duration-300 [animation-range-end:250vh] [animation-range-start:200vh] [animation-timeline:view()]",
          isNavVisible ? "fixed" : "",
        )}
      >
        {/*--- Website logo is inserted in here. --- */}
        <div>
          <span className="rounded-md border-2 border-gray-700/50 px-2 py-1 text-gray-400">
            Cornelius
          </span>
        </div>

        {/* Hamburger menu icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-md bg-gray-700/50 p-2 md:hidden"
        >
          {isMenuOpen ? <IconX size={30} /> : <IconMenu2 size={30} />}
        </button>

        {/* --- Mobile setup navigation. --- */}
        <nav
          className={cn(
            "absolute right-0 top-[4.2rem] z-40 h-[calc(100vh-4rem)] min-h-svh w-full overflow-hidden rounded-md bg-slate-900 transition-transform duration-300 md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <ul className="flex flex-col items-center gap-20 pt-20">
            {nav_items.map((item, index) => (
              <li
                key={item.name}
                className="relative flex h-[5.5ch] w-[20ch] justify-center overflow-hidden py-2"
              >
                <NavLink
                  href={item.link}
                  active={isActive === item.name}
                  onClink={() => handleClick(item.name)}
                >
                  <div
                    className={cn(
                      "transform-transition flex items-center gap-x-3 text-gray-400 duration-300 active:translate-x-2",
                      isMenuOpen && `delay-${index * 100}`,
                    )}
                  >
                    <span>{item.name}</span>
                    <span className="rounded-full bg-gray-700 p-2 text-gray-200">
                      <IconArrowRight />
                    </span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* --- Mobile button link for contact. --- */}
          <button className="absolute bottom-[5.5rem] left-1/2 right-0 w-max -translate-x-1/2 rounded-md bg-slate-800/50 px-4 py-3 text-3xl uppercase text-slate-400 hover:text-slate-400 md:hidden">
            <Link
              href="./assets/Resume.pdf"
              target="_blank"
              passHref={true}
              className=""
            >
              download resume
            </Link>
          </button>

          {/* Download resume for mobile devices. */}
          <button className="absolute bottom-[11rem] left-1/2 right-0 w-max -translate-x-1/2 rounded-md bg-slate-800/50 px-4 py-3 text-3xl uppercase text-slate-400 hover:text-slate-400 md:hidden">
            <Link
              href="./assets/Resume.pdf"
              target="_blank"
              passHref={true}
              className=""
            >
              contact me
            </Link>
          </button>
        </nav>

        {/* --- Desktop setup navigation. --- */}
        <nav className="relative py-1 md:py-0">
          <ul className="hidden gap-5 md:flex">
            {nav_items.map((item) => (
              <li
                key={item.name}
                className="relative flex h-[3.5ch] w-[9ch] justify-center overflow-hidden py-2"
              >
                <NavLink
                  href={item.link}
                  active={isActive === item.name}
                  onClink={() => handleClick(item.name)}
                >
                  {item.name}

                  <span
                    className={cn(
                      "absolute bottom-1 h-0.5 bg-slate-300 transition-all duration-300",
                      isActive === item.name ? "w-full" : "w-0",
                    )}
                  ></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Button link to download resume. --- */}
        <button className="rounded-m hidden items-center justify-center  rounded-sm px-4 py-2 text-slate-300 md:flex">
          <Link
            href="./assets/Resume.pdf"
            target="_blank"
            passHref={true}
            className="flex items-center gap-1 rounded-md bg-gray-700/50 px-4 py-2 text-slate-400 hover:text-slate-300"
          >
            contact me
          </Link>
        </button>
      </div>
    </header>
  );
}

/** Renders a navigation link with the provided properties. **/
function NavLink({
  href,
  active,
  onClink,
  children,
}: {
  href: string;
  active: boolean;
  onClink: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClink}
      className={cn(
        "group absolute top-1/2 flex h-full w-full -translate-y-1/2 items-center justify-center scroll-smooth rounded-md text-3xl uppercase hover:text-slate-300 md:text-lg",
        active
          ? "bg-slate-800 text-slate-300 md:bg-transparent"
          : "text-slate-400/50",
      )}
    >
      {children}
    </Link>
  );
}

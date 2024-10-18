import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sr"],
  defaultLocale: "sr",
  pathnames: {
    "/": "/",
    "/gallery": {
      en: "/gallery",
      sr: "/galerija",
    },
    "/artists": {
      en: "/artists",
      sr: "/umetnici",
    },
    "/about-us": {
      en: "/about-us",
      sr: "/o-nama",
    },
    "/contact": {
      en: "/contact",
      sr: "/kontakt",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);

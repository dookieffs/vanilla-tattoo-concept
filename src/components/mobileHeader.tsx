import { MenuProps, MenuItem } from "@/app/lib/types";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { useTranslations } from "next-intl";

const MobileNav: React.FC<MenuProps> = ({ items, lang }) => {
  const t = useTranslations("Navigation");

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="pt-10 pl-10">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-[#242424] max-w-[250px] text-center"
        >
          <SheetTitle></SheetTitle>
          <NavigationLink href="/">
            <Image
              src="/static/logo.svg"
              alt="Vanilla tattoo concept logo"
              width={96}
              height={91}
              className="flex-start"
            />
          </NavigationLink>
          {items.map((link: MenuItem, index: number) => {
            return (
              <div
                key={index}
                className="hover:text-[#C09B63] whitespace-nowrap uppercase"
              >
                <NavigationLink href={link.path}>
                  {t(`${link.alias}`)}
                </NavigationLink>
              </div>
            );
          })}
          <div className="hover:text-[#C09B63]">
            {lang === "sr" && <Link href="/en">EN</Link>}
            {lang === "en" && <Link href="/sr">SR</Link>}
          </div>
          <div className="pt-10 px-5 flex align-center justify-between">
            <Link
              href="https://www.instagram.com/vanilla.tattoo.concept/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/static/instagram.svg"
                alt="Vanilla tattoo instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@vanilla.tattoo.concept?lang=en"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/static/tiktok.svg"
                alt="Vanilla tattoo tiktok"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/static/youtube.svg"
                alt="Vanilla tattoo Youtube"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/static/facebook.svg"
                alt="Vanilla tattoo facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

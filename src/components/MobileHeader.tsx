import { MenuProps, MenuItem } from "@/app/lib/types";
import {
  Sheet,
  SheetClose,
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
  //@ts-ignore
  const t = useTranslations("Navigation");

  return (
    <div className="md:hidden pb-10">
      <Sheet>
        <SheetContent
          side="right"
          className="bg-[#242424] max-w-[250px] text-center border-transparent"
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
                <SheetClose asChild>
                  <NavigationLink href={link.path}>
                    {t(`${link.alias}`)}
                  </NavigationLink>
                </SheetClose>
              </div>
            );
          })}
          <div className="hover:text-[#C09B63] py-3 ">
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
        <div className="w-full inline-flex p-10">
          <NavigationLink href="/" className=" align-center m-auto pl-[24px]">
            <Image
              src="/static/logo.svg"
              alt="Vanilla tattoo concept logo"
              width={96}
              height={91}
            />
          </NavigationLink>
          <SheetTrigger>
            <AlignJustify className="ml-auto " />
          </SheetTrigger>
        </div>
      </Sheet>
    </div>
  );
};

export default MobileNav;

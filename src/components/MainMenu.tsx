import { MenuItem, MenuProps } from "@/app/lib/types";
import Link from "next/link";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
import { useTranslations } from "next-intl";

const MainMenu: React.FC<MenuProps> = ({ items, lang }) => {
  const t = useTranslations("Navigation");

  return (
    <ul className="flex items-center justify-between py-5 lg:space-x-8 xl:space-x-8">
      <li>
        <NavigationLink href="/">
          <Image
            src="/static/logo.svg"
            alt="Vanilla tattoo concept logo"
            width={96}
            height={91}
            className="flex-start"
          />
        </NavigationLink>
      </li>
      <div className="flex items-center justify-center lg:space-x-8 xl:space-x-8">
        {items.map((link: MenuItem, index: number) => {
          return (
            <li
              key={index}
              className="hover:text-[#C09B63] whitespace-nowrap uppercase"
            >
              <NavigationLink href={link.path}>
                {t(`${link.alias}`)}
              </NavigationLink>
            </li>
          );
        })}
        <li className="hover:text-[#C09B63]">
          {lang === "sr" && <Link href="/en">EN</Link>}
          {lang === "en" && <Link href="/sr">SR</Link>}
        </li>
      </div>
      <div className="flex-end lg:inline-flex md:space-x-8 pr-6 flex justify-center">
        <li className="hover:scale-110 transition-transform">
          <Link
            href="https://www.instagram.com/vanilla.tattoo.concept/"
            target="_blank"
          >
            <Image
              src="/static/instagram.svg"
              alt="Vanilla tattoo instagram"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li className="hover:scale-110 transition-transform">
          <Link
            href="https://www.tiktok.com/@vanilla.tattoo.concept?lang=en"
            target="_blank"
          >
            <Image
              src="/static/tiktok.svg"
              alt="Vanilla tattoo tiktok"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default MainMenu;

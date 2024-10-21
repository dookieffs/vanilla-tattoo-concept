import MainMenu from "./MainMenu";
import MobileNav from "./mobileHeader";
interface HeaderProps {
  lang: string;
}
export default function Header({ lang }: HeaderProps) {
  const menuRoutes = [
    {
      alias: "home",
      path: "/",
    },
    {
      alias: "gallery",
      path: "/gallery",
    },
    {
      alias: "artists",
      path: "/artists",
    },
    {
      alias: "about-us",
      path: "/about-us",
    },
    {
      alias: "contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <MobileNav lang={lang} items={menuRoutes} />
      <div className="hidden md:block header container max-w-[1528px] m-auto py-6 lg:pt-12 lg:px-[100px]">
        <MainMenu lang={lang} items={menuRoutes} />
      </div>
    </>
  );
}

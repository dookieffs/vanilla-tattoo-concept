import { menuRoutes } from "@/lib/constants";
import MainMenu from "./MainMenu";
import MobileNav from "./MobileHeader";
interface HeaderProps {
  lang: string;
}
export default function Header({ lang }: HeaderProps) {
  return (
    <>
      <MobileNav lang={lang} items={menuRoutes} />
      <div className="hidden md:block header container max-w-[1528px] m-auto py-6 lg:pt-12 lg:px-[100px]">
        <MainMenu lang={lang} items={menuRoutes} />
      </div>
    </>
  );
}

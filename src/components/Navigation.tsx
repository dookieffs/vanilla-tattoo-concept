import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/gallery">{t("pathnames")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}

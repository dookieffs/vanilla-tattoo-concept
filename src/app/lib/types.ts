import { Pathnames } from "@/i18n/routing";

export interface MenuItem {
  alias: string;
  path: Pathnames;
}

export interface MenuProps {
  items: MenuItem[];
  lang: string;
}

export interface InfoSectionProps {
  className?: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

export type Props = {
  children?: React.ReactNode;
  params: { locale: string };
};

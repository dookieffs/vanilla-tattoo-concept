export interface MenuItem {
  alias: string;
  path: string;
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
  params: { locale: string };
};

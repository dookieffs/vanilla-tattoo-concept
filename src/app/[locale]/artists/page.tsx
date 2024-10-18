import { unstable_setRequestLocale } from "next-intl/server";
import InfoSection from "@/components/InfoSection";
import { useTranslations } from "next-intl";
import { InfoSectionProps, Props } from "@/app/lib/types";

export default function ArtistsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className="container max-w-full lg:px-[100px] m-auto pb-24">
      {t.raw("ArtistsPage").map((artist: InfoSectionProps, index: number) => (
        <InfoSection
          key={index}
          imageSrc={artist.imageSrc}
          title={artist.title}
          subtitle={artist.subtitle}
          description={artist.description}
          buttonText={artist.buttonText}
          buttonUrl={artist.buttonUrl}
        />
      ))}
    </div>
  );
}

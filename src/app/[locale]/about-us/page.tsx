import { unstable_setRequestLocale } from "next-intl/server";
import InfoSection from "@/components/InfoSection";
import { useTranslations } from "next-intl";
import VanillaCarousel from "@/components/carousel";
import { Props } from "@/app/lib/types";

export default function AboutUsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const images = [
    {
      image: "/static/images/about-us/Studio_002.jpg",
      title: "Studio 002",
    },
    {
      image: "/static/images/about-us/Studio_003.jpg",
      title: "Studio 003",
    },
    {
      image: "/static/images/about-us/Studio_004.jpg",
      title: "Studio 004",
    },
    {
      image: "/static/images/about-us/Studio_005.jpg",
      title: "Studio 005",
    },
    {
      image: "/static/images/about-us/Studio_006.jpg",
      title: "Studio 006",
    },
    {
      image: "/static/images/about-us/Studio_007.jpg",
      title: "Studio 007",
    },
    {
      image: "/static/images/about-us/Studio_008.jpg",
      title: "Studio 008",
    },
  ];
  const aboutUsData = t.raw("AboutUsPage");

  return (
    <div className="container max-w-[1528px] lg:px-[100px] m-auto pb-24">
      <InfoSection
        imageSrc={aboutUsData.imageSrc}
        title={aboutUsData.title}
        description={aboutUsData.description}
        buttonText={aboutUsData.buttonText}
        buttonUrl={aboutUsData.buttonUrl}
      />
      <div className="lg:max-w-7xl m-auto">
        <VanillaCarousel
          title={"STUDIO"}
          items={images}
          width={610}
          height={346}
          className="lg:basis-1/2"
        />
      </div>
    </div>
  );
}

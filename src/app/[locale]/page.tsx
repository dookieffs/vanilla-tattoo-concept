import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import InteractiveSculpture from "@/components/InteractiveSculpture";
import Button from "@/components/button";
import InfoSection from "@/components/InfoSection";
import VanillaCarousel from "@/components/carousel";
import { GalleryPreview } from "@/components/imagePreview";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const images = [
    {
      image: "/static/images/discount/Dizajn_001.jpg",
      title: "Dizajn 001",
    },
    {
      image: "/static/images/discount/Dizajn_002.jpg",
      title: "Dizajn 002",
    },
    {
      image: "/static/images/discount/Dizajn_003.jpg",
      title: "Dizajn 003",
    },
    {
      image: "/static/images/discount/Dizajn_004.jpg",
      title: "Dizajn 004",
    },
    {
      image: "/static/images/discount/Dizajn_005.jpg",
      title: "Dizajn 005",
    },
    {
      image: "/static/images/discount/Dizajn_006.jpg",
      title: "Dizajn 006",
    },
    {
      image: "/static/images/discount/Dizajn_007.jpg",
      title: "Dizajn 007",
    },
    {
      image: "/static/images/discount/Dizajn_008.jpg",
      title: "Dizajn 008",
    },
  ];

  const t = useTranslations();
  const homePage = t.raw("HomePage");

  return (
    <div className="max-w-full lg:px-[100px] m-auto">
      <div className="h-[90vh] relative">
        <InteractiveSculpture />

        <div className="flex flex-col justify-center space-y-4 max-w-[860px] absolute top-0 p-10 lg:p-0 lg:top-56">
          <div className="text-4xl lg:text-6xl">{homePage.Heading.title}</div>
          <p className="flex-grow text-xl pt-4">
            {homePage.Heading.description}
          </p>
          <div className="lg:inline-flex pt-16">
            <Button label={homePage.Heading.buttonLabel1} variant="primary" />
            <Button
              label={homePage.Heading.buttonLabel2}
              variant="secondary"
              className="ml-2"
              buttonUrl={homePage.Heading.buttonUrl2}
            />
          </div>
        </div>
      </div>
      <div className="max-w-full m-auto pt-12">
        <InfoSection
          className="pt-16"
          imageSrc="/static/images/creditPhoto.jpg"
          title={homePage.Credit.title}
          description={homePage.Credit.description}
          buttonText={homePage.Credit.buttonLabel}
          buttonUrl={homePage.Credit.buttonUrl}
        />

        <VanillaCarousel
          title={homePage.Discount.title}
          subtitle={homePage.Discount.subtitle}
          items={images}
          width={295}
          height={346}
          className="basis-1/2 lg:basis-1/4"
          imageSelector="sl-discount-carousel-image cursor-pointer"
        />
        <GalleryPreview selector=".sl-discount-carousel-image" />
      </div>
    </div>
  );
}

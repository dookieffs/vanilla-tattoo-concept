import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { GalleryPreview } from "@/components/ImagePreview";
type Props = {
  params: { locale: string };
};

export default function GalleryPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const galleryImages = [
    {
      image: "/static/images/gallery/Galerija_001.jpg",
      title: "Galerija 001",
    },
    {
      image: "/static/images/gallery/Galerija_002.jpg",
      title: "Galerija 002",
    },
    {
      image: "/static/images/gallery/Galerija_003.jpg",
      title: "Galerija 003",
    },
    {
      image: "/static/images/gallery/Galerija_004.jpg",
      title: "Galerija 004",
    },
    {
      image: "/static/images/gallery/Galerija_005.jpg",
      title: "Galerija 005",
    },
    {
      image: "/static/images/gallery/Galerija_006.jpg",
      title: "Galerija 006",
    },
    {
      image: "/static/images/gallery/Galerija_007.jpg",
      title: "Galerija 007",
    },
    {
      image: "/static/images/gallery/Galerija_008.jpg",
      title: "Galerija 008",
    },
    {
      image: "/static/images/gallery/Galerija_009.jpg",
      title: "Galerija 009",
    },
    {
      image: "/static/images/gallery/Galerija_010.jpg",
      title: "Galerija 010",
    },
    {
      image: "/static/images/gallery/Galerija_011.jpg",
      title: "Galerija 011",
    },
    {
      image: "/static/images/gallery/Galerija_012.jpg",
      title: "Galerija 012",
    },
    {
      image: "/static/images/gallery/Galerija_013.jpg",
      title: "Galerija 013",
    },
    {
      image: "/static/images/gallery/Galerija_014.jpg",
      title: "Galerija 014",
    },
    {
      image: "/static/images/gallery/Galerija_015.jpg",
      title: "Galerija 015",
    },
    {
      image: "/static/images/gallery/Galerija_016.jpg",
      title: "Galerija 016",
    },
    {
      image: "/static/images/gallery/Galerija_017.jpg",
      title: "Galerija 017",
    },
    {
      image: "/static/images/gallery/Galerija_018.jpg",
      title: "Galerija 018",
    },
    {
      image: "/static/images/gallery/Galerija_019.jpg",
      title: "Galerija 019",
    },
    {
      image: "/static/images/gallery/Galerija_020.jpg",
      title: "Galerija 020",
    },
  ];

  return (
    <div className="lg:max-w-[1528px] lg:px-[100px] m-auto grid grid-cols-2 lg:grid-cols-4 gap-3 pb-24">
      {galleryImages.map((item, index) => (
        <div key={index} className="overflow-hidden cursor-pointer m-auto">
          <Image
            src={item.image}
            alt={item.title}
            title={item.title}
            width={295}
            height={346}
            loading="lazy"
            className="object-contain hover:scale-110 transition-transform sl-gallery-preview"
          />
        </div>
      ))}
      <GalleryPreview selector=".sl-gallery-preview" />
    </div>
  );
}

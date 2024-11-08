import { Props } from "@/app/lib/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import Button from "@/components/Button";

export default function ContactPage({ params: { locale } }: Props) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => (
          <div className="flex flex-col justify-center space-y-4 min-w-[700] text-center">
            <div className="loader flex m-auto"></div>
          </div>
        ),
        ssr: false,
      }),
    []
  );
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const aboutUsData = t.raw("ContactPage");

  return (
    <div className="lg:flex lg:flex-row lg:px-[100px] pb-12 space-y-6 lg:space-y-0 lg:space-x-6 justify-center">
      <div className="bg-[#242424] p-5 pt-10 text-lg max-w-[500px]">
        <div>{aboutUsData.title}</div>
        <div className="pt-5">{aboutUsData.address}</div>
        <div className="pt-5">{aboutUsData.email}</div>
        <div className="pt-5">{aboutUsData.phone}</div>
        <div className="pt-5">{aboutUsData.social}</div>
        <div className="inline-flex pt-4 gap-2">
          <Link
            href="https://www.instagram.com/vanilla.tattoo.concept/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/static/instagram.svg"
              alt="Vanilla Tattoo instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@vanilla.tattoo.concept?lang=en"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/static/tiktok.svg"
              alt="Vanilla Tattoo tiktok"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" className="hover:scale-110 transition-transform">
            <Image
              src="/static/youtube.svg"
              alt="Vanilla Tattoo Youtube"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" className="hover:scale-110 transition-transform">
            <Image
              src="/static/facebook.svg"
              alt="Vanilla Tattoo facebook"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <Button
          variant="primary"
          label={aboutUsData.buttonText}
          className="whitespace-nowrap mt-20 block"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center">
        <Map posix={[44.013414244314966, 20.91018083074295]} />
      </div>
    </div>
  );
}

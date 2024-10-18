import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import NewsLetterSignUpForm from "./Newsletter";

export default function Footer() {
  const date = new Date();
  const t = useTranslations();

  const footerLabels = t.raw("General");

  return (
    <div className="footer bg-[#242424] w-full text-lg">
      <div className="container max-w-full lg:px-[100px] grid grid-cols-1 lg:grid-cols-3 p-6 py-8 m-auto">
        <div>
          <span className="uppercase">{footerLabels.contact}</span>
          <div className="pt-4">
            <div>Kralja Aleksandra I Karađorđevića 66 Kragujevac</div>
            <div>vanilla.tattoo.concept@gmail.com</div>
            <div>+381692472477 (WhatsApp)</div>
            <Image
              src="/static/logo.svg"
              alt="Vanilla tattoo concept logo"
              width={64}
              height={60}
              className="py-10 m-auto lg:ml-0"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="uppercase">{footerLabels.followUs}</div>
          <div className="inline-flex pt-4 gap-2">
            <Link
              href="https://www.instagram.com/vanilla.tattoo.concept/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/static/instagram.svg"
                alt="Vanilla tattoo instagram"
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
                alt="Vanilla tattoo tiktok"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/static/youtube.svg"
                alt="Vanilla tattoo Youtube"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/static/facebook.svg"
                alt="Vanilla tattoo facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="pt-10 lg:pt-0">
          <div className="uppercase text-center lg:text-left">
            {footerLabels.newsletter}
          </div>
          <NewsLetterSignUpForm />
        </div>
        <div className="text-sm pt-3.5 text-center lg:text-left">
          ©{date.getFullYear()} Vanilla Tattoo Concept.
          {footerLabels.allRightsReserved}
        </div>
      </div>
    </div>
  );
}

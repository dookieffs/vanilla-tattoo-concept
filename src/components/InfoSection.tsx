import Image from "next/image";
import Button from "./button";
import { InfoSectionProps } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";

const InfoSection: React.FC<InfoSectionProps> = ({
  className,
  imageSrc,
  title,
  subtitle,
  description,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div
      className={`${cn("lg:flex items-stretch gap-x-5 py-3.5 w-full", className)}`}
    >
      <div className="min-w-[329px] max-w-[425px] h-full m-auto lg:m-initial mb-5">
        <Image src={imageSrc} alt={title} width={425} height={100} />
      </div>
      <div className="flex flex-col justify-start space-y-2 pt-5 lg:pt-14 bg-[#242424] max-w-full min-h-full">
        <div className="text-3xl lg:text-5xl px-5 lg:px-10">{title}</div>
        {subtitle && <div className="text-xl px-5 lg:px-10">{subtitle}</div>}
        <p className="flex-grow text-lg pt-8 px-5 lg:p-10">{description}</p>
        {buttonText && buttonUrl && (
          <Button
            label={buttonText}
            variant="primary"
            className="m-5 lg:m-10"
          />
        )}
      </div>
    </div>
  );
};

export default InfoSection;

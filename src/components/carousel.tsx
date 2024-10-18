import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselProps {
  items: any[];
  width: number;
  height: number;
  className?: string;
  title?: string;
  subtitle?: string;
  imageSelector?: string;
}

const VanillaCarousel: React.FC<CarouselProps> = ({
  items,
  width,
  height,
  className,
  title,
  subtitle,
  imageSelector = "",
}) => {
  return (
    <div className="py-6 lg:py-24">
      <div className="text-center text-5xl">{title}</div>
      <div className="text-center text-xl min-h-[40px] pb-3.5">{subtitle}</div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className={`${cn("", className)} `}>
              <div className="p-1 m-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  width={width}
                  height={height}
                  className={`object-cover m-auto ${imageSelector}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default VanillaCarousel;

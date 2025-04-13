
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LogoItem from "./LogoItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PartnerLogoCarouselProps {
  logos: string[];
  size?: "small" | "medium" | "large";
  hoverEffect?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  showControls?: boolean;
}

const PartnerLogoCarousel = ({
  logos,
  size = "medium",
  hoverEffect = true,
  autoplay = true,
  autoplayInterval = 3000,
  showControls = false
}: PartnerLogoCarouselProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Create a duplicate set of logos for infinite-like scrolling effect
  const displayLogos = [...logos, ...logos].slice(0, Math.min(logos.length * 2, 20));

  return (
    <div ref={ref} className="w-full py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayLogos.map((logo, index) => (
            <CarouselItem 
              key={`logo-${index}`} 
              className={
                size === "small" 
                  ? "pl-2 md:pl-4 basis-1/4 md:basis-1/5 lg:basis-1/6" 
                  : size === "medium"
                    ? "pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5" 
                    : "pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              }
            >
              <LogoItem
                logo={logo}
                index={index}
                totalLogos={logos.length}
                size={size}
                hoverEffect={hoverEffect}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showControls && (
          <>
            <CarouselPrevious className="hidden md:flex -left-4 border-[#e32530]/20 bg-white" />
            <CarouselNext className="hidden md:flex -right-4 border-[#e32530]/20 bg-white" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default PartnerLogoCarousel;

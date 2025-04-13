
import React, { useEffect, useRef, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import LogoItem from "./LogoItem";

export interface PartnerLogoCarouselProps {
  logos: string[];
  size?: "small" | "medium" | "large";
  hoverEffect?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
}

const PartnerLogoCarousel: React.FC<PartnerLogoCarouselProps> = ({
  logos,
  size = "medium",
  hoverEffect = true,
  autoplay = false,
  autoplayInterval = 3000
}) => {
  const [api, setApi] = useState<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Setup autoplay
  useEffect(() => {
    if (!autoplay || !api) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up new interval for autoplay
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);
    
    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, autoplay, autoplayInterval]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {logos.map((logo, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
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
      <div className="hidden md:flex justify-end mt-4 gap-2">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
};

export default PartnerLogoCarousel;

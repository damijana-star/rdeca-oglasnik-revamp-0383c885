
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";

interface PartnerLogoCarouselProps {
  logos: string[];
  autoplayInterval?: number;
}

const PartnerLogoCarousel = ({ 
  logos, 
  autoplayInterval = 3000 
}: PartnerLogoCarouselProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const timeoutRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const startAutoplay = () => {
      if (carouselRef.current && inView) {
        const scrollAmount = 1; // pixels to scroll per interval - slower for smoother animation
        
        const scroll = () => {
          if (carouselRef.current) {
            const container = carouselRef.current.querySelector('.embla__container');
            if (container) {
              container.scrollLeft += scrollAmount;
              
              // If we've scrolled to the end, reset to the beginning
              const scrollWidth = container.scrollWidth;
              const clientWidth = container.clientWidth;
              if (container.scrollLeft + clientWidth >= scrollWidth) {
                container.scrollLeft = 0;
              }
            }
          }
          
          // Continue autoplay
          if (inView) {
            timeoutRef.current = window.setTimeout(scroll, 30); // faster interval for smoother motion
          }
        };
        
        scroll();
      }
    };
    
    startAutoplay();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView]);
  
  return (
    <div ref={ref} className="overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
        ref={carouselRef}
      >
        <CarouselContent className="py-1">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="basis-1/4 md:basis-1/6 lg:basis-1/8 pl-2">
              <div 
                className="flex items-center justify-center h-10 transition-all duration-300"
              >
                <img 
                  src={logo} 
                  alt={`Partner logo ${index + 1}`} 
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnerLogoCarousel;

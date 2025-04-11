
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

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
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Make infinite loop by duplicating the logos
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !inView) return;
    
    const scrollContainer = carousel.querySelector('.embla__container') as HTMLElement;
    if (!scrollContainer) return;
    
    let position = 0;
    const speed = 0.5; // pixels per frame - adjust for speed
    
    const animate = () => {
      position += speed;
      
      // When we've scrolled the width of one set of logos, reset to beginning
      if (position >= scrollContainer.scrollWidth / 2) {
        position = 0;
      }
      
      scrollContainer.scrollLeft = position;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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
          {duplicatedLogos.map((logo, index) => (
            <CarouselItem key={index} className="basis-1/5 md:basis-1/7 lg:basis-1/10 pl-2">
              <div 
                className={cn(
                  "flex items-center justify-center h-10 transition-all duration-300"
                )}
              >
                <img 
                  src={logo} 
                  alt={`Partner logo ${index % logos.length + 1}`} 
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
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

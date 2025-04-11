
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
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Make infinite loop by duplicating the logos
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    if (!inView) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const scrollSpeed = 1; // pixels per frame - adjust for speed
    
    const animate = () => {
      // Get the scroll content
      const scrollContent = container.querySelector('.scroll-content') as HTMLElement;
      if (!scrollContent) return;
      
      // Move the element
      scrollContent.style.transform = `translateX(-${scrollContent.dataset.position || 0}px)`;
      const currentPosition = Number(scrollContent.dataset.position || 0);
      const newPosition = currentPosition + scrollSpeed;
      
      // Reset when we've scrolled through the first set of logos
      const firstSetWidth = scrollContent.scrollWidth / 2;
      if (newPosition >= firstSetWidth) {
        scrollContent.dataset.position = '0';
      } else {
        scrollContent.dataset.position = newPosition.toString();
      }
      
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
    <div ref={ref} className="overflow-hidden w-full">
      <div ref={containerRef} className="w-full">
        <div className="scroll-content flex" data-position="0">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-4 md:px-6 lg:px-8 w-[20%] md:w-[14.28%] lg:w-[10%]"
            >
              <div className="flex items-center justify-center h-10 transition-all duration-300">
                <img 
                  src={logo} 
                  alt={`Partner logo ${index % logos.length + 1}`} 
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel;

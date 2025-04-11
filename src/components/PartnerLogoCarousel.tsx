
import { useEffect, useRef } from "react";
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
      
      // Move the element (positive value for left to right movement)
      const currentPosition = Number(scrollContent.dataset.position || 0);
      const newPosition = currentPosition + scrollSpeed;
      scrollContent.style.transform = `translateX(${newPosition}px)`;
      scrollContent.dataset.position = newPosition.toString();
      
      // Reset when we've scrolled through the first set of logos
      const firstSetWidth = scrollContent.scrollWidth / 2;
      if (newPosition >= firstSetWidth) {
        scrollContent.dataset.position = '0';
        scrollContent.style.transform = `translateX(0px)`;
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
              className="flex-shrink-0 px-4 md:px-6 lg:px-8 w-[25%] md:w-[20%] lg:w-[15%]"
            >
              <div className="flex items-center justify-center h-16 transition-all duration-300">
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

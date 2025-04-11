
import { useEffect, useRef, useState } from "react";
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
  const [position, setPosition] = useState(0);
  
  // Make infinite loop by duplicating the logos
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    if (!inView || !containerRef.current) return;
    
    const scrollContent = containerRef.current.querySelector('.scroll-content') as HTMLElement;
    if (!scrollContent) return;
    
    // Get the width of the first set of logos
    const logoSetWidth = scrollContent.scrollWidth / 2;
    const scrollSpeed = 0.5; // pixels per frame - adjust for speed
    
    const animate = () => {
      setPosition(prevPosition => {
        let newPosition = prevPosition + scrollSpeed;
        
        // Reset position when we've scrolled through the first set of logos
        if (newPosition >= logoSetWidth) {
          newPosition = 0;
        }
        
        return newPosition;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup animation on unmount or when not in view
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView]);
  
  return (
    <div ref={ref} className="overflow-hidden w-full">
      <div ref={containerRef} className="w-full">
        <div 
          className="scroll-content flex" 
          style={{ transform: `translateX(-${position}px)` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-4 md:px-6 lg:px-8 w-[20%] md:w-[16.66%] lg:w-[12.5%]"
            >
              <div className="flex items-center justify-center h-12 transition-all duration-300">
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

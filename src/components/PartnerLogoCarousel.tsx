
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import LogoItem from "./LogoItem";

interface PartnerLogoCarouselProps {
  logos: string[];
  speed?: number;
  size?: "small" | "medium" | "large";
  hoverEffect?: boolean;
  pauseOnHover?: boolean;
  autoplayInterval?: number;
}

const PartnerLogoCarousel = ({ 
  logos,
  speed = 0.5,
  size = "medium",
  hoverEffect = true,
  pauseOnHover = true,
  autoplayInterval = 3000 
}: PartnerLogoCarouselProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Make infinite loop by duplicating the logos
  const duplicatedLogos = [...logos, ...logos];
  
  useEffect(() => {
    if (!inView || !containerRef.current) return;
    
    const scrollContent = containerRef.current.querySelector('.scroll-content') as HTMLElement;
    if (!scrollContent) return;
    
    // Get the width of the first set of logos
    const logoSetWidth = scrollContent.scrollWidth / 2;
    const scrollSpeed = speed; // pixels per frame - adjust for speed
    
    const animate = () => {
      if (!isPaused) {
        setPosition(prevPosition => {
          let newPosition = prevPosition + scrollSpeed;
          
          // Reset position when we've scrolled through the first set of logos
          if (newPosition >= logoSetWidth) {
            newPosition = 0;
          }
          
          return newPosition;
        });
      }
      
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
  }, [inView, isPaused, speed]);
  
  return (
    <div 
      ref={ref} 
      className="overflow-hidden w-full"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={containerRef} className="w-full">
        <div 
          className="scroll-content flex" 
          style={{ transform: `translateX(-${position}px)` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoItem 
              key={index}
              logo={logo}
              index={index}
              totalLogos={logos.length}
              size={size}
              hoverEffect={hoverEffect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel;

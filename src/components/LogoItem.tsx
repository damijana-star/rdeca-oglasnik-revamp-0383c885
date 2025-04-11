
import { cn } from "@/lib/utils";

interface LogoItemProps {
  logo: string;
  index: number;
  totalLogos: number;
  size?: "small" | "medium" | "large";
  hoverEffect?: boolean;
}

const LogoItem = ({
  logo,
  index,
  totalLogos,
  size = "medium",
  hoverEffect = true
}: LogoItemProps) => {
  // Size mapping for responsive dimensions
  const sizeClasses = {
    small: {
      container: "px-4 md:px-6 lg:px-8 w-[22%] md:w-[18%] lg:w-[14%]",
      height: "h-12 md:h-14"
    },
    medium: {
      container: "px-6 md:px-8 lg:px-12 w-[25%] md:w-[20%] lg:w-[16.66%]",
      height: "h-16 md:h-20"
    },
    large: {
      container: "px-6 md:px-10 lg:px-14 w-[33%] md:w-[25%] lg:w-[20%]",
      height: "h-20 md:h-24"
    }
  };

  return (
    <div className={cn("flex-shrink-0", sizeClasses[size].container)}>
      <div className={cn(
        "flex items-center justify-center transition-all duration-300", 
        sizeClasses[size].height,
        hoverEffect && "hover:scale-110"
      )}>
        <img 
          src={logo} 
          alt={`Partner logo ${index % totalLogos + 1}`} 
          className={cn(
            "max-h-full max-w-full object-contain",
            "invert opacity-80",
            hoverEffect && "hover:opacity-100 transition-all duration-300"
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LogoItem;

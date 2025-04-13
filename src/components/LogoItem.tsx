
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
      height: "h-10 md:h-12"
    },
    medium: {
      height: "h-14 md:h-16"
    },
    large: {
      height: "h-16 md:h-20"
    }
  };

  return (
    <div className="w-full aspect-[3/2] flex items-center justify-center p-2">
      <div 
        className={cn(
          "flex items-center justify-center w-full h-full transition-all duration-300", 
          sizeClasses[size].height,
          hoverEffect && "hover:scale-110"
        )}
      >
        <img 
          src={logo} 
          alt={`Partner logo ${index % totalLogos + 1}`} 
          className={cn(
            "max-h-full max-w-full object-contain",
            "filter grayscale opacity-80", 
            hoverEffect && "hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LogoItem;

import { Badge } from "@/components/ui/badge";

export interface ListingCardProps {
  title: string;
  price: string;
  image: string;
  location: string;
  isNew?: boolean;
  category: string;
}

export const ListingCard = ({ title, price, image, location, isNew, category }: ListingCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Badges removed as requested */}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{title}</h3>
        {/* Removed price and location as requested */}
      </div>
    </div>
  );
};

export default ListingCard;

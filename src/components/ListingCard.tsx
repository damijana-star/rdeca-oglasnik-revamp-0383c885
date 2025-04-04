
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
        <p className="text-dark-red font-bold text-xl mb-2">{price} €</p>
        <div className="flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

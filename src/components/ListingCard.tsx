
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isNew && (
          <div className="absolute top-2 right-2 z-10 transition-transform duration-300 group-hover:scale-110">
            <Badge className="bg-dark-red text-white">Novo</Badge>
          </div>
        )}
        <div className="absolute top-2 left-2 z-10 transition-transform duration-300 group-hover:scale-110">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-dark-red">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="font-bold">{price} €</div>
          <div className="text-sm opacity-90">{location}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{title}</h3>
      </div>
    </div>
  );
};

export default ListingCard;


import { ListingCard } from "./ListingCard";

export const FeaturedListings = () => {
  // Example listings data
  const listings = [
    {
      id: 1,
      title: "Smuči Atomic Backland 78",
      price: "320",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3",
      location: "Ljubljana",
      category: "Smuči",
      isNew: true
    },
    {
      id: 2,
      title: "Snowboard Burton Custom X",
      price: "289",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3",
      location: "Maribor",
      category: "Snowboardi"
    },
    {
      id: 3,
      title: "Smučarski čevlji Salomon X Pro 100",
      price: "160",
      image: "https://images.unsplash.com/photo-1617154079621-3d56042a9ece?ixlib=rb-4.0.3",
      location: "Kranj",
      category: "Čevlji",
      isNew: true
    },
    {
      id: 4,
      title: "Smučarska jakna Spyder",
      price: "115",
      image: "https://images.unsplash.com/photo-1474415022684-e22e93dbce43?ixlib=rb-4.0.3",
      location: "Celje",
      category: "Oblačila"
    },
    {
      id: 5,
      title: "Smučarska čelada Giro",
      price: "75",
      image: "https://images.unsplash.com/photo-1620821928181-feebda4777b9?ixlib=rb-4.0.3",
      location: "Koper",
      category: "Čelade"
    },
    {
      id: 6,
      title: "Smučarska očala Smith I/O",
      price: "95",
      image: "https://images.unsplash.com/photo-1610495527341-4207c717d64f?ixlib=rb-4.0.3",
      location: "Novo mesto",
      category: "Očala"
    },
    {
      id: 7,
      title: "Smučarske rokavice Hestra",
      price: "55",
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3",
      location: "Velenje",
      category: "Dodatki"
    },
    {
      id: 8,
      title: "Smuči Volkl Deacon 74",
      price: "245",
      image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3",
      location: "Ljubljana",
      category: "Smuči"
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Izpostavljeni oglasi</h2>
        <p className="text-gray-600 mb-8">Najnovejši in najbolj priljubljeni oglasi</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard 
              key={listing.id}
              title={listing.title}
              price={listing.price}
              image={listing.image}
              location={listing.location}
              category={listing.category}
              isNew={listing.isNew}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="text-primary hover:underline font-medium inline-flex items-center">
            <span>Prikaži vse oglase</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;

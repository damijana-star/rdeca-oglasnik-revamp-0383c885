
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Kako izbrati pravo smučarsko opremo za začetnike",
    excerpt: "Pred nakupom smučarske opreme je pomembno upoštevati nekaj ključnih dejavnikov, ki vam bodo pomagali pri izbiri prave opreme za vaše potrebe in raven znanja.",
    date: "15. 10. 2024",
    author: "Janez Novak",
    image: "https://images.unsplash.com/photo-1622484212776-62edf9a686e8?ixlib=rb-4.0.3",
    category: "Nasveti"
  },
  {
    id: 2,
    title: "5 top smučarskih destinacij v Sloveniji",
    excerpt: "Slovenija kljub majhnosti ponuja odlična smučišča za vse ravni smučarjev. Preverite naš izbor petih najboljših destinacij za zimsko smuko v naši državi.",
    date: "28. 09. 2024",
    author: "Maja Kovač",
    image: "https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3",
    category: "Destinacije"
  },
  {
    id: 3,
    title: "Kako pravilno vzdrževati smuči med sezono",
    excerpt: "Pravilno vzdrževanje smuči je ključno za optimalno izkušnjo smučanja. Naučite se, kako poskrbeti za svojo opremo, da bo trajala dlje in bolje delovala.",
    date: "05. 09. 2024",
    author: "Matej Horvat",
    image: "https://images.unsplash.com/photo-1520715874916-4ad5dd38bef2?ixlib=rb-4.0.3", 
    category: "Vzdrževanje"
  }
];

export const Blog = () => {
  return (
    <div id="blog" className="section bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Blog & Nasveti</h2>
        <p className="text-gray-600 mb-8">Najnovejši članki, nasveti in novice iz sveta zimskih športov</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-dark-red font-medium hover:underline">
                  Preberi več <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-dark-red hover:bg-dark-red/90">
            Vsi članki
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ChevronRight, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const allBlogPosts = [
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
  },
  {
    id: 4,
    title: "Najboljše destinacije za smučanje v Avstriji",
    excerpt: "Avstrija je znana po svojih legendarnih smučiščih. V tem članku razkrivamo nekaj najboljših destinacij za nepozaben smučarski oddih čez mejo.",
    date: "01. 09. 2024",
    author: "Ana Kovač",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3",
    category: "Destinacije"
  },
  {
    id: 5,
    title: "Kako izboljšati svojo smučarsko tehniko",
    excerpt: "Želite postati boljši smučar? Z nekaj ključnimi nasveti in rednim treningom lahko hitro izboljšate svojo tehniko in samozavest na smučeh.",
    date: "25. 08. 2024",
    author: "Peter Novak",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3",
    category: "Nasveti"
  },
  {
    id: 6,
    title: "Smučanje in varnost: kaj morate vedeti",
    excerpt: "Varnost na smučišču je ključnega pomena. Spoznajte osnovna pravila smučanja, opremo za zaščito in kako se izogniti najpogostejšim poškodbam.",
    date: "18. 08. 2024",
    author: "Tina Kos",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3",
    category: "Varnost"
  }
];

const categories = [
  "Vse",
  "Nasveti",
  "Destinacije",
  "Vzdrževanje",
  "Varnost"
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Vse");

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Vse" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative text-white py-12">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png"
              alt="Blog" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#e32530]/70"></div>
          </div>
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Nasveti</h1>
              <p className="text-lg opacity-90">
                Najnovejši članki, nasveti in novice iz sveta zimskih športov
              </p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container py-16">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Išči članek..." 
                  className="pl-10" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-[#e32530] hover:bg-[#e32530]/90" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[#e32530] text-white text-xs font-semibold px-2 py-1 rounded">
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
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-[#e32530] font-medium hover:underline">
                      Preberi več <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Ni najdenih člankov za vaše iskanje.</p>
              <Button 
                className="mt-4 bg-[#e32530] hover:bg-[#e32530]/90"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Vse");
                }}
              >
                Ponastavi iskanje
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

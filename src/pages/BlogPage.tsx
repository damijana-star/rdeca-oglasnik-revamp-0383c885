
import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ChevronRight, User, Search, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allBlogPosts = [
  {
    id: 6,
    title: "5 najpogostejših napak pri oglaševanju malih podjetij – in kako se jim izogniti",
    excerpt: "Oglaševanje je lahko eno najboljših orodij za rast podjetja – če se ga lotimo premišljeno. Prevečkrat pa se mala podjetja znajdejo v situaciji, ko vlagajo v oglase, a učinka ni.",
    date: "12. 04. 2025",
    author: "Ana Kovač",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3", // Updated to printed newspaper/ad
    category: "Marketing"
  },
  {
    id: 4,
    title: "📰 Oglaševanje s tiskanimi oglasi: Zakaj jih podjetja še vedno uporabljajo",
    excerpt: "V dobi digitalnega sveta, kjer nas vsak dan preplavljajo spletni oglasi, tiskani oglasi še vedno ohranjajo svojo moč – še posebej v lokalnem okolju.",
    date: "09. 04. 2025",
    author: "Ana Kovač",
    image: "https://images.unsplash.com/photo-1584446922564-7a4e6b13ec79?ixlib=rb-4.0.3", // Updated to printed magazines/catalogs
    category: "Marketing"
  },
  {
    id: 5,
    title: "Kako pripraviti učinkovit oglas, ki pritegne pozornost (in prodaja)",
    excerpt: "Ali se tudi ti sprašuješ, zakaj nekateri oglasi pritegnejo takojšnjo pozornost, drugi pa ostanejo spregledani? Učinkovit oglas ima jasno strukturo, močno sporočilo in poziv k dejanju.",
    date: "10. 04. 2025",
    author: "Ana Kovač",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3", // Updated to printed flyers/brochures
    category: "Marketing"
  }
];

const categories = [
  "Vse",
  "Marketing"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Nasveti</h1>
              <p className="text-lg opacity-90">
                Najnovejši članki, nasveti in novice iz sveta oglasov in marketinga
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

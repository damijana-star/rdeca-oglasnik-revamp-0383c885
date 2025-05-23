import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/utils";

const blogPosts = [{
  id: 7,
  title: "Zakaj je sponzoriran članek učinkovit?",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  excerpt: "Dobro napisan sponzoriran članek gradi zaupanje, povečuje angažiranost in omogoča večjo vsebinsko svobodo pri predstavitvi vaše blagovne znamke ali storitve.",
  category: "Marketing"
}, {
  id: 4,
  title: "📰 Oglaševanje s tiskanimi oglasi: Zakaj jih podjetja še vedno uporabljajo",
  image: "/lovable-uploads/9d2bf50c-8258-41d6-80a5-c71a06939606.png",
  excerpt: "V dobi digitalnega sveta, kjer nas vsak dan preplavljajo spletni oglasi, tiskani oglasi še vedno ohranjajo svojo moč – še posebej v lokalnem okolju.",
  category: "Marketing"
}, {
  id: 5,
  title: "Kako pripraviti učinkovit oglas, ki pritegne pozornost (in prodaja)",
  image: "/lovable-uploads/039a48a7-0aeb-4fc5-a920-fa78940f29aa.png",
  excerpt: "Ali se tudi ti sprašuješ, zakaj nekateri oglasi pritegnejo takojšnjo pozornost, drugi pa ostanejo spregledani? Učinkovit oglas ima jasno strukturo, močno sporočilo in poziv k dejanju.",
  category: "Marketing"
}];

export const Blog = () => {
  return (
    <div id="blog" className="section bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Nasveti</h2>
        <p className="text-gray-600 mb-8">Najnovejši članki, nasveti in novice iz sveta oglasov in marketinga</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const postSlug = slugify(post.title);
            return (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${(post.id % 3) * 0.1}s` }}
              >
                <Link 
                  to={`/blog/${post.id}/${postSlug}`} 
                  className="block h-48 overflow-hidden relative"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-[#e32530] text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </Link>
                <div className="p-6">
                  <Link 
                    to={`/blog/${post.id}/${postSlug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-[#e32530] transition-colors"
                  >
                    <h3 className="font-semibold text-xl mb-3">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}/${postSlug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center text-[#e32530] font-medium hover:underline"
                  >
                    Preberi več <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-[#e32530] hover:bg-[#e32530]/90 transition-transform duration-300 hover:scale-105" asChild>
            <Link to="/blog">
              Vsi članki
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

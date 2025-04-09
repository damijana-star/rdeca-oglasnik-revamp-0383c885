
import React from "react";

interface BlogHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const BlogHero = ({ title, subtitle, backgroundImage }: BlogHeroProps) => {
  return (
    <div className="relative text-white py-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Blog" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e32530]/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg opacity-90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;


import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogGrid from "@/components/blog/BlogGrid";
import { allBlogPosts, categories } from "@/data/blogPosts";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Vse");

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Vse" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const resetSearch = () => {
    setSearchTerm("");
    setSelectedCategory("Vse");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogHero 
          title="Nasveti" 
          subtitle="Najnovejši članki, nasveti in novice iz sveta zimskih športov"
          backgroundImage="/lovable-uploads/ef9f75c3-294b-441f-b566-cb6e2e20abb9.png"
        />

        <div className="container py-16">
          <BlogSearch 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          
          <BlogGrid posts={filteredPosts} resetSearch={resetSearch} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

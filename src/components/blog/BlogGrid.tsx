
import React from "react";
import { Button } from "@/components/ui/button";
import BlogPostCard from "./BlogPostCard";
import { BlogPost } from "@/types/blog";

interface BlogGridProps {
  posts: BlogPost[];
  resetSearch: () => void;
}

const BlogGrid = ({ posts, resetSearch }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Ni najdenih člankov za vaše iskanje.</p>
        <Button 
          className="mt-4 bg-[#e32530] hover:bg-[#e32530]/90"
          onClick={resetSearch}
        >
          Ponastavi iskanje
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;

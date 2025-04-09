
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { allBlogPosts } from "@/data/blogPosts";

// Take only the 3 latest blog posts
const latestBlogPosts = allBlogPosts
  .sort((a, b) => {
    // Sort by id in descending order (assuming higher id means newer post)
    return b.id - a.id;
  })
  .slice(0, 3);

export const Blog = () => {
  return (
    <div id="blog" className="section bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Nasveti</h2>
        <p className="text-gray-600 mb-8">Najnovejši članki, nasveti in novice iz sveta zimskih športov</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${(post.id % 3) * 0.1}s` }}
            >
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-[#e32530] hover:bg-[#e32530]/90 transition-transform duration-300 hover:scale-105" asChild>
            <Link to="/blog">
              Vsi članki
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

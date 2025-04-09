
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, User } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover border border-gray-100">
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
  );
};

export default BlogPostCard;

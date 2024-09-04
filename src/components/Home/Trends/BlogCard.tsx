import React from "react";
import { Blog } from "@/types/trendBlog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="flex w-full px-8 py-4 md:mt-16 bg-white rounded-lg border border-purple-500">
      <div className="hidden md:flex w-1/5 mr-4 -mt-16">
        <img
          className="object-cover w-full h-60 rounded-lg "
          alt={blog.title}
          src={blog.imageUrl}
        />
      </div>
      <div className="flex flex-col w-4/5">
        <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">
          {blog.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 ">
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {blog.related.map((tag) => (
            <a
              key={tag.id}
              href={tag.link}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
            >
              {tag.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

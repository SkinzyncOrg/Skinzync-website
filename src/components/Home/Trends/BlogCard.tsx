import React from "react";
import { Blog } from "@/types/trendBlog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="">
      <div className="flex flex-col items-center mb-9">
        <img src={blog.imageUrl} alt={blog.title} className="rounded-2xl w-full" />
      </div>
      <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
        {blog.title}
      </h3>
      <p className="text-gray-500 leading-6 mb-8">
        {blog.description}
      </p>
      <a
        href={blog.link}
        className="flex items-center gap-2 text-lg text-indigo-700 font-semibold"
      >
        Read more
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
            stroke="#4338CA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

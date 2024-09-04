import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import CustomNavigationButtons from "./CustomNavigationButtons";
import { fetchBlogsByCategory } from "@/utils/blogApi";
import { BlogSectionProps } from "@/types/trendBlog";

const categories = ["Hair", "Skin", "Fragrance", "Next year"];

export default function BlogSection({ blogs }: BlogSectionProps) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [activeCategory, setActiveCategory] = useState<string>("Hair");

  const handleCategoryChange = async (category: string) => {
    setActiveCategory(category);
    const categoryBlogs = await fetchBlogsByCategory(category);
    setFilteredBlogs(categoryBlogs);
  };

  useEffect(() => {
    handleCategoryChange("Hair");
  }, []);

  return (
    <section className="py-12 rounded-xl mb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
                Trends <span className="text-purple-700">Now</span>
              </h2>
              {/* Category buttons */}
              <div className="">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`m-1 py-3 px-4 inline-flex items-center gap-x-2 rounded-xl hover:underline hover:underline-offset-2 hover:transition ${
                      activeCategory === category
                        ? "text-purple-700 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* Slider controls */}
            <CustomNavigationButtons />
          </div>

          {/* Blog List */}
          <BlogList blogs={filteredBlogs} />
        </div>
      </div>
    </section>
  );
}

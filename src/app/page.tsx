"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroContent from "@/components/Home/HeroContent";
import BlogSection from "@/components/Home/Trends/BlogSection";
import ProductRecommend from "@/components/Home/ProductRecommend";
import AIlanding from "@/components/Home/AIlanding";
import AboutusSection from "@/components/Home/AboutusSection";
import AboutusSection2 from "@/components/Home/AboutusSection2";
import PricingPlan from "@/components/Home/PricingPlan";
import { Blog } from "@/types/trendBlog";
import { fetchBlogsByCategory } from "@/utils/blogApi";
import { mockBlogs } from "@/constants/blogData";


export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch initial blogs for the default category "Hair"
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const initialBlogs = await fetchBlogsByCategory("Hair");
        setBlogs(initialBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);
  return (
    <div className="flex flex-col">
      <HeroContent />
      <ProductRecommend />
      <AIlanding />
      {!loading ? (
        <BlogSection blogs={blogs} />
      ) : (
        <p>Loading blogs...</p> // Optional loading state
      )}
      <PricingPlan />
      {/* <AboutusSection /> */}
      <AboutusSection2 />
    </div>
  );
}

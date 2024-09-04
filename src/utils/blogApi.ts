import { Blog } from "@/types/trendBlog";
import axios from "axios";
import { mockBlogs } from "@/constants/blogData";

export const fetchBlogsByCategory = async (category: string): Promise<Blog[]> => {
  try {
    // const response = await axios.get(`http://localhost:3333/api/blogs/${category}`);
    // return response.data;
    if (category in mockBlogs) {
      return mockBlogs[category as keyof typeof mockBlogs];
    } else {
      console.log(`Category "${category}" not found in mock data`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

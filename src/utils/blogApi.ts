import { Blog } from "@/types/trendBlog";
import axios from "axios";

export const fetchBlogsByCategory = async (category: string): Promise<Blog[]> => {
  try {
    const response = await axios.get(`http://localhost:3333/api/blogs/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  mdxContent?: MDXRemoteSerializeResult;
  image: string;
  date: string;
  readTime: string;
  category: string;
  views: number;
  likes: number;
  contentType: "mdx" | "richtext";
  author: {
    name: string;
    image: string;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/blog`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return [];
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/blog/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

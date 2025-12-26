export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
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

// Function to calculate reading time
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content?.trim()?.split(/\s+/).length || 0;
  const readTime = Math.ceil(words / wordsPerMinute);
  return `${readTime} min read`;
}

// Function to get a single blog post
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

// Function to get all blog posts
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

// Function to get related posts
export async function getRelatedPosts(
  currentPost: BlogPost
): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllBlogPosts();
    return allPosts
      .filter((post) => post.id !== currentPost.id)
      .sort((a, b) => {
        if (
          a.category === currentPost.category &&
          b.category !== currentPost.category
        )
          return -1;
        if (
          b.category === currentPost.category &&
          a.category !== currentPost.category
        )
          return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, 3);
  } catch (error) {
    console.error("Error getting related posts:", error);
    return [];
  }
}

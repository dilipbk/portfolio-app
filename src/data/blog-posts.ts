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
  author: {
    name: string;
    image: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Modern Portfolio with Next.js and Tailwind CSS",
    excerpt:
      "Learn how to create a stunning portfolio website using Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
    content: `
# Building a Modern Portfolio with Next.js and Tailwind CSS

Creating a modern portfolio website is essential for showcasing your work and skills as a developer. In this post, we&apos;ll explore how to build a stunning portfolio using Next.js and Tailwind CSS.

## Why Next.js?

Next.js is a powerful React framework that provides:
- Server-side rendering
- Automatic code splitting
- Built-in routing
- API routes
- Great developer experience

## Why Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that helps you:
- Build custom designs without leaving your HTML
- Maintain consistency across your project
- Ship less CSS
- Create responsive designs easily

## Getting Started

First, create a new Next.js project with Tailwind CSS:

\`\`\`bash
npx create-next-app@latest my-portfolio --typescript --tailwind
cd my-portfolio
\`\`\`

## Key Features to Implement

1. Responsive Navigation
2. Hero Section
3. Project Showcase
4. Blog Integration
5. Contact Form

## Best Practices

- Use semantic HTML
- Implement accessibility features
- Optimize images
- Add smooth animations
- Ensure responsive design
`,
    image: "/dilip.jpeg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Web Development",
    views: 1234,
    likes: 89,
    author: {
      name: "Dilip BK",
      image: "/dilip.jpeg",
    },
  },
  {
    id: "2",
    title: "The Future of Web Development: What's Coming in 2024",
    excerpt:
      "Explore the latest trends and technologies that will shape the future of web development in the coming year.",
    content: `
# The Future of Web Development: What&apos;s Coming in 2024

The web development landscape is constantly evolving. Let&apos;s explore the trends and technologies that will shape the future of web development in 2024.

## Key Trends

1. AI-Powered Development
2. WebAssembly Evolution
3. Edge Computing
4. Improved Web Performance APIs

## Emerging Technologies

- Web Components
- CSS Container Queries
- View Transitions API
- WebGPU

Stay tuned for more updates!
`,
    image: "/dilip.jpeg",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "Technology",
    views: 2156,
    likes: 134,
    author: {
      name: "Dilip BK",
      image: "/dilip.jpeg",
    },
  },
  {
    id: "3",
    title: "Mastering TypeScript: Tips and Best Practices",
    excerpt:
      "Discover advanced TypeScript techniques and best practices to write better, more maintainable code.",
    content: `
# Mastering TypeScript: Tips and Best Practices

TypeScript has become an essential tool for modern web development. Here are some advanced techniques and best practices to help you write better TypeScript code.

## Type System Features

1. Conditional Types
2. Mapped Types
3. Template Literal Types
4. Utility Types

## Best Practices

- Use strict mode
- Leverage type inference
- Write self-documenting code
- Implement proper error handling

More content coming soon!
`,
    image: "/dilip.jpeg",
    date: "2024-03-05",
    readTime: "10 min read",
    category: "Programming",
    views: 1876,
    likes: 112,
    author: {
      name: "Dilip BK",
      image: "/dilip.jpeg",
    },
  },
];

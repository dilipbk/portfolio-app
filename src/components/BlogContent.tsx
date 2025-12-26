"use client";

import { useCallback, useEffect } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type BlogPost } from "@/lib/blog-utils";

export default function BlogContent({ post }: { post: BlogPost }) {
  const updateUrlHash = useCallback((hash: string) => {
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  }, []);

  useEffect(() => {
    // Add scroll-margin to headings
    const style = document.createElement("style");
    style.textContent = `
      .blog-content h1, .blog-content h2, .blog-content h3 {
        scroll-margin-top: 100px;
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              updateUrlHash(`#${id}`);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger when heading is in the top 20% of viewport
      }
    );

    // Observe all headings
    const headingElements = document.querySelectorAll(
      ".blog-content h1, .blog-content h2, .blog-content h3"
    );
    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
      document.head.removeChild(style);
    };
  }, [updateUrlHash]);

  // Add IDs to the content
  const contentWithIds = post.content.replace(
    /^(#{1,3})\s+(.+)$/gm,
    (match, hashes, title) => {
      const id = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return `${hashes} ${title} {#${id}}`;
    }
  );

  return (
    <div className="prose prose-invert prose-green max-w-none">
      <div className="blog-content">
        {post.contentType === "mdx" ? (
          <MDXRemote source={contentWithIds} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
        )}
      </div>
    </div>
  );
}

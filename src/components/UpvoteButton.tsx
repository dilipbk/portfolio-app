"use client";

import { useState } from "react";

interface UpvoteButtonProps {
  initialLikes: number;
  postId: string;
}

export function UpvoteButton({ initialLikes, postId }: UpvoteButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleUpvote = async () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      try {
        const response = await fetch(`/api/blog/${postId}/upvote`, {
          method: "POST",
        });
        if (!response.ok) {
          setLikes((prev) => prev - 1);
          setHasLiked(false);
        }
      } catch {
        setLikes((prev) => prev - 1);
        setHasLiked(false);
      }
    }
  };

  return (
    <button
      onClick={handleUpvote}
      className={`flex items-center gap-1 transition-colors ${
        hasLiked ? "text-green-tint" : "hover:text-green-tint"
      }`}
      type="button"
    >
      <svg
        className="w-4 h-4"
        fill={hasLiked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {likes}
    </button>
  );
}

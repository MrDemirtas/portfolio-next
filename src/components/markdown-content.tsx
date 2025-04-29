"use client";

import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { markdownComponents } from "./markdown-components";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  // İstemci tarafında render ediliyor olduğumuzdan emin olmak için
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={cn(
          "prose prose-blue dark:prose-invert max-w-none",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn("prose prose-blue dark:prose-invert max-w-none", className)}
    >
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}

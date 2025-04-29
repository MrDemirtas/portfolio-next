"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { markdownComponents } from "./markdown-components";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={cn("prose prose-blue dark:prose-invert max-w-none", className)}
    >
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}

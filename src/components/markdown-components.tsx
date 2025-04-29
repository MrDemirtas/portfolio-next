"use client";

import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface MarkdownComponentsProps {
  node?: any;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

// Kod dil eşleştirmesi
const getLanguage = (className: string | undefined) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? match[1] : "";
};

export const markdownComponents = {
  h1: ({ node, ...props }: MarkdownComponentsProps) => (
    <h1 className="text-foreground font-bold mt-6 mb-4 text-3xl" {...props} />
  ),
  h2: ({ node, ...props }: MarkdownComponentsProps) => (
    <h2 className="text-foreground font-bold mt-5 mb-3 text-2xl" {...props} />
  ),
  h3: ({ node, ...props }: MarkdownComponentsProps) => (
    <h3 className="text-foreground font-bold mt-4 mb-2 text-xl" {...props} />
  ),
  h4: ({ node, ...props }: MarkdownComponentsProps) => (
    <h4 className="text-foreground font-bold mt-3 mb-2 text-lg" {...props} />
  ),
  h5: ({ node, ...props }: MarkdownComponentsProps) => (
    <h5 className="text-foreground font-bold mt-2 mb-1 text-base" {...props} />
  ),
  h6: ({ node, ...props }: MarkdownComponentsProps) => (
    <h6 className="text-foreground font-bold mt-2 mb-1 text-sm" {...props} />
  ),
  p: ({ node, ...props }: MarkdownComponentsProps) => (
    <p className="text-muted-foreground my-3" {...props} />
  ),
  a: ({ node, ...props }: MarkdownComponentsProps) => (
    <a className="text-primary hover:underline transition-colors" {...props} />
  ),
  strong: ({ node, ...props }: MarkdownComponentsProps) => (
    <strong className="text-foreground font-bold" {...props} />
  ),
  em: ({ node, ...props }: MarkdownComponentsProps) => (
    <em className="italic" {...props} />
  ),
  ul: ({ node, ...props }: MarkdownComponentsProps) => (
    <ul className="list-disc pl-6 my-3" {...props} />
  ),
  ol: ({ node, ...props }: MarkdownComponentsProps) => (
    <ol className="list-decimal pl-6 my-3" {...props} />
  ),
  li: ({ node, ...props }: MarkdownComponentsProps) => (
    <li className="my-1" {...props} />
  ),
  blockquote: ({ node, ...props }: MarkdownComponentsProps) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-1 my-3 italic bg-muted/50 rounded-r-md"
      {...props}
    />
  ),
  code: ({
    node,
    className,
    inline,
    children,
    ...props
  }: MarkdownComponentsProps & { inline?: boolean }) => {
    const language = getLanguage(className);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    if (inline) {
      return (
        <code
          className="text-primary bg-muted rounded px-1 py-0.5 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        customStyle={{
          borderRadius: "0.375rem",
          padding: "1rem",
          margin: "1rem 0",
        }}
        showLineNumbers={language !== ""}
        wrapLongLines
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
  pre: ({ node, ...props }: MarkdownComponentsProps) => (
    <div className="my-4" {...props} />
  ),
  img: ({ node, ...props }: MarkdownComponentsProps) => (
    <img className="rounded-md max-w-full h-auto my-4" {...props} />
  ),
  hr: ({ node, ...props }: MarkdownComponentsProps) => (
    <hr className="my-8 border-t border-border" {...props} />
  ),
  table: ({ node, ...props }: MarkdownComponentsProps) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      />
    </div>
  ),
  thead: ({ node, ...props }: MarkdownComponentsProps) => (
    <thead className="bg-muted/50" {...props} />
  ),
  tbody: ({ node, ...props }: MarkdownComponentsProps) => <tbody {...props} />,
  tr: ({ node, ...props }: MarkdownComponentsProps) => (
    <tr className="border-b border-border" {...props} />
  ),
  th: ({ node, ...props }: MarkdownComponentsProps) => (
    <th className="px-4 py-2 text-left font-bold text-foreground" {...props} />
  ),
  td: ({ node, ...props }: MarkdownComponentsProps) => (
    <td className="px-4 py-2 text-muted-foreground" {...props} />
  ),
};

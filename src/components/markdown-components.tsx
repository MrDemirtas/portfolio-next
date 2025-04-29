"use client";

import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";

interface MarkdownComponentsProps {
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

// Kod dil eşleştirmesi
const getLanguage = (className: string | undefined) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? match[1] : "";
};

// Global stil tanımı
const codeBlockStyle = `
  .prose pre::before,
  .prose pre::after,
  .prose code::before,
  .prose code::after,
  .prose pre span::before,
  .prose pre span::after,
  .react-syntax-highlighter-line-number::before,
  .react-syntax-highlighter-line-number::after {
    display: none !important;
    content: none !important;
  }
  
  .prose pre {
    position: relative;
  }
`;

export const markdownComponents = {
  h1: ({ ...props }: MarkdownComponentsProps) => (
    <h1 className="text-foreground font-bold mt-6 mb-4 text-3xl" {...props} />
  ),
  h2: ({ ...props }: MarkdownComponentsProps) => (
    <h2 className="text-foreground font-bold mt-5 mb-3 text-2xl" {...props} />
  ),
  h3: ({ ...props }: MarkdownComponentsProps) => (
    <h3 className="text-foreground font-bold mt-4 mb-2 text-xl" {...props} />
  ),
  h4: ({ ...props }: MarkdownComponentsProps) => (
    <h4 className="text-foreground font-bold mt-3 mb-2 text-lg" {...props} />
  ),
  h5: ({ ...props }: MarkdownComponentsProps) => (
    <h5 className="text-foreground font-bold mt-2 mb-1 text-base" {...props} />
  ),
  h6: ({ ...props }: MarkdownComponentsProps) => (
    <h6 className="text-foreground font-bold mt-2 mb-1 text-sm" {...props} />
  ),
  p: ({ ...props }: MarkdownComponentsProps) => (
    <p className="text-muted-foreground my-3" {...props} />
  ),
  a: ({ ...props }: MarkdownComponentsProps) => (
    <a className="text-primary hover:underline transition-colors" {...props} />
  ),
  strong: ({ ...props }: MarkdownComponentsProps) => (
    <strong className="text-foreground font-bold" {...props} />
  ),
  em: ({ ...props }: MarkdownComponentsProps) => (
    <em className="italic" {...props} />
  ),
  ul: ({ ...props }: MarkdownComponentsProps) => (
    <ul className="list-disc pl-6 my-3" {...props} />
  ),
  ol: ({ ...props }: MarkdownComponentsProps) => (
    <ol className="list-decimal pl-6 my-3" {...props} />
  ),
  li: ({ ...props }: MarkdownComponentsProps) => (
    <li className="my-1" {...props} />
  ),
  blockquote: ({ ...props }: MarkdownComponentsProps) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-1 my-3 italic bg-muted/50 rounded-r-md"
      {...props}
    />
  ),
  code: ({
    className,
    inline,
    children,
    ...props
  }: MarkdownComponentsProps & { inline?: boolean }) => {
    const language = getLanguage(className);

    // Custom React component için useTheme hook'unu kullanmak yerine fonksiyonel bir yaklaşım
    function CodeBlock() {
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
        <>
          <style>{codeBlockStyle}</style>
          <SyntaxHighlighter
            language={language}
            style={isDark ? vscDarkPlus : vs}
            customStyle={{
              borderRadius: "0.375rem",
              padding: "1rem",
              margin: "1rem 0",
            }}
            wrapLongLines={true}
            PreTag="div"
            codeTagProps={{
              style: {
                fontSize: "13px",
                fontFamily: "Menlo, Monaco, Consolas, monospace",
              },
            }}
            useInlineStyles={true}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </>
      );
    }

    return <CodeBlock />;
  },
  pre: ({ ...props }: MarkdownComponentsProps) => (
    <div className="my-4" {...props} />
  ),
  img: ({ ...props }: MarkdownComponentsProps) => (
    <img
      className="rounded-md max-w-full h-auto my-4"
      alt="Markdown içeriği"
      {...props}
    />
  ),
  hr: ({ ...props }: MarkdownComponentsProps) => (
    <hr className="my-8 border-t border-border" {...props} />
  ),
  table: ({ ...props }: MarkdownComponentsProps) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      />
    </div>
  ),
  thead: ({ ...props }: MarkdownComponentsProps) => (
    <thead className="bg-muted/50" {...props} />
  ),
  tbody: ({ ...props }: MarkdownComponentsProps) => <tbody {...props} />,
  tr: ({ ...props }: MarkdownComponentsProps) => (
    <tr className="border-b border-border" {...props} />
  ),
  th: ({ ...props }: MarkdownComponentsProps) => (
    <th className="px-4 py-2 text-left font-bold text-foreground" {...props} />
  ),
  td: ({ ...props }: MarkdownComponentsProps) => (
    <td className="px-4 py-2 text-muted-foreground" {...props} />
  ),
};

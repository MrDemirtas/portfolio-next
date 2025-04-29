"use client";

import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { CSSProperties } from "react";
import { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "next-themes";

// Kod dil eşleştirmesi helper fonksiyonu
const getLanguage = (className: string | undefined) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? match[1] : "";
};

// Ortak sınıf stil tanımları
const styles = {
  heading: "text-foreground font-bold",
  paragraph: "text-muted-foreground my-3",
  link: "text-primary hover:underline transition-colors",
  list: "pl-6 my-3",
  code: {
    inline: "text-primary bg-muted rounded px-1 py-0.5 font-mono text-sm",
    block: {
      wrapper: "my-4 p-0",
      container: {
        borderRadius: "0.375rem",
        padding: "1rem",
        margin: "0",
      } as CSSProperties,
      code: {
        fontSize: "13px",
        fontFamily: "Menlo, Monaco, Consolas, monospace",
      },
    },
  },
  table: {
    container: "overflow-x-auto my-6",
    table: "w-full border-collapse border border-border",
    header: "bg-muted/50",
    row: "border-b border-border",
    headerCell: "px-4 py-2 text-left font-bold text-foreground",
    cell: "px-4 py-2 text-muted-foreground",
  },
};

// Kod bileşeni
const CodeBlock = ({ className, children, ...props }: any) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const language = getLanguage(className);
  const isInline = !(className && /language-(\w+)/.test(className));

  if (isInline) {
    return (
      <code className={styles.code.inline} {...props}>
        {children}
      </code>
    );
  }

  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        customStyle={styles.code.block.container}
        wrapLongLines={true}
        PreTag="div"
        codeTagProps={{ style: styles.code.block.code }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  );
};

// ReactMarkdown için bileşen tanımlamaları
export const markdownComponents: Components = {
  // Başlıklar
  h1: ({ node, ...props }) => (
    <h1 className={`${styles.heading} mt-6 mb-4 text-3xl`} {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className={`${styles.heading} mt-5 mb-3 text-2xl`} {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className={`${styles.heading} mt-4 mb-2 text-xl`} {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className={`${styles.heading} mt-3 mb-2 text-lg`} {...props} />
  ),
  h5: ({ node, ...props }) => (
    <h5 className={`${styles.heading} mt-2 mb-1 text-base`} {...props} />
  ),
  h6: ({ node, ...props }) => (
    <h6 className={`${styles.heading} mt-2 mb-1 text-sm`} {...props} />
  ),

  // Metin bileşenleri
  p: ({ node, ...props }) => <p className={styles.paragraph} {...props} />,
  a: ({ node, ...props }) => <a className={styles.link} {...props} />,
  strong: ({ node, ...props }) => (
    <strong className="text-foreground font-bold" {...props} />
  ),
  em: ({ node, ...props }) => <em className="italic" {...props} />,

  // Liste bileşenleri
  ul: ({ node, ...props }) => (
    <ul className={`${styles.list} list-disc`} {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className={`${styles.list} list-decimal`} {...props} />
  ),
  li: ({ node, ...props }) => <li className="my-1" {...props} />,

  // İçerik bileşenleri
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-1 my-3 italic bg-muted/50 rounded-r-md"
      {...props}
    />
  ),
  code: CodeBlock,
  pre: ({ node, children, ...props }: any) => (
    <pre className={styles.code.block.wrapper} {...props}>
      {children}
    </pre>
  ),
  img: ({ ...props }) => (
    <img
      className="rounded-md max-w-full h-auto my-4"
      alt="Markdown içeriği"
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-8 border-t border-border" {...props} />
  ),

  // Tablo bileşenleri
  table: ({ node, ...props }) => (
    <div className={styles.table.container}>
      <table className={styles.table.table} {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => (
    <thead className={styles.table.header} {...props} />
  ),
  tbody: ({ node, ...props }) => <tbody {...props} />,
  tr: ({ node, ...props }) => <tr className={styles.table.row} {...props} />,
  th: ({ node, ...props }) => (
    <th className={styles.table.headerCell} {...props} />
  ),
  td: ({ node, ...props }) => <td className={styles.table.cell} {...props} />,
};

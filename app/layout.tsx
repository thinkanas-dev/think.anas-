import type { Metadata } from "next";
import "./system.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://think-anas-clearer-lens.blahlou2026.chatgpt.site'),
  title: "think.anas — Stay human. Think further.",
  description: "Understand healthcare AI through six technical guides, primary sources and interactive workflows. Clinical AI, automation, NLP, medical imaging, precision medicine and remote monitoring.",
  icons: {
    icon: "/monogram.svg",
    shortcut: "/monogram.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

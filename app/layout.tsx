import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "think.anas — Stay human. Think further.",
  description: "Independent thinking at the intersection of AI and health. Ideas, open questions and human perspectives by Anas.",
  icons: {
    icon: "/brand-symbol.png",
    shortcut: "/brand-symbol.png",
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

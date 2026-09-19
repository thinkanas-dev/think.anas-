import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "think.anas — A clearer lens on AI & health",
  description: "Ideas, tools and questions at the intersection of artificial intelligence and human health. A personal perspective by Anas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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

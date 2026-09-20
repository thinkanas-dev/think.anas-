import type { Metadata } from "next";
import "./globals.css";
import "./organism.css";
import "./navigation.css";
import "./refinement.css";

export const metadata: Metadata = {
  title: "think.anas — Stay human. Think further.",
  description: "Independent thinking at the intersection of AI and health. Ideas, open questions and human perspectives by Anas.",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exclusive Ecommerce",
  description: "High quality ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f5f5f5] font-inter">{children}</body>
    </html>
  );
}
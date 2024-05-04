import type { Metadata } from "next";
import "./globals.css";

/* Primary Meta Tags */
export const metadata: Metadata = {
  title: "Cornelius | Portfolio",
  description:
    "Welcome to my portfolio website! I'm a passionate web developer with expertise in React, Next.js, and other modern web technologies. Browse my projects and learn more about my skills and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-quicksand relative min-h-screen w-full bg-gray-900">
        {children}
      </body>
    </html>
  );
}

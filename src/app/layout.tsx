import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehak Fatima | Senior Full Stack Software Engineer",
  description:
    "Senior Full Stack Software Engineer with 6+ years of experience building scalable web applications using MERN, Ruby on Rails, and modern cloud technologies.",
  keywords: [
    "Full Stack Engineer",
    "Software Engineer",
    "MERN Stack",
    "Ruby on Rails",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
  ],
  authors: [{ name: "Mehak Fatima" }],
  openGraph: {
    title: "Mehak Fatima | Senior Full Stack Software Engineer",
    description:
      "Building high-performance web applications with MERN, Ruby on Rails, and modern cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090B] text-white">
        {children}
      </body>
    </html>
  );
}

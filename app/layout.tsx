import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/components/loader/Loader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Velora Digital",
    template: "%s | Velora Digital",
  },
  description:
    "Velora Digital helps businesses grow with modern websites, branding, AI solutions, cloud services, and digital marketing.",
  keywords: [
    "Velora Digital",
    "Website Development",
    "Web Design",
    "Branding",
    "Digital Agency",
    "AI Solutions",
    "Cloud Solutions",
    "Social Media",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Vinita Dahiya" }],
  creator: "Vinita Dahiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <body>
          {children}
        </body>
      </body>
    </html>
  );
}
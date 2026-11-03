import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

import BusinessJsonLd from "@/components/BusinessJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactLinks from "@/components/FloatingContactLinks";

export const metadata: Metadata = {
  metadataBase: new URL("https://havensaigon.com.vn"),

  title: {
    default: "Haven Saigon | Serviced Apartments in Thao Dien",
    template: "%s | Haven Saigon",
  },

  description:
    "Discover fully furnished serviced apartments in Thao Dien, Ho Chi Minh City. Comfortable studios, one- and two-bedroom apartments with modern facilities and flexible stays.",

  applicationName: "Haven Saigon",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://havensaigon.com.vn",
    siteName: "Haven Saigon",
    title: "Haven Saigon | Serviced Apartments in Thao Dien",
    description:
      "Discover fully furnished serviced apartments in Thao Dien, Ho Chi Minh City. Enjoy modern amenities, flexible monthly stays and comfortable living at Haven Saigon.",
    images: [
      {
        url: "/images/home/hero.jpg",
        alt: "Haven Saigon serviced apartments interior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haven Saigon | Serviced Apartments in Thao Dien",
    description:
      "Discover fully furnished serviced apartments in Thao Dien, Ho Chi Minh City, with modern amenities and flexible stays.",
    images: ["/images/home/hero.jpg"],
  },
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <BusinessJsonLd />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <FloatingContactLinks />
      </body>
    </html>
  );
}

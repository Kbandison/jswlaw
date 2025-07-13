import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OrganizationSchema } from "@/components/seo/structured-data";
import { generateSEOMetadata } from "@/components/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "JSW Law Group | Atlanta Real Estate & Business Law Firm",
  description: "JSW Law Group provides comprehensive legal services in metro-Atlanta including real estate, business law, corporate transactions, and immigration services. Licensed in Georgia and California since 2003.",
  canonical: "/",
  keywords: ["Atlanta law firm", "real estate lawyer", "business attorney", "immigration law", "corporate law", "Suwanee GA", "personal injury lawyer", "contract law", "property law", "legal consultation"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} ${ebGaramond.variable} antialiased font-sans`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

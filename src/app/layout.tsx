import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoBengali = Noto_Serif_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nibhṛite Jatone | নিভৃতে যতনে — A Soulful Homestay in Santiniketan",
  description:
    "Discover peace in the heart of Santiniketan. Nibhṛite Jatone offers a soulful homestay experience surrounded by Sonajhuri forests, Baul culture, and authentic Bengali hospitality.",
  keywords: [
    "Santiniketan homestay",
    "Bengali culture",
    "Sonajhuri forest",
    "Nibhrite Jatone",
    "নিভৃতে যতনে",
    "peaceful retreat",
    "Bengal heritage",
  ],
  authors: [{ name: "Nibhṛite Jatone" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Nibhṛite Jatone — A Soulful Homestay in Santiniketan",
    description:
      "শান্তির আশ্রয়, প্রকৃতির কোলে — Experience authentic Bengali hospitality in the heart of Santiniketan",
    type: "website",
    locale: "bn_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${nunito.variable} ${notoBengali.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

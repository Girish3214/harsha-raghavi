import type { Metadata } from "next";
import { Bonheur_Royale, Tangerine, Poppins } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components";

const bonheur = Bonheur_Royale({
  variable: "--font-bonheur",
  weight: "400",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harsha-raghavi.vercel.app/"),
  title: "Harsha Vardhan & Raghavi | Wedding Invitation",
  description:
    "With the blessings of family and friends, we invite you to celebrate the wedding of Harsha Vardhan and Raghavi.",
  openGraph: {
    title: "Harsha Vardhan & Raghavi | Wedding Invitation",
    description: "Join us in celebrating our wedding.",
    url: "https://harsha-raghavi.vercel.app/",
    siteName: "Harsha Vardhan & Raghavi Wedding",
    images: [
      {
        url: "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1771954151/marriage/harsha-raghavi/og_image.png",
        width: 1200,
        height: 630,
        type: "image/jpg",
        alt: "Wedding invitation of Harsha Vardhan and Raghavi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Vardhan & Raghavi | Wedding Invitation",
    description:
      "Join us in celebrating the wedding of Harsha Vardhan and Raghavi.",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bonheur.variable} ${tangerine.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
        data-lt-installed="true"
      >
        <Loader />
        {children}
      </body>
    </html>
  );
}

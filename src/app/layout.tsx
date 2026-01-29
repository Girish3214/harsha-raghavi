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
  title: "Wedding Invite | Divya & Manikanta",
  description:
    "We cordially invite you to celebrate the wedding of Divya & Manikanta. Join us for the auspicious occasion.",
  openGraph: {
    title: "Wedding Invite | Divya & Manikanta",
    description: "Join us in celebrating our wedding.",
    url: "https://arunwtf.com", // Replace with real URL
    siteName: "Divya & Manikanta Wedding",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Divya & Manikanta Wedding Content",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invite | Divya & Manikanta",
    description: "Join us in celebrating our wedding.",
    creator: "@arunwtf",
  },
  icons: {
    icon: "/favicon.ico",
  },
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

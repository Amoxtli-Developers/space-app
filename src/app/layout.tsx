import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* SEO Metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Space App" />
        <meta property="og:description" content="Generated by create next app" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space App" />
        <meta name="twitter:description" content="Generated by create next app" />
        <meta name="twitter:image" content="/twitter-image.png" />
        <title>Space App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

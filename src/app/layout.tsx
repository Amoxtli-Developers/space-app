import "./globals.css";
import { Exo } from "next/font/google";

const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Space App - Conecta con tu comunidad universitaria",
  description:
    "Descubre Space App, la primera red social diseñada exclusivamente para conectar con tu comunidad universitaria. Construye relaciones, colabora y accede a eventos en un espacio único.",
  keywords: [
    "Space App",
    "red social universitaria",
    "comunidad universitaria",
    "networking universitario",
    "eventos universitarios",
    "estudiantes",
    "campus",
    "aplicación universitaria",
  ].join(", "),
  author: "Amoxtli Web Developers",
  openGraph: {
    type: "website",
    title: "Space App - Conecta con tu comunidad universitaria",
    description:
      "Únete a Space App y experimenta una nueva forma de conectar, colaborar y participar en eventos en tu universidad. ¡Sé parte de esta revolución universitaria!",
    url: "https://www.spaceapp.mx",
    siteName: "Space App",
    images: [
      {
        url: "https://eqsvedkyrnmowksemqwk.supabase.co/storage/v1/object/public/space-assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Space App Banner",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    site: "@spaceapp",
    title: "Space App - Conecta con tu comunidad universitaria",
    description:
      "Descubre Space App, la red social para estudiantes. ¡Colabora y conéctate en un espacio único diseñado para ti!",
    image: "https://eqsvedkyrnmowksemqwk.supabase.co/storage/v1/object/public/space-assets/banner.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={exo.className}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* General Meta Tags */}
        <meta
          name="description"
          content="Descubre Space App, la primera red social diseñada exclusivamente para conectar con tu comunidad universitaria. Construye relaciones, colabora y accede a eventos en un espacio único."
        />
        <meta
          name="keywords"
          content="Space App, red social universitaria, comunidad universitaria, networking universitario, eventos universitarios, estudiantes, campus, aplicación universitaria"
        />
        <meta name="author" content="Amoxtli Web Developers" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Space App - Conecta con tu comunidad universitaria" />
        <meta
          property="og:description"
          content="Únete a Space App y experimenta una nueva forma de conectar, colaborar y participar en eventos en tu universidad. ¡Sé parte de esta revolución universitaria!"
        />
        <meta property="og:url" content="https://www.spaceapp.mx" />
        <meta property="og:site_name" content="Space App" />
        <meta
          property="og:image"
          content="https://eqsvedkyrnmowksemqwk.supabase.co/storage/v1/object/public/space-assets/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@spaceapp" />
        <meta name="twitter:title" content="Space App - Conecta con tu comunidad universitaria" />
        <meta
          name="twitter:description"
          content="Descubre Space App, la red social para estudiantes. ¡Colabora y conéctate en un espacio único diseñado para ti!"
        />
        <meta
          name="twitter:image"
          content="https://eqsvedkyrnmowksemqwk.supabase.co/storage/v1/object/public/space-assets/banner.jpg"
        />

        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://www.spaceapp.mx" />

        {/* Title */}
        <title>Space App - Conecta con tu comunidad universitaria</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

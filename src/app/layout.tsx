import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import ClientToaster from "@/components/ClientToaster";
import { EmblemSprite } from "@/components/brand/EmblemSprite";
import { site } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const title = `${site.name} — ${site.descriptor} · ${site.regions}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.slogan,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description: site.slogan,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.slogan,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1629",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  url: site.url,
  slogan: site.slogan,
  description: site.slogan,
  image: `${site.url}/opengraph-image.jpg`,
  logo: `${site.url}/brand/eg-emblem-navy.svg`,
  telephone: site.contact.phoneDisplay,
  email: site.contact.email,
  areaServed: ["BR", "PT"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mogi Guaçu",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  founder: { "@type": "Person", name: site.founder.name },
  sameAs: [site.social.linkedin, site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body>
        <EmblemSprite />
        {children}
        <ClientToaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

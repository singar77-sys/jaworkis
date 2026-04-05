import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaworski Meats — Cleveland's Butcher Since 1935",
  description:
    "Three generations. Fresh cut to order. Polish kielbasa, steaks, sausage & deli. 7545 Pearl Rd, Middleburg Heights, OH.",
  keywords: [
    "butcher shop Cleveland",
    "Middleburg Heights butcher",
    "Polish kielbasa Cleveland",
    "fresh meat market Ohio",
    "custom cut steaks",
    "homemade sausage Cleveland",
    "Jaworski Meats",
    "deli Middleburg Heights",
    "Polish meat market",
    "best kielbasa Cleveland",
  ],
  metadataBase: new URL("https://jaworskimeats.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jaworski Meats — Cleveland's Butcher Since 1935",
    description:
      "Three generations. Fresh cut to order. Polish kielbasa, steaks, sausage & deli. Family owned since 1935.",
    type: "website",
    locale: "en_US",
    url: "https://jaworskimeats.com",
    siteName: "Jaworski Meats",
    images: [
      {
        url: "/images/mark-behind-counter.jpg",
        width: 1200,
        height: 630,
        alt: "Mark Jaworski behind the meat counter at Jaworski Meats in Middleburg Heights, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaworski Meats — Cleveland's Butcher Since 1935",
    description:
      "Three generations. Fresh cut to order. Polish kielbasa, steaks, sausage & deli.",
    images: ["/images/mark-behind-counter.jpg"],
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
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jaworski Meats",
              description: "Family-owned butcher shop and deli since 1935. Fresh cut meats, Polish kielbasa, sausage, and homemade deli specialties.",
              url: "https://jaworskimeats.com",
              telephone: "+14402345678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7545 Pearl Rd",
                addressLocality: "Middleburg Heights",
                addressRegion: "OH",
                postalCode: "44130",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3784,
                longitude: -81.8128,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
              ],
              image: "https://jaworskimeats.com/images/storefront-sign.jpg",
              priceRange: "$$",
              servesCuisine: ["Polish", "American", "Deli"],
              foundingDate: "1935",
              founder: {
                "@type": "Person",
                name: "Fred Jaworski",
              },
              sameAs: [
                "https://www.facebook.com/jaworskimeats/",
                "https://www.instagram.com/jaworskimeats/",
              ],
              hasMenu: {
                "@type": "Menu",
                name: "Deli Lunch Menu",
                description: "Homemade subs, sandwiches, and daily soup specials",
              },
            }),
          }}
        />
      </head>
      <body className="paper-texture min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

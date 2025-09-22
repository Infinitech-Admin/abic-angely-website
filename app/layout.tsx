import "@/styles/globals.css";
import { clsx } from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import LoadingWrapper from "@/components/loaders/loadingwrapper";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import FloatingIcons from "@/components/floatingicon";
import PWAInstaller from "@/components/PWAInstaller"; // ✅ Added

// --------------------
// SEO + Metadata
// --------------------
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.template}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "Abic Realty - Your Trusted Real Estate Partner",
    description:
      "Find your ideal condo, office, or property for sale, lease, or rent with Abic Realty. We make real estate simple.",
    url: "https://www.abicrealty.com",
    siteName: "Abic Realty",
    images: [
      {
        url: "https://abicrealtyphdianne.com/media/abic-realty-banner.png",
        width: 1200,
        height: 630,
        alt: "Modern condos and offices offered by Abic Realty",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty",
    creator: "@AbicRealty",
    title: "Abic Realty - Your Trusted Real Estate Partner",
    description:
      "Find your ideal condo, office, or property for sale, lease, or rent with Abic Realty. We make real estate simple.",
    images: [
      "https://abicrealtyphdianne.com/media/abic-realty-banner.png",
    ],
  },
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/assets/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/assets/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/assets/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: "https://abicrealtyphdianne.com/media/abic-apple-icon.png",
    shortcut: "/assets/favicon/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/assets/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.abicrealty.com",
    languages: {
      "en-US": "https://www.abicrealty.com/en/",
      "fil-PH": "https://www.abicrealty.com/fil/",
    },
  },
};

// --------------------
// RootLayout
// --------------------
export default function RootLayout({
  children,
  noSidebar = false,
}: {
  children: React.ReactNode;
  noSidebar?: boolean;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* ✅ PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ABIC Realty" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased relative overflow-x-hidden",
          fontSans.variable
        )}
        style={{
          backgroundImage: "url('https://i.ibb.co/5Y2tMn3/bgimg.png')",
        }}
      >
        {/* ✅ PWA Installer */}
        <PWAInstaller />

        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <LoadingWrapper>
            <main className={clsx("flex-grow", !noSidebar && "md:ml-64")}>
              {children}
            </main>
            <Footer />
            <FloatingIcons />
          </LoadingWrapper>
        </div>

        <Chatbot />
      </body>
    </html>
  );
}

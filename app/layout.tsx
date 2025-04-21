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
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
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
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
    ],
  },
  icons: {
    icon: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-favicon.ico",
    apple: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-apple-icon.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased relative overflow-x-hidden",
          fontSans.variable
        )}
        style={{
          backgroundImage: "url('https://i.ibb.co/5Y2tMn3/bgimg.png')",
        }}
      >

        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <LoadingWrapper>
            <main className="flex-grow md:ml-64">
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

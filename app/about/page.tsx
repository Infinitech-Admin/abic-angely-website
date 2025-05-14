import { Metadata } from "next";

import AgentProfile from "./agentprofile";
import DetailSection from "./detailsection";
import "react-photo-view/dist/react-photo-view.css";

import { getAuthHeaders } from "@/components/headers";

export const metadata: Metadata = {
  title: "About | ABIC Realty & Consultancy Corporation",
  description:
    "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",

  openGraph: {
    title: "About | ABIC Realty by Angely Victoriano",
    description:
      "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",
    url: "https://www.abic-website.vercel.app/about",
    siteName: "ABIC Realty by Angely Victoriano",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}media/abic-realty-banner.png`,
        width: 1200,
        height: 630,
        alt: "ABIC Realty team providing real estate solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@AbicRealty by Angely Victoriano",
    creator: "@AbicRealty by Angely Victoriano",
    title: "About | ABIC Realty by Angely Victoriano",
    description:
      "Learn more about ABIC Realty, our services, and values in providing top-tier real estate solutions.",
    images: [
      `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}media/abic-realty-banner.png`,
    ],
  },

  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

const fetchProperties = async () => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_API_URL;
    const headers = getAuthHeaders();

    if (!endpoint) {
      throw new Error("API URL is not defined in the environment variables");
    }

    const res = await fetch(endpoint, {
      cache: "no-store",
      headers,
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch properties: ${res.status} - ${res.statusText}`,
      );
    }

    const data = await res.json();

    return data.record;
  } catch (error) {
    throw new Error(
      `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
    );
  }
};

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const properties = await fetchProperties();

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto w-full px-2">
        <AgentProfile profile={properties} />
        <DetailSection profile={properties} />
      </div>
    </section>
  );
}

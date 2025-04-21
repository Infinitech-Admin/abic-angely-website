import { Metadata } from "next";

import AgentProfile from "./agentprofile";
import DetailSection from "./detailsection";
import "react-photo-view/dist/react-photo-view.css";

import { getAuthHeaders } from "@/components/headers";

export const metadata: Metadata = {
  title: "About",
  description:
    "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",

  openGraph: {
    title: "About | ABIC Realty by Jayvee Valeriano",
    description:
      "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",
    url: "https://www.abic-website.vercel.app/about",
    siteName: "ABIC Realty by Jayvee Valeriano",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
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
    site: "@AbicRealty by Jayvee Valeriano",
    creator: "@AbicRealty by Jayvee Valeriano",
    title: "About | ABIC Realty by Jayvee Valeriano",
    description:
      "Learn more about ABIC Realty, our services, and values in providing top-tier real estate solutions.",
    images: [
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
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

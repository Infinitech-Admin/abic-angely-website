import { Toaster } from "react-hot-toast";

import PropertyImage from "./propertyimage";
import PropertyDetails from "./propertydetails";
import ListingsInqiryCard from "./propertyinquiry";

import AgentProfile from "@/app/single/property/[id]/[name]/[description]/profilecard";
import { getAuthHeaders } from "@/components/headers";
import Loading from "@/components/loaders/loading";

// Capitalize function for the name
const capitalizeWords = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

type paramsTypes = Promise<{ id: string; name: string; description: string }>;

export async function generateMetadata({ params }: { params: paramsTypes }) {
  const { id, name, description } = await params;
  const formattedName = capitalizeWords(name);

  return {
    title: formattedName,
    description: description || "Default description",
    openGraph: {
      title: `${formattedName} | ABIC Realty and Consultancy Corporation`,
      description: description || "Default description",
      url: `https://www.abic-website.vercel.app/property/${id}`,
      siteName: "ABIC Realty",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}media/abic-realty-loan-calculator-banner.png`,
          width: 1200,
          height: 630,
          alt: "ABIC Realty Property",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: "@AbicRealty",
      creator: "@AbicRealty",
      title: `Property: ${formattedName} | ABIC Realty`,
      description: description || "Default description",
      images: [
        `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}media/abic-realty-loan-calculator-banner.png`,
      ],
    },
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
    },
  };
}

type paramsType = Promise<{ id: string }>;
export default async function PropertyPage({ params }: { params: paramsType }) {
  const { id } = await params;
  const headers = getAuthHeaders();

  let data;
  let fetchAgent;

  try {
    const propertyResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`,
      { headers: headers },
    );

    if (!propertyResponse.ok) {
      throw new Error(
        `Failed to fetch property with id ${id}: ${propertyResponse.statusText}`,
      );
    }

    const propertyData = await propertyResponse.json();
    data = propertyData.record;

    const agentResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "GET",
      headers: {
        "User-ID": process.env.NEXT_PUBLIC_USER_ID || "",
        "Content-Type": "application/json",
      },
    });

    if (!agentResponse.ok) {
      throw new Error(
        `Failed to fetch agent data: ${agentResponse.statusText}`,
      );
    }
    const agentData = await agentResponse.json();

    fetchAgent = agentData.record;
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <section className="flex flex-col items-center gap-6 md:py-8 w-full">
        <div className="container mx-auto px-2">
          <h1>Error Fetching Data</h1>
          <p>
            Sorry, we couldn&apos;t load the property details or agent
            information at the moment.
          </p>
        </div>
      </section>
    );
  }


  return (
    <>
      <Toaster />
      <section className="flex flex-col items-center gap-6 md:py-8 w-full">
        <div className="container mx-auto px-2">
          {!data || data.length === 0 ? (
            <Loading label="Loading Properties" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start w-full">
              <div className="col-span-3 lg:col-span-2">
                <PropertyImage properties={[data]} />
                <PropertyDetails properties={data} />
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:col-span-1 sticky top-5 ">
                <div>
                  <AgentProfile agent={fetchAgent} />
                </div>
                <div className="w-full">
                  <ListingsInqiryCard data={data} />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

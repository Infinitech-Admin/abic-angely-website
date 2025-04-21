import React, { Suspense } from "react";

import SinglePropertyClient from "./propertyclient";

import { getAuthHeaders } from "@/components/headers";
import NoData from "@/components/error/nodata";

interface Property {
  id: string;
  name: string;
  images: string;
  description: string;
  location: string;
  price: number;
  max_price: number;
  status: string;
  unit_type: string;
  unit_furnish: string;
  sale: string;
  amenities: string;
  user_id: string;
  sale_type: string;
  unit_status: string;
  payment: string;
  area: number;
  unit_number: number;
  terms: string;
  title: string;
  turnover: string;
}

// Fetch properties function
const fetchProperties = async (): Promise<Property[]> => {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/properties`;
    const headers = getAuthHeaders();

    if (!endpoint) {
      throw new Error("API URL is not defined in the environment variables");
    }
    const res = await fetch(endpoint, { cache: "no-store", headers: headers });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return data.records || [];
  } catch (error) {
    return [];
  }
};

export const dynamic = "force-dynamic";

export default async function SinglePropertyPage() {
  const properties = await fetchProperties();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {properties.length > 0 ? (
        <SinglePropertyClient properties={properties} />
      ) : (
        <div className="col-span-full">
          <NoData />
        </div>
      )}
    </Suspense>
  );
}

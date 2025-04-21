"use client";

import React, { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import PropertyCard from "@/components/card/propertycard";
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
  unit_status: string;
  sale_type: string;
}

interface Props {
  properties: Property[];
}

export default function PropertyFinderClient({ properties }: Props) {
  return (
    <section className="px-4 flex flex-col items-center w-full">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Property Finder
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-xl dark:text-gray-300 leading-relaxed">
            Discover the perfect property with unmatched quality, dedication,
            and personalized guidance.
          </p>

          <Suspense fallback={<div>Loading sections...</div>}>
            <FilteredPropertiesSection properties={properties} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function FilteredPropertiesSection({ properties }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const filteredProperties = useMemo(() => {
    const lowerCaseQuery = query.toLowerCase();

    return properties.filter(
      (property) =>
        property.name.toLowerCase().includes(lowerCaseQuery) ||
        property.location.toLowerCase().includes(lowerCaseQuery),
    );
  }, [properties, query]);

  return (
    <>
      <p className="py-12">
        Search Results: {query || "No search term provided"}
      </p>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 md:gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full">
            <NoData />
          </div>
        )}
      </div>
    </>
  );
}

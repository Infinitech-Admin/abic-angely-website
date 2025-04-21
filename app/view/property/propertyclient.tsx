"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BsCopy, BsHouseCheckFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { TbRulerMeasure2 } from "react-icons/tb";
import { LuBuilding2 } from "react-icons/lu";
import { FaCalendarCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { Button, Tooltip } from "@nextui-org/react";

import FAQ from "./faq";
import AgentProfile from "./profilecard";
import Nearby from "./nearby";
import ListingsInqiryCard from "./listingsinquirycard";
import ListingsMedia from "./listingsmedia";

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

interface PropertyProps {
  properties: Property[];
}

function getOrdinalSuffix(n: number): string {
  if (n % 100 >= 11 && n % 100 <= 13) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const SinglePropertyClient: React.FC<PropertyProps> = ({ properties }) => {
  const [filteredProperty, setFilteredProperty] = useState<Property | null>(
    null,
  );

  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  // Filter the properties based on the `id` parameter
  useEffect(() => {
    const foundProperty = properties.find((property) => property.id === id);

    setFilteredProperty(foundProperty || null);
  }, [id, properties]);

  if (!filteredProperty) {
    return <p>Property not found.</p>;
  }

  // Parse amenities if they are stored as a stringified array
  let amenities: string[] = [];

  if (filteredProperty.amenities) {
    try {
      amenities = Array.isArray(filteredProperty.amenities)
        ? filteredProperty.amenities
        : JSON.parse(filteredProperty.amenities);
    } catch (error) {
      throw new Error(
        `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
      );
    }
  }

  const handleShare = () => {
    const shareableLink = window.location.href;

    toast.success("Link copied to clipboard!");
    navigator.clipboard.writeText(shareableLink);
  };

  return (
    <Suspense fallback={<div>Loading sections...</div>}>
      <section className="flex flex-col items-center gap-6 py-12 w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start w-full">
            {/* Left Content */}
            <div className="col-span-3 lg:col-span-2">
              <ListingsMedia properties={[filteredProperty]} />
              <div className="flex items-center gap-2 uppercase">
                <small className="px-1 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-green-200 text-green-700">
                  {filteredProperty.unit_status}
                </small>

                <span className="bg-blue-200 px-1 py-0.5 rounded-md font-medium text-blue-800 text-tiny">
                  {filteredProperty.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl md:text-3xl mt-2">
                  {filteredProperty.unit_type} | {filteredProperty.name}
                </h1>{" "}
                <Tooltip content="Share link" showArrow={true}>
                  <Button
                    className="relative cursor-pointer text-indigo-600 hover:text-indigo-400 hover:scale-125"
                    variant="light"
                    onPress={handleShare}
                  >
                    <BsCopy className="relative" size={24} />
                  </Button>
                </Tooltip>
              </div>
              {/* Property Name */}
              <p className="text-default-500 text-sm">
                {filteredProperty.location}
              </p>{" "}
              {/* Property Location */}
              <div className="flex flex-col gap-6 mt-4">
                <div>
                  <h1 className="font-bold uppercase">Description</h1>
                  <p className="text-default-500 text-md">
                    {filteredProperty.description}
                  </p>
                </div>

                <h1 className="font-bold uppercase">Details</h1>
                <div className="flex flex-wrap gap-2">
                  {filteredProperty.status === "For Sale" ? (
                    <>
                      <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                        <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-full">
                          <BsHouseCheckFill />
                        </div>
                        <p className="text-base text-violet-600">
                          {filteredProperty.status}
                        </p>
                      </div>

                      {filteredProperty.sale_type === "RFO" ? (
                        <>
                          <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                            <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                              <BsHouseCheckFill />
                            </div>
                            <p className="text-base text-violet-600">
                              {filteredProperty.sale_type}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                            <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                              <MdPayments />
                            </div>
                            <p className="text-base text-violet-600">
                              {filteredProperty.payment}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                            <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                              <BsHouseCheckFill />
                            </div>
                            <p className="text-base text-violet-600">
                              {filteredProperty.title}
                            </p>
                          </div>
                        </>
                      ) : filteredProperty.sale_type === "Pre-Selling" ? (
                        <>
                          <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                            <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                              <BsHouseCheckFill />
                            </div>
                            <p className="text-base text-violet-600">
                              {filteredProperty.sale_type}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                            <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                              <FaCalendarCheck />
                            </div>
                            <p className="text-base text-violet-600">
                              {new Date(
                                filteredProperty.turnover,
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : filteredProperty.status === "For Rent" ? (
                    <>
                      <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                        <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-full">
                          <BsHouseCheckFill />
                        </div>
                        <p className="text-base text-violet-600">
                          {filteredProperty.status}
                        </p>
                      </div>

                      <div className="text-base text-violet-600">
                        <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                          <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                            <MdPayments />
                          </div>
                          <p className="text-base text-violet-600">
                            {filteredProperty.terms}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                    <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                      <TbRulerMeasure2 />
                    </div>
                    <p className="text-base text-violet-600">
                      {filteredProperty.area} sqm
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-default-200 px-2 py-2 rounded-lg">
                    <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
                      <LuBuilding2 />
                    </div>
                    <p className="text-base text-violet-600">
                      {filteredProperty.unit_number}
                      {getOrdinalSuffix(filteredProperty.unit_number)} Floor
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h1 className="font-bold uppercase">General Features</h1>
                  <div className="inline-flex flex-wrap gap-2 mt-4">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded-md text-sm hover:bg-gray-200 dark:bg-gray-900"
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full py-12">
                  <h1 className="font-bold text-4xl text-violet-800">
                    Nearby Properties
                  </h1>
                  <p className="text-sm mb-4">
                    Discover your dream home from our curated collection of
                    luxurious properties.
                  </p>
                  <section className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 py-12 md:py-16 w-full">
                    <Nearby
                      currentPropertyId={filteredProperty.id}
                      properties={properties}
                    />
                  </section>
                </div>

                <FAQ />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3 flex flex-col gap-4 md:col-span-1 sticky top-5">
              <div>
                <AgentProfile />
              </div>
              <div className="w-full">
                <ListingsInqiryCard data={filteredProperty} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default SinglePropertyClient;

"use client";

import React from "react";
import { Image, Tooltip } from "@nextui-org/react";
import { BsCheckCircle, BsCopy } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

interface ServiceDeetsComponentProps {
  service: {
    record: {
      id: string;
      name: string;
      description: string;
      image: string;
    };
  };
}

const handleShare = () => {
  const shareableLink = window.location.href;

  toast.success("Link copied to clipboard!");
  navigator.clipboard.writeText(shareableLink);
};

export default function ServiceDeetsComponent({
  service,
}: ServiceDeetsComponentProps) {
  if (!service) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {service.record.name}
              </h2>
              <Tooltip content="Share link" showArrow={true}>
                <button
                  aria-label="Share link" // Adding an accessible label for the button
                  className="relative cursor-pointer text-indigo-600 hover:text-indigo-400 hover:scale-125"
                  onClick={handleShare}
                >
                  <BsCopy className="relative" size={24} />
                </button>
              </Tooltip>
            </div>
            <p className="mt-4 text-lg text-gray-500">
              {service.record.description}
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h3 className="flex-shrink-0 pr-4 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  Key Benefits
                </h3>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                {["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"].map(
                  (benefit, index) => (
                    <li key={index} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <BsCheckCircle
                          aria-hidden="true"
                          className="h-5 w-5 text-green-400"
                        />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{benefit}</p>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <Image
                isBlurred
                isZoomed
                alt={service.record.name}
                height={500}
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}services/${service.record.image}`}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import { useArticles } from "./data";

import WhatsNewCard from "@/components/card/whatsnewcard";
import NoData from "@/components/error/nodata";

const infrastructureData = [
  {
    id: 1,
    title: "Market Growth and Investments",
    image: "https://i.ibb.co/y0JVvBw/1733395764.png",
    description:
      "Are you working hard for a good future? Beyond saving up money, making a good investment is a practical way to expand your assets and to grow your wealth. This way, you are able to earn more and set up a good future for yourself and your loved ones.",
    location: "Makati City",
    budget: "1,000,000.00",
    date: "Dec 05, 2024",
  },
];

const ConstructionSection = () => {
  const { articles, isLoading, error } = useArticles();

  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700">
            On-going Infrastructure
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl leading-relaxed">
            Stay informed about the latest infrastructure projects that shape
            the future of real estate, driving growth and creating new
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          {articles.records["Real Estate Tips"]?.length > 0 ? (
            <WhatsNewCard data={articles.records["Real Estate Tips"]} />
          ) : (
            <div className="col-span-full">
              <NoData />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;

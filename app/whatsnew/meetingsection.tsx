import React from "react";

import { useArticles } from "./data";

import WhatsNewCard from "@/components/card/whatsnewcard";
import NoData from "@/components/error/nodata";


const MeetingSection = () => {
  const { articles, isLoading, error } = useArticles();

  if (error) return <p className="text-red-500">An error has occurred.</p>;
  if (isLoading) return <p className="text-gray-500">Loading...</p>;

  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700">
            Meetings
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl leading-relaxed">
            Discover our collaborative meetings that foster communication,
            innovation, and problem-solving within the real estate industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          {articles.records.Meetings?.length > 0 ? (
            <WhatsNewCard data={articles.records.Meetings} />
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

export default MeetingSection;

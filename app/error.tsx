"use client";

import { Button } from "@nextui-org/react";
import { useEffect } from "react";

import { TbAlertTriangle } from "react-icons/tb";


export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <TbAlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Something went wrong!</h2>
        <p className="text-gray-600 mt-2">An unexpected error has occurred. Please try again.</p>
        <Button
          onClick={reset}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white"
        >
          Try Again
        </Button>
      </div>
    </section>
  );
}
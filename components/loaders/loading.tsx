import { Spinner } from "@nextui-org/react";
import React from "react";

interface LoadingProps {
  label: string;
}
const Loading: React.FC<LoadingProps> = ({ label }) => {
  return (
    <div className="flex justify-center w-full gap-4 py-24">
      <Spinner label={label} size="lg" />
    </div>
  );
};

export default Loading;

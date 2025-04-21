import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Square Loader with Circular Border */}
      <div className="relative w-32 h-32 flex items-center justify-center rounded-md">
        {/* Rotating Circular Border */}
        <div className="absolute inset-0 w-full h-full border-4 border-transparent border-t-violet-900 border-b-red-900 rounded-full animate-spin" />

        {/* Logo inside the Loader */}
        <Image
          alt="ABIC Realty Logo"
          className="z-10"
          height={80}
          src="/assets/img/ABIC Realty.png"
          width={80}
        />
      </div>
    </div>
  );
}

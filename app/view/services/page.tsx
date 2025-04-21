"use client";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function ViewServicesPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-2xl">
        <Card className="max-w-md py-2">
          <CardBody>
            <Image
              alt="NextUI hero Image"
              className="mx-auto"
              height={250} // You can add height if needed for responsiveness
              src="https://abicrealtyph.com/images/service/1734580473.png"
              width={450}
            />
          </CardBody>
        </Card>

        <h1 className="text-center font-bold text-4xl text-violet-700 py-2 mt-4">
          Cleaning Services
        </h1>
        <p className="text-default-500 text-center px-4">
          Whether you&lsquo;re preparing a property for sale, lease, or just
          need regular maintenance, we are here to ensure your space is spotless
          and inviting. We offer: 📌 PRE-SALE OR PRE-LEASE CLEANING 📌 DEEP
          CLEANING 📌 POST-RENOVATION CLEANING 📌 MOVE-IN/MOVE-OUT CLEANING 📌
          REGULAR HOUSEKEEPING SERVICES 📌 CARPET & UPHOLSTERY CLEANING 📌
          WINDOW CLEANING 📌 MOVE-OUT DEEP CLEANING 🙋🏻 QUALITY SERVICE ✈️ FAST
          SERVICE 📥 AFFORDABLE PRICES 📋 CUSTOMIZED CLEANING PLANS
        </p>
        <h2 className="font-bold text-lg text-start py-2">
          If you have question please contact&lsquo; 09651983796
        </h2>
      </div>
    </section>
  );
}

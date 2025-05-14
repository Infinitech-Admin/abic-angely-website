import { Card, CardBody, Image, Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";

const AgentData = [
  {
    id: 1,
    name: "Jayvee Valeriano",
    position: "Senior Sales Manager",
    email: "abicrealty.jayvee@gmail.com",
    phone: "09265536964",
    images:
       `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}agent/abic-jayvee.jpg`,
    facebook: "https://www.facebook.com/share/15DFEfQXNj/",
  },
];

const AgentProfile = () => {
  return (
    <div className="flex flex-col gap-2">
      {AgentData.map((data) => (
        <Card
          key={data.id}
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-4 w-full">
                <Image
                  className="object-cover object-top overflow-hidden rounded-xl w-full mb-4"
                  src={data.images}
                />
              </div>

              <div className="flex flex-col col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-large font-bold text-violet-800 mt-2">
                      {data.name}
                    </h1>
                    <p className="text-small font-semibold text-foreground/80">
                      {data.position}
                    </p>
                    <div className="mt-2">
                      <p className="text-xs text-foreground/80">
                        Email: {data.email}
                      </p>
                      <p className="text-xs text-foreground/80">
                        Phone: {data.phone}
                      </p>
                    </div>

                    <div className="flex gap-2 py-4">
                      <Link
                        isExternal
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={data.facebook}
                      >
                        <FaFacebook className="text-violet-600" size={20} />
                      </Link>
                      <Link
                        isExternal
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={`https://t.me/+63${data.phone}`}
                      >
                        <FaTelegram className="text-violet-600" size={20} />
                      </Link>
                      <Link
                        isExternal
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={`viber://chat?number=${data.phone}`}
                      >
                        <FaViber className="text-violet-600" size={20} />
                      </Link>
                      <Link
                        isExternal
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={`https://wa.me/${data.phone}`}
                      >
                        <FaWhatsapp className="text-violet-600" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default AgentProfile;

"use client";
import { Card, CardBody, Image, Spinner, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { FaFacebook, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";

interface Profile {
  id: string;
  name: string;
  email: string;
  profile?: {
    position?: string;
    about?: string;
    image?: string;
    phone?: string;
    telegram?: string;
    facebook?: string;
    instagram?: string;
  } | null;
}

interface ProfileProps {
  agent: Profile;
}

const AgentProfile: React.FC<ProfileProps> = ({ agent }) => {
  const [loadingCard, setLoadingCard] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setLoadingCard(id);
    setTimeout(() => {
      setLoadingCard(null);
    }, 1000);
  };

  const profile = agent.profile ?? {};
  const profileImage = profile.image
    ? `https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/profiles/${profile.image}`
    : "/default-avatar.png";

  return (
    <div className="flex flex-col gap-4">
      <Link
        key={agent.id}
        href={`/about`}
        onClick={() => handleClick(agent.id)}
      >
        <Card
          isBlurred
          className="border-none bg-background/60 max-w-[610px] relative"
          shadow="sm"
        >
          <CardBody>
            {loadingCard === agent.id && (
              <div
                className="absolute inset-0 flex justify-center items-center bg-white/70  z-10"
                style={{ borderRadius: "0.75rem" }}
              >
                <Spinner size="lg" />
                <span className="sr-only">Loading...</span>
              </div>
            )}

            <div className="grid grid-cols-12 gap-6 md:gap-4 items-center">
              {/* Image Section */}
              <div className="relative col-span-4 w-full">
                <Image
                  alt={`${agent.name}'s profile`}
                  className="object-cover object-top overflow-hidden rounded-xl w-full mb-4"
                  src={profileImage}
                />
              </div>

              {/* Profile Info */}
              <div className="flex flex-col col-span-8">
                <h1 className="text-large font-bold text-violet-800 mt-2">
                  {agent.name}
                </h1>
                <p className="text-small font-semibold text-foreground/80">
                  {profile.position || "Unknown Position"}
                </p>

                <div className="mt-2">
                  {agent.email && (
                    <p className="text-xs text-foreground/80">
                      Email: {agent.email}
                    </p>
                  )}
                  {profile.phone && (
                    <p className="text-xs text-foreground/80">
                      Phone: {profile.phone}
                    </p>
                  )}
                </div>

                {/* Social Media Links */}
                <div className="flex gap-2 py-4">
                  {profile.facebook && (
                    <Link
                      className="bg-violet-200 px-2 py-2 rounded-xl"
                      href={`${profile.facebook}`}
                      target="_blank"
                    >
                      <span>
                        <FaFacebook className="text-violet-600" size={20} />
                      </span>
                    </Link>
                  )}
                  {profile.telegram && (
                    <Link
                      className="bg-violet-200 px-2 py-2 rounded-xl"
                      href={`https://t.me/${profile.telegram}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaTelegram className="text-violet-600" size={20} />
                    </Link>
                  )}
                  {profile.phone && (
                    <>
                      <Link
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={`viber://chat?number=${profile.phone}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaViber className="text-violet-600" size={20} />
                      </Link>
                      <Link
                        className="bg-violet-200 px-2 py-2 rounded-xl"
                        href={`https://wa.me/${profile.phone}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaWhatsapp className="text-violet-600" size={20} />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default AgentProfile;

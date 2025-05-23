"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { MdFacebook, MdMail, MdOutlineWork, MdPhone } from "react-icons/md";

interface Profile {
  name: string;
  email: string;
  profile: {
    position: string;
    about: string;
    image: string;
    phone: string;
    telegram: string;
    facebook: string;
    instagram: string;
  };
}

interface ProfileProps {
  profile: Profile;
}

const AgentProfile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <Card isBlurred className="border-none bg-background/60" shadow="sm">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          {/* Profile Image */}
          <div className="relative col-span-6 md:col-span-3">
            <Image
              alt={profile.name}
              className="object-cover object-top w-full h-full"
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}profiles/${profile.profile.image}`}
            />
          </div>

          {/* Profile Info */}
          <div className="flex flex-col col-span-6 md:col-span-9">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-3xl font-bold mt-2 uppercase">
                  {profile.name}
                </h1>
                <h2 className="text-md uppercase text-foreground/80">
                  {profile.profile.position}
                </h2>
            
                <hr className="my-4" />

                {/* Contact Information */}
                <div className="py-2">
                  <h1 className="text-sm text-foreground/70">
                    Contact Information
                  </h1>
                  <div className="flex flex-col py-4 gap-2">
                    {/* Address */}
                    <div className="flex items-center gap-2">
                      <div className="bg-violet-200 px-2 py-2 rounded-lg">
                        <MdOutlineWork className="text-violet-700" size={18} />
                      </div>
                      <span>
                        Unit 202, Campos Rueda Building, 101 Urban Ave, Makati,
                        1206 Metro Manila
                      </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <div className="bg-violet-200 px-2 py-2 rounded-lg">
                        <MdMail className="text-violet-700" size={18} />
                      </div>
                      <Link
                        className="text-blue-600 hover:underline"
                        href={`mailto:${profile.email}`}
                      >
                        {profile.email}
                      </Link>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <div className="bg-violet-200 px-2 py-2 rounded-lg">
                        <MdPhone className="text-violet-700" size={18} />
                      </div>
                      <Link
                        className="text-blue-600 hover:underline"
                        href={`tel:${profile.profile.phone}`}
                      >
                        {profile.profile.phone}
                      </Link>
                    </div>

                    {/* Telegram */}
                    {profile.profile.telegram && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <FaTelegram className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          href={`https://t.me/${profile.profile.telegram}`}
                          target="_blank"
                        >
                          Chat on Telegram
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Social Media */}
                <div className="py-2">
                  <h1 className="text-sm text-foreground/70">Social Media</h1>
                  <div className="flex flex-col py-4 gap-2">
                    {/* Facebook */}
                    {profile.profile.facebook && (
                      <div className="flex items-center gap-2">
                        <div className="bg-violet-200 px-2 py-2 rounded-lg">
                          <MdFacebook className="text-violet-700" size={18} />
                        </div>
                        <Link
                          className="text-blue-600 hover:underline"
                          href={profile.profile.facebook}
                          target="_blank"
                        >
                          Angely Victoriano
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AgentProfile;

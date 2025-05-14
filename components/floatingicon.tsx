"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { LuGlobe, LuX, LuFacebook, LuPhone, LuMail, LuMessageCircle, LuSend } from "react-icons/lu";

// Social Media Icons Configuration using react-icons
const socialMediaConfig = [
  { id: 1, field: "facebook", icon: <LuFacebook className="text-white w-6 h-6" /> },
  { id: 2, field: "phone", icon: <LuPhone className="text-white w-6 h-6" /> },
  { id: 3, field: "email", icon: <LuMail className="text-white w-6 h-6" /> },
  { id: 4, field: "viber", icon: <LuMessageCircle className="text-white w-6 h-6" /> },
  { id: 5, field: "telegram", icon: <LuSend className="text-white w-6 h-6" /> },
];

const FloatingIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const agent_id = process.env.NEXT_PUBLIC_USER_ID;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MAIN}/all-users`);
        if (!response.ok) throw new Error("Failed to fetch social links");

        const data = await response.json();
        const agent = data.record.find((a: { id: string }) => a.id === agent_id);

        if (agent && agent.profile) {
          setSocialLinks({
            facebook: agent.profile.facebook,
            phone: `tel:${agent.profile.phone}`,
            email: `mailto:${agent.email}`,
            viber: `viber://chat?number=${agent.profile.viber}`,
            telegram: `https://t.me/+63${agent.profile.telegram}`,
            whatsapp: `https://wa.me/${agent.profile.whatsapp}`,
          });
        } else {
          console.warn("Agent not found or missing profile data.");
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <>
      {/* Floating icons for large screens */}
      <div className="fixed top-1/2 right-9 transform -translate-y-1/2 z-50 hidden lg:flex">
        <div className="flex flex-col gap-4">
          {socialMediaConfig.map((icon) => (
            <Link
              key={icon.id}
              href={socialLinks[icon.field] || "#"}
              rel="noopener noreferrer"
              target={socialLinks[icon.field] ? "_blank" : "_self"}
              className={`bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-800 transition ${!socialLinks[icon.field] && "opacity-50 cursor-not-allowed"}`}
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Floating icons for small screens */}
      <div className="fixed bottom-24 right-4 transform -translate-y-1/2 z-50">
        <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 lg:hidden">
          <div className={`flex flex-col gap-2 transition-all ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"}`}>
            {socialMediaConfig.map((icon) => (
              <a
                key={icon.id}
                href={socialLinks[icon.field] || "#"}
                rel="noopener noreferrer"
                target={socialLinks[icon.field] ? "_blank" : "_self"}
                className={`bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-800 transition ${!socialLinks[icon.field] && "opacity-50 cursor-not-allowed"}`}
              >
                {icon.icon}
              </a>
            ))}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-700 p-3 rounded-full shadow-lg"
          >
            {isOpen ? <LuX className="text-white w-6 h-6" /> : <LuGlobe className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;

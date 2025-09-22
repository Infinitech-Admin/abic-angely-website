"use client";
import { Button, Input, Spinner } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { usePWA } from "../hooks/usePWA"; // Import the PWA hook

import {
  FaArrowDown,
  FaFacebook,
  FaTelegram,
  FaViber,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
  FaXmark,
} from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInstallPopup, setShowInstallPopup] = useState(false); // State for install popup
  const [hasShownPopup, setHasShownPopup] = useState(false); // Track if popup was already shown
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    telegram: "",
    viber: "",
    whatsapp: "",
  });

  const pathname = usePathname();
  const { isInstallable, isInstalled, installApp } = usePWA(); // Use PWA hook

  useEffect(() => {
    if (pathname === "/room-planner") return;

    const fetchSocialLinks = async () => {
      try {
        const agent_id = process.env.NEXT_PUBLIC_USER_ID;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/all-users`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        const agents = data.record || [];

        const agent = agents.find((a: { id: string }) => a.id === agent_id);

        if (agent?.profile) {
          setSocialLinks({
            facebook: agent.profile.facebook,
            viber: agent.profile.viber,
            telegram: agent.profile.telegram,
            whatsapp: agent.profile.whatsapp,
          });
        }
      } catch (error) {
        console.error("Error fetching agent's social links:", error);
      }
    };

    fetchSocialLinks();

    // Show install popup after component mounts if app is installable
    // Only show once per session
    const timer = setTimeout(() => {
      if (isInstallable && !isInstalled && !hasShownPopup) {
        setShowInstallPopup(true);
        setHasShownPopup(true);
      }
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://abicrealtyphdianne.com/api/main/subscribers",
        { email }
      );

      const emailAgentResponse = await axios.post(
        "/api/email/inquiry/newsletter",
        { email },
        { headers: { Accept: "application/json" } }
      );

      if (response?.data && emailAgentResponse?.data) {
        toast.success("Successfully subscribed!");
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle install app popup
  const handleInstallPopupClose = () => {
    setShowInstallPopup(false);
    // Auto-hide after 10 seconds if user doesn't interact
  };

  const handleInstallConfirm = () => {
    if (isInstallable) {
      installApp();
    }
    setShowInstallPopup(false);
  };

  // Auto-hide popup after 10 seconds
  useEffect(() => {
    if (showInstallPopup) {
      const autoHideTimer = setTimeout(() => {
        setShowInstallPopup(false);
      }, 10000); // Auto-hide after 10 seconds

      return () => clearTimeout(autoHideTimer);
    }
  }, [showInstallPopup]);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What's New", href: "/whatsnew" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  if (pathname === "/room-planner") return null;

  return (
    <>
      <footer className="flex-grow md:ml-64 relative bg-violet-900 text-white overflow-hidden">
        <section className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row md:flex-wrap lg:justify-between gap-4">
            {/* About Section */}
            <div className="flex-col">
              <h1 className="font-bold py-2">About</h1>
              <p className="md:max-w-md text-base">
                With skill, passion, and unwavering dedication, we strive for
                engineering excellence in quality homebuilding and community
                development that will stand the test of time.
              </p>
              
              {/* Optional: Keep a small install button for manual trigger */}
              {isInstallable && !isInstalled && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowInstallPopup(true)}
                    className="text-sm text-purple-200 hover:text-purple-100 underline"
                  >
                    Install our app for better experience
                  </button>
                </div>
              )}

              {/* Show "App Installed" if already installed */}
              {isInstalled && (
                <div className="mt-4">
                  <div className="flex items-center px-4 py-2 text-green-300 rounded-lg bg-green-800/30 border border-green-500/30">
                    <svg 
                      className="w-4 h-4 text-green-300 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>App Installed</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex space-x-16">
              <div className="footer-col">
                <h1 className="font-bold py-2">Quick Links</h1>
                <ul className="text-base">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        className="flex items-center hover:text-violet-400"
                        href={link.href}
                      >
                        <IoMdArrowDropright size={18} /> {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured */}
              <div className="footer-col max-w-xs">
                <h1 className="font-bold py-2">Featured</h1>
                <ul className="links">
                  {[
                    { name: "DMCI Documents", path: "/documents" },
                    { name: "Submit Property", path: "/submit-property" },
                    { name: "Loan Calculator", path: "/loancalculator" },
                    { name: "Room Planner", path: "/room-planner", newTab: true },
                  ].map((feature, index) => (
                    <li key={index}>
                      <a
                        className="flex items-center hover:text-violet-400"
                        href={feature.path}
                        {...(feature.newTab && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        <IoMdArrowDropright size={18} /> {feature.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="footer-col md:max-w-md">
              <h1 className="font-bold py-2">Newsletter</h1>
              <p>
                Subscribe to our newsletter for a weekly dose of news, updates,
                helpful tips, and exclusive offers.
              </p>
              <form onSubmit={handleSubmit} className="py-4">
                <div className="flex items-center gap-4">
                  <Input
                    label="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    className="bg-violet-200 text-violet-900"
                    size="lg"
                  >
                    {loading ? (
                      <Spinner size="sm" color="current" />
                    ) : (
                      "SUBSCRIBE"
                    )}
                  </Button>
                </div>
              </form>

              <h1 className="font-bold py-2">Follow Us</h1>
              <div className="flex gap-2">
                {[
                  {
                    field: "facebook",
                    url: socialLinks.facebook,
                    icon: <FaFacebook className="text-white w-6 h-6" />,
                  },
                  {
                    field: "whatsapp",
                    url: socialLinks.whatsapp
                      ? `https://wa.me/${socialLinks.whatsapp}`
                      : "",
                    icon: <FaWhatsapp className="text-white w-6 h-6" />,
                  },
                  {
                    field: "email",
                    url: "mailto:abicrealtycorporation@gmail.com",
                    icon: <FaEnvelope className="text-white w-6 h-6" />,
                  },
                  {
                    field: "viber",
                    url: socialLinks.viber
                      ? `viber://chat?number=${socialLinks.viber}`
                      : "",
                    icon: <FaViber className="text-white w-6 h-6" />,
                  },
                  {
                    field: "telegram",
                    url: socialLinks.telegram
                      ? `https://t.me/+63${socialLinks.telegram}`
                      : "",
                    icon: <FaTelegram className="text-white w-6 h-6" />,
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.url || "#"}
                    target={item.url ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full shadow-md transition ${
                      item.url
                        ? "hover:opacity-90"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    style={{ backgroundColor: "#5b21b6" }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className="bg-violet-800 text-center py-4 px-12">
          <div className="flex flex-col md:flex-row justify-center items-center text-center md:gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} ABIC Realty. All Rights Reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center md:gap-4 text-sm">
              <Link href="/termsandconditions">Terms and Conditions</Link>
              <Link href="/dataprivacy">Data and Privacy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Install App Popup - Shows automatically */}
      {showInstallPopup && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 z-50 animate-slide-up">
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                  <FaDownload className="text-violet-600 w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Install ABIC Realty</h3>
              </div>
              <button
                onClick={handleInstallPopupClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaXmark size={18} />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Get quick access to properties and tools. Install our app for a better experience!
            </p>

            <div className="flex gap-2">
              <button
                onClick={handleInstallPopupClose}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-md 
                          hover:bg-gray-50 transition-colors"
              >
                Not now
              </button>
              <button
                onClick={handleInstallConfirm}
                className="flex-1 px-3 py-2 text-sm bg-violet-600 text-white rounded-md 
                          hover:bg-violet-700 transition-colors flex items-center justify-center gap-1"
              >
                <FaDownload className="w-3 h-3" />
                Install
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

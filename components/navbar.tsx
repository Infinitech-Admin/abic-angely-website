"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // Initialize router

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar for small screens */}
      <div className="md:hidden flex items-center justify-between p-4 bg-violet-700 shadow-md sticky top-0 left-0 w-full z-50">
        <button
          aria-controls="logo-sidebar"
          aria-expanded={isSidebarOpen ? "true" : "false"}
          className="text-white focus:outline-none"
          type="button"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                fillRule="evenodd"
              />
            </svg>
          )}
        </button>
        <button onClick={() => router.push("/")} className="flex items-center">
          <Image
            alt="ABIC Logo"
            height={80}
            src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-logo.png"
            width={80}
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        aria-label="Sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-cover bg-center bg-no-repeat ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        id="logo-sidebar"
      >
        <div
          className="h-full flex flex-col px-3 py-2 overflow-y-auto bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-sidebar.png')",
          }}
        >
          {/* Logo Section */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center mb-5 mt-24 py-8 md:mt-0"
          >
            <Image
              alt="ABIC Logo"
              height={200}
              src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-logo.png"
              width={200}
            />
          </button>

          {/* Navigation Links */}
          <ul className="space-y-2 py-2 font-medium flex-1">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Me" },
              { path: "/whatsnew", label: "What's New" },
              { path: "/properties", label: "Properties" },
              { path: "/services", label: "Services" },
              { path: "/careers", label: "Careers" },
              { path: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.path}>
                <button
                  className={`w-full text-left flex items-center p-2 text-white rounded-lg group ${
                    pathname === link.path
                      ? "bg-violet-800"
                      : "hover:bg-violet-800"
                  }`}
                  onClick={() => router.push(link.path)}
                >
                  <span className="ml-3">{link.label}</span>
                </button>
              </li>
            ))}

            {/* Separator */}
            <div className="my-4 py-8" />

            {[
              { path: "/documents", label: "DMCI Documents" },
              { path: "/submit-property", label: "Submit Property" },
              { path: "/loancalculator", label: "Loan Calculator" },
              {
                path: "https://roomplanner-nu.vercel.app/roomplanner/abic",
                label: "Room Planner",
              },
            ].map((link) => (
              <li key={link.path}>
                <button
                  className={`w-full text-left flex items-center p-2 text-white rounded-lg group ${
                    pathname === link.path
                      ? "bg-violet-800"
                      : "hover:bg-violet-800"
                  }`}
                  onClick={() =>
                    link.path.startsWith("http")
                      ? window.open(link.path, "_blank")
                      : router.push(link.path)
                  }
                >
                  <span className="ml-3">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

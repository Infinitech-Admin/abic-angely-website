'use client';

import "@/styles/globals.css";
import { clsx } from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import LoadingWrapper from "@/components/loaders/loadingwrapper";
import { siteConfig } from "@/config/site";
import FloatingIcons from "@/components/floatingicon";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
  noSidebar = false,
}: {
  children: React.ReactNode;
  noSidebar?: boolean;
}) {
  const pathname = usePathname();

  const isRoomPlanner = pathname === "/room-planner";

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased relative overflow-x-hidden",
          fontSans.variable
        )}
        style={{
          backgroundImage: "url('https://i.ibb.co/5Y2tMn3/bgimg.png')",
        }}
      >
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <LoadingWrapper>
            <main className={clsx("flex-grow", !noSidebar && "md:ml-64")}>
              {children}
            </main>

            {!isRoomPlanner && <Footer />}
            {!isRoomPlanner && <FloatingIcons />}
          </LoadingWrapper>
        </div>

        {!isRoomPlanner && <Chatbot />}
      </body>
    </html>
  );
}

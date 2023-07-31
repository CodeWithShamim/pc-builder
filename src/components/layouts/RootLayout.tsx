import React, { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Link from "next/link";
import { Button } from "antd";

interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen md:py-6 max-w-5xl lg:max-w-6xl mx-auto p-4 md:px-6">
        {children}
      </div>

      <div className="fixed bottom-10 right-2 bg-primary rounded-full px-2 py-3">
        <Link href="/tool/pc-builder" className="text-white no-underline flex flex-col items-center justify-center">
          <span className="text-xs font-bold">PC</span>
          <span className="text-xs font-bold">Builder</span>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;

import React, { ReactNode } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

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
      <Footer />
    </>
  );
};

export default RootLayout;

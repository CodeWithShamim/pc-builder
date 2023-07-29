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
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-6">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;

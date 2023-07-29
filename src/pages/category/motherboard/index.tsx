import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const Motherboardpage = () => {
  return <div className="h-screen py-6">Motherboard</div>;
};

Motherboardpage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Motherboardpage;

import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const PowerSupplyPage = () => {
  return <div className="h-screen py-6">Power Supply</div>;
};

PowerSupplyPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PowerSupplyPage;

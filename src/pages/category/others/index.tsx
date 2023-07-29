import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const OthersPage = () => {
  return <div className="h-screen py-6">Others</div>;
};

OthersPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default OthersPage;

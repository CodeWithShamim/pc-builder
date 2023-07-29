import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const StoragePage = () => {
  return <div className="h-screen py-6">Storage Device</div>;
};

StoragePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default StoragePage;

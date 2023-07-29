import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const RAMPage = () => {
  return <div className="h-screen py-6">RAM</div>;
};

RAMPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default RAMPage;

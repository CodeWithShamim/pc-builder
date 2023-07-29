import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const CPUPage = () => {
  return <div className="h-screen py-6">CPU</div>;
};

CPUPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CPUPage;

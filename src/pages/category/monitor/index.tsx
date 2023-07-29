import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";

const MonitorPage = () => {
  return <div className="h-screen py-6">Monitor</div>;
};

MonitorPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default MonitorPage;

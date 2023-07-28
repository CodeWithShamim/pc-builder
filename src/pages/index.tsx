import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-4xl">Home page</h1>
      <Button type="primary">Button</Button>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;

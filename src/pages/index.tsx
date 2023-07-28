import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import { NextPage } from "next";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl">Home page</h1>
      <Button type="primary">Button</Button>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;

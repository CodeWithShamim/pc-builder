import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}

const Home: NextPageWithLayout = ({ product }) => {
  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl text-center">
        Featured Products
      </h1>

      {/* products card  */}
      <ProductCard product={product} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;

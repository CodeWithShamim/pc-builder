import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types";

interface IProps {
  products: IProduct[];
}

const Home: NextPageWithLayout<IProps> = ({ products }) => {
  if (!products.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-2xl text-center">
        Featured Products
      </h1>

      {/* products  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center py-6">
        {products?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;

// SSG
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
}

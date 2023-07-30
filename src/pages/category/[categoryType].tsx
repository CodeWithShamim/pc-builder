import ProductCard from "@/components/ProductCard";
import RootLayout from "@/components/layouts/RootLayout";
import { IProduct } from "@/types";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

interface IProps {
  products: IProduct[];
}

const CategoryProductPage: NextPageWithLayout<IProps> = ({ products }) => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center py-6">
        {products?.slice(0, 8)?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

CategoryProductPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CategoryProductPage;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product: IProduct) => ({
    params: {
      categoryType: product._id,
    },
  }));

  return { paths, fallback: "blocking" };
}

// SSG
export async function getStaticProps(context: {
  params: { categoryType: string };
}) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/product?type=${params.categoryType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
}

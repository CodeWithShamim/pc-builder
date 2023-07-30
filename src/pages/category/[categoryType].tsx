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
        {products?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {products?.length < 1 && (
        <h2 className="text-center text-primary">Products not found! 🤦‍♂️</h2>
      )}
    </div>
  );
};

CategoryProductPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CategoryProductPage;

export async function getStaticPaths() {
  // if (typeof window === "undefined") {
  //   return { paths: [], fallback: "blocking" };
  // }

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product: IProduct) => ({
    params: {
      categoryType: product.type,
    },
  }));

  return { paths, fallback: "blocking" };
}

// SSG
export async function getStaticProps(context: {
  params: { categoryType: string };
}) {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const { params } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?type=${params.categoryType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
    revalidate: 60000,
  };
}

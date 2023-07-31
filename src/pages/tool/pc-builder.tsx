import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { IProduct } from "@/types";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addBuilderProduct } from "@/redux/features/products/productSlice";

interface IProps {
  products: IProduct[];
}

const PCBuilder: NextPageWithLayout<IProps> = ({ products }) => {
  const router = useRouter();
  const { builderProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleProductChoose = (product: IProduct) => {
    dispatch(addBuilderProduct(product));
    router.push("/tool/pc-builder");
  };

  console.log(builderProducts, "builderProducts");

  return (
    <div className="md:px-16">
      {/* if not exist type  */}
      {products.length < 1 && (
        <>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/products/cpu3.jpg"
                alt="cpu image"
                width={100}
                height={100}
                layout="responsive"
                className="w-12 h-12"
              />
              <h3 className="text-sm md:text-xl font-semibold">
                CPU/Processor
              </h3>
              <span className="text-xs">Required?</span>
            </div>
            <div className="w-28">
              <Link href={`/tool/pc-builder?productType=cpu`}>
                <Button type="primary" className="w-full">
                  Select
                </Button>
              </Link>
            </div>
          </div>
          <hr color="text-secondary" />
        </>
      )}

      {/* render selectd component  */}
      {products?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center py-6">
          {products?.map((product: IProduct) => (
            <div key={product._id} className="flex flex-col">
              <ProductCard product={product} />{" "}
              <Button
                onClick={() => handleProductChoose(product)}
                type="primary"
              >
                Add To Builder
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

PCBuilder.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PCBuilder;

// ssr
export const getServerSideProps = async (context: {
  query: { productType: string };
}) => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const { query } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?type=${query.productType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

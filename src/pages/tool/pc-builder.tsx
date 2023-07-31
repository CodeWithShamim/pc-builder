import RootLayout from "@/components/layouts/RootLayout";
import { Button, Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { IProduct } from "@/types";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addBuilderProduct,
  removeBuilderProduct,
} from "@/redux/features/products/productSlice";
import { toast } from "react-toastify";
import { DownOutlined } from "@ant-design/icons";

interface IProps {
  products: IProduct[];
}

let builderRequerdProducts = [
  {
    id: 1,
    image: "/products/cpu3.jpg",
    name: "CPU/Processor",
    type: "cpu",
  },
  {
    id: 2,
    image: "/products/motherboard1.jpg",
    name: "Motherboard",
    type: "motherboard",
  },
  {
    id: 3,
    image: "/products/monitor1.png",
    name: "Monitor",
    type: "monitor",
  },
  {
    id: 4,
    image: "/products/ram1.jpg",
    name: "Ram",
    type: "ram",
  },
  {
    id: 5,
    image: "/products/power-supply1.jpg",
    name: "Power supply unit",
    type: "power-supply",
  },
  {
    id: 6,
    image: "/products/storage1.jpg",
    name: "Storage device",
    type: "storage",
  },
];

const PCBuilder: NextPageWithLayout<IProps> = ({ products }) => {
  const router = useRouter();
  const { builderProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleProductChoose = (product: IProduct) => {
    if (product.type === "power-supply") {
      product = { ...product, type: "powerSupply" };
    }
    dispatch(addBuilderProduct(product));
    router.push("/tool/pc-builder");
  };

  const handleCompleteBuilder = () => {
    toast.success("PC Build successfully.");
    // dispatch(removeBuilderProduct());
  };

  useEffect(() => {
    if (builderProducts.length) {
      const newBuilderRequerdProducts = builderRequerdProducts.map(
        (requerdProduct) => ({
          ...requerdProduct,
          product: builderProducts.filter(
            (product) =>
              product.type ===
              (requerdProduct.type === "power-supply"
                ? "powerSupply"
                : requerdProduct.type)
          ),
        })
      );
      builderRequerdProducts = newBuilderRequerdProducts;
    }
  }, [builderProducts]);

  return (
    <div className="md:px-16">
      {/* if not exist type  */}
      {products.length < 1 && (
        <div className="lg:w-[65%] mx-auto">
          {builderRequerdProducts.map((requiredProduct: any) => (
            <>
              <div
                key={requiredProduct.id}
                className="flex justify-between items-center gap-2 "
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`${requiredProduct?.product?.length > 0 ? "hidden" : "block"
                      } md:block`}
                  >

                    <Image
                      src={requiredProduct.image}
                      alt="cpu image"
                      width={100}
                      height={100}
                      layout="responsive"
                      className="w-12 h-12"
                    />
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <h3 className="text-sm md:text-xl font-semibold ">
                        {requiredProduct.name}
                      </h3>
                      <span className="text-xs">*** Required?</span>
                    </div>
                  </div>

                  {/* show selected product  */}
                  {requiredProduct?.product?.length > 0 && (
                    <Collapse
                      bordered={false}
                      defaultActiveKey={["1"]}
                      expandIcon={({ isActive }) => (
                        <DownOutlined rotate={isActive ? 90 : 0} />
                      )}
                      style={{ background: "white" }}
                      items={requiredProduct.product.map(
                        (item: IProduct, index: number) => ({
                          key: index + 1,
                          label: (
                            <p>
                              <span className="text-primary">
                                {item.productName}
                              </span>{" "}
                              selected
                            </p>
                          ),
                          children: (
                            <div>
                              <Image
                                src={item.image}
                                alt="selectd image"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="h-20 w-20"
                              />
                            </div>
                          ),
                        })
                      )}
                    />
                  )}
                </div>
                <div className="w-28">
                  <Link
                    href={`/tool/pc-builder?categoryType=${requiredProduct.type}`}
                  >
                    <Button
                      type="primary"
                      className="w-full bg-sky-500"
                      disabled={requiredProduct.product?.length > 0}
                    >
                      Select
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <hr color="text-secondary" /> */}
            </>
          ))}

          <div className="flex justify-center my-6">
            <Button
              disabled={builderProducts.length < 6}
              onClick={handleCompleteBuilder}
              type="primary"
              className="bg-primary"
            >
              Complete Builder
            </Button>
          </div>
        </div>
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
  query: { categoryType: string };
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
    `${process.env.NEXTAUTH_URL}/api/product?type=${query.categoryType}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

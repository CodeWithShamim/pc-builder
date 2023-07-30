import RootLayout from "@/components/layouts/RootLayout";
import { IProduct } from "@/types";
import Image from "next/image";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Button, Rate } from "antd";

interface IProps {
  product: IProduct;
}
const ProductDetails: NextPageWithLayout<IProps> = ({ product }) => {
  if (!product?._id) return <h1>Loading...</h1>;

  const {
    productName,
    image,
    price,
    status,
    category,
    keyFeatures,
    description,
    individualRating,
    averageRating,
    reviews,
  } = product;

  return (
    <div>
      <div className="h-full xl:h-screen flex flex-col lg:flex-row items-center lg:items-start gap-8 border-b border-gray-300">
        <div className="w-full  lg:w-[50%] mx-auto">
          <Image
            src={image}
            alt={productName}
            width={100}
            height={100}
            quality={100}
            layout="responsive"
            priority
            className="mx-auto lg:pb-3 w-full"
          />
        </div>

        {/* details info  */}
        <div className="w-[93%] md:w-[40%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:pt-10">
            {productName}
          </h1>

          <p>{description}</p>

          <div className="pb-2">
            <span className="font-bold">Category:</span> {category}
          </div>

          <div>
            <p className="md:text-xl font-bold text-primary">
              <span className="font-bold text-black">Price:</span> {price}$
            </p>

            <p
              className={`font-bold text-red-500 ${
                status === "Out of Stock" && "line-through"
              }`}
            >
              <span className="font-bold text-black">Status:</span> {status}
            </p>
          </div>

          <div className="flex items-center h-8">
            <p className="text-sm font-bold">Individual Rating: </p>
            <Rate
              disabled
              defaultValue={individualRating}
              allowHalf
              className="pl-2 pb-1 text-xs md:text-sm"
            />
          </div>

          <div className="flex items-center h-8">
            <p className="text-sm font-bold">Average Rating: </p>
            <Rate
              disabled
              defaultValue={averageRating}
              allowHalf
              className="pl-2 pb-1 text-xs md:text-sm"
            />
          </div>

          <div>
            <h4 className="text-sm">Key Features:</h4>
            <ul className="text-lg">
              {Object.entries(keyFeatures as Object)?.map(([key, value]) => (
                <li className="text-xs md:text-sm" key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <Button type="primary">Buy Now</Button>
        </div>
      </div>

      {/* reviews  */}
      <div>
        <h1 className=" pt-6 md:pt-0 md:pb-2 text-lg md:text-xl">
          Recent reviews
        </h1>
        {reviews?.map((review) => (
          <>
            <div className="flex items-center justify-start w-full gap-2">
              <div className="flex flex-col justify-center items-start w-12">
                <div className="avatar">
                  <div className="w-6 h-6 rounded-full">
                    <Image
                      height={100}
                      width={100}
                      layout="responsive"
                      src="/favicon.ico"
                      alt="user image"
                    />
                  </div>
                </div>
                <p className="font-serif text-[12px] md:text-[14px]">
                  {review?.username}
                </p>
              </div>
              <p className="font-serif pb-5 max-w-4xl">{review?.comment}</p>
            </div>
            <hr className="w-full" />
          </>
        ))}
      </div>
    </div>
  );
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetails;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product: IProduct) => ({
    params: {
      productId: product._id,
    },
  }));

  return { paths, fallback: "blocking" };
}

// SSG
export async function getStaticProps(context: {
  params: { productId: string };
}) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product?id=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
}

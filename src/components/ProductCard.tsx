import { IProduct } from "@/types";
import Image from "next/image";
import { Avatar, Card, Rate } from "antd";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const { Meta } = Card;

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { _id, image, productName, category, price, status, rating } = product;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productName) setLoading(false);
  }, [productName]);

  return (
    <div className="w-full mx-auto flex justify-center">
      <Link href={`/product-details/${_id}`} className="text-white">
        <Card className="w-full shadow" loading={loading} hoverable>
          {rating > 4.5 && (
            <div className="top-0 right-0 bg-primary text-white w-24 text-center absolute rounded-sm">
              50% off
            </div>
          )}

          <Image
            src={image}
            alt={productName}
            width={200}
            height={180}
            quality={100}
            priority
            className="mx-auto pb-3 w-full transition-all hover:scale-[110%] md:hover:scale-[120%] lg:hover:scale-[130%]"
          />

          <Meta
            title={productName}
            description={<div className="pb-2">{category}</div>}
          />
          <Meta
            title={
              <span className="md:text-lg font-bold text-primary">
                {price}$
              </span>
            }
            description={
              <span
                className={`font-bold text-red-500 ${
                  status === "Out of Stock" && "line-through"
                }`}
              >
                {status}
              </span>
            }
          />

          <div className="pt-1">
            <Rate
              disabled
              defaultValue={rating}
              allowHalf
              className="text-xs"
            />
            <span style={{ marginLeft: 8 }}>{rating}</span>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;

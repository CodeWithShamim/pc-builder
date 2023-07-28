import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { image, productName, category, price, status, rating } = product;
  return (
    <div>
      <Image src={image} alt={productName} width={400} height={400} priority />
    </div>
  );
};

export default ProductCard;

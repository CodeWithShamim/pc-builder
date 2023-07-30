import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types";
import Banner from "@/components/Banner";
import {
  ApartmentOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  NodeCollapseOutlined,
  PartitionOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const featuredCategories = [
  {
    id: 1,
    icon: <ReconciliationOutlined />,
    name: "CPU / Processor",
    url: "/category/cpu",
  },
  {
    id: 2,
    icon: <PartitionOutlined />,
    name: "Motherboard",
    url: "/category/motherboard",
  },
  {
    id: 3,
    icon: <CreditCardOutlined />,
    name: "RAM",
    url: "/category/ram",
  },
  {
    id: 4,
    icon: <DesktopOutlined />,
    name: "Monitor",
    url: "/category/monitor",
  },
  {
    id: 5,
    icon: <ApartmentOutlined />,
    name: "Power Supply",
    url: "/category/power-supply",
  },
  {
    id: 6,
    icon: <NodeCollapseOutlined />,
    name: "Storage Device",
    url: "/category/storage",
  },
];

interface IProps {
  products: IProduct[];
}

const Home: NextPageWithLayout<IProps> = ({ products }) => {
  if (!products.length) {
    return <h1 className="h-screen">Loading...</h1>;
  }

  return (
    <div className="w-full">
      {/* hero section  */}
      <div>
        <Banner />
      </div>

      {/* products  */}
      <h1 className="text-lg md:text-xl lg:text-2xl text-center uppercase pt-6 md:pt-10">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center py-6">
        {products?.slice(0, 8)?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* categories  */}
      <div className="text-center pt-6 md:pt-10">
        <h1 className=" text-lg md:text-xl lg:text-2xl uppercase">
          Featured Categories
        </h1>
        <p>Get your desired product from featured category</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-center items-center py-6">
        {featuredCategories.map((category) => (
          <Link
            key={category.id}
            href={category.url}
            className="text-black rounded no-underline text-center bg-gray-100 p-2 md:pb-12 h-28 hover:text-primary transition-all"
          >
            <p className="text-xl md:text-2xl lg:text-3xl">{category.icon}</p>
            <p className="text-xs md:text-sm font-semibold">{category.name}</p>
          </Link>
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
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
    revalidate: 60000,
  };
}

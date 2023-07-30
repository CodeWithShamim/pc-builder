import { Layout, Button, MenuProps, Dropdown, Space } from "antd";
import Link from "next/link";
import React from "react";
import {
  WhatsAppOutlined,
  TwitterCircleFilled,
  AmazonOutlined,
  YoutubeOutlined,
  SkypeOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useRouter } from "next/router";

const { Header } = Layout;
const items: MenuProps["items"] = [];

const categoryItems = [
  { name: "CPU/Processor", url: "/cpu" },
  { name: "Motherboard", url: "/motherboard" },
  { name: "RAM", url: "/ram" },
  { name: "Monitor", url: "/monitor" },
  { name: "Power Supply Unit", url: "/power-supply" },
  { name: "Storage Device", url: "/storage" },
  { name: "Others", url: "/others" },
];

const Navbar = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigate = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    if (!items.length) {
      categoryItems.map((item, index) =>
        items.push({
          key: String(index + 1),
          label: (
            <div
              onClick={() => handleNavigate(`/category/${item.url}`)}
              className="py-2 px-6 w-[150px] text-black hover:text-white hover:bg-primary transition-all rounded "
            >
              {item.name}
            </div>
          ),
        })
      );
    }
  }, [handleNavigate]);

  return (
    <div>
      <div className="hidden md:h-4 md:flex w-full bg-primary justify-end items-center gap-2 py-1">
        <Link href="/">
          <WhatsAppOutlined spin={true} className="text-white font-serif" />
        </Link>
        <Link href="/">
          <TwitterCircleFilled className="text-white font-serif" />
        </Link>
        <Link href="/">
          <YoutubeOutlined className="text-white font-serif" />
        </Link>
        <Link href="/">
          <SkypeOutlined className="text-white font-serif" />
        </Link>
        <Link href="/">
          <AmazonOutlined className="pr-6 text-white font-serif" />
        </Link>
      </div>

      <Header className="px-4 md:px-24 lg:px-32 text-white flex items-center justify-between">
        <div className="md:text-xl hidden md:block">
          <Link href="/" className="text-primary font-bold">
            PC🐱‍🏍BUILDER
          </Link>
        </div>

        {/* dropdoan list  */}
        <Dropdown menu={{ items }}>
          <Space className="font-medium hover:cursor-pointer">
            Categories
            <DownOutlined />
          </Space>
        </Dropdown>

        <Link href="/tool/pc-builder">
          <Button type="primary">PC Builder</Button>
        </Link>
      </Header>
    </div>
  );
};

export default Navbar;

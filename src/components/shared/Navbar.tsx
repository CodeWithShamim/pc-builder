import { Menu, Layout, Button, MenuProps, Dropdown, Space } from "antd";
import Link from "next/link";
import React from "react";
import {
  WhatsAppOutlined,
  TwitterCircleFilled,
  AmazonOutlined,
  YoutubeOutlined,
  SkypeOutlined,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link href="/products/cpu" className="text-black hover:text-white">
          CPU / Processor
        </Link>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link
          href="/products/motherboard"
          className="text-black hover:text-white"
        >
          Motherboard
        </Link>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link href="/products/ram" className="text-black hover:text-white">
          RAM
        </Link>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link
          href="/products/power-supply"
          className="text-black hover:text-white"
        >
          Power Supply Unit
        </Link>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link
          href="/products/storage-device"
          className="text-black hover:text-white"
        >
          Storage Device
        </Link>
      </div>
    ),
  },
  {
    key: "6",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link href="/products/monitors" className="text-black hover:text-white">
          Monitor
        </Link>
      </div>
    ),
  },
  {
    key: "7",
    label: (
      <div className="hover:bg-primary transition-all rounded p-2 w-full">
        <Link href="/products/others" className="text-black hover:text-white">
          Others
        </Link>
      </div>
    ),
  },
];

const Navbar = () => {
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

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
    label: <Link href="/cpu-processor">CPU / Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/">Others</Link>,
    danger: true,
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
        <div className="md:text-xl">
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

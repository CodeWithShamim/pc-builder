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
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

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
  const { data: session } = useSession();
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
        {/* for mobile */}
        <div className="flex items-center justify-center md:hidden">
          <Dropdown destroyPopupOnHide autoFocus={true} dropdownRender={() =>
            <div
              className="py-4 px-6 w-[60%] shadow-lg bg-white text-black transition-all rounded">
              <Link href="/tool/pc-builder">
                <Button type="primary" size="small" className="text-xs md:text-sm">
                  PC Builder
                </Button>
              </Link>
            </div>
          } placement="bottomLeft" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </Dropdown >
        </div >

        <div className="md:text-xl">
          <Link href="/" className="text-primary font-bold">
            PC🐱‍🏍BUILDER
          </Link>
        </div>

        {/* dropdoan list  for tablet & desktop*/}
        <Dropdown menu={{ items }} className="hidden md:flex">
          <Space className="font-medium hover:cursor-pointer">
            Categories
            <DownOutlined />
          </Space>
        </Dropdown>

        <div className="flex gap-2 items-center">
          {/* for tablet & desktop */}
          <Link href="/tool/pc-builder" className="hidden md:block">
            <Button type="primary" className="text-xs md:text-sm">
              PC Builder
            </Button>
          </Link>

          {/* login / logout button  */}
          {session?.user?.name ? (
            <Button
              onClick={() => signOut()}
              type="primary"
              className="bg-primary text-xs md:text-sm"
            >
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button type="primary" className="bg-primary text-xs md:text-sm">
                Signin
              </Button>
            </Link>
          )}


        </div>
      </Header >
    </div >
  );
};

export default Navbar;

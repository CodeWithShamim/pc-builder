import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{ textAlign: "center", background: "#202020", color: "#fff" }}
    >
      PC Builder ©2023 Created by SHAMIM ISLAM
    </Footer>
  );
};

export default FooterComponent;

import React from "react";
import SiderClient from "./Sider";
import { Layout, ConfigProvider } from "antd";
import HeaderClient from "./header";
import FooterClient from "./footer";
import Footer2 from "./footer2";

const { Header, Content, Footer, Sider } = Layout;

function ClientLayout({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF6337",
        },
        components: {
          Menu: {
            darkItemBg: "#0D0D0F",
            darkItemActiveBg: "#FF6337",
            darkSubMenuItemBg: "#0D0D0F",
          },
          Tabs: {
            itemColor: "#fff",
          },
          Table: {
            headerBg: "#0D0D0F",
            headerColor: "#fff",
            borderColor: "#ff6337",
            rowHoverBg: "#0D0D0F",
          },
        },
      }}
    >
      <Layout
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Layout>
          <SiderClient />
          <Layout>
            <HeaderClient />

            <Content
              style={{
                backgroundColor: "#000",
                padding: "20px",
                overflow: "auto",
              }}
            >
              {children}
              
              <Footer2 />
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            backgroundColor: "#161616",
            zIndex: 1,
            padding: "0",
          }}
        >
          <FooterClient />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default ClientLayout;

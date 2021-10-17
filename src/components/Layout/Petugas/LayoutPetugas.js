import React from "react";
import logo from "../../../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Content, Header } from "antd/lib/layout/layout";
import { Layout, Menu, Image, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "../../../index.css";
import Routes from "../../../routes/dashboard.routes";

const { Sider } = Layout;

const LayoutPetugas = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={280}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <Image src={logo} alt="" preview={false} />
        </div>
        <Menu
          style={{ fontWeight: 500 }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            <Link to="/petugas/beranda">Beranda</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link to="/petugas/list-pengajuan">Daftar Pengajuan</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />}>
            <Link to="/logout">Sign Out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header_class"
          style={{ padding: 0, background: "#fff" }}
        >
          <div className="text_header"></div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div
            className="site-layout-background "
            style={{
              padding: 40,
              minHeight: "100%",
              background: "#fff",
            }}
          >
            <Routes />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPetugas;

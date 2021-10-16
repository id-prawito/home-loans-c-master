import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Image } from "antd";
import {
    SolutionOutlined,
    FormOutlined,
    AppstoreOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import logo from "../../assets/img/logo.svg";
import Routes from "../../routes/dashboard.routes";
import "../../index.css";

const { Footer, Sider } = Layout;

const LayoutHome = () => {
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
                    <Menu.Item
                        key="/customer/beranda"
                        icon={<AppstoreOutlined />}
                    >
                        <Link to="/customer/beranda">Beranda</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/customer/pengajuan"
                        icon={<FormOutlined />}
                    >
                        <Link to="/customer/pengajuan">Buat Pengajuan KPR</Link>
                    </Menu.Item>
                    <Menu.Item key="/customer/data" icon={<SolutionOutlined />}>
                        <Link to="/customer/data">Data Pengajuan KPR</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/customer/logout"
                        icon={<PoweroffOutlined />}
                    >
                        <Link to="/customer-login">Log Out</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Routes />
                <Footer style={{ textAlign: "center", marginTop: "110px" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutHome;

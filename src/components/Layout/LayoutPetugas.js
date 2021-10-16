import React from "react";
import { Link } from "react-router-dom";
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

const LayoutPetugas = () => {
    return (
        <Layout>
            <Sider
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
                <Menu.Item key="1" icon={<AppstoreOutlined />}>
                    <Link to="/customer-beranda">Beranda</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}>
                    <Link to="/customer-pengajuan">Buat Pengajuan KPR</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<SolutionOutlined />}>
                    Data Pengajuan KPR
                </Menu.Item>
                <Menu.Item key="4" icon={<PoweroffOutlined />}>
                    Log Out
                </Menu.Item>
            </Sider>
            <Layout>
                <Routes />
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutPetugas;

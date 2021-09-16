import React from "react";
import "../index.css";
import logo from "../assets/img/logo.svg";
import Routes from "./Routes";
import data from "../assets/jsonData/db.json";
import { Link } from "react-router-dom";

import { Layout, Menu, Image } from "antd";

const { Header, Footer, Sider } = Layout;

class LayoutHome extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: "100vh" }}>
                {/* --- Sidebar --- */}
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <Image src={logo} alt="" preview={false} />
                    </div>

                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["0"]}
                        mode="inline"
                    >
                        {data.sidebar_routes.map((item) => (
                            <Menu.Item
                                key={item.id}
                                icon={<i className={item.icon}></i>}
                            >
                                <Link to={item.route}>{item.display_name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* --- Header --- */}
                    <Header className="site-layout-background atas" />
                    <Routes />
                    {/* --- Footer --- */}
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutHome;

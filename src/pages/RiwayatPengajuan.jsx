import { Breadcrumb } from "antd";
import React from "react";
import { Content } from "antd/lib/layout/layout";

const RiwayatPengajuan = () => {
    return (
        <Content className="content__data">
            <Breadcrumb className="content__breadcrumb">
                <Breadcrumb.Item>Riwayat Pengajuan KPR</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background card">
                <h3 className="title">Hello World</h3>
            </div>
        </Content>
    );
};

export default RiwayatPengajuan;

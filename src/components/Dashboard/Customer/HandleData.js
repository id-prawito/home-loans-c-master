import React from "react";
import DataPengajuan from "./Data/DataPengajuan";
import DataKelengkapan from "./Data/DataKelengkapan";
import { Header } from "antd/lib/layout/layout";

function HandleData() {
    return (
        <>
            <Header
                className="site-layout-sub-header-background header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Data Pengajuan KPR</div>
            </Header>
            <DataPengajuan />
            <DataKelengkapan />
        </>
    );
}

export default HandleData;

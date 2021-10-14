import React from "react";
import DataPengajuan from "./DataPengajuan/DataPengajuan";
import DataKelengkapan from "./DataPengajuan/DataKelengkapan";
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

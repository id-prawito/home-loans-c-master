import React from "react";
import { Header } from "antd/lib/layout/layout";
import DataPengajuanTerverfikasi from "./DataPengajuanTerverifikasi";
import DataPengajuanTidakTerverfikasi from "./DataPengajuanTidakTerverifikasi";
import DataPengajuanMenungguVerifikasi from "./DataPengajuanMenungguVerifikasi";

const HandleDataPengajuan = () => {
    return (
        <>
            <Header
                className="header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Beranda</div>
            </Header>
            <DataPengajuanTerverfikasi />
            <DataPengajuanTidakTerverfikasi />
            <DataPengajuanMenungguVerifikasi />
        </>
    );
};

export default HandleDataPengajuan;

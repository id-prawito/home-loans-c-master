import React, { useEffect, useState } from "react";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";

const DataPengajuan = () => {
    const [pengajuan, setPengajuan] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get(
                    "http://localhost:8000/pengajuan?id_cust=1"
                );
                setPengajuan(response.data);
                setLoading(true);
            }
            fetchData();
        } catch (error) {
            alert(error.message);
        }
    }, []);

    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Content className="content__data">
                <div className="site-layout-background card">
                    <h3 className="title">Data Diri Pengajuan KPR</h3>
                    <div className="data__diri">
                        {loading &&
                            pengajuan.map((pengajuan) => (
                                <div
                                    className="data__content"
                                    key={pengajuan.id_pengajuan}
                                >
                                    <div className="data__content-pengajuan">
                                        <span>Nomor Induk KTP</span>
                                        {pengajuan.nik}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Nama Lengkap</span>
                                        {pengajuan.nama_lengkap}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Tempat Tanggal Lahir</span>
                                        {pengajuan.tempat_lahir}
                                        {", "}
                                        {pengajuan.tanggal_lahir}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Alamat Saat Ini</span>
                                        {pengajuan.alamat}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Pekerjaan</span>
                                        {pengajuan.pekerjaan}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Pendapatan Per Bulan</span>
                                        {pengajuan.pendapatan_perbulan}
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Bukti Selfie KTP</span>
                                        {pengajuan.bukti_ktp}
                                        <a href="#a" style={{ marginLeft: 10 }}>
                                            PDF
                                        </a>
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Bukti Slip Gaji</span>
                                        {pengajuan.bukti_gaji}
                                        <a href="#a" style={{ marginLeft: 10 }}>
                                            PDF
                                        </a>
                                    </div>
                                    <div className="data__content-pengajuan">
                                        <span>Status Verifikasi</span>
                                        <h4 style={{ color: "#1890ff" }}>
                                            Menunggu Verifikasi
                                        </h4>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default DataPengajuan;

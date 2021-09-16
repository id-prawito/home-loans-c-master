import { Breadcrumb, Button, Image } from "antd";
import loan from "../assets/img/loan.gif";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Beranda = () => {
    useEffect(() => {
        getPengajuan();
    }, []);

    const [pengajuan, setPengajuan] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPengajuan = async () => {
        try {
            const response = await axios.get("http://localhost:8000/pengajuan");
            setPengajuan(response.data.data);
            setLoading(true);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            {/* --- Content --- */}
            <Content className="content__data">
                <Breadcrumb className="content__breadcrumb">
                    <Breadcrumb.Item>Beranda</Breadcrumb.Item>
                </Breadcrumb>
                <div className="homepage">
                    <div className="site-layout-background card">
                        <h3 className="title">Profile</h3>
                        <div className="data__diri">
                            {loading &&
                                pengajuan.map((pengajuan) => (
                                    <div
                                        className="homepage__content"
                                        key={pengajuan.id_pengajuan}
                                    >
                                        <p>
                                            <span>Nomor Induk KTP</span>
                                            {pengajuan.nik}
                                        </p>
                                        <p>
                                            <span>Nama Lengkap</span>
                                            {pengajuan.nama_lengkap}
                                        </p>
                                        <p>
                                            <span>Tempat Tanggal Lahir</span>
                                            {pengajuan.tempat_lahir}
                                            {", "}
                                            {pengajuan.tanggal_lahir}
                                        </p>
                                        <p>
                                            <span>Bukti Selfie KTP</span>
                                            {pengajuan.bukti_ktp}
                                            <a
                                                href="#a"
                                                style={{ marginLeft: 10 }}
                                            >
                                                PDF
                                            </a>
                                        </p>
                                        <p>
                                            <span>Bukti Slip Gaji</span>
                                            {pengajuan.bukti_gaji}
                                            <a
                                                href="#a"
                                                style={{ marginLeft: 10 }}
                                            >
                                                PDF
                                            </a>
                                        </p>
                                        <p>
                                            <span>Status Verifikasi</span>
                                            <h4 style={{ color: "#1890ff" }}>
                                                {pengajuan.status}
                                            </h4>
                                        </p>
                                    </div>
                                ))}
                        </div>
                        <div className="button__reset">
                            <Button size="large" className="button_1">
                                Reset Data Diri
                            </Button>
                        </div>
                    </div>
                    <div className="site-layout-background card">
                        <h3 className="title">Pengajuan KPR Terakhir</h3>
                        <div className="data__diri">
                            <Image src={loan} alt="" preview={false}></Image>
                            <div
                                className="homepage__content"
                                style={{ display: "initial" }}
                            >
                                <p>
                                    <span>Belum ada pengajuan KPR ?</span>
                                    Ajukan KPR online, wujudkan rumah idamanmu
                                    bersama Bank BRI
                                </p>
                            </div>
                            <div className="button__reset">
                                <Button size="large" className="button_1">
                                    Reset Data Diri
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default Beranda;

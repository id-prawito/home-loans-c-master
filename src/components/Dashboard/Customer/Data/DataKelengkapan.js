import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";

const DataPengajuan = (props) => {
    const { datasub } = props;
    // const [kelengkapan, setKelengkapan] = useState([]);

    // useEffect(() => {
    //     try {
    //         async function fetchData() {
    //             const response = await axios.get(
    //                 "http://localhost:8000/list_kelengkapan?id_pengajuan=1"
    //             );
    //             setKelengkapan(response.data);
    //             setLoading(true);
    //         }
    //         fetchData();
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }, []);

    // const [loading, setLoading] = useState(false);

    return (
        <div>
            <Content className="content__data">
                <div
                    className="site-layout-background card"
                    style={{ marginTop: 5 }}
                >
                    <h3 className="title">Kelengkapan Data KPR</h3>
                    <div className="data__diri">
                        <div
                            className="data__content"
                            key={datasub.id_kelengkapan}
                        >
                            <div className="data__content-pengajuan">
                                <span>Alamat Rumah</span>
                                {datasub.alamat_rumah}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Luas Tanah / Rumah</span>
                                {datasub.luas_tanah} M2
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Harga Rumah</span>
                                Rp. {datasub.harga_rumah}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Jangka Pembayaran</span>
                                {datasub.jangka_pembayaran} Tahun
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Dokumen Pendukung</span>
                                <a href="#a">{datasub.dokumen_pendukung}</a>
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Status Verifikasi</span>
                                {datasub.status_kelengkapan ===
                                "Menunggu Persetujuan" ? (
                                    <h4 style={{ color: "#1890ff" }}>
                                        Menunggu Persetujuan
                                    </h4>
                                ) : datasub.status_kelengkapan ===
                                  "Tidak Disetujui" ? (
                                    <h4 style={{ color: "#08c40b" }}>
                                        Tidak Disetujui !
                                    </h4>
                                ) : (
                                    <h4 style={{ color: "#1890ff" }}>
                                        Di Setujui
                                    </h4>
                                )}
                            </div>
                        </div>

                        <div className="button__reset">
                            <Button size="large" className="button_1">
                                <Link to={"/customer/kpr-kelengkapan"}>
                                    Reset Pengajuan KPR
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default DataPengajuan;

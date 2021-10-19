import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
// import axios from "axios";

const DataPengajuan = (props) => {
    const { data } = props;
    // const [pengajuan, setPengajuan] = useState([]);

    // useEffect(() => {
    //     try {
    //         async function fetchData() {
    //             const response = await axios.get(
    //                 "http://localhost:8000/pengajuan?id_cust=1"
    //             );
    //             setPengajuan(response.data);
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
                <div className="site-layout-background card">
                    <h3 className="title">Data Diri Pengajuan KPR</h3>
                    <div className="data__diri">
                        <div className="data__content" key={data.id_cust}>
                            <div className="data__content-pengajuan">
                                <span>Nomor Induk KTP</span>
                                {data.nik}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Nama Lengkap</span>
                                {data.nama_lengkap}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Tempat Tanggal Lahir</span>
                                {data.tempat_lahir}
                                {", "}
                                {data.tanggal_lahir}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Alamat Saat Ini</span>
                                {data.alamat}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Pekerjaan</span>
                                {data.pekerjaan}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Pendapatan Per Bulan</span>
                                {data.pendapatan_perbulan}
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Bukti Selfie KTP</span>
                                <a href="#a">{data.bukti_ktp}</a>
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Bukti Slip Gaji</span>
                                <a href="#a">{data.bukti_gaji}</a>
                            </div>
                            <div className="data__content-pengajuan">
                                <span>Status Verifikasi</span>
                                {data.status === "Menunggu verifikasi" ? (
                                    <h4 style={{ color: "#1890ff" }}>
                                        Menunggu Verifikasi
                                    </h4>
                                ) : data.status === "Terverifikasi" ? (
                                    <h4 style={{ color: "#08c40b" }}>
                                        Terverifikasi, lengkapi persyaratan
                                        dokumen tambahan !
                                    </h4>
                                ) : (
                                    <h4 style={{ color: "#1890ff" }}>
                                        Tidak Terverifikasi
                                    </h4>
                                )}
                            </div>
                        </div>
                    </div>

                    {data.status === "Terverifikasi" ? (
                        <div className="button__reset">
                            <Button size="large" className="button_2">
                                <Link to={"/customer/pengajuan"}>
                                    Lengkapi Data
                                </Link>
                            </Button>
                        </div>
                    ) : data.status === "Tidak Terverifikasi" ? (
                        <div className="button__reset">
                            <Button size="large" className="button_2">
                                <Link to={"/customer/pengajuan"}>
                                    Reset Data Diri
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </Content>
        </div>
    );
};

export default DataPengajuan;

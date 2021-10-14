import { Button, Image } from "antd";
import berandaImage from "../../assets/img/beranda.png";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import "../app.css";
// import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
// import axios from "axios";

const Beranda = () => {
    // useEffect(() => {
    //     getPengajuan();
    // }, []);

    // const [pengajuan, setPengajuan] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const getPengajuan = async () => {
    //     try {
    //         const response = await axios.get(
    //             "http://localhost:8000/pengajuan?id_cust=1"
    //         );
    //         setPengajuan(response.data);
    //         setLoading(true);
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    // console.log(pengajuan);

    // const tokensave = localStorage.getItem("token");
    // if (tokensave === "") {
    //     return <Redirect to="/customer-login" />;
    // }

    return (
        <>
            <Header
                className="header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Beranda</div>
            </Header>
            {/* --- Content --- */}
            <Content className="content__data">
                <div
                    className="site-layout-background "
                    style={{
                        padding: 40,
                        minHeight: "100%",
                        background: "#fff",
                    }}
                >
                    <h3 className="title">Pengajuan KPR Terakhir</h3>
                    <div className="content__beranda">
                        <Image
                            src={berandaImage}
                            alt=""
                            className="image__beranda"
                            preview={false}
                        ></Image>
                    </div>
                    <div
                        className="homepage__content"
                        style={{ display: "initial" }}
                    >
                        <p>
                            <span>Belum ada pengajuan KPR ? </span>
                            Ajukan KPR online, wujudkan rumah idamanmu bersama
                            Bank BRI
                        </p>
                    </div>
                    <div className="button__reset">
                        <Button size="large" className="button_2">
                            Buat Pengajuan KPR
                        </Button>
                    </div>
                </div>
            </Content>
        </>
    );
};

export default Beranda;

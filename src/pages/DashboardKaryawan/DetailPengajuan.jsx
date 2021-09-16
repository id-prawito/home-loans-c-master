import datas from "../../assets/jsonData/datas";
import { Breadcrumb, Button } from "antd";
import { Content } from "antd/lib/layout/layout";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

function DetailPengajuan(props) {
    // useEffect(() => {
    //     getPengajuan();
    // }, []);

    // const [pengajuan, setPengajuan] = useState([]);

    // const getPengajuan = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8000/pengajuan");
    //         setPengajuan(response.data.data);
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    const id = props.match.params.id;

    //   console.log("dapet ga nih idnya ?", id);
    const currentDetail = datas.filter((data) => {
        if (data.id === id) {
            return true;
        } else {
            return false;
        }
    })[0];

    console.log(currentDetail);
    return (
        <Content className="content__data">
            <Breadcrumb className="content__breadcrumb">
                <Breadcrumb.Item>Riwayat Pengajuan KPR</Breadcrumb.Item>
            </Breadcrumb>
            <div className="homepage-1">
                <div className="site-layout-background card">
                    <h3 className="title">Profile</h3>
                    <div className="data__diri">
                        <div
                            className="homepage__content"
                            key={currentDetail.id}
                        >
                            <p>
                                <span>Tanggal Pengajuan</span>
                                {currentDetail.tanggal_pengajuan}
                            </p>
                            <p>
                                <span>Nama Lengkap</span>
                                {currentDetail.nama}
                            </p>
                        </div>
                    </div>
                    <div className="button__reset">
                        <Button size="large" className="button_1">
                            Reset Data Diri
                        </Button>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default DetailPengajuan;

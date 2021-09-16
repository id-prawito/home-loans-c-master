import { Table, Input, Space, Button, Breadcrumb } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";

import datas from "../../assets/jsonData/datas.js";

const { Search } = Input;

const columns = [
    {
        title: "No",
        width: 60,
        dataIndex: "id",
        key: "id",
        fixed: "left",
    },
    {
        title: "Tanggal Pengajuan",
        width: 200,
        dataIndex: "tanggal_pengajuan",
        key: "tanggal_pengajuan",
        fixed: "left",
    },
    { title: "Nama", dataIndex: "nama", key: "nama" },
    { title: "Status", dataIndex: "status", key: "status", width: 140 },
    {
        title: "Rekomendasi",
        dataIndex: "rekomendasi",
        key: "rekomendasi",
        width: 120,
    },
    // {
    //     title: "Action",
    //     key: "operation",
    //     fixed: "right",
    //     width: 100,
    //     render: () => <a>action</a>,
    // },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
            <Link to={"/karyawan/detail-pengajuan/" + record.id}>{text}</Link>
        ),
    },
];

const onSearch = (value) => console.log(value);
function SearchBar() {
    return (
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 200 }}
            />
        </Space>
    );
}

function DownloadBerkas() {
    return (
        <Button type="primary" icon={<DownloadOutlined />}>
            Download
        </Button>
    );
}

export default function ListPengajuanKPR() {
    // useEffect(() => {
    //     getPengajuan();
    // }, []);

    // const [pengajuan, setPengajuan] = useState([]);

    // const getPengajuan = async () => {
    //     try {
    //         const response = await axios.get(
    //             "http://localhost:8000/list_pengajuan"
    //         );
    //         setPengajuan(response.data);
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    // console.log(pengajuan);

    return (
        <Content className="content__data">
            <Breadcrumb className="content__breadcrumb">
                <Breadcrumb.Item>Data Pengajuan KPR</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background card">
                <h3 className="title">Data Diri Pengajuan KPR</h3>

                <div className="data__diri-table">
                    <div className="cstm-background">
                        <SearchBar />
                        <DownloadBerkas />
                    </div>
                    <Table
                        dataSource={datas}
                        columns={columns}
                        scroll={{ x: 1300 }}
                    ></Table>
                </div>
                <div className="button__reset">
                    <Button size="large" className="button_2">
                        Lengkapi Data
                    </Button>
                </div>
            </div>
        </Content>
    );
}

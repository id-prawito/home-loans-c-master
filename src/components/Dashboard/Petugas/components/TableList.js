import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import axios from "axios";
import baseURL from "../../../../configs/axios-variable";

function TableList() {
  const [pengajuans, setPengajuans] = useState([]);

  const getPengajuans = async () => {
    try {
      let response = await axios.get(baseURL + "/list_pengajuan");
      setPengajuans(response.data.data);
      // console.log("response >>", response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPengajuans();
  }, []);

  const dataSource = pengajuans.map(({ pengajuan, ...data }) => ({
    ...data,
    key: data.id_pengajuan,
    index: data.id_pengajuan,
    status:
      data.status === 1 ? (
        <Tag color="geekblue">MENUNGGU VERIFIKASI</Tag>
      ) : data.status === 2 ? (
        <Tag color="green">TERVERIFIKASI</Tag>
      ) : (
        <Tag color="volcano">TIDAK TERVERIFIKASI</Tag>
      ),
  }));

  const columns = [
    {
      title: "No",
      dataIndex: "index",
    },
    {
      title: "Tanggal Pengajuan",
      dataIndex: "tanggal_pengajuan",
    },
    {
      title: "Nama",
      dataIndex: "nama_lengkap",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Rekomendasi",
      dataIndex: "rekomendasi",
      render: (text) => <p>IYA</p>,
    },
    {
      title: "Action",
      dataIndex: "id_cust",
      render: (record) => (
        <Link to={"/petugas/list-pengajuan/" + record}>Lihat Detail</Link>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default TableList;

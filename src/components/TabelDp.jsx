import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import axios from "axios";

function TabelDp() {
  const [pengajuans, setPengajuans] = useState([]);

  const getPengajuans = async () => {
    try {
      let response = await axios.get(
        "https://a4260e57-47fb-4ddd-9dd6-d9d47ae89c4b.mock.pstmn.io/list_pengajuan"
      );
      setPengajuans(response.data);
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
      data.status === 1
        ? "Menunggu Verifikasi"
        : data.status === 2
        ? "Terverifikasi"
        : "Tidak Terverifikasi",
  }));
  // console.log(">>", JSON.parse(dataSource));

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
      // render: (status) => {
      //   <>
      //     {status.map((tag) => {
      //       let color =
      //         tag.length === "Menunggu Verifikasi" ? "green" : "geekblue";
      //       if (tag === "Tidak Terverifikasi") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>;
      // },
    },
    {
      title: "Rekomendasi",
      dataIndex: "rekomendasi",
    },
    {
      title: "Action",
      dataIndex: "id_pengajuan",
      render: (record) => (
        <Link to={"/karyawan/list-pengajuan/" + record}>Lihat Detail</Link>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default TabelDp;

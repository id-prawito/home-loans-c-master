import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";

function TabelDp() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get(
      "https://a4260e57-47fb-4ddd-9dd6-d9d47ae89c4b.mock.pstmn.io/list_pengajuan"
    ).then((res) => {
      console.log("ini responsenya :", res);
      setstate(
        res.data.data.map((row, index) => ({
          // id: row.id,
          // tanggal_pengajuan: row.tanggal_pengajuan,
          // nama: row.nama_lengkap,
          // alamat: row.alamat,
          // status: row.status,
          // action: row.action,
          index: index + 1,
          key: row.id_pengajuan,
          ...row,
        }))
      );
    });
  };

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
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (record) => (
        <Link to={"/karyawan/detail-pengajuan/" + record}>Lihat Detail</Link>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={state} />
    </div>
  );
}

export default TabelDp;

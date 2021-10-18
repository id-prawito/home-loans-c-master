import { Typography } from "antd";
import React, { useState, useEffect } from "react";
// import "./berandaPetugas.css";

import axios from "axios";

const { Title } = Typography;

export default function BerandaPetugas() {
  const [status, setStatus] = useState([]);

  const getVerifikasi = async () => {
    try {
      let response = await axios.get("http://localhost:8000/beranda_petugas");
      // console.log(">>>", response.data[0]);
      setStatus(response.data[0]);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(">>", status);
  useEffect(() => {
    getVerifikasi();
  }, []);

  return (
    <>
      <Title level={3}>
        Terdapat {status.menunggu_verifikasi} Pengajuan KPR Menunggu Verifikasi
      </Title>
    </>
  );
}

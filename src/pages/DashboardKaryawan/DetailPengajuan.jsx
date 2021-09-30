import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Breadcrumb, Select } from "antd";
import { Content, Option } from "antd/lib/layout/layout";

export default function DetailPengajuan() {
  const [pengajuan, setPengajuan] = useState([]);
  let { id } = useParams();
  // const id = match.useParams.id;
  // console.log("dapat ga nih idnya ? ->", pengajuan);

  const getPengajuan = async () => {
    let response = await axios.get(
      `https://a4260e57-47fb-4ddd-9dd6-d9d47ae89c4b.mock.pstmn.io/pengajuan/`,
      {
        params: {
          id_customer: { id },
        },
      }
    );
    setPengajuan(response.data.data);
  };

  // console.log(">>>", pengajuan);

  useEffect(() => {
    getPengajuan();
  }, [id]);

  return (
    <Content className="content__data">
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item>Data Pengajuan KPR</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background card">
        <h3 className="title">Data Diri Pengajuan KPR</h3>
        <div className="data__diri">
          <div className="data__content">
            <p>
              <span>Nomor Induk KTP :</span>
              {pengajuan.nik}
            </p>
            <p>
              <span>Nama Lengkap :</span>
              {pengajuan.nama_lengkap}
            </p>
            <p>
              <span>Tempat, Tanggal Lahir :</span>
              {pengajuan.tempat_lahir}, {pengajuan.tanggal_lahir}
            </p>
            <p>
              <span>Alamat Saat Ini:</span>
              {pengajuan.alamat}
            </p>
            <p>
              <span>Pekerjaan:</span>
              {pengajuan.pekerjaan}
            </p>
            <p>
              <span>Pendapatan per bulan:</span>
              {pengajuan.pendapatan_perbulan}
            </p>
            <p>
              <span>Bukti Selfie KTP:</span>
              {pengajuan.bukti_ktp}
            </p>
            <p>
              <span>Bukti Slip Gaji:</span>
              {pengajuan.bukti_gaji}
            </p>
            <p>
              <span>Status:</span>
              {pengajuan.status === 1
                ? "Menunggu Verifikasi"
                : pengajuan.status === 2
                ? "Terverifikasi"
                : "Tidak Terverifikasi"}
            </p>
            <Status />
          </div>
        </div>
      </div>
    </Content>
  );
}

function Status() {
  const { Option } = Select;
  function handlechange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select defaultValue="Menunggu Konfirmasi" onChange={handlechange}>
      <Option value="3">Terverifikasi</Option>
      <Option value="2">Tidak Terverifikasi</Option>
    </Select>
  );
}

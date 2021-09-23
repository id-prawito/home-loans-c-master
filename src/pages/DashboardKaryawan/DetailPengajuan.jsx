import datas from "../../assets/jsonData/datas";
import { Breadcrumb, Button } from "antd";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Content } from "antd/lib/layout/layout";

function DetailPengajuan(props) {
  const id = props.match.params.id;
  // console.log("dapet ga nih idnya ?", id);

  const [state, setstate] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get(
      "https://a4260e57-47fb-4ddd-9dd6-d9d47ae89c4b.mock.pstmn.io/list_pengajuan"
    ).then((res) => {
      // console.log(res.data.data);
      setstate(
        res.data.data.filter((datas) => {
          if (datas.id === id.id_pengajuan) {
            return true;
          } else {
            return false;
          }
        })[0]
      );
    });
  };

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
              // key={currentDetail.id}
            >
              <p>
                <span>NIK</span>
                {state.nik}
              </p>
              <p>
                <span>Nama Lengkap</span>
                {state.nama_lengkap}
              </p>
              <p>
                <span>Tempat, Tanggal Lahir</span>
                {state.tempat_lahir} {state.tanggal_lahir}
              </p>
              <p>
                <span>Alamat Saat Ini</span>
                {state.alamat}
              </p>
              <p>
                <span>Pekerjaan</span>
                {state.pekerjaan}
              </p>
              <p>
                <span>Pendapatan perbulan</span>
                {state.pendapatan_perbulan}
              </p>
              <p>
                <span>Bukti Selfie KTP</span>
                <a href="#">{state.bukti_ktp}</a>
              </p>
              <p>
                <span>Bukti Gaji </span>
                <a href="#">{state.bukti_gaji}</a>
              </p>
              <p>
                <span>Status Verifikasi </span>
                {state.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default DetailPengajuan;

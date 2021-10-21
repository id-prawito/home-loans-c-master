import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button, Select } from "antd";
import ListKelengkapan from "./ListKelengkapan";

// import TabelDp from "./TabelDp";

export default function DetailPengajuan() {
   const [users, setUsers] = useState([]);
   const [status, setStatus] = useState("");
   const [isUpdate, setUpdate] = useState(false);

   const { Option } = Select;
   let { id } = useParams();

   const getUser = async () => {
      let response = await axios.get(`http://localhost:8000/pengajuan/${id}`);
      setUsers(response.data);
      setStatus(response.data.status);
   };

   useEffect(() => {
      getUser();
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:8000/status", {
         method: "POST",
         body: JSON.stringify({
            id: id,
            id_pengajuan: id,
            status: status,
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8",
         },
      })
         .then((response) => response.json())
         .then((json) => {
            setUpdate(true);
            console.log(json);
         });
   };

   useEffect(() => {
      if (isUpdate) {
         alert("Status sukses di update");
         setUpdate(false);
      }
   }, [isUpdate]);

   function handleChange(e) {
      setStatus(e);
   }

   function handleClick(e) {
      handleSubmit(e);
   }

   return (
      <>
         <div className="site-layout-background card">
            <h3 className="title">Data Diri Pengajuan KPR</h3>
            <div className="data__diri">
               <div className="data__content" key={users.id_pengajuan}>
                  <div className="data__content-pengajuan">
                     <span>Nomor Induk KTP</span>
                     {users.nik}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Nama Lengkap</span>
                     {users.nama_lengkap}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Tempat Tanggal Lahir</span>
                     {users.tempat_lahir}
                     {", "}
                     {users.tanggal_lahir}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Alamat Saat Ini</span>
                     {users.alamat}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Pekerjaan</span>
                     {users.pekerjaan}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Pendapatan Per Bulan</span>
                     {users.pendapatan_perbulan}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Status</span>
                     {status}
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Bukti Slip Gaji</span>
                     Bukti Slip Gaji
                     <a href={users.bukti_gaji}>.pdf</a>
                  </div>
                  <div className="data__content-pengajuan">
                     <span>Bukti Selfie KTP</span>
                     Bukti Selfie KTP
                     <a href={users.bukti_ktp}>.pdf</a>
                  </div>
               </div>
            </div>
            <div>
               <Form>
                  <Select defaultValue="Menunggu Verifikasi" style={{ width: 200, marginTop: 20 }} onChange={handleChange}>
                     <Option value="Terverifikasi">Terverifikasi</Option>
                     <Option value="Tidak Terverifikasi">Tidak Terverifikasi</Option>
                  </Select>
                  <Button type="primary" onClick={handleClick} style={{ marginLeft: 10 }}>
                     Submit
                  </Button>
               </Form>
            </div>
         </div>
         <div style={{ marginTop: 30 }}>
            <ListKelengkapan />
         </div>
      </>
   );
}

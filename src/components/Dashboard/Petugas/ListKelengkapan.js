import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseURL from "../../../configs/axios-variable";
import { Form, Button, Select } from "antd";

function ListKelengkapan() {
   const [kelengkapan, setKelengkapan] = useState([]);
   const [status, setStatus] = useState("");
   const [isUpdate, setUpdate] = useState(false);

   const { Option } = Select;

   let { id } = useParams();

   //   console.log("dapat ga nih idnya -->>>", id);
   const getKelengkapan = async () => {
      try {
         let response = await axios.get(`http://localhost:8000/list_kelengkapan/${id}`);
         //   console.log("->>", response.data.status);
         setKelengkapan(response.data);
         setStatus(response.data.status);
      } catch (e) {
         console.log(e.message);
      }

      // setKelengkapan(response.data.data[0]);
   };

   useEffect(() => {
      getKelengkapan();
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:8000/status_kelengkapan_data", {
         method: "POST",
         body: JSON.stringify({
            id: id,
            id_kelengkapan: id,
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
      <div className="site-layout-background card">
         <h3 className="title">Kelengkapan Data KPR</h3>
         <div className="data__diri">
            <div className="data__content" key={kelengkapan.id_pengajuan}>
               <div className="data__content-pengajuan">
                  <span>Alamat Rumah</span>
                  {kelengkapan.alamat_rumah}
               </div>
               <div className="data__content-pengajuan">
                  <span>Luas Tanah/Rumah</span>
                  {kelengkapan.luas_rumah}
               </div>
               <div className="data__content-pengajuan">
                  <span>Harga Rumah</span>
                  {kelengkapan.harga_rumah}
               </div>
               <div className="data__content-pengajuan">
                  <span>Jangka Pembayaran</span>
                  {kelengkapan.jangka_pembayaran_thn}
               </div>
               <div className="data__content-pengajuan">
                  <span>Dokumen Pendukung</span>
                  {kelengkapan.dokumen_pendukung}
               </div>
               <div className="data__content-pengajuan">
                  <span>Status</span>
                  {status}
               </div>
            </div>
         </div>
         <div>
            <Form>
               <Select defaultValue="Menunggu Verifikasi" style={{ width: 200, marginTop: 20 }} onChange={handleChange}>
                  <Option value="Disetujui">Disetuji</Option>
                  <Option value="Ditolak">Ditolak</Option>
               </Select>
               <Button type="primary" onClick={handleClick} style={{ marginLeft: 10 }}>
                  Submit
               </Button>
            </Form>
         </div>
      </div>
   );
}

export default ListKelengkapan;

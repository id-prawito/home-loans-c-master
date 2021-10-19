import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Select } from "antd";

// import TabelDp from "./TabelDp";

export default function DetailPengajuan() {
    const [user, setUser] = useState([]);
    const [status, setStatus] = useState([]);
    const [isUpdate, setUpdate] = useState(false);

    // const { Option } = Select;
    let { id } = useParams();

    // console.log(useLocation());

    // console.log(">>", id);
    const getUser = async () => {
        let response = await axios.get(`http://localhost:8000/pengajuan/${id}`);
        setUser(response.data);
        // console.log(" ini response nya >> ", response.data);
    };

    const getStatus = async () => {
        let response = await axios.get(`http://localhost:8000/pengajuan/${id}`);
        setStatus(response.data.status);
        // console.log(" ini response nya >> ", response.data.status);
    };

    useEffect(() => {
        getUser();
    }, [id]);

    useEffect(() => {
        getStatus();
    }, [id]);

    // console.log(">>", user);
    function handleChange(e) {
        setStatus(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8000/status", {
            method: "POST",
            body: JSON.stringify({
                status: "",
            }),
            headers: {
                "Content-type": "application / json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setStatus(true);
            });
    }

    useEffect(() => {
        if (isUpdate) {
            alert("status sukses di update");
            setUpdate(false);
        }
    }, [isUpdate]);

    // const handleAlert = (e) => {
    //     alert("apakah anda yakin ?");
    // };

    return (
        <div>
            <div className="site-layout-background card">
                <h3 className="title">Data Diri Pengajuan KPR</h3>
                <div className="data__diri">
                    <div className="data__content" key={user.id_pengajuan}>
                        <div className="data__content-pengajuan">
                            <span>Nomor Induk KTP</span>
                            {user.nik}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Nama Lengkap</span>
                            {user.nama_lengkap}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Tempat Tanggal Lahir</span>
                            {user.tempat_lahir}
                            {", "}
                            {user.tanggal_lahir}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Alamat Saat Ini</span>
                            {user.alamat}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Pekerjaan</span>
                            {user.pekerjaan}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Pendapatan Per Bulan</span>
                            {user.pendapatan_perbulan}
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Bukti Selfie KTP</span>
                            <a href="#a">{user.bukti_ktp}</a>
                        </div>
                        <div className="data__content-pengajuan">
                            <span>Bukti Slip Gaji</span>
                            <a href="#a">{user.bukti_gaji}</a>
                        </div>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className="data__content-pengajuan"
                        >
                            <span>Status Verifikasi</span>
                            {status}
                            <select
                                style={{ width: 200, height: 30 }}
                                onChange={handleChange}
                            >
                                <option value="Terverifikasi">
                                    Terverifikasi
                                </option>
                                <option value="Tidak Terverifikasi">
                                    Tidak Terverifikasi
                                </option>
                            </select>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

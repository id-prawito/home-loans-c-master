import { Breadcrumb, Button } from "antd";
// import data from "../assets/jsonData/db.json";
import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";

const DataPengajuan = () => {
    useEffect(() => {
        getPengajuan();
    }, []);

    const [pengajuan, setPengajuan] = useState([]);
    const [kelengkapan, setKelengkapan] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPengajuan = async () => {
        try {
            const response = await axios.get("http://localhost:8000/pengajuan");
            setPengajuan(response.data.data);
            setLoading(true);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        getKelengkapan();
    }, []);

    const getKelengkapan = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/list_kelengkapan"
            );
            setKelengkapan(response.data.data);
            setLoading(true);
        } catch (error) {
            alert(error.message);
        }
    };

    console.log(pengajuan, loading);

    return (
        <Content className="content__data">
            <Breadcrumb className="content__breadcrumb">
                <Breadcrumb.Item>Data Pengajuan KPR</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background card">
                <h3 className="title">Data Diri Pengajuan KPR</h3>
                <div className="data__diri">
                    {loading &&
                        pengajuan.map((pengajuan) => (
                            <div
                                className="data__content"
                                key={pengajuan.id_pengajuan}
                            >
                                <p>
                                    <span>Nomor Induk KTP</span>
                                    {pengajuan.nik}
                                </p>
                                <p>
                                    <span>Nama Lengkap</span>
                                    {pengajuan.nama_lengkap}
                                </p>
                                <p>
                                    <span>Tempat Tanggal Lahir</span>
                                    {pengajuan.tempat_lahir}
                                    {", "}
                                    {pengajuan.tanggal_lahir}
                                </p>
                                <p>
                                    <span>Alamat Saat Ini</span>
                                    {pengajuan.alamat}
                                </p>
                                <p>
                                    <span>Pekerjaan</span>
                                    {pengajuan.pekerjaan}
                                </p>
                                <p>
                                    <span>Pendapatan Per Bulan</span>
                                    {pengajuan.pendapatan_perbulan}
                                </p>
                                <p>
                                    <span>Bukti Selfie KTP</span>
                                    {pengajuan.bukti_ktp}
                                    <a href="#a" style={{ marginLeft: 10 }}>
                                        PDF
                                    </a>
                                </p>
                                <p>
                                    <span>Bukti Slip Gaji</span>
                                    {pengajuan.bukti_gaji}
                                    <a href="#a" style={{ marginLeft: 10 }}>
                                        PDF
                                    </a>
                                </p>
                                <p>
                                    <span>Status Verifikasi</span>
                                    <h4 style={{ color: "#1890ff" }}>
                                        {pengajuan.status}
                                    </h4>
                                </p>
                            </div>
                        ))}
                </div>
                <div className="button__reset">
                    <Button size="large" className="button_2">
                        Lengkapi Data
                    </Button>
                </div>
            </div>
            <div
                className="site-layout-background card"
                style={{ marginTop: 5 }}
            >
                <h3 className="title">Kelengkapan Data KPR</h3>
                <div className="data__diri">
                    {kelengkapan.map((kelengkapan, key) => (
                        <div className="data__content" key={key}>
                            <p>
                                <span>Alamat Rumah</span>
                                {kelengkapan.alamat_rumah}
                            </p>
                            <p>
                                <span>Luas Tanah / Rumah</span>
                                {kelengkapan.luas_rumah}
                            </p>
                            <p>
                                <span>Harga Rumah</span>
                                {kelengkapan.harga_rumah}
                            </p>
                            <p>
                                <span>Jangka Pembayaran</span>
                                {kelengkapan.jangka_pembayaran_thn}
                            </p>
                            <p>
                                <span>Dokumen Pendukung</span>
                                {kelengkapan.dokumen_pendukung}
                                <a href="#a" style={{ marginLeft: 10 }}>
                                    PDF
                                </a>
                            </p>
                            <p>
                                <span>Status Verifikasi</span>
                                <h4 style={{ color: "#1890ff" }}>
                                    {kelengkapan.status}
                                </h4>
                            </p>
                        </div>
                    ))}
                    <div className="button__reset">
                        <Button size="large" className="button_1">
                            Reset Pengajuan KPR
                        </Button>
                    </div>
                </div>
            </div>
        </Content>
    );
};

export default DataPengajuan;

import React from "react";
// import { Link } from "react-router-dom";

const DataDiri = () => {
    return (
        <div>
            <h2 className="page-header">Data Diri Pengajuan KPR</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card full-height">
                        <div className="card_header">
                            <h3>Data Diri Anda</h3>
                        </div>
                        <div className="card_body">
                            <div className="row">
                                <div className="col-6">
                                    <p>
                                        <span>Nomor Induk KTP</span>
                                        12345678900999
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Rizkhita H. Muhtar
                                    </p>
                                    <p>
                                        <span>Tempat Tanggal Lahir</span>
                                        Bandung, 6 September 1999
                                    </p>
                                    <p>
                                        <span>Alamat Saat Ini</span>
                                        Jl. Raya Bandung, Jawa Barat
                                    </p>
                                    <p>
                                        <span>Status Vefifikasi</span>
                                        <div className="status">
                                            Menunggu Verifikasi
                                        </div>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p>
                                        <span>Pekerjaan</span>
                                        Freelance Software Enggineer
                                    </p>
                                    <p>
                                        <span>Pendapatan Per Bulan</span>
                                        Rp. 5.000.000
                                    </p>
                                    <p>
                                        <span>Bukti Selfie KTP</span>
                                        Rizkhita-H-Muhtar.pdf
                                    </p>
                                    <p>
                                        <span>Bukti Slip Gaji</span>
                                        file-slip-gaji.pdf
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card_header">
                            <h3>Kelengkapan Data KPR</h3>
                        </div>
                        <div className="card_body">
                            <div className="row">
                                <div className="col-6">
                                    <p>
                                        <span>Alamat Rumah</span>
                                        Jl. Permai 5 No.11 A, Bandung Raya, Jawa
                                        Barat
                                    </p>
                                    <p>
                                        <span>Luas Tanah</span>
                                        500 m2
                                    </p>
                                    <p>
                                        <span>Harga Rumah</span>
                                        Rp. 500.000.000
                                    </p>
                                    <p>
                                        <span>Status Vefifikasi</span>
                                        <div className="status_kelengkapan">
                                            Ditolak
                                        </div>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p>
                                        <span>Jangkauan</span>5 Tahun
                                    </p>
                                    <p>
                                        <span>Pendapatan Per Bulan</span>
                                        Rp. 5.000.000
                                    </p>
                                    <p>
                                        <span>Dokumen Pendukung</span>
                                        Rizkhita-H-Muhtar.pdf
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDiri;

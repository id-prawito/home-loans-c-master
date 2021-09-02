import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="card full-height">
                        <div className="card_header">
                            <h3>Profil</h3>
                        </div>
                        <div className="card_body">
                            <div className="row">
                                <div className="col-6">
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                    <p>
                                        <span>Nama Lengkap</span>
                                        Prawito
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/ubah-profil">
                            <button className="btn_profile">Ubah Profil</button>
                        </Link>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <div className="card_header">
                            <h3>Pengajuan KPR Terakhir</h3>
                        </div>
                        <div className="card_body-img">
                            <img
                                className="img-responsive"
                                alt="img"
                                src="https://www.bca.co.id/~/media/Email%20Campaign/bcaxkl/dapatkan-loan-contoh"
                            />
                        </div>
                        <div className="card_body">
                            <div className="row">
                                <div className="col-12">
                                    <p>
                                        <span>Belum ada pengajuan KPR ?</span>
                                        Ajukan KPR online, wujudkan rumah
                                        idamanmu bersama Bank...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/ajukan-kpr">
                            <button className="btn_profile">Ajukan KPR</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

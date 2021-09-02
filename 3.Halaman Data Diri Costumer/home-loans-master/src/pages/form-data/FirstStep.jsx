import React from "react";

export const FirstStep = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card full-height">
                    <div className="card_header">
                        <h3>Data Pengajuan</h3>
                        <span>
                            Kami perlu bertanya terkait informasi properti dan
                            pinjaman yang diajukan sehingga kami dapat
                            menganalisa pinjaman yang Anda ajukan.
                        </span>
                    </div>
                    <div className="card_body">
                        <form action="">
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Nomor Induk KTP*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Nama Lengkap*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Tempat, Tanggal Lahir*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Alamat Saat Ini*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Pekerjaan*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Pendapatan per Bulan*
                                </label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Bukti Selfie KTP*
                                </label>
                                <input
                                    type="file"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            {/* Belum di Custom */}
                            <div className="form-input">
                                <label htmlFor="n" className="form-label">
                                    Bukti Slip Gaji Suami dan/ Istri*
                                </label>
                                <input
                                    type="file"
                                    name=""
                                    id=""
                                    className="inputan"
                                    placeholder=""
                                />
                            </div>
                            <button className="btn_kpr">
                                Submit Pengajuan KPR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstStep;

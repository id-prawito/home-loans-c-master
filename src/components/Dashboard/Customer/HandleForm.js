import React, { useEffect, useState } from "react";
import { Header } from "antd/lib/layout/layout";
import FormKelengkapan from "./Form/FormKelengkapan";
import FormPengajuan from "./Form/FormPengajuan";
import { getJWTData } from "../../../helper/jwt";
import axios from "axios";
import { FormKPRType } from "../../../helper/type.js";

function HandleForm() {
    useEffect(() => {
        getIdentity();
    });

    const [fomrType, setFormType] = useState(FormKPRType.Pengajuan);

    const getIdentity = async () => {
        let userData = getJWTData();
        const response = await axios.get(
            `http://localhost:3030/getidentity?id_cust=${userData.data.id_user}`
        );

        let result = response.data.result;
        if (
            result &&
            Object.keys(result).length === 0 &&
            Object.getPrototypeOf(result) === Object.prototype
        ) {
            setFormType(FormKPRType.Pengajuan);
        } else {
            setFormType(FormKPRType.Kelengkapan);
        }
    };

    return (
        <>
            <Header
                className="header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Beranda</div>
            </Header>
            {/* --- Content --- */}
            {fomrType === FormKPRType.Pengajuan ? (
                <FormPengajuan />
            ) : (
                <FormKelengkapan />
            )}
        </>
    );
}

export default HandleForm;

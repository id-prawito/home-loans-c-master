import React, { useEffect, useState } from "react";
import DataPengajuan from "./Data/DataPengajuan";
import DataKelengkapan from "./Data/DataKelengkapan";
import { Header } from "antd/lib/layout/layout";
import { FormKPRType } from "../../../helper/type.js";
import { getJWTData } from "../../../helper/jwt";
import axios from "axios";

function HandleData() {
    const [empty, setEmpty] = useState(true);
    const [data, setData] = useState({ id_cust: 0 });
    const [dataType, setDataType] = useState();

    useEffect(() => {
        getIdentity();
    }, [data.id_cust]);

    const getIdentity = async () => {
        let userData = getJWTData();
        const response = await axios.get(
            `http://localhost:3030/getidentity?id_cust=${userData.data.id_user}`
        );

        let result = response.data.result;
        setData(response.data.result);
        if (
            result &&
            Object.keys(result).length === 0 &&
            Object.getPrototypeOf(result) === Object.prototype
        ) {
            setEmpty(true);
        } else if (result.status == "Menunggu verifikasi") {
            setEmpty(false);
            setDataType(FormKPRType.Pengajuan);
        } else {
            setEmpty(false);
            setDataType(FormKPRType.Kelengkapan);
        }
    };

    return (
        <>
            <Header
                className="site-layout-sub-header-background header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Data Pengajuan KPR</div>
            </Header>
            {empty ? (
                <p>Anda belum mengajukan sesuatu.</p>
            ) : dataType === FormKPRType.Pengajuan ? (
                <DataPengajuan data={data} />
            ) : (
                <DataKelengkapan data={data} />
            )}
        </>
    );
}

export default HandleData;

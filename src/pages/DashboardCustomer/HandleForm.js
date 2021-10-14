import React from "react";
import { Header } from "antd/lib/layout/layout";
import FormKelengkapan from "./Form/FormKelengkapan";
import FormPengajuan from "./Form/FormPengajuan";

function HandleForm() {
    return (
        <>
            <Header
                className="header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Beranda</div>
            </Header>
            {/* --- Content --- */}
            <FormPengajuan />
            <FormKelengkapan />
        </>
    );
}

export default HandleForm;

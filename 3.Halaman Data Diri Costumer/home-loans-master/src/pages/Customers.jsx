import React from "react";
import FirstStep from "./form-data/FirstStep";
import SecondStep from "./form-data/SecondStep";
import { BrowserRouter } from "react-router-dom";

const Customers = () => {
    return (
        <BrowserRouter>
            <h2 className="page-header">Pengajuan KPR</h2>
            <div>
                <FirstStep />
                <SecondStep />
            </div>
        </BrowserRouter>
    );
};

export default Customers;

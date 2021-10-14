import React from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../pages/DashboardCustomer/Beranda";

import Beranda_Karwayan from "../pages/DashboardKaryawan/Beranda";
import FormKelengkapan from "../pages/DashboardCustomer/Form/FormKelengkapan";
import DataPengajuanTerverifikasi from "../pages/DashboardCustomer/DataPengajuan/DataPengajuanTerverifikasi";
import DataPengajuanMenungguVerifikasi from "../pages/DashboardCustomer/DataPengajuan/DataPengajuanMenungguVerifikasi";
import DataPengajuanTidakTerverifikasi from "../pages/DashboardCustomer/DataPengajuan/DataPengajuanTidakTerverifikasi";
import HandleForm from "../pages/DashboardCustomer/HandleForm";
import HandleData from "../pages/DashboardCustomer/HandleData";
import HandleDataPengajuan from "../pages/DashboardCustomer/DataPengajuan/HandleDataPengajuan";

const Routes = () => {
    return (
        <Switch>
            {/* Route Customer */}
            <Route path="/customer/beranda" component={Beranda} />
            <Route path="/customer/data" component={HandleData} />
            <Route path="/customer/pengajuan" component={HandleForm} />
            <Route
                path="/customer/datapengajuan"
                component={HandleDataPengajuan}
            />

            <Route
                path="/customer/kpr-kelengkapan"
                component={FormKelengkapan}
            />

            {/* Route Customer Data Pengajuan */}
            <Route
                path="/customer/terverifikasi"
                component={DataPengajuanTerverifikasi}
            />
            <Route
                path="/customer/menungguverifikasi"
                component={DataPengajuanMenungguVerifikasi}
            />
            <Route
                path="/customer/tidakterverifikasi"
                component={DataPengajuanTidakTerverifikasi}
            />

            {/* Route Petugas */}
            <Route path="/petugas/beranda" component={Beranda_Karwayan} />
        </Switch>
    );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import DataPengajuan from "../pages/DataPengajuan";
import FormData from "../pages/FormData";
import Beranda from "../pages/Beranda";
// import BerandaKaryawan from "../pages/DashboardKaryawan/BerandaKaryawan";
import ListPengajuanKPR from "../pages/DashboardKaryawan/ListPengajuanKPR";
import DetailPengajuan from "../pages/DashboardKaryawan/DetailPengajuan";
import RiwayatPengajuan from "../pages/RiwayatPengajuan";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Beranda} />
      <Route path="/kpr" exact component={FormData} />
      <Route path="/riwayat" exact component={RiwayatPengajuan} />
      <Route path="/data" component={DataPengajuan} />

      {/* Route Karyawan */}
      {/* <Route path="/karyawan" exact component={BerandaKaryawan} /> */}
      <Route
        exact
        path="/karyawan/list-pengajuan"
        component={ListPengajuanKPR}
      />
      <Route path="/karyawan/list-pengajuan/:id" component={DetailPengajuan} />
    </Switch>
  );
};

export default Routes;

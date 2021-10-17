import React from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../components/Dashboard/Customer/Beranda";

import HandleForm from "../components/Dashboard/Customer/HandleForm";
import HandleData from "../components/Dashboard/Customer/HandleData";
import BerandaPetugas from "../components/Dashboard/Petugas/BerandaPetugas";
import ListPengajuan from "../components/Dashboard/Petugas/ListPengajuan";
import DetailPengajuan from "../components/Dashboard/Petugas/DetailPengajuan";

const Routes = () => {
  return (
    <Switch>
      {/* Route Customer */}
      <Route path="/customer/beranda" component={Beranda} />
      <Route path="/customer/data" component={HandleData} />
      <Route path="/customer/pengajuan" component={HandleForm} />

      {/* Route Petugas */}
      <Route exact path="/petugas/beranda" component={BerandaPetugas} />
      <Route exact path="/petugas/list-pengajuan" component={ListPengajuan} />
      <Route
        exact
        path="/petugas/list-pengajuan/:id"
        component={DetailPengajuan}
      />
    </Switch>
  );
};

export default Routes;

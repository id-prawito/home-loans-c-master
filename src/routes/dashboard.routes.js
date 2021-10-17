import React from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../components/Dashboard/Customer/Beranda";

import Beranda_Karwayan from "../components/Dashboard/Petugas/Beranda";
import HandleForm from "../components/Dashboard/Customer/HandleForm";
import HandleData from "../components/Dashboard/Customer/HandleData";

const Routes = () => {
   return (
      <Switch>
         {/* Route Customer */}
         <Route path="/customer/beranda" component={Beranda} />
         <Route path="/customer/data" component={HandleData} />
         <Route path="/customer/pengajuan" component={HandleForm} />
         {/* Route Petugas */}
         <Route path="/petugas/beranda" component={Beranda_Karwayan} />
      </Switch>
   );
};

export default Routes;

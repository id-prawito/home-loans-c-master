import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Beranda from "../components/Dashboard/Customer/Beranda";

import HandleForm from "../components/Dashboard/Customer/HandleForm";
import HandleData from "../components/Dashboard/Customer/HandleData";
import BerandaPetugas from "../components/Dashboard/Petugas/BerandaPetugas";
import ListPengajuan from "../components/Dashboard/Petugas/ListPengajuan";
import DetailPengajuan from "../components/Dashboard/Petugas/DetailPengajuan";

import { getJWTData } from "../helper/jwt";

const Routes = () => {
    return (
        <Switch>
            {/* Route Customer */}
            <Route path="/customer/beranda" component={Beranda} />
            <Route path="/customer/data" component={HandleData} />
            <Route path="/customer/pengajuan" component={HandleForm} />

            {/* Route Petugas */}
            <Route exact path="/petugas/beranda" component={BerandaPetugas} />
            <Route
                exact
                path="/petugas/list-pengajuan"
                component={ListPengajuan}
            />
            <Route
                exact
                path="/petugas/list-pengajuan/:id"
                component={DetailPengajuan}
            />
        </Switch>
    );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                getJWTData().valid ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/customer-login",
                        }}
                    />
                )
            }
        />
    );
};

export default Routes;

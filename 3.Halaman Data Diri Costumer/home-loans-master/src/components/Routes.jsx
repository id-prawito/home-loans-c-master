import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import DataDiri from "../pages/DataDiri";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/kpr" component={Customers} />
            <Route path="/data-diri" component={DataDiri} />
        </Switch>
    );
};

export default Routes;

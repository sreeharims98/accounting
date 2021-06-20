import React from "react";
import { Route, Switch } from "react-router-dom";

import { AdminNavbar } from "../components/admin/AdminNavbar";
import { ContactUsSec } from "../components/admin/ContactUsSec";
import { UpdatesSec } from "../components/admin/UpdatesSec";

export const AdminPage = () => {
  return (
    <>
      <AdminNavbar />
      <Switch>
        <Route path="/admin/contactus" component={ContactUsSec} />
        <Route path="/admin/updates" component={UpdatesSec} />
      </Switch>
    </>
  );
};

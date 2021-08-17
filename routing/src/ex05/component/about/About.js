import React from "react";
import { Route } from "react-router-dom";
import SiteLayout from "../../layout/SiteLayout";
import styles from "../../assets/scss/component/About.scss";
import Navigation from "../about/Navigation";
import Me from "../about/Me";
import Location from "../about/Location";

export default function About() {
  return (
    <SiteLayout>
      <Route component={Navigation} />
      <Route path={"/about/me"} component={Me} />
      <Route path={"/about/location"} component={Location} />
    </SiteLayout>
  );
}

import React, { Fragment } from "react";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from "../assets/scss/component/Guestbook.scss";

export default function Guestbook() {
  return (
    <Fragment>
      <Header />
      <div id="content" className={styles.Guestbook}>
        <h2>Guestbook</h2>
      </div>
      <Navigation />
      <Footer />
    </Fragment>
  );
}

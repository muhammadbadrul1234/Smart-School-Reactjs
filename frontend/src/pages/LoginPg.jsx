import React, { Fragment } from "react";
import Header from "../components/Login/Header/Header";
import {Login} from "../components/Login/Login/Login";
import Footer from "../components/Homepage/Footer/Footer";

const LoginPg = () => {
    return (
      <Fragment>
        <Header />
        <Login />
        <Footer />
        
      </Fragment>
    );
  };

export default LoginPg;
import React, { Fragment } from "react";
import Header from "../components/Login/Header/Header";
import Footer from "../components/Homepage/Footer/Footer";
import { Signup } from "../components/Signup/Signup";

const SignupPg = () => {
    return (
      <Fragment>
        <Header />
        <Signup />
        <Footer />
        
      </Fragment>
    );
  };

export default SignupPg;
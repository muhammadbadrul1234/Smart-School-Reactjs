import React, { Fragment } from "react";
import Header from "../components/Login/Header/Header";
import Footer from "../components/Homepage/Footer/Footer";
import { StudentApplyAdmission } from "../components/Admission/ApplyAdmission";

const Admission = () => {
    return (
      <Fragment>
        <Header />
        <StudentApplyAdmission />
        <Footer />
        
      </Fragment>
    );
  };

export default Admission;
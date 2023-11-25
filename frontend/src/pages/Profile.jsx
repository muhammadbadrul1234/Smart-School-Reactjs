import React, { Fragment } from "react";
import Header from "../components/Login/Header/Header";
import Footer from "../components/Homepage/Footer/Footer";
import Profile from "../components/Profile/profile";

const ProfilePg = () => {
    return (
      <Fragment>
        <Header />
        <Profile />
        <Footer />
      </Fragment>
    );
  };

export default ProfilePg;
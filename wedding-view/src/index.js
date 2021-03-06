/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import ExtendedForm from "views/ExtendedForm.js";
import Services from "views/Services.js";
import AboutMe from "views/AboutMe.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Gallery from "views/Gallery";
// others


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/formularz" render={props => <ExtendedForm {...props} />} />

      <Route path="/oferta" render={props => <Services {...props} />} />

      <Route path="/o-mnie" render={props => <AboutMe {...props} />} />

      <Route path="/gallery" render={props => <Gallery {...props} />} />

      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />

      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route path="/" render={props => <Index {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import api from "./api";
import "./scss/style.scss";
import { setLocalStorage } from "./utils/others";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  const [ready, setReady] = useState(true); // set to false

  const history = useHistory();

  useEffect(() => {
    // Auth Call
    // api.auth()
    // .then(res => {
    //   if(!res.success){
    //     setLocalStorage("finapp_admin_token", null)
    //      history.push("/login")
    //   }
    //  setReady(true)
    // }).catch(err => {
    //   window.alert("Server Error!")
    // })
  }, []);
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          {ready && (
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          )}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;

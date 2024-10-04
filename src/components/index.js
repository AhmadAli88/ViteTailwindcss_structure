import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
const SignIn = React.lazy(() => import("./SignIn/Index"));
const Register = React.lazy(() => import("./SignUp/Index"));
const Dashboard = React.lazy(() => import("./Dashboard/index"));
const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  REGISTER:Register,
  DASHBOARD:Dashboard
};

export { WEB_PAGES };

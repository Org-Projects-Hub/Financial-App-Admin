import React from "react";
import Teachers from "./views/teachers/Teachers";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
import Organizations from "./views/organizations/Organizations";
import AddOrganization from "./views/organizations/AddOrganization";
import OrganizationDetails from "./views/organizations/OrganizationDetails";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/organizations/",
    exact: true,
    name: "Organizations",
    component: Organizations,
  },
  {
    path: "/organizations/add",
    name: "Add Organization",
    component: AddOrganization,
  },
  {
    path: "/organizations/:orgId",
    name: "Organization Details",
    component: OrganizationDetails,
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: Teachers,
  },
];

export default routes;

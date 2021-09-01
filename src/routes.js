import React from "react";
import Teachers from "./views/teachers/Teachers";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Organizations = React.lazy(() =>
  import("./views/organizations/Organizations")
);
const AddOrganization = React.lazy(() =>
  import("./views/organizations/AddOrganization")
);
const OrganizationDetails = React.lazy(() =>
  import("./views/organizations/OrganizationDetails")
);

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

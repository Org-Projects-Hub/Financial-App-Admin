import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Organizations",
    to: "/organizations",
    icon: <CIcon name="cilHome" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Teachers",
    to: "/teachers",
    icon: <CIcon name="cilUser" customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;

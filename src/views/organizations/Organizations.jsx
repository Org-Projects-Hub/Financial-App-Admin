import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCollapse,
} from "@coreui/react";

import { DocsLink } from "src/reusable";

import Modal from "../../reusable/Modal";
import api from "src/api";

// import usersData from "../users/UsersData";
const Organizations = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [details, setDetails] = React.useState([]);
  const [data, setData] = useState([]);

  /**
   * Get Organization Data upon loading
   */
  useEffect(() => {
    loadOrganizations();
  }, []);

  const loadOrganizations = () => {
    api
      .getOrganizations()
      .then((res) => {
        if (res.success) setData(res.organizations);
        else {
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Delete the selected organization.
   * The selection is in state "selectedItem"
   */
  const deleteOrganization = () => {
    api
      .deleteOrganization(selectedItem.name)
      .then((res) => {
        if (!res.success)
          window.alert("Something went wrong!\nPlease try again");
        else loadOrganizations();

        setVisible(false);
      })
      .catch((err) => {
        window.alert("Something went wrong!\nPlease try again");
      });
  };

  const tempData = [
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "Salusberry Town",
      state: "LA",
      zip: 71203,
    },
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "San Francisco",
      state: "LA",
      zip: 71203,
    },
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "Monroe",
      state: "LA",
      zip: 71203,
    },
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "Monroe",
      state: "LA",
      zip: 71203,
    },
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "Monroe",
      state: "LA",
      zip: 71203,
    },
    {
      name: "Riser Middle School",
      address: "201 N McGuire Ave",
      city: "Monroe",
      state: "LA",
      zip: 71203,
    },
  ];

  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", _style: { width: "40%" } },
    "registered",
    { key: "role", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    // {
    //   key: "show_details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
    {
      key: "editOptions",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const tempFields = [
    { key: "name", _style: { width: "35%" } },
    { key: "address", _style: { width: "30%" } },
    { key: "city", _style: { width: "15%" } },
    "state",
    "zip",
    // { key: "role", _style: { width: "20%" } },
    // { key: "status", _style: { width: "20%" } },
    // {
    //   key: "show_details",
    //   label: "",
    //   _style: { width: "1%" },
    //   sorter: false,
    //   filter: false,
    // },
    {
      key: "editOptions",
      label: "",
      _style: { width: "3%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <>
      <CDataTable
        items={data}
        fields={tempFields}
        columnFilter
        tableFilter
        columnHeaderSlot={{ name: "Organization's Name" }}
        //   footer
        sorterValue={{ column: "name", asc: "true" }}
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          // show_details: (item, index) => {
          //   return (
          //     <td className="py-2">
          //       <CButton
          //         color="primary"
          //         variant="outline"
          //         shape="square"
          //         size="sm"
          //         onClick={() => {
          //           toggleDetails(index);
          //         }}
          //       >
          //         {details.includes(index) ? "Hide" : "Show"}
          //       </CButton>
          //     </td>
          //   );
          // },
          // details: (item, index) => {
          //   return (
          //     <CCollapse show={details.includes(index)}>
          //       <CCardBody>
          //         <h4>{item.username}</h4>
          //         <p className="text-muted">User since: {item.registered}</p>
          //         <CButton size="sm" color="info">
          //           User Settings
          //         </CButton>
          //         <CButton size="sm" color="danger" className="ml-1">
          //           Delete
          //         </CButton>
          //       </CCardBody>
          //     </CCollapse>
          //   );
          // },
          editOptions: (item, index) => {
            return (
              <td style={{ display: "flex" }}>
                <CButton
                  color="dark"
                  variant="outline"
                  style={{ marginRight: "0.5em" }}
                >
                  Edit
                </CButton>
                <CButton
                  color="danger"
                  variant="outline"
                  onClick={() => {
                    setSelectedItem(item);
                    setVisible(!visible);
                  }}
                >
                  Delete
                </CButton>
              </td>
            );
          },
        }}
      />
      <div className="text-lg-center">
        <Link to="/organizations/add">
          <CButton
            style={{ fontSize: "1.15em", fontWeight: "500" }}
            color="primary"
          >
            Add New Organization
          </CButton>
        </Link>
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={"Confirm Delete"}
        body={`Are you sure you want to DELETE "${selectedItem.name}"?`}
        action={"Delete"}
        actionFunc={deleteOrganization}
        color={"danger"}
      />
    </>
  );
};
export default Organizations;

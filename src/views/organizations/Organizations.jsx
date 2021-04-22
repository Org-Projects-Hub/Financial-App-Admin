import React, { useState } from "react";
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

// import usersData from "../users/UsersData";
const Organizations = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

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
  const usersData = [
    {
      id: 0,
      name: "John Doe",
      registered: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
    {
      id: 1,
      name: "Samppa Nori",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 2,
      name: "Estavan Lykos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Derick Maximinus",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 8,
      name: "Quintin Ed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 13,
      name: "Ebbe Gemariah",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Eustorgios Amulius",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 15,
      name: "Leopold Gáspár",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 16,
      name: "Pompeius René",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 17,
      name: "Paĉjo Jadon",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 18,
      name: "Micheal Mercurius",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Ganesha Dubhghall",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 20,
      name: "Hiroto Šimun",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 21,
      name: "Vishnu Serghei",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 22,
      name: "Zbyněk Phoibos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 23,
      name: "Aulus Agmundr",
      registered: "2018/01/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 42,
      name: "Ford Prefect",
      registered: "2001/05/25",
      role: "Alien",
      status: "Don't panic!",
    },
  ];

  const [details, setDetails] = React.useState([]);
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
        items={tempData}
        fields={tempFields}
        columnFilter
        tableFilter
        columnHeaderSlot={{ name: "Organization's Name" }}
        //   footer
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
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={"Confirm Delete"}
        body={`Are you sure you want to DELETE "${selectedItem.name}"?`}
        action={"Delete"}
        color={"danger"}
      />
    </>
  );
};
export default Organizations;

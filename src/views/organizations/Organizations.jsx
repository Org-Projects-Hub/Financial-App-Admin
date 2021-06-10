import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CBadge, CDataTable, CButton, CSpinner } from "@coreui/react";
import Modal from "../../reusable/Modal";
import api from "src/api";

// import usersData from "../users/UsersData";
const Organizations = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [data, setData] = useState(null);

  const history = useHistory();

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
      {data ? (
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
          clickableRows
          onRowClick={(item) => history.push(`/organizations/${item._id}`)}
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
      ) : (
        <div className="text-center" style={{ marginBottom: "5vh" }}>
          <CSpinner size="lg" />
        </div>
      )}

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

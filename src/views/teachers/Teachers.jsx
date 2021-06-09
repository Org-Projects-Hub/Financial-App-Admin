import React, { useState, useEffect } from "react";
import { CBadge, CDataTable, CButton } from "@coreui/react";
import Modal from "../../reusable/Modal";
import api from "src/api";

const Teachers = () => {
  const [visible, setVisible] = useState(false);
  const [teachers, setTeachers] = useState([]); // Data for the teachers table
  const [selectedItem, setSelectedItem] = useState([]);

  /**
   * Backend call to detch data about teachers
   */
  useEffect(() => {
    api
      .getTeachers()
      .then((res) => {
        if (res.success) {
          // Extract full name for each teacher
          for (let val of res.teachers) {
            val["name"] = val.firstName + " " + val.lastName;
          }

          setTeachers(res.teachers);
        } else {
          window.alert(
            "Something went wrong in the backend! Please try again!"
          );
        }
      })
      .catch((err) => {
        window.alert("Server Error!");
      });
  }, []);

  const tempData = [
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: true,
      joinedOn: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: true,
      joinedOn: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
  ];

  const [details, setDetails] = React.useState([]);

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

  const authorizeTeacher = () => {
    // Function with a backend call to update the teacher's authorization
    // Modify teacher data in frontend
  };

  const tempFields = [
    { key: "name", _style: { width: "30%" } },
    { key: "organization", _style: { width: "35%" } },
    { key: "joinedOn", label: "Registered", _style: { width: "15%" } },
    { key: "status", _style: { width: "10%" } },
    {
      key: "editOptions",
      label: "",
      //   _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case true:
        return "success";
      case false:
        return "secondary";
      default:
        return "primary";
    }
  };

  const getEditBtn = (status) => {
    switch (status) {
      case true:
        return (
          <CButton
            color="dark"
            variant="outline"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Unauthorize
          </CButton>
        );
      case false:
        return (
          <CButton
            color="success"
            variant="outline"
            onClick={() => {
              authorizeTeacher();
            }}
          >
            Authorize
          </CButton>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CDataTable
        items={tempData}
        fields={tempFields}
        columnFilter
        tableFilter
        // columnHeaderSlot={{ name: "Organization's Name" }}
        //   footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge
                style={{ fontSize: "0.8rem" }}
                color={getBadge(item.isAuthorized)}
              >
                {item.isAuthorized ? "authorized" : "not authorized"}
              </CBadge>
            </td>
          ),

          editOptions: (item, index) => {
            return (
              <td style={{ display: "flex", justifyContent: "center" }}>
                {getEditBtn(item.isAuthorized)}
              </td>
            );
          },
        }}
      />
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={"Confirm Action"}
        body={`This teacher will not be able to make new classes`}
        action={"Continue"}
        color={"info"}
      />
    </>
  );
};

export default Teachers;
